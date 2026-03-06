export interface MatrixContent {
  title?: string;
  subtitle?: string;
  items?: any[];
  url?: string;
  image?: string;
  [key: string]: any;
}

export interface MatrixSettings {
  order: number;
  animation?: '3d-cube' | 'fade-up' | 'slide-in' | 'rotate-y';
  theme?: 'dark' | 'light' | 'neon';
  className?: string;
}

export interface MatrixBlock {
  id: string;
  type: string;
  content: MatrixContent;
  settings: MatrixSettings;
}

export interface PlatformConfig {
  platform_code: string;
  blocks: MatrixBlock[];
}
