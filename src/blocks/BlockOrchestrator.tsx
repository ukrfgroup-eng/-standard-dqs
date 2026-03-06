import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { blockComponents } from './index';

interface BlockProps {
  id: string;
  type: string;
  content: any;
  settings: {
    order: number;
    animation?: string;
    className?: string;
  };
}

interface OrchestratorProps {
  blocks: BlockProps[];
  loading: boolean;
}

export const BlockOrchestrator: React.FC<OrchestratorProps> = ({ blocks, loading }) => {
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0a0c]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="matrix-canvas flex flex-col w-full">
      {blocks
        .sort((a, b) => a.settings.order - b.settings.order)
        .map((block) => {
          const Component = blockComponents[block.type];

          if (!Component) {
            console.warn(`Block type "${block.type}" is not registered.`);
            return null;
          }

          return (
            <Suspense key={block.id} fallback={<div className="h-20" />}>
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={block.settings.className}
              >
                <Component content={block.content} settings={block.settings} />
              </motion.section>
            </Suspense>
          );
        })}
    </div>
  );
};
