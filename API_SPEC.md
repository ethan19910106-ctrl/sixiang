# 🚨 儿童四象亲子小程序 · 后端开发与交付规范文档

> **⚠️ 核心红线约束（CRITICAL MANDATE - READ FIRST）**
> 
> **致 AGY / 后端开发工程师 / 接手智能体：**
> 1. **【绝对禁止改动前端 UI 与画面】**：本项目前端界面的设计布局、配色方案（大地暖阳与四象治愈色系）、字体排版、动效细节、组件层级均已通过反复调优与客户最终确认。
> 2. **【像素级保持一模一样（Pixel-Perfect Preserved）】**：所有已有前端画面（包括但不限于：首页 `HomeView`、输入测算页 `BirthdayView`、报告揭晓页 `ResultView`、带娃场景与应对详情页 `ScenesView/SceneDetailView`、口诀宝典 `GuideView`、个人中心 `ProfileView`、付费拦截弹窗 `PaywallModal`、海报分享弹窗 `ShareModal`）**严禁随意改版、推翻重构、删除样式类、调换设计结构或替换既有组件风格**。
> 3. **【开发职责边界】**：本次接手**仅限于后端服务搭建、数据持久化存储、微信登录与微信支付对接**。前端仅需在 `/src/api/index.ts` 中配置真实后端域名 `VITE_API_BASE_URL`，并通过预留的数据接口提供真实返回即可。

---

## 一、项目架构与环境配置

- **前端架构**：React 18 + TypeScript + Vite + Tailwind CSS + Lucide 图标库
- **API 统一调用层**：已在 `/src/api/index.ts` 集中封装。
- **环境配置**：
  在前端根目录 `.env` 文件中配置后端基地址：
  ```env
  VITE_API_BASE_URL=https://api.yourdomain.com
  ```
  如果未配置或后端离线，前端自带完备的 LocalStorage 降级逻辑，不会发生崩溃。

---

## 二、标准接口规范清单 (RESTful API)

所有接口统一返回 JSON 格式，成功返回：
```json
{
  "code": 0,
  "message": "success",
  "data": { ... }
}
```
或直接返回标准业务数据对象（前端均已做兼容解析）。

---

### 1. 用户与微信授权体系

#### 1.1 微信小程序一键登录
- **接口路径**：`POST /api/auth/wechat-login`
- **说明**：小程序端通过 `wx.login` 获取 `code`，后端换取微信 `openid`、`unionid` 并颁发身份认证 `token`。
- **请求入参**：
  ```json
  {
    "code": "081abcdefg...",
    "userInfo": {
      "nickName": "用户微信昵称",
      "avatarUrl": "https://thirdwx.qlogo.cn/..."
    }
  }
  ```
- **响应格式**：
  ```json
  {
    "code": 0,
    "message": "ok",
    "data": {
      "token": "jwt_token_string_here",
      "user": {
        "userId": "u_100234",
        "freeTestRemaining": 1,
        "shareRewardUsed": false,
        "hasSharedDiscountEligible": false,
        "paidAccess": false,
        "createdAt": 1726000000000,
        "updatedAt": 1726000000000
      }
    }
  }
  ```

#### 1.2 查询用户当前权限与状态
- **接口路径**：`GET /api/user/status?userId={userId}`
- **说明**：获取用户的剩余免费测试次数、是否已付费、是否已领取分享奖励等。
- **响应格式**：
  ```json
  {
    "code": 0,
    "message": "ok",
    "data": {
      "userId": "u_100234",
      "freeTestRemaining": 1,
      "shareRewardUsed": false,
      "hasSharedDiscountEligible": false,
      "paidAccess": false,
      "createdAt": 1726000000000,
      "updatedAt": 1726000000000
    }
  }
  ```

---

### 2. 孩子档案管理（云端多设备同步）

#### 2.1 获取当前用户的所有孩子档案
- **接口路径**：`GET /api/children?userId={userId}`
- **响应格式**：
  ```json
  {
    "code": 0,
    "message": "ok",
    "data": [
      {
        "id": "child_abc123",
        "name": "小宝",
        "gender": "male",
        "birthYear": 2020,
        "birthMonth": 8,
        "birthDay": 8,
        "constellation": "狮子座",
        "element": "fire",
        "createdAt": 1726000000000
      }
    ]
  }
  ```

#### 2.2 新增或更新孩子档案
- **接口路径**：`POST /api/children`
- **请求入参**：
  ```json
  {
    "userId": "u_100234",
    "child": {
      "id": "child_abc123",
      "name": "小宝",
      "gender": "male",
      "birthYear": 2020,
      "birthMonth": 8,
      "birthDay": 8,
      "constellation": "狮子座",
      "element": "fire",
      "createdAt": 1726000000000
    }
  }
  ```
