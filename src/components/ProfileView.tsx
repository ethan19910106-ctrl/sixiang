import React, { useState } from 'react';
import { Plus, Trash2, ArrowRight, Crown, Sparkles, Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';
import { ChildRecord, UserState } from '../types';

interface ProfileViewProps {
  records: ChildRecord[];
  activeRecordId: string;
  userState?: UserState;
  onSelectRecord: (record: ChildRecord) => void;
  onDeleteRecord: (id: string) => void;
  onAddNewChild: () => void;
  onGoToGuide: () => void;
  onOpenPaywall?: () => void;
  onDebugResetState?: (preset: 'new_user' | 'used_first' | 'shared_reward' | 'exhausted' | 'paid') => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  records,
  activeRecordId,
  userState,
  onSelectRecord,
  onDeleteRecord,
  onAddNewChild,
  onGoToGuide,
  onOpenPaywall,
  onDebugResetState,
}) => {
  const [showDebug, setShowDebug] = useState(false);

  return (
    <div className="safe-bottom animate-fadeIn">
      {/* 头部与新建操作 */}
      <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-stone-200/60 bg-white/70">
        <h2 className="text-sm font-bold text-stone-800">家庭孩子管理</h2>
        <button
          id="profile-add-new-btn"
          onClick={onAddNewChild}
          className="text-xs font-bold text-[#FF6B35] bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-full btn-press flex items-center gap-1 cursor-pointer border border-orange-200/50"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>添加 / 重新测算</span>
        </button>
      </div>

      {/* 账号测试权限状态卡 */}
      {userState && (
        <div className="px-5 pt-3">
          <div className="bg-white rounded-2xl p-3.5 border border-stone-200 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                    userState.paidAccess
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-orange-100 text-[#FF6B35]'
                  }`}
                >
                  {userState.paidAccess ? (
                    <Crown className="w-4 h-4" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h3 className="text-xs font-black text-stone-800">
                    {userState.paidAccess ? '👑 已开通无限测试权限' : '测试权限状态'}
                  </h3>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    {userState.paidAccess
                      ? '支持测算多位宝贝 · 无限制继续测试'
                      : `剩余免费：${userState.freeTestRemaining}次 · ${
                          userState.hasSharedDiscountEligible
                            ? '已享 0.99元 特惠解锁特权'
                            : '分享立减至 0.99元 解锁'
                        }`}
                  </p>
                </div>
              </div>

              {!userState.paidAccess && onOpenPaywall && (
                <button
                  onClick={onOpenPaywall}
                  className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#FFA043] text-white text-[11px] font-bold shadow-2xs btn-press cursor-pointer"
                >
                  {userState.hasSharedDiscountEligible ? '¥0.99 解锁全部' : '解锁全部'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="px-5 pt-3 pb-2">
        <h1 className="text-base font-black text-stone-800">孩子档案清单</h1>
        <p className="text-xs text-stone-500 mt-0.5">
          每个孩子都是独立的星象，点击卡片切换，随时查看针对性相处指南
        </p>
      </div>

      {/* 档案卡片列表 */}
      <div className="px-5 mt-1 space-y-3" id="profileCardContainer">
        {records.map((record) => {
          const elemData = ELEMENTS_DATA[record.element];
          const charData = elemData[record.gender];
          const isActive = record.id === activeRecordId;

          return (
            <div
              key={record.id}
              id={`profile-card-${record.id}`}
              onClick={() => onSelectRecord(record)}
              className={`rounded-3xl p-4 border transition-all cursor-pointer relative ${
                isActive
                  ? 'bg-white border-2 border-[#FF6B35] shadow-md'
                  : 'bg-white/80 border-stone-200 hover:border-orange-200 shadow-xs'
              }`}
            >
              {isActive && (
                <span className="absolute top-3 right-3 text-[10px] font-bold bg-[#FFF4ED] text-[#FF6B35] px-2 py-0.5 rounded-full border border-orange-200">
                  当前选中
                </span>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-orange-50 border-2 border-orange-200 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={charData.heroImg}
                      alt={record.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-stone-800">{record.name}</h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {record.birthMonth}月{record.day || record.birthDay}日 · {record.constellation} ·{' '}
                      {record.gender === 'male' ? '男孩' : '女孩'}
                    </p>
                    <span
                      className={`text-[10px] font-black inline-block mt-1 px-2 py-0.5 rounded border ${elemData.bgColor} ${elemData.textColor} ${elemData.borderColor}`}
                    >
                      {elemData.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* 动作区 */}
              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (records.length <= 1) {
                      alert('至少保留一份孩子档案。');
                      return;
                    }
                    if (confirm(`确定要移除 ${record.name} 的档案吗？`)) {
                      onDeleteRecord(record.id);
                    }
                  }}
                  className="text-stone-400 hover:text-red-500 text-xs flex items-center gap-1 p-1"
                  title="删除档案"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="text-[11px]">删除</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectRecord(record);
                    onGoToGuide();
                  }}
                  className="btn-press px-3.5 py-1.5 rounded-xl bg-[#FF6B35] text-white text-xs font-bold shadow-xs flex items-center gap-1 cursor-pointer hover:bg-orange-600"
                >
                  <span>沟通建议</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 开发/调试状态快捷切换（便于验证测试A~E所有用例） */}
      {onDebugResetState && (
        <div className="px-5 mt-6 mb-4">
          <div className="p-3 bg-stone-100/80 rounded-2xl border border-stone-200 text-stone-600">
            <button
              onClick={() => setShowDebug(!showDebug)}
              className="w-full flex items-center justify-between text-xs font-bold text-stone-600 cursor-pointer"
            >
              <span>🧪 状态调试工具（快速测试验证 A~E）</span>
              {showDebug ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showDebug && (
              <div className="mt-2.5 pt-2 border-t border-stone-200/80 space-y-1.5">
                <p className="text-[10px] text-stone-400">点击下方快捷按钮可一键切换用户状态：</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  <button
                    onClick={() => onDebugResetState('new_user')}
                    className="p-1.5 bg-white border border-stone-200 rounded-lg hover:border-orange-300 text-left"
                  >
                    <div className="font-bold text-stone-800">测试A: 新用户</div>
                    <div className="text-[10px] text-stone-400">剩余: 1次, 未分享, 未付费</div>
                  </button>
                  <button
                    onClick={() => onDebugResetState('used_first')}
                    className="p-1.5 bg-white border border-stone-200 rounded-lg hover:border-orange-300 text-left"
                  >
                    <div className="font-bold text-stone-800">完成第1次测试</div>
                    <div className="text-[10px] text-stone-400">剩余: 0次, 未分享, 未付费</div>
                  </button>
                  <button
                    onClick={() => onDebugResetState('shared_reward')}
                    className="p-1.5 bg-white border border-stone-200 rounded-lg hover:border-orange-300 text-left"
                  >
                    <div className="font-bold text-stone-800">测试B: 获分享奖励</div>
                    <div className="text-[10px] text-stone-400">剩余: 1次, 已分享, 未付费</div>
                  </button>
                  <button
                    onClick={() => onDebugResetState('exhausted')}
                    className="p-1.5 bg-white border border-stone-200 rounded-lg hover:border-orange-300 text-left"
                  >
                    <div className="font-bold text-stone-800">测试D: 次数用完</div>
                    <div className="text-[10px] text-stone-400">剩余: 0次, 已分享, 未付费</div>
                  </button>
                </div>
                <button
                  onClick={() => onDebugResetState('paid')}
                  className="w-full mt-1 p-1.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 font-bold text-[11px] text-center"
                >
                  测试E: 已购买用户 (paidAccess = true, 无限次)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
