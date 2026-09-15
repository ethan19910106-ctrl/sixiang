import React from 'react';
import { Compass, Sparkles, Layers, Users } from 'lucide-react';
import { PageView } from '../types';

interface BottomNavProps {
  currentPage: PageView;
  onSelect: (page: PageView) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onSelect }) => {
  const isTabActive = (tab: 'home' | 'birthday' | 'scenes' | 'profile') => {
    if (tab === 'home') return currentPage === 'home';
    if (tab === 'birthday') return currentPage === 'birthday' || currentPage === 'result';
    if (tab === 'scenes') return currentPage === 'scenes' || currentPage === 'scene-detail';
    if (tab === 'profile') return currentPage === 'profile';
    return false;
  };

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/80 px-6 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] flex items-center justify-between">
      <button
        id="tab-home"
        onClick={() => onSelect('home')}
        className={`flex flex-col items-center gap-1 btn-press cursor-pointer ${
          isTabActive('home') ? 'text-[#FF6B35] font-black' : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        <Compass className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">首页</span>
      </button>

      <button
        id="tab-birthday"
        onClick={() => onSelect('birthday')}
        className={`flex flex-col items-center gap-1 btn-press cursor-pointer ${
          isTabActive('birthday') ? 'text-[#FF6B35] font-black' : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">测试</span>
      </button>

      <button
        id="tab-scenes"
        onClick={() => onSelect('scenes')}
        className={`flex flex-col items-center gap-1 btn-press cursor-pointer ${
          isTabActive('scenes') ? 'text-[#FF6B35] font-black' : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">场景库</span>
      </button>

      <button
        id="tab-profile"
        onClick={() => onSelect('profile')}
        className={`flex flex-col items-center gap-1 btn-press cursor-pointer ${
          isTabActive('profile') ? 'text-[#FF6B35] font-black' : 'text-stone-400 hover:text-stone-600'
        }`}
      >
        <Users className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">档案</span>
      </button>
    </nav>
  );
};
