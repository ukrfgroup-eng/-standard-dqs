import React from 'react';
import { motion } from 'framer-motion';

const STATS_DATA = [
  { label: "Активных компаний", value: "12,400+" },
  { label: "Транзакций в сутки", value: "450M" },
  { label: "Регионов охвата", value: "89" },
  { label: "Скорость обработки", value: "0.02s" }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#06060a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS_DATA.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-[#c9a84c] text-4xl md:text-5xl font-serif mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.2em] font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
