import React from 'react';
import { ChevronRight, Lock, Sparkles } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface ScenesViewProps {
  currentElement: ElementType;
  currentGender: GenderType;
  onSelectGender: (gender: GenderType) => void;
  onSelectElement: (elem: ElementType) => void;
  onOpenScene: (sceneId: string) => void;
  paidAccess?: boolean;
  onOpenPaywall?: () => void;
  activeChildElement?: ElementType;
  activeChildGender?: GenderType;
}

export const ScenesView: React.FC<ScenesViewProps> = ({
  currentElement,
  currentGender,
  onSelectGender,
  onSelectElement,
  onOpenScene,
  paidAccess = false,
  onOpenPaywall,
  activeChildElement,
  activeChildGender,
}) => {
  const elemData = ELEMENTS_DATA[currentElement];
  const charData = elemData[currentGender];

  // 方案 B 锁定规则：
  // 1. 若已付费 (paidAccess)，全量角色与全量场景自由畅享
  // 2. 若未付费，当前已测算的孩子角色（星象与性别一致），8个场景全部免费畅读！让家长充分验证内容品质
  // 3. 其他 7 个角色（跨象或跨性别），生活场景库全锁，必须付费/分享特惠解锁
  const isCurrentCharTested = activeChildElement === currentElement && activeChildGender === currentGender;
  const isCurrentCharUnlocked = paidAccess || isCurrentCharTested;

  const isSceneUnlocked = (_index: number) => {
    return isCurrentCharUnlocked;
  };

  const handleSceneClick = (sceneId: string, index: number) => {
    if (isSceneUnlocked(index)) {
      onOpenScene(sceneId);
    } else {
      if (onOpenPaywall) {
        onOpenPaywall();
      } else {
        onOpenScene(sceneId);
      }
    }
  };

  const handleElementTabClick = (elem: ElementType) => {
    if (paidAccess || elem === activeChildElement) {
      onSelectElement(elem);
    } else {
      if (onOpenPaywall) {
        onOpenPaywall();
      } else {
        onSelectElement(elem);
      }
    }
  };

  const handleGenderTabClick = (gender: GenderType) => {
    if (paidAccess || (currentElement === activeChildElement && gender === activeChildGender)) {
      onSelectGender(gender);
    } else {
      if (onOpenPaywall) {
        onOpenPaywall();
      } else {
        onSelectGender(gender);
      }
    }
  };

  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 头部标题与情境标签 */}
      <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-stone-200/60 bg-white/70">
        <div className="flex items-center gap-2">
          <span className="text-base font-black text-stone-800">亲子沟通场景库</span>
          <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-bold">
            8大核心情境
          </span>
        </div>
        {!paidAccess && (
          <button
            onClick={onOpenPaywall}
            className="flex items-center gap-1 text-[11px] font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 px-2 py-0.8 rounded-full border border-orange-200 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>0.99元解锁全部</span>
          </button>
        )}
      </div>

      {/* 四象切换与性别视图切换 */}
      <div className="px-5 pt-2.5 pb-2 flex flex-col gap-2 bg-[#FAF8F5]">
        {/* 四象标签栏 */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-stone-500">当前星象：</span>
          <div className="flex bg-stone-200/70 p-0.5 rounded-lg text-xs font-bold">
            {(['fire', 'wind', 'water', 'earth'] as ElementType[]).map((elem) => {
              const icon = elem === 'fire' ? '🔥' : elem === 'wind' ? '🌪️' : elem === 'water' ? '💧' : '🌱';
              const name = elem === 'fire' ? '火' : elem === 'wind' ? '风' : elem === 'water' ? '水' : '土';
              const isActive = elem === currentElement;
              const isLocked = !paidAccess && elem !== activeChildElement;
              return (
                <button
                  key={elem}
                  id={`scenes-tab-${elem}`}
                  type="button"
                  onClick={() => handleElementTabClick(elem)}
                  className={`px-2.5 py-1 rounded transition-all cursor-pointer flex items-center gap-0.5 ${
                    isActive
                      ? 'bg-white text-[#FF6B35] shadow-xs font-black'
                      : 'text-stone-600 hover:text-stone-900 font-medium'
                  }`}
                >
                  <span>{icon} {name}</span>
                  {isLocked && <Lock className="w-2.5 h-2.5 text-stone-400 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 性别切换 */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-stone-500">角色性别视图：</span>
          <div className="inline-flex bg-stone-200/70 p-0.5 rounded-lg text-xs font-bold">
            <button
              id="scenesGenderBoy"
              type="button"
              onClick={() => handleGenderTabClick('male')}
              className={`px-3 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${
                currentGender === 'male'
                  ? 'bg-white text-stone-800 shadow-xs font-black'
                  : 'text-stone-600 hover:text-stone-900 font-normal'
              }`}
            >
              <span>👦 男孩 · {elemData.male.charName}</span>
              {!paidAccess && !(currentElement === activeChildElement && activeChildGender === 'male') && (
                <Lock className="w-2.5 h-2.5 text-stone-400" />
              )}
            </button>
            <button
              id="scenesGenderGirl"
              type="button"
              onClick={() => handleGenderTabClick('female')}
              className={`px-3 py-1 rounded transition-all cursor-pointer flex items-center gap-1 ${
                currentGender === 'female'
                  ? 'bg-white text-stone-800 shadow-xs font-black'
                  : 'text-stone-600 hover:text-stone-900 font-normal'
              }`}
            >
              <span>👧 女孩 · {elemData.female.charName}</span>
              {!paidAccess && !(currentElement === activeChildElement && activeChildGender === 'female') && (
                <Lock className="w-2.5 h-2.5 text-stone-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 付费锁提示条（未付费状态下展示） */}
      {!paidAccess && (
        <div className="px-5 pt-2">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-2.5 flex items-center justify-between text-xs shadow-2xs">
            <div className="flex items-center gap-1.5 text-stone-700">
              <span className="text-amber-600 font-black">
                {isCurrentCharTested ? '✨ 当前角色免费畅享中' : '🔒 跨象角色已加锁'}
              </span>
              <span className="text-[11px] text-stone-500">
                {isCurrentCharTested
                  ? '已测算宝贝的8大场景全部免费！解锁查看其他角色'
                  : '解锁查看全套4大星象 · 8位伙伴日常场景与沟通法'}
              </span>
            </div>
            <button
              onClick={onOpenPaywall}
              className="text-[10px] bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white px-2.5 py-1 rounded-lg font-bold hover:brightness-105 flex-shrink-0 cursor-pointer shadow-xs"
            >
              0.99元解锁全部
            </button>
          </div>
        </div>
      )}

      {/* 8 个场景卡片列表 */}
      <div className="px-5 pt-2 pb-4 space-y-2.5" id="sceneCardsList">
        {charData.scenes.map((sc, index) => {
          const unlocked = isSceneUnlocked(index);
          return (
            <div
              key={sc.id}
              id={`scene-item-${sc.id}`}
              onClick={() => handleSceneClick(sc.id, index)}
              className={`card-press bg-white rounded-2xl p-3 border shadow-xs flex items-center justify-between cursor-pointer transition-all ${
                unlocked
                  ? 'border-stone-200/80 hover:border-orange-300'
                  : 'border-stone-200/70 bg-stone-50/70 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border relative ${!unlocked ? 'bg-stone-800 border-stone-700' : 'bg-stone-100 border-stone-200'}`}>
                  {unlocked ? (
                    <img
                      src={sc.img}
                      alt={sc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    /* 未解锁状态完全不渲染/不暴露场景插画，纯黑遮罩配合加锁标志 */
                    <div className="w-full h-full bg-stone-900 flex flex-col items-center justify-center text-amber-300">
                      <div className="w-7 h-7 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center shadow-xs">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[8px] text-stone-400 font-bold mt-0.5">场景隐藏</span>
                    </div>
                  )}
                </div>
                <div className="overflow-hidden pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-stone-800">{sc.title}</h4>
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.2 rounded-full font-semibold">
                      {charData.charName}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-1 font-normal">
                    {unlocked ? sc.good : '🔒 付费解锁后查看情境插画、心理透视与说话口诀'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {!unlocked ? (
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5 border border-amber-200">
                    <Lock className="w-2.5 h-2.5" />
                    <span>解锁</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
