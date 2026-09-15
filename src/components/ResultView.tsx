import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Lightbulb, Sparkles, Share2, CheckCircle2, Upload, RotateCcw } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface ResultViewProps {
  childName: string;
  birthDateStr: string;
  constellation: string;
  element: ElementType;
  gender: GenderType;
  shareRewardUsed?: boolean;
  hasSharedDiscount?: boolean;
  onToggleGender: (gender: GenderType) => void;
  onGoToGuide: () => void;
  onShare: () => void;
  onTriggerShareReward?: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  childName,
  birthDateStr,
  constellation,
  element,
  gender,
  shareRewardUsed = false,
  hasSharedDiscount = false,
  onToggleGender,
  onGoToGuide,
  onShare,
  onTriggerShareReward,
}) => {
  const elemData = ELEMENTS_DATA[element];
  const charData = elemData[gender];

  // 支持用户直接在界面上替换海报图（保存在本地存储）
  const storageKey = `custom_hero_${element}_${gender}`;
  const [customImg, setCustomImg] = useState<string | null>(() => {
    return localStorage.getItem(storageKey);
  });

  useEffect(() => {
    setCustomImg(localStorage.getItem(storageKey));
  }, [storageKey]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          localStorage.setItem(storageKey, base64);
          setCustomImg(base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImg = () => {
    localStorage.removeItem(storageKey);
    setCustomImg(null);
  };

  const activeHeroImg = customImg || charData.heroImg;

  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 顶部标签与星象大标题 */}
      <div className="px-5 pt-3 text-center">
        <div className="inline-flex items-center gap-1.5 bg-white text-stone-600 border border-stone-200 px-3 py-0.5 rounded-full text-[11px] font-semibold mb-1.5 shadow-2xs">
          <span id="resChildName">{childName}</span>
          <span>·</span>
          <span id="resChildDate">{birthDateStr}</span>
        </div>
        <div className="text-xs text-stone-400 font-medium mb-1">TA 的专属星象是</div>
        <h1 className="text-2xl font-black text-stone-800 tracking-tight flex items-center justify-center gap-2">
          <span id="resConstellation">{constellation}</span>
          <span className="text-stone-300">·</span>
          <span className={`inline-flex items-center gap-1.5 ${elemData.textColor}`} id="resElementTitle">
            <span className="text-2xl drop-shadow-xs">{elemData.symbol}</span>
            <span>{elemData.title}</span>
          </span>
        </h1>

        {/* 仅保留当前角色标识标签，不再显示另一个性别的切换按钮 */}
        <div className="flex justify-center mt-2.5">
          <div
            id="resCurrentRoleBadge"
            className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B35] text-xs font-black shadow-2xs"
          >
            <span>{gender === 'male' ? '👦 男孩版' : '👧 女孩版'}</span>
            <span className="text-orange-300">·</span>
            <span>{charData.charName}</span>
          </div>
        </div>
      </div>

      {/* 角色海报展示 */}
      <div className="px-6 mt-3">
        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-amber-50 group">
          <img
            alt={charData.name}
            className="w-full h-full object-cover transition-opacity duration-300"
            id="resHeroImg"
            src={activeHeroImg}
          />

          {/* 自定义上传/替换按钮，方便用户直接上传手机或电脑里的新图 */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
            {customImg && (
              <button
                type="button"
                onClick={handleResetImg}
                title="恢复默认原图"
                className="px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-[11px] font-medium backdrop-blur-md flex items-center gap-1 shadow-md transition-all cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>恢复默认</span>
              </button>
            )}
            <label
              htmlFor="upload-hero-input"
              className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md cursor-pointer border border-stone-200/80 transition-all hover:scale-105 active:scale-95"
            >
              <Upload className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>{customImg ? '更改变更图片' : '上传自定义图片'}</span>
            </label>
            <input
              id="upload-hero-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-1.5">
              <span
                className={`text-xs font-black flex items-center gap-1 ${elemData.textColor}`}
                id="resElementTag"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {charData.name}
              </span>
              <span className="text-[10px] text-stone-400 font-medium">
                {customImg ? '自定义上传角色' : '原创母版角色'}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5" id="resKeywords">
              {charData.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[11px] bg-amber-100/80 text-amber-900 font-bold border border-amber-200/50"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 核心入口：亲子沟通宝典 */}
      <div className="px-5 mt-4">
        <button
          id="result-go-guide-btn"
          onClick={onGoToGuide}
          className="btn-press w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white font-extrabold text-base shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 border-b-4 border-orange-600 cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 text-amber-100" />
          <span>看看怎么和他说（亲子沟通宝典）</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-[11px] text-center text-stone-400 mt-2">
          点击直达：适合该星象专属的日常说话口诀、雷区与8大情境话术
        </p>
      </div>

      {/* 家长须知性格速描卡 */}
      <div className="px-5 mt-3 mb-4">
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
          <h3 className="text-xs font-bold text-stone-800 mb-1.5 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>家长须知</span>
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed font-normal" id="resShortDesc">
            {charData.shortDesc}
          </p>
        </div>
      </div>

      {/* 辅助分享与特惠入口 */}
      <div className="px-5 pb-4 space-y-2">
        <button
          id="result-share-reward-btn"
          type="button"
          onClick={onTriggerShareReward || onShare}
          className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#FFF5EE] to-amber-50 border border-orange-200 text-stone-800 text-xs font-bold flex items-center justify-between hover:bg-orange-100/50 btn-press cursor-pointer shadow-2xs"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">🎁</span>
            <div className="text-left">
              <div className="text-xs font-black text-stone-800">
                {hasSharedDiscount ? '已激活 0.99 元特惠解锁权限' : '分享立享 0.99 元解锁全部秘籍'}
              </div>
              <div className="text-[10px] text-stone-500 font-normal">
                {!shareRewardUsed ? '额外再送 +1 次免费测算机会' : '原价 ¥9.9，分享立享 1 折特惠'}
              </div>
            </div>
          </div>
          <span className="text-[10px] bg-[#FF6B35] text-white px-2.5 py-1 rounded-full font-bold shadow-2xs flex-shrink-0">
            {hasSharedDiscount ? '去开通' : '立省8.91元'}
          </span>
        </button>

        <button
          id="result-share-card-btn"
          onClick={onShare}
          className="w-full py-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-stone-50 btn-press cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          生成与保存孩子专属星象卡
        </button>
      </div>
    </div>
  );
};
