export interface BlockProps {
  id: string;
  type: string;
  content: Record<string, any>;
  settings: {
    order: number;
    theme?: 'light' | 'dark';
    className?: string;
  };
}
