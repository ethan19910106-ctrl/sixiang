import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Check,
  Crown,
  ArrowRight,
  ShieldCheck,
  Share2,
  Gift,
  Zap,
  CheckCircle2,
} from 'lucide-react';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onMockPay: (amount: number) => Promise<boolean>;
  hasSharedDiscount?: boolean;
  onTriggerShareDiscount?: () => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onMockPay,
  hasSharedDiscount = false,
  onTriggerShareDiscount,
}) => {
  const [loading, setLoading] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  const [successAmount, setSuccessAmount] = useState<number>(0.99);

  if (!isOpen) return null;

  const handlePay = async (amount: number) => {
    setLoading(true);
    try {
      const ok = await onMockPay(amount);
      if (ok) {
        setSuccessAmount(amount);
        setPaySuccess(true);
        setTimeout(() => {
          setPaySuccess(false);
          setLoading(false);
          onSuccess();
        }, 1200);
      } else {
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-sm w-full p-5 shadow-2xl border-2 border-orange-200/80 relative text-stone-800 max-h-[92vh] overflow-y-auto">
        {/* 关闭按钮 */}
        <button
          id="paywall-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-stone-200/70 hover:bg-stone-300 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 顶部标识 */}
        <div className="text-center pt-1">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-md mb-2">
            <Crown className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-stone-800 tracking-tight" id="paywallTitle">
            解锁儿童星象沟通全部秘籍
          </h3>
          <p className="text-xs text-stone-500 mt-1 font-medium leading-relaxed">
            4大星象 · 8位伙伴 · 全场景说话口诀与无限测算
          </p>
        </div>

        {/* 核心价值权益亮点 */}
        <div className="mt-3.5 bg-white rounded-2xl p-3.5 border border-stone-200/70 shadow-2xs space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-stone-800">无限次宝贝测算与性格档案</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4.5 h-4.5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-stone-800">4大星象 · 男女双版全量角色与画像</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4.5 h-4.5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-stone-800">8大生活场景深度解读与顺毛沟通法</span>
          </div>
        </div>

        {/* 支付成功反馈 */}
        {paySuccess ? (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md animate-fadeIn">
            <CheckCircle2 className="w-5 h-5" />
            <span>支付成功（¥{successAmount}）！已解锁全量权限</span>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {/* 方案 A: 分享立减通道 (主推 0.99 元) */}
            <div
              className={`rounded-2xl p-3.5 border-2 transition-all relative ${
                hasSharedDiscount
                  ? 'bg-gradient-to-br from-[#FFF5EE] to-[#FFF0E5] border-orange-500 shadow-md ring-2 ring-orange-400/30'
                  : 'bg-gradient-to-br from-[#FFF9F5] to-orange-50/60 border-orange-300/80 hover:border-orange-400 shadow-xs'
              }`}
            >
              {/* 顶部标签 */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#FF6B35] bg-white px-2 py-0.5 rounded-full shadow-2xs border border-orange-200">
                  <Zap className="w-3 h-3 fill-[#FF6B35]" />
                  {hasSharedDiscount ? '已激活分享特惠' : '强烈推荐 · 社交裂变特惠'}
                </span>
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded">
                  立省 ¥8.91
                </span>
              </div>

              {/* 价格对比 */}
              <div className="flex items-baseline justify-between mt-1">
                <div>
                  <div className="text-xs font-black text-stone-800">
                    {hasSharedDiscount ? '已享分享特惠价' : '分享后仅需支付'}
                  </div>
                  <div className="text-[10px] text-stone-500">
                    {hasSharedDiscount ? '恭喜！直接以特惠价解锁全部' : '分享任意家长群或好友即可享受'}
                  </div>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-red-600 tracking-tight" id="discount-price">
                    ¥0.99
                  </span>
                  <span className="text-[11px] text-stone-400 line-through">¥9.9</span>
                </div>
              </div>

              {/* 操作按钮：若已分享则直接付0.99，若未分享则先去分享 */}
              <div className="mt-2.5">
                {hasSharedDiscount ? (
                  <button
                    id="paywall-buy-discount-btn"
                    type="button"
                    disabled={loading}
                    onClick={() => handlePay(0.99)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-500 to-[#FF6B35] text-white font-black text-xs shadow-md shadow-red-500/25 flex items-center justify-center gap-1.5 hover:brightness-105 btn-press cursor-pointer border-b-2 border-red-700 disabled:opacity-60"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>{loading ? '正在开通...' : '立即支付 ¥0.99 解锁全部'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id="paywall-trigger-share-btn"
                    type="button"
                    onClick={() => {
                      if (onTriggerShareDiscount) {
                        onTriggerShareDiscount();
                      }
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white font-black text-xs shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 hover:brightness-105 btn-press cursor-pointer border-b-2 border-orange-600"
                  >
                    <Share2 className="w-3.5 h-3.5 text-amber-100" />
                    <span>去分享立享 0.99 元特惠</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* 方案 B: 不分享直接购买 (9.9 元原价) */}
            <div className="rounded-2xl p-3 bg-white border border-stone-200/80 hover:border-stone-300 shadow-2xs">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-700">不打扰朋友 · 直接解锁</div>
                  <div className="text-[10px] text-stone-400">免去分享流程，原价直接购买</div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-black text-stone-800">¥9.9</span>
                  <span className="text-[10px] text-stone-400">/ 原价</span>
                </div>
              </div>

              <button
                id="paywall-buy-full-btn"
                type="button"
                disabled={loading}
                onClick={() => handlePay(9.9)}
                className="mt-2 w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1 btn-press cursor-pointer transition-colors disabled:opacity-60"
              >
                <span>{loading ? '正在开通...' : '直接付 ¥9.9 解锁 (不分享)'}</span>
              </button>
            </div>
          </div>
        )}

        {/* 底部保障与开发说明 */}
        <div className="mt-3 text-center">
          <p className="text-[10px] text-stone-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
            <span>购买后立即生效 · 永久无限次畅享</span>
          </p>
          <button
            id="paywall-cancel-btn"
            onClick={onClose}
            className="mt-1.5 text-xs font-bold text-stone-400 hover:text-stone-600 py-1"
          >
            稍后再说
          </button>
        </div>
      </div>
    </div>
  );
};
