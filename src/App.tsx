/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { PageView, ChildRecord, ElementType, GenderType, UserState } from './types';
import {
  getOrCreateUserId,
  fetchUserState,
  canStartTest,
  consumeTestQuota,
  claimShareReward,
  activateShareDiscount,
  mockCheckoutUnlock,
  debugResetUserState,
} from './services/userService';
import { HeaderBar } from './components/HeaderBar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { BirthdayView } from './components/BirthdayView';
import { ResultView } from './components/ResultView';
import { GuideView } from './components/GuideView';
import { ScenesView } from './components/ScenesView';
import { SceneDetailView } from './components/SceneDetailView';
import { ProfileView } from './components/ProfileView';
import { ElementListView } from './components/ElementListView';
import { ShareModal } from './components/ShareModal';
import { PaywallModal } from './components/PaywallModal';

const STORAGE_KEY_RECORDS = 'children_elements_records_v1';
const STORAGE_KEY_ACTIVE_ID = 'children_elements_active_id_v1';

const DEFAULT_CHILD: ChildRecord = {
  id: 'default-1',
  name: '小宝',
  gender: 'male',
  birthYear: 2020,
  birthMonth: 8,
  birthDay: 8,
  constellation: '狮子座',
  element: 'fire',
  createdAt: Date.now(),
};

