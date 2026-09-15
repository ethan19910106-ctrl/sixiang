import { UserState, TestAccessResult, ClaimShareResult, CheckoutResult } from '../types';

const STORAGE_KEY_USER = 'children_elements_user_state_v1';
const STORAGE_KEY_TESTS = 'children_elements_consumed_tests_v1';

// 本地生成或读取当前客户端的持久化 UserID
export function getOrCreateUserId(): string {
  try {
    const saved = localStorage.getItem('children_elements_uid_v1');
    if (saved) return saved;
    const newUid = `u_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem('children_elements_uid_v1', newUid);
    return newUid;
  } catch {
    return `u_temp_${Date.now()}`;
  }
}

// 获取本地缓存用户状态
function getLocalUserState(): UserState {
  const uid = getOrCreateUserId();
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.freeTestRemaining === 'number') {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading local user state:', e);
  }

  const initial: UserState = {
    userId: uid,
    freeTestRemaining: 1,
    shareRewardUsed: false,
    hasSharedDiscountEligible: false,
    paidAccess: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  saveLocalUserState(initial);
  return initial;
}

// 写入本地缓存用户状态
function saveLocalUserState(state: UserState) {
  try {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving local user state:', e);
  }
}

// 获取已消费的 testId 列表（防止前端刷新、重试造成重复扣次）
function getConsumedTestIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TESTS);
    if (raw) {
      const list = JSON.parse(raw);
      if (Array.isArray(list)) return new Set(list);
    }
  } catch (e) {
    console.error('Error reading consumed test ids:', e);
  }
  return new Set();
}

function markTestIdConsumed(testId: string) {
  const set = getConsumedTestIds();
  set.add(testId);
  try {
    localStorage.setItem(STORAGE_KEY_TESTS, JSON.stringify(Array.from(set)));
  } catch (e) {
    console.error('Error marking testId consumed:', e);
  }
}

/**
 * 统一测试权限检查逻辑 (canStartTest)
 * 规则：
 * 1. 如果已购买 paidAccess === true -> 允许测试 (无限制)
 * 2. 否则如果 freeTestRemaining > 0 -> 允许测试 (免费额度)
 * 3. 否则 -> 不允许测试，拦截并提示付费
 */
export function canStartTest(user: UserState): TestAccessResult {
  if (user.paidAccess) {
    return {
      allowed: true,
      reason: 'paid',
      freeRemaining: user.freeTestRemaining,
      paidAccess: true,
      shareRewardUsed: user.shareRewardUsed,
      hasSharedDiscountEligible: user.hasSharedDiscountEligible,
    };
  }

  if (user.freeTestRemaining > 0) {
    return {
      allowed: true,
      reason: 'free',
      freeRemaining: user.freeTestRemaining,
      paidAccess: false,
      shareRewardUsed: user.shareRewardUsed,
      hasSharedDiscountEligible: user.hasSharedDiscountEligible,
    };
  }

  return {
    allowed: false,
    reason: 'quota_exhausted',
    freeRemaining: 0,
    paidAccess: false,
    shareRewardUsed: user.shareRewardUsed,
    hasSharedDiscountEligible: user.hasSharedDiscountEligible,
  };
}

/**
 * 从服务端同步或获取当前用户最新状态
 */
export async function fetchUserState(): Promise<UserState> {
  const uid = getOrCreateUserId();
  try {
    const res = await fetch(`/api/user/status?userId=${encodeURIComponent(uid)}`);
    if (res.ok) {
      const serverUser = await res.json();
      if (serverUser && serverUser.userId) {
        saveLocalUserState(serverUser);
        return serverUser;
      }
    }
  } catch (e) {
    console.warn('Backend API unavailable, using local state cache:', e);
  }
  return getLocalUserState();
}

/**
 * 真正开始测算并消费一次测试额度
 * - 只有真正提交测算表单时才消耗
 * - 携带唯一 testId 保证幂等（刷新、重复点击不重复扣）
 * - 付费用户不扣免费额度
 */
export async function consumeTestQuota(testId: string): Promise<{
  allowed: boolean;
  user: UserState;
  message?: string;
}> {
  const uid = getOrCreateUserId();
  const consumedTests = getConsumedTestIds();

  // 如果该 testId 之前已经扣减成功，直接放行，避免二次扣除
  if (consumedTests.has(testId)) {
    const localUser = getLocalUserState();
    return { allowed: true, user: localUser };
  }

  try {
    const res = await fetch('/api/test/consume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: uid, testId }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.allowed && data.user) {
        markTestIdConsumed(testId);
        saveLocalUserState(data.user);
        return { allowed: true, user: data.user };
      } else {
        const currentUser = data.user || getLocalUserState();
        saveLocalUserState(currentUser);
        return {
          allowed: false,
          user: currentUser,
          message: data.message || '免费测试次数已用完，请解锁后继续测试',
        };
      }
    }
  } catch (e) {
    console.warn('Backend /api/test/consume error, falling back to local verification:', e);
  }

  // 离线/降级本地处理
  const localUser = getLocalUserState();
  const check = canStartTest(localUser);
  if (!check.allowed) {
    return {
      allowed: false,
      user: localUser,
      message: '免费测试次数已用完，请解锁后继续测试',
    };
  }

  // 扣减本地免费次数（付费用户无需扣减）
  if (!localUser.paidAccess && localUser.freeTestRemaining > 0) {
    localUser.freeTestRemaining -= 1;
    localUser.updatedAt = Date.now();
  }
  markTestIdConsumed(testId);
  saveLocalUserState(localUser);

  return { allowed: true, user: localUser };
}

/**
 * 领取分享奖励（仅能成功领取 1 次，额外增加 1 次免费测试）
 */
export async function claimShareReward(): Promise<ClaimShareResult> {
  const uid = getOrCreateUserId();
  const localUser = getLocalUserState();

  // 前端快速预检
  if (localUser.shareRewardUsed) {
    return {
      success: false,
      message: '每个用户最多只能获得1次分享奖励，您已领取过了。',
      user: localUser,
    };
  }

  try {
    const res = await fetch('/api/share/claim-reward', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: uid }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.user) {
        data.user.hasSharedDiscountEligible = true;
        saveLocalUserState(data.user);
        return {
          success: true,
          message: data.message || '已成功获得1次额外免费测试机会，并解锁 0.99 元特惠！',
          user: data.user,
        };
      } else {
        if (data.user) {
          data.user.hasSharedDiscountEligible = true;
          saveLocalUserState(data.user);
        }
        return {
          success: false,
          message: data.message || '领取失败或奖励已领取',
          user: data.user || localUser,
        };
      }
    }
  } catch (e) {
    console.warn('Backend /api/share/claim-reward error, falling back to local logic:', e);
  }

  // 本地降级逻辑
  if (localUser.shareRewardUsed) {
    localUser.hasSharedDiscountEligible = true;
    saveLocalUserState(localUser);
    return {
      success: false,
      message: '每个用户最多只能获得1次免费增次，但您已拥有 0.99 元特惠解锁特权！',
      user: localUser,
    };
  }

  localUser.shareRewardUsed = true;
  localUser.hasSharedDiscountEligible = true;
  localUser.freeTestRemaining += 1;
  localUser.updatedAt = Date.now();
  saveLocalUserState(localUser);

  return {
    success: true,
    message: '🎉 恭喜！已获赠 1 次额外免费测试，并激活「分享专享 0.99 元」特惠！',
    user: localUser,
  };
}

/**
 * 触发分享标记（无需额外增次，专门激活 0.99 元特惠资格）
 */
export function activateShareDiscount(): UserState {
  const localUser = getLocalUserState();
  localUser.hasSharedDiscountEligible = true;
  localUser.updatedAt = Date.now();
  saveLocalUserState(localUser);
  return localUser;
}

/**
 * 模拟支付解锁无限次测试（支持 9.9 元原价 或 0.99 元特惠价）
 */
export async function mockCheckoutUnlock(amount: number = 9.9): Promise<CheckoutResult> {
  const uid = getOrCreateUserId();

  try {
    const res = await fetch('/api/payment/mock-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: uid, amount }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.user) {
        saveLocalUserState(data.user);
        return {
          success: true,
          message: `支付成功（¥${amount}）！已解锁全部无限权限。`,
          user: data.user,
        };
      }
    }
  } catch (e) {
    console.warn('Backend payment checkout error, fallback to local update:', e);
  }

  const localUser = getLocalUserState();
  localUser.paidAccess = true;
  localUser.updatedAt = Date.now();
  saveLocalUserState(localUser);

  return {
    success: true,
    message: `支付成功（¥${amount}）！已解锁全部无限权限。`,
    user: localUser,
  };
}

/**
 * 开发调试专用的状态重置工具
 */
export async function debugResetUserState(preset: 'new_user' | 'used_first' | 'shared_reward' | 'exhausted' | 'paid'): Promise<UserState> {
  const uid = getOrCreateUserId();
  let nextState: UserState;

  switch (preset) {
    case 'new_user':
      nextState = {
        userId: uid,
        freeTestRemaining: 1,
        shareRewardUsed: false,
        hasSharedDiscountEligible: false,
        paidAccess: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      break;
    case 'used_first':
      nextState = {
        userId: uid,
        freeTestRemaining: 0,
        shareRewardUsed: false,
        hasSharedDiscountEligible: false,
        paidAccess: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      break;
    case 'shared_reward':
      nextState = {
        userId: uid,
        freeTestRemaining: 1,
        shareRewardUsed: true,
        hasSharedDiscountEligible: true,
        paidAccess: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      break;
    case 'exhausted':
      nextState = {
        userId: uid,
        freeTestRemaining: 0,
        shareRewardUsed: true,
        hasSharedDiscountEligible: true,
        paidAccess: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      break;
    case 'paid':
      nextState = {
        userId: uid,
        freeTestRemaining: 0,
        shareRewardUsed: true,
        hasSharedDiscountEligible: true,
        paidAccess: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      break;
  }

  saveLocalUserState(nextState);

  try {
    await fetch('/api/user/debug-reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextState),
    });
  } catch {
    // ignore
  }

  return nextState;
}
