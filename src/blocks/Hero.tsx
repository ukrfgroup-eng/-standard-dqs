import React from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#06060a]">
      <Scene3D />
      
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-7xl md:text-9xl text-[#f0eee8] mb-6"
        >
          ВАША ПЛАТФОРМА — <br />
          <span className="text-[#c9a84c] italic">ОДНО ОКНО</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-xl max-w-xl mx-auto font-sans"
        >
          Интеллектуальная экосистема для вашего бизнеса. 
          Новые партнеры, клиенты и поставщики без посредников.
        </motion.p>
      </div>
    </section>
  );
};
