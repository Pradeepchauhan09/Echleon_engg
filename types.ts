export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface FeatureItem {
  title: string;
  icon: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type UserRole = 'ADMIN' | 'USER';