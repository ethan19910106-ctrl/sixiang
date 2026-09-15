import React from 'react';
import {
  CheckCircle2,
  XCircle,
  Wand2,
  Ban,
  Layers,
  Sparkles,
  Lock,
} from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ElementType, GenderType } from '../types';

interface GuideViewProps {
  currentElement: ElementType;
  currentGender: GenderType;
  onSelectElement?: (elem: ElementType) => void;
  onGoToScenes: () => void;
  paidAccess?: boolean;
  onOpenPaywall?: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({
  currentElement,
  currentGender,
  onGoToScenes,
  paidAccess = false,
  onOpenPaywall,
}) => {
  const elemData = ELEMENTS_DATA[currentElement];
  const charData = elemData[currentGender];

  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 角色信息条 */}
      <div className="px-5 pt-3 pb-2.5 bg-stone-50 border-b border-stone-200/70 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-orange-200 bg-white flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              id="guideCharThumb"
              src={charData.heroImg}
              alt={charData.name}
            />
          </div>
          <div>
            <h3 className="text-xs font-black text-stone-800" id="guideCharName">
              {charData.name} 沟通原则
            </h3>
            <p className="text-[10px] text-stone-500" id="guideCharGenderLabel">
              当前角色：{currentGender === 'male' ? `男孩版 · ${charData.charName}` : `女孩版 · ${charData.charName}`}
            </p>
          </div>
        </div>

        {!paidAccess && (
          <button
            onClick={onOpenPaywall}
            className="flex items-center gap-1 text-[11px] font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded-full border border-orange-200 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>0.99元全套</span>
          </button>
        )}
      </div>

      {/* 模块一：为什么会这样 */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-black text-stone-800 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>💡 行为心理透视：TA 为什么会这样？</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed font-normal" id="guideWhyText">
            {charData.whyText}
          </p>
        </div>
      </div>

      {/* 模块二：可以试着直接这样说 */}
      <div className="px-5 mt-3">
        <div className="bg-emerald-50/70 border-2 border-emerald-200/80 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>✨ 黄金沟通口诀：可以试着直接这样说</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                正面肯定
              </span>
              <p className="text-xs font-extrabold text-stone-800 mt-1" id="guideSayYes1">
                {charData.sayYes1}
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                趣味引导
              </span>
              <p className="text-xs font-extrabold text-stone-800 mt-1" id="guideSayYes2">
                {charData.sayYes2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 模块三：尽量少这样说 */}
      <div className="px-5 mt-3">
        <div className="bg-red-50/70 border-2 border-red-200/80 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-black text-red-800 mb-2">
            <XCircle className="w-4 h-4 text-red-600" />
            <span>🚫 亲子沟通避坑指南：尽量少这样说（易火上浇油）</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white p-2.5 rounded-xl border border-red-100 text-xs text-stone-700 flex items-center gap-2">
              <Ban className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
              <span id="guideSayNo1">{charData.sayNo1}</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-red-100 text-xs text-stone-700 flex items-center gap-2">
              <Ban className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
              <span id="guideSayNo2">{charData.sayNo2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 模块四：换成这样说 */}
      <div className="px-5 mt-3">
        <div className="bg-amber-50/80 border-2 border-amber-200/80 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>🪄 魔法转换话术：换成这样说，效果好3倍</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-amber-100">
            <div className="text-[10px] text-stone-400 line-through mb-1" id="guideSayOld">
              “别乱动！快坐好！”
            </div>
            <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Wand2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span id="guideSayReplace">{charData.sayReplace}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 场景直达按钮 */}
      <div className="px-5 mt-5 mb-4">
        <button
          id="guide-to-scenes-btn"
          onClick={onGoToScenes}
          className="btn-press w-full py-3.5 px-4 rounded-2xl bg-stone-800 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-stone-900"
        >
          <Layers className="w-4 h-4 text-amber-200" />
          <span>查看该角色的全部 8 个生活场景插画与话术</span>
        </button>
      </div>
    </div>
  );
};
