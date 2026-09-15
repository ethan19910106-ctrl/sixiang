import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, Heart, Lock } from 'lucide-react';
import { HERO_BANNER_IMG, ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface HomeViewProps {
  onStartTest: () => void;
  onSelectElement: (elem: ElementType, gender?: GenderType) => void;
  onViewAllElements?: () => void;
  paidAccess?: boolean;
  onOpenPaywall?: () => void;
  activeChildElement?: ElementType;
  activeChildGender?: GenderType;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartTest,
  onSelectElement,
  paidAccess = false,
  onOpenPaywall,
  activeChildElement,
  activeChildGender,
}) => {
  const getCharImg = (elem: ElementType, gender: GenderType) => {
    if (typeof window !== 'undefined') {
      const custom = localStorage.getItem(`custom_hero_${elem}_${gender}`);
      if (custom) return custom;
    }
    return ELEMENTS_DATA[elem][gender].heroImg;
  };

  const handleCharacterCardClick = (elem: ElementType, gender: GenderType) => {
    // 如果用户已付费，或者点击的是当前已测算的孩子星象，允许自由进入查看
    if (paidAccess || (activeChildElement === elem && activeChildGender === gender)) {
      onSelectElement(elem, gender);
      return;
    }

    // 否则提示付费/分享解锁
    if (onOpenPaywall) {
      onOpenPaywall();
    } else {
      onSelectElement(elem, gender);
    }
  };

  const isCharUnlocked = (elem: ElementType, gender: GenderType) => {
    return paidAccess || (activeChildElement === elem && activeChildGender === gender);
  };
  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 顶部主图 */}
      <div className="px-4 pt-2">
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-sm border-2 border-white bg-amber-50">
          <img
            alt="四象母版合影"
            className="w-full h-full object-cover"
            src={HERO_BANNER_IMG}
          />
        </div>
      </div>

      {/* 标题文案 */}
      <div className="px-5 pt-3 pb-1 text-center">
        <span className="inline-block bg-[#FFF4ED] text-[#FF7A38] px-3 py-1 rounded-full text-xs font-bold mb-2 tracking-wide border border-orange-200/60">
          🌱 四象星座宝贝使用指南
        </span>
        <h1 className="text-2xl font-black text-stone-800 tracking-tight leading-snug">
          你家孩子是哪一种小性格？
        </h1>
      </div>

      {/* 核心开始测试按钮 */}
      <div className="px-5 pt-1.5 pb-1">
        <button
          id="home-start-test-btn"
          onClick={onStartTest}
          className="btn-press w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white font-bold text-base shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 border-b-4 border-orange-600 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>开始测试 · 看看孩子星象</span>
          <ArrowRight className="w-4 h-4 ml-1 opacity-90" />
        </button>
      </div>

      {/* 四象八大动画角色展示 */}
      <div className="px-5 mt-5">
        <div className="mb-3">
          <h2 className="text-base font-extrabold text-stone-800">四象八位性格宝贝</h2>
          <p className="text-[11px] text-stone-500">每个孩子都有天生舒适的节奏与情绪表达 · 解锁查看专属口诀</p>
        </div>

        {/* 8位角色网格：2列4行，每个象展示男孩与女孩 */}
        <div className="grid grid-cols-2 gap-2.5">
          {([
            { elem: 'fire', gender: 'male', icon: '🔥', elemName: '火象 · 行动派', border: 'border-orange-200/80', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
            { elem: 'fire', gender: 'female', icon: '🔥', elemName: '火象 · 行动派', border: 'border-orange-200/80', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
            { elem: 'wind', gender: 'male', icon: '🌪️', elemName: '风象 · 好奇星', border: 'border-teal-200/80', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700' },
            { elem: 'wind', gender: 'female', icon: '🌪️', elemName: '风象 · 好奇星', border: 'border-teal-200/80', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700' },
            { elem: 'water', gender: 'male', icon: '💧', elemName: '水象 · 共情家', border: 'border-blue-200/80', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
            { elem: 'water', gender: 'female', icon: '💧', elemName: '水象 · 共情家', border: 'border-blue-200/80', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
            { elem: 'earth', gender: 'male', icon: '🌱', elemName: '土象 · 守规者', border: 'border-emerald-200/80', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800' },
            { elem: 'earth', gender: 'female', icon: '🌱', elemName: '土象 · 守规者', border: 'border-emerald-200/80', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800' },
          ] as const).map((item) => {
            const char = ELEMENTS_DATA[item.elem][item.gender];
            const unlocked = isCharUnlocked(item.elem, item.gender);
            return (
              <div
                key={`${item.elem}-${item.gender}`}
                id={`card-elem-${item.elem}-${item.gender}`}
                onClick={() => handleCharacterCardClick(item.elem, item.gender)}
                className={`card-press bg-white rounded-2xl p-2.5 border ${item.border} shadow-xs flex items-center gap-2.5 cursor-pointer hover:border-orange-400 hover:shadow-sm transition-all relative overflow-hidden`}
              >
                <div className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border relative ${!unlocked ? 'bg-stone-100 border-stone-200' : 'bg-stone-50 border-stone-200/80'}`}>
                  <img
                    className={`w-full h-full object-cover transition-all ${!unlocked ? 'character-silhouette' : ''}`}
                    src={getCharImg(item.elem, item.gender)}
                    alt={char.charName}
                  />
                  {!unlocked && (
                    <div className="absolute inset-0 bg-stone-900/25 flex items-center justify-center backdrop-blur-[0.5px]">
                      <div className="w-5 h-5 rounded-full bg-stone-900/80 text-amber-300 flex items-center justify-center shadow-md">
                        <Lock className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="overflow-hidden flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className={`text-[11px] font-black ${item.text} truncate`}>
                      {item.icon} {unlocked ? char.charName : '神秘伙伴'}
                    </span>
                    <span className={`text-[9px] ${item.badge} px-1 rounded flex-shrink-0`}>
                      {item.gender === 'male' ? '男' : '女'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-[10px] text-stone-500 truncate font-medium">{item.elemName}</p>
                    {!unlocked ? (
                      <span className="text-[9px] text-amber-600 font-bold flex items-center gap-0.5 flex-shrink-0 ml-1">
                        <Lock className="w-2.5 h-2.5" />
                        <span>解锁</span>
                      </span>
                    ) : (
                      <span className="text-[9px] text-emerald-600 font-bold flex-shrink-0 ml-1">
                        已拥有
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 理念与初衷 */}
      <div className="px-5 mt-5 mb-4">
        <div className="bg-gradient-to-br from-[#FFF9F2] via-[#FFF5EC] to-[#FEF0E4] border border-orange-200/80 rounded-2xl p-4 shadow-2xs relative overflow-hidden">
          {/* 背景暖阳微装饰 */}
          <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-orange-200/30 blur-md pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 text-orange-600 text-xs font-bold mb-1">
              <Heart className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>理念与初衷</span>
            </div>
            <h3 className="text-sm font-black text-stone-800">了解孩子，绝不是给他贴死标签</h3>
            <p className="text-[12px] text-stone-600 mt-1 leading-relaxed">
              每个孩子都有独特的行为语言。知道他的内在节奏，是为了让父母少一点焦虑吼叫，多一点被接纳的从容对话。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
