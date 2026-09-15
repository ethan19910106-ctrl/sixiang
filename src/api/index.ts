/**
 * 前后端 API 统一调用模块
 * 封装网络请求层，支持配置远程 BASE_URL
 * 若未部署真实后端或离线，将优雅自动降级，保障纯前端顺畅运行
 */
import {
  UserState,
  ChildRecord,
  TestAccessResult,
  ClaimShareResult,
  CheckoutResult,
} from '../types';

// 支持通过 Vite 环境变量配置独立后端域名，例如: https://api.yourdomain.com
const API_BASE_URL = ((import.meta as unknown as { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL) || '';

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // 如果有 token，可在此统一注入
  const token = localStorage.getItem('auth_token');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!res.ok) {
      console.warn(`[API] Request failed (${res.status}): ${url}`);
      return null;
    }

    const json = await res.json();
    // 兼容标准 code/data 格式或直接返回对象的格式
    if (json && typeof json.code === 'number') {
      if (json.code === 0 || json.code === 200) {
        return json.data as T;
      }
      console.warn(`[API] Business error:`, json);
      return null;
    }
    return json as T;
  } catch (error) {
    console.warn(`[API] Network error requesting ${url}:`, error);
    return null;
  }
}

// -------------------------------------------------------------
// 1. 用户与权限接口 (User & Auth API)
// -------------------------------------------------------------

export const authApi = {
  /**
   * 微信小程序一键登录，获取 OpenID / Token 与用户基础信息
   */
  async wechatLogin(code: string, userInfo?: { nickName?: string; avatarUrl?: string }) {
    return request<{ token: string; user: UserState }>('/api/auth/wechat-login', {
      method: 'POST',
      body: JSON.stringify({ code, userInfo }),
    });
  },

  /**
   * 查询当前用户权限与 VIP 状态
   */
  async getUserStatus(userId: string): Promise<UserState | null> {
    return request<UserState>(`/api/user/status?userId=${encodeURIComponent(userId)}`);
  },
};

// -------------------------------------------------------------
// 2. 测试与配额接口 (Test & Quota API)
// -------------------------------------------------------------

export const testApi = {
  /**
   * 真正开始测算并消费测试配额（具备 testId 幂等性）
   */
  async consumeQuota(userId: string, testId: string): Promise<{ allowed: boolean; user: UserState; message?: string } | null> {
    return request<{ allowed: boolean; user: UserState; message?: string }>('/api/test/consume', {
      method: 'POST',
      body: JSON.stringify({ userId, testId }),
    });
  },

  /**
   * 领取分享奖励（单用户限领 1 次免费增次）
   */
  async claimShareReward(userId: string): Promise<ClaimShareResult | null> {
    return request<ClaimShareResult>('/api/share/claim-reward', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    });
  },
};

// -------------------------------------------------------------
// 3. 孩子档案云端同步接口 (Children Profile API)
// -------------------------------------------------------------

export const childApi = {
  /**
   * 拉取当前用户的所有孩子档案列表
   */
  async getChildren(userId: string): Promise<ChildRecord[] | null> {
    return request<ChildRecord[]>(`/api/children?userId=${encodeURIComponent(userId)}`);
  },

  /**
   * 新增或更新孩子档案
   */
  async saveChild(userId: string, child: ChildRecord): Promise<ChildRecord | null> {
    return request<ChildRecord>('/api/children', {
      method: 'POST',
      body: JSON.stringify({ userId, child }),
    });
  },

  /**
   * 删除指定孩子档案
   */
  async deleteChild(userId: string, childId: string): Promise<{ success: boolean } | null> {
    return request<{ success: boolean }>(`/api/children/${encodeURIComponent(childId)}`, {
      method: 'DELETE',
      body: JSON.stringify({ userId }),
    });
  },
};

// -------------------------------------------------------------
// 4. 支付与订单接口 (Payment & Order API)
// -------------------------------------------------------------

export interface CreateOrderParams {
  userId: string;
  amount: number; // 9.9 或 0.99
  orderType: 'unlock_single' | 'unlock_lifetime';
  childId?: string;
}

export interface WechatPayParams {
  timeStamp: string;
  nonceStr: string;
  package: string;
  signType: 'RSA' | 'MD5';
  paySign: string;
  orderNo: string;
}

export const paymentApi = {
  /**
   * 创建微信支付预支付订单，获取 wx.requestPayment 所需的签名参数
   */
  async createWechatOrder(params: CreateOrderParams): Promise<WechatPayParams | null> {
    return request<WechatPayParams>('/api/payment/create-order', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },

  /**
   * 模拟支付（开发测试模式使用）
   */
  async mockCheckout(userId: string, amount: number): Promise<CheckoutResult | null> {
    return request<CheckoutResult>('/api/payment/mock-checkout', {
      method: 'POST',
      body: JSON.stringify({ userId, amount }),
    });
  },

  /**
   * 轮询或主动检查订单支付状态
   */
  async queryOrderStatus(orderNo: string): Promise<{ paid: boolean; user: UserState } | null> {
    return request<{ paid: boolean; user: UserState }>(`/api/payment/order-status?orderNo=${encodeURIComponent(orderNo)}`);
  },
};