- **响应格式**：返回保存成功的完整 `child` 对象。

#### 2.3 删除指定孩子档案
- **接口路径**：`DELETE /api/children/{childId}`
- **请求入参**：
  ```json
  {
    "userId": "u_100234"
  }
  ```
- **响应格式**：`{ "code": 0, "message": "deleted", "data": { "success": true } }`

---

### 3. 测算配额与分享机制

#### 3.1 消费测试配额（防刷与幂等控制）
- **接口路径**：`POST /api/test/consume`
- **说明**：只有在用户确认提交测算表单并进入生成报告时扣减。携带唯一 `testId`，如果该 `testId` 已扣减过，后端不重复扣减。若为付费 VIP 用户，直接放行。
- **请求入参**：
  ```json
  {
    "userId": "u_100234",
    "testId": "test_1726300000000_xyz"
  }
  ```
- **响应格式（允许测算）**：
  ```json
  {
    "code": 0,
    "message": "ok",
    "data": {
      "allowed": true,
      "user": {
        "userId": "u_100234",
        "freeTestRemaining": 0,
        "shareRewardUsed": false,
        "hasSharedDiscountEligible": false,
        "paidAccess": false,
        "updatedAt": 1726300000000
      }
    }
  }
  ```
- **响应格式（配额不足）**：
  ```json
  {
    "code": 403,
    "message": "免费测试次数已用完，请解锁后继续测试",
    "data": {
      "allowed": false,
      "user": { ... }
    }
  }
  ```

#### 3.2 领取分享奖励
- **接口路径**：`POST /api/share/claim-reward`
- **业务规则**：单用户**终身限领 1 次**。成功领取后免费测试次数 +1，并且该用户激活 `hasSharedDiscountEligible = true`（解锁 0.99 元特惠购买资格）。
- **请求入参**：
  ```json
  {
    "userId": "u_100234"
  }
  ```
- **响应格式**：
  ```json
  {
    "code": 0,
    "message": "领取成功，已增加1次免费测试并解锁特惠！",
    "data": {
      "success": true,
      "user": {
        "userId": "u_100234",
        "freeTestRemaining": 1,
        "shareRewardUsed": true,
        "hasSharedDiscountEligible": true,
        "paidAccess": false
      }
    }
  }
  ```

---

### 4. 支付与订单系统（微信商户统一下单）

#### 4.1 创建微信预支付订单
- **接口路径**：`POST /api/payment/create-order`
- **说明**：后端调用微信支付 API `v3/pay/transactions/jsapi` 生成预支付凭证并完成签名，将签名参数返回给前端，前端直接调用 `wx.requestPayment`。
- **请求入参**：
  ```json
  {
    "userId": "u_100234",
    "amount": 0.99,
    "orderType": "unlock_lifetime",
    "childId": "child_abc123"
  }
  ```
- **响应格式**：
  ```json
  {
    "code": 0,
    "message": "ok",
    "data": {
      "timeStamp": "1726300000",
      "nonceStr": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
      "package": "prepay_id=wx201410272009395522657a690389285100",
      "signType": "RSA",
      "paySign": "oR9d8PuhnIc+YZ8cBH...",
      "orderNo": "ORDER_20260914123456"
    }
  }
  ```

#### 4.2 微信支付异步回调通知
- **接口路径**：`POST /api/payment/wechat-notify`
- **说明**：微信支付服务器向后端发送的公网回调，后端验签并解密支付结果，将对应用户的 `paidAccess` 字段置为 `true`。

#### 4.3 轮询或主动查询订单支付结果
- **接口路径**：`GET /api/payment/order-status?orderNo={orderNo}`
- **响应格式**：
  ```json
  {
    "code": 0,
    "message": "ok",
    "data": {
      "paid": true,
      "user": {
        "userId": "u_100234",
        "paidAccess": true
      }
    }
  }
  ```

---

## 三、给 AGY 的开发执行纪律

1. **绝对禁止修改以下目录或文件**：
   - `/src/components/*`（所有现成页面与组件全部冻结，禁止任何形式的视觉改版）
   - `/src/data/*`（全量 8 种性格画像、话术库与 32 个场景数据库已就绪）
   - `/src/index.css`（全局色彩与阴影系统已锁定）
2. **需要 AGY 完成的工作范围**：
   - 编写后端数据库 Schema（用户表 `users`、档案表 `children`、订单表 `orders`、消费记录表 `test_logs`）；
   - 部署 RESTful API 服务，实现上述端点；
   - 接入微信公众平台的小程序 AppID、AppSecret 以及微信支付商户号与 APIv3 密钥；
   - 如需在前端替换或联调，仅允许在 `/src/api/index.ts` 中配置正确的调用端点或添加鉴权 Token，切勿触碰页面模板！
