import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, Crown, Gift, Compass } from 'lucide-react';
import { calcConstellation } from '../data/elementsData';
import { GenderType, ElementType, UserState } from '../types';

interface BirthdayViewProps {
  initialName?: string;
  initialGender?: GenderType;
  initialYear?: number;
  initialMonth?: number;
  initialDay?: number;
  userState?: UserState;
  onSubmit: (data: {
    name: string;
    gender: GenderType;
    year: number;
    month: number;
    day: number;
    element: ElementType;
    constellation: string;
  }) => void;
}

export const BirthdayView: React.FC<BirthdayViewProps> = ({
  initialName = '小宝',
  initialGender = 'male',
  initialYear = 2020,
  initialMonth = 8,
  initialDay = 8,
  userState,
  onSubmit,
}) => {
  const [name, setName] = useState(initialName);
  const [gender, setGender] = useState<GenderType>(initialGender);
  const [year, setYear] = useState<number>(initialYear);
  const [month, setMonth] = useState<number>(initialMonth);
  const [day, setDay] = useState<number>(initialDay);

  // Live calculation of constellation and element
  const constellationInfo = useMemo(() => {
    return calcConstellation(month, day);
  }, [month, day]);

  // Quick preset helper
  const setQuickDate = (m: number, d: number) => {
    setMonth(m);
    setDay(d);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: name.trim() || '小宝',
      gender,
      year,
      month,
      day,
      element: constellationInfo.element,
      constellation: constellationInfo.constellation,
    });
  };

  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 头部固定精美星象罗盘插画（不提前暴露角色，保持神秘感与仪式感） */}
      <div className="px-5 pt-3 text-center">
        <div className="relative mx-auto w-28 h-28 mb-2 flex items-center justify-center">
          {/* 星云柔光呼吸光晕 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300/25 via-orange-200/20 to-teal-200/25 blur-lg animate-pulse" />
          
          {/* 外部星象刻度仪（平滑慢速旋转） */}
          <div className="absolute inset-0.5 rounded-full border border-dashed border-amber-300/80 animate-[spin_60s_linear_infinite]" />

          {/* 黄金星盘仪式容器 */}
          <div className="relative w-23 h-23 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F3EDE2] border-2 border-amber-200/90 shadow-md flex items-center justify-center p-2.5">
            {/* 星盘内圈同心圆与四象十字轴线 */}
            <svg
              className="w-full h-full drop-shadow-2xs"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 背景渐变定义 */}
              <defs>
                <radialGradient id="compassGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9EB" />
                  <stop offset="70%" stopColor="#F5ECE0" />
                  <stop offset="100%" stopColor="#EADECB" />
                </radialGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>

              {/* 罗盘底盘 */}
              <circle cx="50" cy="50" r="46" fill="url(#compassGlow)" stroke="#FDE68A" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="39" stroke="#E5D5BA" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="50" cy="50" r="32" stroke="#FDE68A" strokeWidth="1" />

              {/* 十字经纬星轨 */}
              <line x1="50" y1="12" x2="50" y2="88" stroke="#D1BEA2" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" />
              <line x1="12" y1="50" x2="88" y2="50" stroke="#D1BEA2" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" />

              {/* 对角线微星轨 */}
              <line x1="23" y1="23" x2="77" y2="77" stroke="#E2D4C0" strokeWidth="0.75" strokeLinecap="round" />
              <line x1="77" y1="23" x2="23" y2="77" stroke="#E2D4C0" strokeWidth="0.75" strokeLinecap="round" />

              {/* 四象微印记符号分布 */}
              {/* 顶部：火象小火种 */}
              <path d="M50 16c1.5 2.5 1.5 4 0 5.5-1.5-1.5-1.5-3 0-5.5z" fill="#FF6B35" />
              {/* 右侧：风象微风气旋 */}
              <path d="M80 50c-1.5-1.5-3.5-1-4 0 .5 1.2 2 1.5 3.5 1.2" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round" />
              {/* 底部：土象嫩芽萌发 */}
              <path d="M50 84v-4m-2 1.5c1-1 3-1 4 0" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
              {/* 左侧：水象凝露水滴 */}
              <path d="M20 50c1.5 2.5 1.5 3.5 0 4.5-1.5-1-1.5-2 0-4.5z" fill="#2563EB" />

              {/* 核心耀眼灵感八芒星 */}
              <g transform="translate(50, 50)">
                {/* 4条主芒 */}
                <path d="M0 -15 L3 -4 L15 0 L3 4 L0 15 L-3 4 L-15 0 L-3 -4 Z" fill="url(#goldGrad)" />
                {/* 4条副芒 */}
                <path d="M-8 -8 L-2 -3 L0 -9 L2 -3 L8 -8 L3 -2 L9 0 L3 2 L8 8 L2 3 L0 9 L-2 3 L-8 8 L-3 2 L-9 0 L-3 -2 Z" fill="#FBBF24" opacity="0.85" />
                {/* 核心光耀珍珠 */}
                <circle cx="0" cy="0" r="3" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
              </g>
            </svg>

            {/* 四象微标签胶囊：环绕四周 */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-white/95 border border-orange-200 text-[9px] text-orange-600 font-bold shadow-2xs">
              火
            </span>
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 px-1.5 py-0.2 rounded-full bg-white/95 border border-teal-200 text-[9px] text-teal-600 font-bold shadow-2xs">
              风
            </span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-white/95 border border-emerald-200 text-[9px] text-emerald-600 font-bold shadow-2xs">
              土
            </span>
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 px-1.5 py-0.2 rounded-full bg-white/95 border border-blue-200 text-[9px] text-blue-600 font-bold shadow-2xs">
              水
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50/90 border border-amber-200/80 text-[11px] font-bold text-amber-900 mb-1">
          <Sparkles className="w-3 h-3 text-[#FF6B35]" />
          <span>测算孩子专属的四象性格与日常应对宝典</span>
        </div>
        <h1 className="text-xl font-black text-stone-800">输入孩子的信息</h1>
        <p className="text-xs text-stone-500 mt-0.5">
          根据出生公历日期，自动定位太阳星座与四象能量原型
        </p>
      </div>

      {/* 表单容器 */}
      <form onSubmit={handleSubmit} className="px-5 mt-4">
        <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-sm">
          {/* 昵称 */}
          <div className="mb-4">
            <label htmlFor="childNameInput" className="block text-xs font-bold text-stone-700 mb-1.5">
              孩子的小名 / 昵称
            </label>
            <input
              id="childNameInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例如：小宝、乐乐、朵朵"
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-stone-800 focus:outline-none focus:border-[#FF6B35] transition-all"
            />
          </div>

          {/* 性别选择 */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              孩子性别 (点击切换)
            </label>
            <div className="grid grid-cols-2 gap-3" id="genderButtonGroup">
              <button
                type="button"
                id="genderBtnBoy"
                onClick={() => setGender('male')}
                className={`py-3 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  gender === 'male'
                    ? 'border-2 border-[#FF6B35] bg-orange-50 text-[#FF6B35] shadow-xs scale-[1.01]'
                    : 'border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <span className="text-lg">👦</span> 男孩
              </button>
              <button
                type="button"
                id="genderBtnGirl"
                onClick={() => setGender('female')}
                className={`py-3 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  gender === 'female'
                    ? 'border-2 border-[#FF6B35] bg-orange-50 text-[#FF6B35] shadow-xs scale-[1.01]'
                    : 'border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <span className="text-lg">👧</span> 女孩
              </button>
            </div>
          </div>

          {/* 出生日期选择 */}
          <label className="block text-xs font-bold text-stone-700 mb-1.5">出生公历日期</label>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            {/* 年份 */}
            <div className="bg-stone-50 rounded-xl p-2 border border-stone-200">
              <div className="text-[10px] text-stone-400 font-semibold mb-0.5">年份</div>
              <select
                id="birthYear"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-bold text-stone-800 focus:outline-none cursor-pointer text-center"
              >
                {Array.from({ length: 12 }, (_, i) => 2015 + i).map((y) => (
                  <option key={y} value={y}>
                    {y} 年
                  </option>
                ))}
              </select>
            </div>

            {/* 月份 */}
            <div className="bg-stone-50 rounded-xl p-2 border border-stone-200">
              <div className="text-[10px] text-stone-400 font-semibold mb-0.5">月份</div>
              <select
                id="birthMonth"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-bold text-stone-800 focus:outline-none cursor-pointer text-center"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>
                    {m} 月
                  </option>
                ))}
              </select>
            </div>

            {/* 日期 (1~31天完整覆盖) */}
            <div className="bg-stone-50 rounded-xl p-2 border border-stone-200">
              <div className="text-[10px] text-stone-400 font-semibold mb-0.5">日期</div>
              <select
                id="birthDay"
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-bold text-stone-800 focus:outline-none cursor-pointer text-center"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>
                    {d} 日
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 实时星座与星象预览卡 */}
          <div
            id="constellationBadge"
            className="mt-4 p-3 bg-orange-50/90 border border-orange-200 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl" id="previewIcon">
                {constellationInfo.icon}
              </span>
              <div>
                <div className="text-xs font-black text-stone-800" id="previewConstellation">
                  匹配星座：{constellationInfo.constellation}
                </div>
                <div className="text-[10px] text-stone-600 font-medium" id="previewElement">
                  归属星象：{constellationInfo.title}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#FF6B35] bg-white border border-orange-200 px-2 py-0.5 rounded-md shadow-2xs">
              自动匹配
            </span>
          </div>

          {/* 快捷预设体验四大星象原型 */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <div className="text-[11px] text-stone-500 mb-2 font-medium">快速体验四大星象原型：</div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                id="preset-fire"
                onClick={() => setQuickDate(8, 8)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold btn-press cursor-pointer border ${
                  month === 8 && day === 8
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-orange-50 text-orange-800 border-orange-200'
                }`}
              >
                🔥 8月8日 (狮子·火象)
              </button>
              <button
                type="button"
                id="preset-wind"
                onClick={() => setQuickDate(5, 25)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold btn-press cursor-pointer border ${
                  month === 5 && day === 25
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-teal-50 text-teal-800 border-teal-200'
                }`}
              >
                🌪️ 5月25日 (双子·风象)
              </button>
              <button
                type="button"
                id="preset-water"
                onClick={() => setQuickDate(11, 12)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold btn-press cursor-pointer border ${
                  month === 11 && day === 12
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-blue-50 text-blue-800 border-blue-200'
                }`}
              >
                💧 11月12日 (天蝎·水象)
              </button>
              <button
                type="button"
                id="preset-earth"
                onClick={() => setQuickDate(9, 10)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold btn-press cursor-pointer border ${
                  month === 9 && day === 10
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                }`}
              >
                🌱 9月10日 (处女·土象)
              </button>
            </div>
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="mt-5 mb-6">
          <button
            type="submit"
            id="birthday-submit-btn"
            className="btn-press w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-stone-800 to-stone-900 text-white font-bold text-base shadow-lg flex items-center justify-center gap-2 border-b-4 border-black cursor-pointer"
          >
            <span>生成星象报告与沟通宝典</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* 权限额度提示说明 */}
          {userState && (
            <div className="mt-2 text-center">
              {userState.paidAccess ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  <Crown className="w-3 h-3 text-amber-500" />
                  <span>已开通无限测试 · 支持添加与测算多位宝贝</span>
                </span>
              ) : userState.freeTestRemaining > 0 ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-500">
                  {userState.shareRewardUsed ? (
                    <>
                      <Gift className="w-3 h-3 text-orange-500" />
                      <span>使用分享赠送的免费测试机会（剩余 {userState.freeTestRemaining} 次）</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>首次免费测试（剩余 {userState.freeTestRemaining} 次）</span>
                    </>
                  )}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                  <span>免费测试次数已用完 · 提交将进入解锁页面</span>
                </span>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
