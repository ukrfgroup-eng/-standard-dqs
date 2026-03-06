import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PLATFORMS = [
  "Сеть-Закупок.РФ", "Онлайн-Офис.РФ", "Делаю-Сам.РФ", 
  "Вакансия-Онлайн.РФ", "Учеба-Образование.РФ", "Мое-здоровье.РФ"
];

export const Header: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Карусель доменов (3D-эффект будет достигаться через motion)
  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % PLATFORMS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[100] border-b border-white/10 bg-[#06060a]/90 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Лого + Карусель */}
        <div className="flex items-center gap-6">
          <div className="text-[#c9a84c] font-bold text-2xl font-serif">M</div>
          <div className="h-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={PLATFORMS[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="block text-[#c9a84c] font-serif uppercase tracking-widest cursor-pointer"
              >
                {PLATFORMS[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Навигация */}
        <div className="flex gap-8 text-sm font-sans uppercase tracking-widest text-gray-400">
          <button className="hover:text-[#c9a84c] transition-colors">Вход</button>
          <button className="hover:text-[#c9a84c] transition-colors">Поиск</button>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
            className="text-[#c9a84c]"
          >
            Рада Чат
          </button>
        </div>
      </div>
    </header>
  );
};
