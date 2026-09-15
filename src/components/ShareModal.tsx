import React, { useState } from 'react';
import { X, Check, Copy, Sparkles, Share2, CheckCircle2 } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  childName: string;
  birthDateStr: string;
  constellation: string;
  element: ElementType;
  gender: GenderType;
  shareRewardUsed?: boolean;
  hasSharedDiscount?: boolean;
  onClaimShareReward?: () => Promise<{ success: boolean; message: string }>;
  onAfterShareTriggered?: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  childName,
  birthDateStr,
  constellation,
  element,
  gender,
  shareRewardUsed = false,
  hasSharedDiscount = false,
  onClaimShareReward,
  onAfterShareTriggered,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [rewardClaimedNotice, setRewardClaimedNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const elemData = ELEMENTS_DATA[element];
  const charData = elemData[gender];

  // 读取自定义图片（如有）
  const storageKey = `custom_hero_${element}_${gender}`;
  const customImg = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
  const activeHeroImg = customImg || charData.heroImg;

  const shareText = `【儿童四象 · 亲子沟通】\n我家孩子${childName}（${birthDateStr}）是【${constellation} · ${elemData.title}】！\n性格速描：${charData.shortDesc}\n专属沟通口诀：${charData.sayYes1}\n不贴标签，只为找到真正顺畅的沟通之道～看看你家宝贝属于哪种星象伙伴！`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerShare = async () => {
    // 复制文案到剪贴板
    try {
      await navigator.clipboard?.writeText(shareText);
    } catch {
      // ignore
    }

    if (onAfterShareTriggered) {
      onAfterShareTriggered();
    }

    if (!shareRewardUsed && onClaimShareReward) {
      setShareLoading(true);
      const res = await onClaimShareReward();
      setShareLoading(false);
      if (res.success) {
        setRewardClaimedNotice(res.message);
        setTimeout(() => {
          setRewardClaimedNotice(null);
          onClose();
        }, 1800);
      } else {
        setRewardClaimedNotice('已激活「0.99元特惠解锁」特权！');
        setTimeout(() => {
          setRewardClaimedNotice(null);
          onClose();
        }, 1500);
      }
    } else {
      setRewardClaimedNotice('🎉 分享成功！已激活「0.99元特惠解锁」！');
      setTimeout(() => {
        setRewardClaimedNotice(null);
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl border border-stone-100 relative">
        <button
          id="share-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF6B35] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
            <Sparkles className="w-3 h-3 text-[#FF6B35]" />
            <span>专属星象卡</span>
          </div>
          <h3 className="text-base font-black text-stone-800 mt-1">
            {childName} 的星象沟通卡
          </h3>
          <p className="text-[11px] text-stone-500 mt-0.5">看看其他小朋友属于哪一种星象</p>
        </div>

        {/* 奖励通知提示条 */}
        {rewardClaimedNotice && (
          <div className="mb-3 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-bold animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{rewardClaimedNotice}</span>
          </div>
        )}

        {/* 卡片预览 */}
        <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-stone-200 shadow-inner">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2.5 border border-white">
            <img
              src={activeHeroImg}
              alt={charData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-bold">
              {charData.name}
            </div>
          </div>

          <div className="text-xs font-black text-stone-800 flex items-center justify-between">
            <span>
              {constellation} · {elemData.title}
            </span>
            <span className="text-[10px] text-stone-500">{birthDateStr}</span>
          </div>

          <div className="flex flex-wrap gap-1 mt-1.5">
            {charData.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="text-[9px] bg-white border border-stone-200 px-1.5 py-0.2 rounded text-stone-700 font-medium"
              >
                {kw}
              </span>
            ))}
          </div>

          <div className="mt-2 text-[11px] text-stone-600 bg-white p-2 rounded-lg border border-stone-100 leading-relaxed font-medium">
            💡 <span className="font-bold text-stone-800">沟通锦囊：</span>
            {charData.sayYes1}
          </div>
        </div>

        {/* 分享奖励状态说明 */}
        <div className="mt-3">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 rounded-xl p-2.5 text-center text-xs font-bold text-orange-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-base">🎁</span>
              <div>
                <div className="text-[11px] font-black text-orange-700">
                  {hasSharedDiscount ? '已激活 0.99 元特惠解锁权限' : '分享立享特权：仅 0.99 元解锁全量秘籍'}
                </div>
                <div className="text-[10px] text-stone-500 font-normal">
                  {!shareRewardUsed ? '额外再送 +1 次免费测算机会' : '原价 ¥9.9，分享直降至 ¥0.99'}
                </div>
              </div>
            </div>
            <span className="text-[10px] bg-[#FF6B35] text-white px-2 py-0.5 rounded-full font-bold flex-shrink-0">
              {hasSharedDiscount ? '已享特惠' : '立省8.91元'}
            </span>
          </div>
        </div>

        {/* 底部操作按钮 */}
        <div className="mt-3.5 space-y-2">
          <button
            id="share-modal-confirm-btn"
            disabled={shareLoading}
            onClick={handleTriggerShare}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white text-xs font-bold flex items-center justify-center gap-1.5 btn-press cursor-pointer shadow-sm hover:brightness-105"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>
              {shareLoading
                ? '正在发放奖励...'
                : !shareRewardUsed
                ? '分享给朋友，领 +1 次免费'
                : '分享给群聊 / 好友'}
            </span>
          </button>

          <button
            id="share-modal-copy-btn"
            onClick={handleCopy}
            className="w-full py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 text-xs font-bold hover:bg-stone-100 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">文案已复制到剪贴板！</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-500" />
                <span>复制分享文案</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
