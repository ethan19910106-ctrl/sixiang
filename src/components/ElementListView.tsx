import React from 'react';
import { ChevronRight, Lock, Sparkles } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface ElementListViewProps {
  onSelectElement: (elem: ElementType, gender?: GenderType) => void;
  paidAccess?: boolean;
  onOpenPaywall?: () => void;
  activeChildElement?: ElementType;
  activeChildGender?: GenderType;
}

export const ElementListView: React.FC<ElementListViewProps> = ({
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

  const isCharUnlocked = (elem: ElementType, gender: GenderType) => {
    return paidAccess || (activeChildElement === elem && activeChildGender === gender);
  };

  const handleCardClick = (elem: ElementType, gender: GenderType) => {
    if (isCharUnlocked(elem, gender)) {
      onSelectElement(elem, gender);
    } else {
      if (onOpenPaywall) {
        onOpenPaywall();
      } else {
        onSelectElement(elem, gender);
      }
    }
  };
  const elements: {
    type: ElementType;
    icon: string;
    title: string;
    archetype: string;
    signs: string;
    traits: string;
    borderColor: string;
    accentColor: string;
    badgeBg: string;
    badgeText: string;
  }[] = [
    {
      type: 'fire',
      icon: '🔥',
      title: '火象',
      archetype: '行动派',
      signs: '白羊 · 狮子 · 射手',
      traits: '行动快、热情直接，最讨厌拖延',
      borderColor: 'border-orange-200 hover:border-orange-400',
      accentColor: 'text-orange-600',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-700',
    },
    {
      type: 'wind',
      icon: '🌪️',
      title: '风象',
      archetype: '好奇星',
      signs: '双子 · 天秤 · 水瓶',
      traits: '脑洞大、灵动应变，好奇探索',
      borderColor: 'border-teal-200 hover:border-teal-400',
      accentColor: 'text-teal-600',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-700',
    },
    {
      type: 'water',
      icon: '💧',
      title: '水象',
      archetype: '共情家',
      signs: '巨蟹 · 天蝎 · 双鱼',
      traits: '细腻敏锐、依恋安全，善解人意',
      borderColor: 'border-blue-200 hover:border-blue-400',
      accentColor: 'text-blue-600',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-700',
    },
    {
      type: 'earth',
      icon: '🌱',
      title: '土象',
      archetype: '守规者',
      signs: '金牛 · 处女 · 摩羯',
      traits: '严谨稳重、规则分明，自律踏实',
      borderColor: 'border-emerald-200 hover:border-emerald-400',
      accentColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
    },
  ];

  return (
    <div className="safe-bottom animate-fadeIn" id="element-list-view">
      <div className="px-5 pt-4 pb-2 text-center">
        <h1 className="text-xl font-black text-stone-800 tracking-tight">
          四象八位性格图鉴
        </h1>
        <p className="text-xs text-stone-500 mt-1 font-medium">
          4大星象 · 8位专属动画伙伴 · 男女双版本对照
        </p>
      </div>

      {!paidAccess && (
        <div className="px-4 mt-2">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-3 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-black text-sm">
                🔓
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-800">全角色性格全解指南</h4>
                <p className="text-[11px] text-stone-500">仅需 0.99元（原价9.9元）即可解锁全部8位伙伴深度解析</p>
              </div>
            </div>
            <button
              onClick={onOpenPaywall}
              className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white text-xs font-bold shadow-xs hover:brightness-105 flex-shrink-0 cursor-pointer"
            >
              特惠解锁
            </button>
          </div>
        </div>
      )}

      <div className="px-4 space-y-4 mt-3 mb-8">
        {elements.map((elem) => {
          const data = ELEMENTS_DATA[elem.type];
          const maleUnlocked = isCharUnlocked(elem.type, 'male');
          const femaleUnlocked = isCharUnlocked(elem.type, 'female');
          return (
            <div
              key={elem.type}
              id={`group-elem-${elem.type}`}
              className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-xs"
            >
              {/* 象别主标题与所属星座 */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className={`text-base font-black ${elem.accentColor}`}>
                    {elem.icon} {elem.title} ({elem.archetype})
                  </span>
                  <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full">
                    {elem.signs}
                  </span>
                </div>
                <span className="text-[11px] text-stone-400">{elem.traits}</span>
              </div>

              {/* 该象下的男女双角色卡片：直观呈现八个伙伴 */}
              <div className="grid grid-cols-2 gap-2.5 pt-3">
                {/* 男孩角色卡 */}
                <div
                  id={`char-card-${elem.type}-male`}
                  onClick={() => handleCardClick(elem.type, 'male')}
                  className={`card-press p-2.5 rounded-2xl bg-stone-50/70 border ${elem.borderColor} flex items-center gap-2.5 cursor-pointer hover:bg-white hover:shadow-xs transition-all relative overflow-hidden`}
                >
                  <div className={`w-13 h-13 rounded-xl overflow-hidden flex-shrink-0 border relative ${!maleUnlocked ? 'bg-stone-100 border-stone-200' : 'bg-white border-stone-200/80 shadow-2xs'}`}>
                    <img
                      className={`w-full h-full object-cover transition-all ${!maleUnlocked ? 'character-silhouette' : ''}`}
                      src={getCharImg(elem.type, 'male')}
                      alt={data.male.charName}
                    />
                    {!maleUnlocked && (
                      <div className="absolute inset-0 bg-stone-900/25 flex items-center justify-center backdrop-blur-[0.5px]">
                        <div className="w-5 h-5 rounded-full bg-stone-900/80 text-amber-300 flex items-center justify-center shadow-md">
                          <Lock className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="overflow-hidden flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-stone-800 truncate">
                        {maleUnlocked ? data.male.charName : '神秘男孩伙伴'}
                      </span>
                      <span className="text-[9px] bg-blue-100 text-blue-700 px-1 py-0.2 rounded font-bold flex-shrink-0">
                        男孩
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-500 truncate mt-0.5">
                      {elem.title}伙伴
                    </p>
                    <div className="flex items-center text-[10px] text-orange-600 font-medium mt-0.5">
                      {maleUnlocked ? (
                        <>
                          <span>查看原则</span>
                          <ChevronRight className="w-3 h-3" />
                        </>
                      ) : (
                        <span className="text-amber-600 font-bold flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> 解锁
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 女孩角色卡 */}
                <div
                  id={`char-card-${elem.type}-female`}
                  onClick={() => handleCardClick(elem.type, 'female')}
                  className={`card-press p-2.5 rounded-2xl bg-stone-50/70 border ${elem.borderColor} flex items-center gap-2.5 cursor-pointer hover:bg-white hover:shadow-xs transition-all relative overflow-hidden`}
                >
                  <div className={`w-13 h-13 rounded-xl overflow-hidden flex-shrink-0 border relative ${!femaleUnlocked ? 'bg-stone-100 border-stone-200' : 'bg-white border-stone-200/80 shadow-2xs'}`}>
                    <img
                      className={`w-full h-full object-cover transition-all ${!femaleUnlocked ? 'character-silhouette' : ''}`}
                      src={getCharImg(elem.type, 'female')}
                      alt={data.female.charName}
                    />
                    {!femaleUnlocked && (
                      <div className="absolute inset-0 bg-stone-900/25 flex items-center justify-center backdrop-blur-[0.5px]">
                        <div className="w-5 h-5 rounded-full bg-stone-900/80 text-amber-300 flex items-center justify-center shadow-md">
                          <Lock className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="overflow-hidden flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-stone-800 truncate">
                        {femaleUnlocked ? data.female.charName : '神秘女孩伙伴'}
                      </span>
                      <span className="text-[9px] bg-pink-100 text-pink-700 px-1 py-0.2 rounded font-bold flex-shrink-0">
                        女孩
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-500 truncate mt-0.5">
                      {elem.title}伙伴
                    </p>
                    <div className="flex items-center text-[10px] text-orange-600 font-medium mt-0.5">
                      {femaleUnlocked ? (
                        <>
                          <span>查看原则</span>
                          <ChevronRight className="w-3 h-3" />
                        </>
                      ) : (
                        <span className="text-amber-600 font-bold flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> 解锁
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
