import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D'; // Логика Three.js

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#06060a]">
      {/* 3D Фон — Рендерится через Three.js */}
      <Scene3D />
      
      {/* Виньетка и сканирующая линия для атмосферы */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-[#06060a]/95 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[1px] z-2 bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent animate-scan" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-8 md:px-20 grid lg:grid-cols-[6fr_5fr] items-center w-full">
        {/* Контентная часть (Левая) */}
        <div className="flex flex-col gap-8 py-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] font-bold">1. Просто · 2. Удобно · 3. Свой Онлайн-Офис</span>
          </motion.div>

          <h1 className="font-['Cormorant Garamond'] text-5xl md:text-8xl font-bold leading-tight">
            <span className="block text-xl md:text-2xl italic font-light text-gray-400 mb-4">Ваша платформа —</span>
            <span className="text-[#c9a84c] inline-block">ОДНО ОКНО</span>
          </h1>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#c9a84c] text-black px-10 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Узнать Больше
            </button>
            <button className="border border-[#c9a84c]/30 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#c9a84c]/5 transition-colors">
              Акция: Год в подарок
            </button>
          </div>

          {/* Живой счетчик */}
          <div className="flex gap-10 pt-10 border-t border-white/10">
            <div>
              <span className="block text-3xl font-['Cormorant Garamond'] text-[#c9a84c]">4 812</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Онлайн сейчас</span>
            </div>
            <div>
              <span className="block text-3xl font-['Cormorant Garamond'] text-[#c9a84c]">14</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Платформ МСБ</span>
            </div>
          </div>
        </div>

        {/* Правая часть — Орбитальные карточки (Floating Cards) */}
        <div className="hidden lg:flex relative h-full items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#8a6f2e] to-[#c9a84c] rounded-full flex items-center justify-center text-4xl shadow-[0_0_60px_rgba(201,168,76,0.4)] animate-bounce">
            🌐
          </div>
          {/* Здесь могут быть анимированные карточки услуг */}
        </div>
      </div>
    </section>
  );
};
