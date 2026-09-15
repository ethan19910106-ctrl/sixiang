import React from 'react';
import { CheckCircle2, XCircle, HelpCircle, Lock } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface SceneDetailViewProps {
  sceneId: string;
  currentElement: ElementType;
  currentGender: GenderType;
  onSelectElement: (elem: ElementType) => void;
  onSelectGender?: (gender: GenderType) => void;
  onBackToScenes: () => void;
  paidAccess?: boolean;
  onOpenPaywall?: () => void;
  activeChildElement?: ElementType;
  activeChildGender?: GenderType;
}

export const SceneDetailView: React.FC<SceneDetailViewProps> = ({
  sceneId,
  currentElement,
  currentGender,
  onSelectElement,
  onBackToScenes,
  paidAccess = false,
  onOpenPaywall,
  activeChildElement,
}) => {
  const elemData = ELEMENTS_DATA[currentElement];
  const charData = elemData[currentGender];
  const scene = charData.scenes.find((s) => s.id === sceneId) || charData.scenes[0];

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

  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 星象即时对比标签 */}
      <div className="px-5 pt-2.5 pb-2.5 bg-stone-100/70 border-b border-stone-200 flex items-center justify-between">
        <span className="text-[11px] font-bold text-stone-500">对比不同星象：</span>
        <div className="flex items-center gap-1.5" id="sceneDetailPills">
          {(['fire', 'wind', 'water', 'earth'] as ElementType[]).map((elem) => {
            const icon = elem === 'fire' ? '🔥' : elem === 'wind' ? '🌪️' : elem === 'water' ? '💧' : '🌱';
            const name = elem === 'fire' ? '火' : elem === 'wind' ? '风' : elem === 'water' ? '水' : '土';
            const isActive = elem === currentElement;
            const isLocked = !paidAccess && elem !== activeChildElement;
            return (
              <button
                key={elem}
                id={`scTab-${elem}`}
                type="button"
                onClick={() => handleElementTabClick(elem)}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-0.5 ${
                  isActive
                    ? 'bg-white text-[#FF6B35] border border-orange-200 shadow-xs'
                    : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                }`}
              >
                <span>{icon}{name}</span>
                {isLocked && <Lock className="w-2.5 h-2.5 text-stone-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 场景插画 */}
      <div className="px-5 pt-3">
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border-2 border-white bg-amber-50">
          <img
            alt={scene.title}
            className="w-full h-full object-cover"
            id="scDetHeroImg"
            src={scene.img}
          />
          <div
            className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold"
            id="scDetBadge"
          >
            {charData.name} · {scene.title}
          </div>
        </div>
      </div>

      {/* 话术与心理分析 */}
      <div className="px-5 mt-4 space-y-3 pb-4">
        {/* 行为心理分析 */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs">
          <h4 className="text-xs font-extrabold text-stone-800 mb-1.5 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
            <span>TA 为什么会这样？</span>
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed" id="scDetBehavior">
            {scene.why}
          </p>
        </div>

        {/* 正向沟通建议 */}
        <div className="bg-emerald-50/80 rounded-2xl p-4 border-2 border-emerald-200">
          <h4 className="text-xs font-extrabold text-emerald-900 mb-1.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>可以试着这样说</span>
          </h4>
          <p className="text-xs font-extrabold text-stone-800 leading-relaxed" id="scDetSayGood">
            {scene.good}
          </p>
        </div>

        {/* 避坑提醒 */}
        <div className="bg-red-50/80 rounded-2xl p-4 border-2 border-red-200">
          <h4 className="text-xs font-extrabold text-red-900 mb-1.5 flex items-center gap-1.5">
            <XCircle className="w-3.5 h-3.5 text-red-600" />
            <span>尽量不要这样说</span>
          </h4>
          <p className="text-xs text-stone-700 leading-relaxed" id="scDetSayBad">
            {scene.bad}
          </p>
        </div>
      </div>

      {/* 返回场景库按钮 */}
      <div className="px-5 pb-4">
        <button
          onClick={onBackToScenes}
          className="w-full py-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 btn-press cursor-pointer"
        >
          查看更多生活情境场景
        </button>
      </div>
    </div>
  );
};
