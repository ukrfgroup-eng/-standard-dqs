import React from 'react';
import { BlockProps } from '../types/block';

export const BaseBlock: React.FC<BlockProps> = ({ content, settings }) => {
  return (
    <section className={`py-20 ${settings.className || ''}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#c9a84c] mb-8">{content.title}</h2>
        <div className="prose prose-invert">{content.description}</div>
      </div>
    </section>
  );
};
