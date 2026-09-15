export type ElementType = 'fire' | 'wind' | 'water' | 'earth';
export type GenderType = 'male' | 'female';

export interface SceneData {
  id: string;
  title: string;
  img: string;
  why: string;
  good: string;
  bad: string;
}

export interface CharacterProfile {
  name: string;
  charName: string;
  heroImg: string;
  keywords: string[];
  shortDesc: string;
  whyText: string;
  sayYes1: string;
  sayYes2: string;
  sayNo1: string;
  sayNo2: string;
  sayReplace: string;
  scenes: SceneData[];
}

export interface ElementData {
  title: string;
  element: ElementType;
  symbol: string;
  tagline: string;
  constellations: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  male: CharacterProfile;
  female: CharacterProfile;
}

export interface ChildRecord {
  id: string;
  name: string;
  gender: GenderType;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  constellation: string;
  element: ElementType;
  createdAt: number;
}

export type PageView =
  | 'home'
  | 'birthday'
  | 'result'
  | 'guide'
  | 'scenes'
  | 'scene-detail'
  | 'profile'
  | 'element_list';

export interface UserState {
  userId: string;
  freeTestRemaining: number;
  shareRewardUsed: boolean;
  hasSharedDiscountEligible?: boolean; // 是否已触发分享获得 0.99 特惠资格
  paidAccess: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface TestAccessResult {
  allowed: boolean;
  reason: 'free' | 'paid' | 'quota_exhausted';
  freeRemaining: number;
  paidAccess: boolean;
  shareRewardUsed: boolean;
  hasSharedDiscountEligible?: boolean;
}

export interface ClaimShareResult {
  success: boolean;
  message: string;
  user: UserState;
}

export interface CheckoutResult {
  success: boolean;
  message: string;
  user: UserState;
}
