import React from 'react';
import { Scene3D } from './Scene3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#06060a]">
      {/* 3D Фон */}
      <Scene3D />
      
      {/* Текст поверх 3D */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-7xl md:text-9xl text-[#f0eee8] mb-6">
          ВАША ПЛАТФОРМА — <br />
          <span className="text-[#c9a84c] italic">ОДНО ОКНО</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-xl mx-auto font-sans">
          Интеллектуальная экосистема для вашего бизнеса.
        </p>
      </div>
    </section>
  );
};
