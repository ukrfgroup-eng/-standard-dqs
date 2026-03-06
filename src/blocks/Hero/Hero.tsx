import React from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#06060a]">
      {/* 3D Фон */}
      <Scene3D />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Надзаголовок */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] uppercase tracking-[0.4em] text-xs font-bold">
              Matrix Core · Эволюция МСБ
            </span>
          </motion.div>

          {/* Главный заголовок */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-['Cormorant Garamond'] text-6xl md:text-9xl font-bold leading-none mb-8 text-[#f0eee8]"
          >
            ВАША ПЛАТФОРМА — <br />
            <span className="text-[#c9a84c] italic">ОДНО ОКНО</span>
          </motion.h1>

          {/* Описание */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed"
          >
            Новые партнеры, клиенты и поставщики без посредников. 
            Ваш автономный Онлайн-Офис в единой интеллектуальной экосистеме.
          </motion.p>

          {/* Кнопки действия */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <button className="px-10 py-4 bg-[#c9a84c] text-black font-bold uppercase tracking-widest hover:bg-[#f2d060] transition-all shadow-[0_0_30px_rgba(201,168,76,0.3)]">
              Начать работу
            </button>
            <button className="px-10 py-4 border border-[#c9a84c]/50 text-[#c9a84c] font-bold uppercase tracking-widest hover:bg-[#c9a84c]/10 transition-all">
              Узнать больше
            </button>
          </motion.div>
        </div>
      </div>

      {/* Инфо-полоса внизу */}
      <div className="absolute bottom-0 w-full py-6 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
          <span>Цени своё время</span>
          <div className="flex gap-8">
            <span className="text-[#c9a84c]">● 1. Просто</span>
            <span className="text-[#c9a84c]">● 2. Удобно</span>
            <span className="text-[#c9a84c]">● 3. Ваш Онлайн-Офис</span>
          </div>
        </div>
      </div>
    </section>
  );
};
