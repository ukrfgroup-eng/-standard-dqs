import React from 'react';

const PARTNERS = [
  "РОСТЕХ", "СБЕР", "ГАЗПРОМ", "РОСАТОМ", "ВТБ", "ЯНДЕКС"
];

export const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-[#06060a] border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 text-[10px] tracking-[0.3em] uppercase mb-8">
          Нам доверяют лидеры рынка
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {PARTNERS.map((partner, i) => (
            <span 
              key={i} 
              className="text-[#f0eee8] font-serif text-xl md:text-2xl tracking-tighter"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
