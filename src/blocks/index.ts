import { lazy } from 'react';

// Ленивая загрузка для оптимизации (каждый блок подгружается только когда нужен)
export const blockComponents: Record<string, any> = {
  header: lazy(() => import('./Header')),
  hero: lazy(() => import('./Hero')),
  stats: lazy(() => import('./Stats')),
  ad_showcase: lazy(() => import('./AdShowcase')),
  cube_info: lazy(() => import('./CubeInfo')),
  footer: lazy(() => import('./Footer')),
  // Сюда будут добавляться остальные из 20 стандартных блоков
};

export type BlockType = keyof typeof blockComponents;