export default function App() {
  // 页面导航路由与历史
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [pageHistory, setPageHistory] = useState<PageView[]>(['home']);
  const mainContainerRef = useRef<HTMLElement>(null);

  // 用户权限状态：初始默认1次免费测试
  const [userState, setUserState] = useState<UserState>(() => ({
    userId: getOrCreateUserId(),
    freeTestRemaining: 1,
    shareRewardUsed: false,
    paidAccess: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }));

  // 付费拦截弹窗和分享弹窗控制
  const [isPaywallOpen, setIsPaywallOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  // 档案数据初始化
  const [records, setRecords] = useState<ChildRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECORDS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load child records:', e);
    }
    return [DEFAULT_CHILD];
  });

  const [activeChildId, setActiveChildId] = useState<string>(() => {
    try {
      const savedId = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
      if (savedId) return savedId;
    } catch (e) {
      console.error('Failed to load active child id:', e);
    }
    return 'default-1';
  });

  // 获取当前正在浏览的孩子
  const activeChild = records.find((r) => r.id === activeChildId) || records[0] || DEFAULT_CHILD;

  // 临时视图覆盖状态
  const [viewElement, setViewElement] = useState<ElementType>(activeChild.element);
  const [viewGender, setViewGender] = useState<GenderType>(activeChild.gender);
  const [selectedSceneId, setSelectedSceneId] = useState<string>('wakeup');

  // 初始化加载用户最新服务端/本地权限状态
  useEffect(() => {
    fetchUserState().then((st) => {
      if (st) setUserState(st);
    });
  }, []);

  // 当 activeChild 改变时，同步默认 viewElement 和 viewGender
  useEffect(() => {
    setViewElement(activeChild.element);
    setViewGender(activeChild.gender);
  }, [activeChild.id, activeChild.element, activeChild.gender]);

  // 同步保存档案到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(records));
      localStorage.setItem(STORAGE_KEY_ACTIVE_ID, activeChildId);
    } catch (e) {
      console.error('Failed to persist child records:', e);
    }
  }, [records, activeChildId]);

  // 页面跳转函数
  const goPage = (page: PageView) => {
    setCurrentPage(page);
    setPageHistory((prev) => [...prev, page]);
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTop = 0;
    }
  };

  // 统一入口权限检查：当用户点击开始测算或添加孩子时触发
  const handleStartTestAttempt = () => {
    const access = canStartTest(userState);
    if (!access.allowed) {
      // 次数已耗尽且未付费，拦截并唤起付费解锁
      setIsPaywallOpen(true);
    } else {
      goPage('birthday');
    }
  };

  // 返回上一页
  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHist = [...pageHistory];
      newHist.pop(); // remove current
      const prevPage = newHist[newHist.length - 1];
      setPageHistory(newHist);
      setCurrentPage(prevPage);
    } else {
      goPage('home');
    }
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTop = 0;
    }
  };

  // 提交生日并生成新报告（核心消费额度逻辑）
  const handleTestSubmit = async (data: {
    name: string;
    gender: GenderType;
    year: number;
    month: number;
    day: number;
    element: ElementType;
    constellation: string;
  }) => {
    // 1. 统一权限预检
    const check = canStartTest(userState);
    if (!check.allowed) {
      setIsPaywallOpen(true);
      return;
    }

    // 2. 扣减额度（真正开始测算时消耗1次，并携带幂等 testId）
    const testId = `test_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const consumeRes = await consumeTestQuota(testId);

    if (!consumeRes.allowed) {
      setUserState(consumeRes.user);
      setIsPaywallOpen(true);
      return;
    }

    // 成功消费（或付费用户），更新用户状态
    setUserState(consumeRes.user);

    // 3. 生成并保存测试结果
    const newRecord: ChildRecord = {
      id: `child-${Date.now()}`,
      name: data.name,
      gender: data.gender,
      birthYear: data.year,
      birthMonth: data.month,
      birthDay: data.day,
      constellation: data.constellation,
      element: data.element,
      createdAt: Date.now(),
    };

    setRecords((prev) => [newRecord, ...prev.filter((r) => r.name !== data.name)]);
    setActiveChildId(newRecord.id);
    setViewElement(data.element);
    setViewGender(data.gender);
    goPage('result');
  };

  // 领取分享奖励
  const handleClaimShareReward = async () => {
    const res = await claimShareReward();
    if (res.user) {
      setUserState(res.user);
    }
    return { success: res.success, message: res.message };
  };

  // 模拟支付解锁无限次（支持 9.9 元原价 或 0.99 元分享特惠价）
  const handleMockPay = async (amount: number = 9.9) => {
    const res = await mockCheckoutUnlock(amount);
    if (res.success && res.user) {
      setUserState(res.user);
      return true;
    }
    return false;
  };

  // 标记激活分享立减特权
  const handleActivateShareDiscount = () => {
    const updated = activateShareDiscount();
    setUserState(updated);
  };

  // 调试重置状态
  const handleDebugResetState = async (
    preset: 'new_user' | 'used_first' | 'shared_reward' | 'exhausted' | 'paid'
  ) => {
    const updated = await debugResetUserState(preset);
    setUserState(updated);
  };

  // 切换性别
  const handleToggleGender = (gender: GenderType) => {
    setViewGender(gender);
    setRecords((prev) =>
      prev.map((r) => (r.id === activeChild.id ? { ...r, gender } : r))
    );
  };

  // 切换档案
  const handleSelectRecord = (record: ChildRecord) => {
    setActiveChildId(record.id);
    setViewElement(record.element);
    setViewGender(record.gender);
  };

  // 删除档案
  const handleDeleteRecord = (id: string) => {
    const filtered = records.filter((r) => r.id !== id);
    if (filtered.length > 0) {
      setRecords(filtered);
      setActiveChildId(filtered[0].id);
      setViewElement(filtered[0].element);
      setViewGender(filtered[0].gender);
    }
  };

  // 标题栏动态计算
  const getHeaderTitle = () => {
    switch (currentPage) {
      case 'home':
        return '';
      case 'birthday':
        return '输入信息 · 看看星象';
      case 'result':
        return '星象归属结果';
      case 'guide':
        return '亲子沟通宝典';
      case 'scenes':
        return '亲子沟通场景库';
      case 'scene-detail':
        return '场景详情分析';
      case 'profile':
        return '家庭孩子管理';
      case 'element_list':
        return '四象性格图鉴';
      default:
        return '';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-[#2C3437] antialiased sm:p-4 bg-[#F4F1EA]">
      {/* 手机应用主体视口容器 */}
      <div className="relative w-full max-w-[414px] h-[100dvh] max-h-[896px] bg-[#FAF8F5] sm:rounded-[44px] shadow-2xl overflow-hidden flex flex-col border-[5px] border-stone-800/15">
        {/* 顶部统一状态导航栏 */}
        <HeaderBar
          currentPage={currentPage}
          title={getHeaderTitle()}
          onBack={goBack}
          onHome={() => goPage('home')}
          onShare={() => setIsShareOpen(true)}
          showShare={currentPage === 'result' || currentPage === 'guide'}
        />

        {/* 页面主视口容器（滚动） */}
        <main
          ref={mainContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative"
          id="mainContainer"
        >
          {currentPage === 'home' && (
            <HomeView
              onStartTest={handleStartTestAttempt}
              onSelectElement={(elem, gender) => {
                setViewElement(elem);
                if (gender) setViewGender(gender);
                goPage('guide');
              }}
              paidAccess={userState.paidAccess}
              onOpenPaywall={() => setIsPaywallOpen(true)}
              activeChildElement={activeChild.element}
              activeChildGender={activeChild.gender}
            />
          )}

          {currentPage === 'birthday' && (
            <BirthdayView
              initialName={activeChild.name}
              initialGender={activeChild.gender}
              initialYear={activeChild.birthYear}
              initialMonth={activeChild.birthMonth}
              initialDay={activeChild.birthDay}
              userState={userState}
              onSubmit={handleTestSubmit}
            />
          )}

          {currentPage === 'result' && (
            <ResultView
              childName={activeChild.name}
              birthDateStr={`${activeChild.birthMonth}月${activeChild.birthDay}日`}
              constellation={activeChild.constellation}
              element={viewElement}
              gender={viewGender}
              shareRewardUsed={userState.shareRewardUsed}
              hasSharedDiscount={userState.hasSharedDiscountEligible}
              onToggleGender={handleToggleGender}
              onGoToGuide={() => goPage('guide')}
              onShare={() => setIsShareOpen(true)}
              onTriggerShareReward={() => setIsShareOpen(true)}
            />
          )}

          {currentPage === 'guide' && (
            <GuideView
              currentElement={viewElement}
              currentGender={viewGender}
              onSelectElement={(elem) => setViewElement(elem)}
              onGoToScenes={() => goPage('scenes')}
              paidAccess={userState.paidAccess}
              onOpenPaywall={() => setIsPaywallOpen(true)}
            />
          )}

          {currentPage === 'scenes' && (
            <ScenesView
              currentElement={viewElement}
              currentGender={viewGender}
              onSelectGender={(g) => setViewGender(g)}
              onSelectElement={(elem) => setViewElement(elem)}
              onOpenScene={(sceneId) => {
                setSelectedSceneId(sceneId);
                goPage('scene-detail');
              }}
              paidAccess={userState.paidAccess}
              onOpenPaywall={() => setIsPaywallOpen(true)}
              activeChildElement={activeChild.element}
              activeChildGender={activeChild.gender}
            />
          )}

          {currentPage === 'scene-detail' && (
            <SceneDetailView
              sceneId={selectedSceneId}
              currentElement={viewElement}
              currentGender={viewGender}
              onSelectElement={(elem) => setViewElement(elem)}
              onBackToScenes={() => goPage('scenes')}
              paidAccess={userState.paidAccess}
              onOpenPaywall={() => setIsPaywallOpen(true)}
              activeChildElement={activeChild.element}
              activeChildGender={activeChild.gender}
            />
          )}

          {currentPage === 'profile' && (
            <ProfileView
              records={records}
              activeRecordId={activeChildId}
              userState={userState}
              onSelectRecord={handleSelectRecord}
              onDeleteRecord={handleDeleteRecord}
              onAddNewChild={handleStartTestAttempt}
              onGoToGuide={() => goPage('guide')}
              onOpenPaywall={() => setIsPaywallOpen(true)}
              onDebugResetState={handleDebugResetState}
            />
          )}

          {currentPage === 'element_list' && (
            <ElementListView
              onSelectElement={(elem, gender) => {
                setViewElement(elem);
                if (gender) setViewGender(gender);
                goPage('guide');
              }}
              paidAccess={userState.paidAccess}
              onOpenPaywall={() => setIsPaywallOpen(true)}
              activeChildElement={activeChild.element}
              activeChildGender={activeChild.gender}
            />
          )}
        </main>

        {/* 底部 Tab 导航 */}
        <BottomNav
          currentPage={currentPage}
          onSelect={(page) => {
            if (page === 'birthday') {
              handleStartTestAttempt();
            } else {
              goPage(page);
            }
          }}
        />

        {/* 分享专属海报弹窗（支持分享领 +1 次免费测试 & 解锁 0.99 特惠） */}
        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          childName={activeChild.name}
          birthDateStr={`${activeChild.birthMonth}月${activeChild.birthDay}日`}
          constellation={activeChild.constellation}
          element={viewElement}
          gender={viewGender}
          shareRewardUsed={userState.shareRewardUsed}
          hasSharedDiscount={userState.hasSharedDiscountEligible}
          onClaimShareReward={handleClaimShareReward}
          onAfterShareTriggered={handleActivateShareDiscount}
        />

        {/* 付费解锁弹窗（9.9元原价 / 分享后 0.99 元特惠解锁） */}
        <PaywallModal
          isOpen={isPaywallOpen}
          onClose={() => setIsPaywallOpen(false)}
          onSuccess={() => {
            setIsPaywallOpen(false);
          }}
          hasSharedDiscount={userState.hasSharedDiscountEligible}
          onTriggerShareDiscount={() => {
            setIsPaywallOpen(false);
            setIsShareOpen(true);
          }}
          onMockPay={handleMockPay}
        />
      </div>
    </div>
  );
}
