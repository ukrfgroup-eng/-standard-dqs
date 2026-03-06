import React from 'react';
import { motion } from 'framer-motion';

const PLATFORMS = [
  { name: "СЕТЬ-ЗАКУПОК.РФ", category: "B2B Торговля", icon: "📦" },
  { name: "ОНЛАЙН-ОФИС.РФ", category: "Управление", icon: "🏢" },
  { name: "ДЕЛАЮ-САМ.РФ", category: "Производство", icon: "🛠️" },
  { name: "ВАКАНСИЯ-ОНЛАЙН.РФ", category: "Кадры", icon: "👤" }
];

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-5xl text-[#c9a84c] mb-4 text-center italic">ВИТРИНА ЭКОСИСТЕМЫ</h2>
          <div className="w-24 h-px bg-[#c9a84c] mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLATFORMS.map((platform, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative overflow-hidden"
            >
              <div className="text-4xl mb-6">{platform.icon}</div>
              <h3 className="text-2xl font-serif text-[#c9a84c] mb-2">{platform.name}</h3>
              <p className="text-gray-500 font-sans tracking-widest text-xs uppercase">{platform.category}</p>
              
              {/* Декоративный элемент в углу */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-t border-r border-[#c9a84c]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
