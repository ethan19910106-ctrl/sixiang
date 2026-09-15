import React from 'react';
import { ChevronLeft, MoreHorizontal, CircleDot } from 'lucide-react';
import { PageView } from '../types';

interface HeaderBarProps {
  currentPage: PageView;
  title?: string;
  onBack?: () => void;
  onHome?: () => void;
  onShare?: () => void;
  showShare?: boolean;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentPage,
  title,
  onBack,
  onHome,
  onShare,
  showShare,
}) => {
  const isHome = currentPage === 'home';

  return (
    <header className="relative z-30 flex-shrink-0 px-5 pt-3 pb-2.5 flex items-center justify-between bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/50">
      <div className="flex items-center gap-2">
        {!isHome && onBack && (
          <button
            id="header-back-btn"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 hover:bg-stone-200 btn-press cursor-pointer"
            title="返回"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        {title ? (
          <h2 className="text-sm font-bold text-stone-800 tracking-tight">{title}</h2>
        ) : (
          <span className="text-xs font-bold text-stone-700 tracking-tight">09:41</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {showShare && onShare && (
          <button
            id="header-share-btn"
            onClick={onShare}
            className="text-xs font-bold text-stone-700 flex items-center gap-1 bg-white border border-stone-200/80 px-2.5 py-1 rounded-full btn-press cursor-pointer shadow-xs"
          >
            <span className="text-[11px]">📤</span> 分享
          </button>
        )}

        <div className="flex items-center bg-white/90 border border-stone-200/80 rounded-full px-2.5 py-1 shadow-xs gap-2">
          <button
            id="header-more-btn"
            className="text-stone-600 hover:text-stone-900 text-xs flex items-center justify-center cursor-pointer"
            onClick={() => alert('儿童四象 · 亲子沟通工具\n不贴标签，只为找到更顺畅的沟通方式。')}
            title="关于"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
          <div className="w-[1px] h-3 bg-stone-300" />
          <button
            id="header-home-btn"
            className="text-stone-600 hover:text-stone-900 text-xs flex items-center justify-center cursor-pointer"
            onClick={onHome}
            title="回到首页"
          >
            <CircleDot className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
