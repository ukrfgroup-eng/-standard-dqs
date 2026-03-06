import React from 'react';

const FEATURES = [
  { title: "Автономность", desc: "Система работает без участия человека 24/7." },
  { title: "Масштабируемость", desc: "Легко подключает новые бизнес-процессы." },
  { title: "Безопасность", desc: "Шифрование данных по военным стандартам." },
  { title: "Интеграция", desc: "Связывает все API в единую экосистему." }
];

export const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-[#06060a]">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl text-[#c9a84c] mb-16 text-center">
          ПРЕИМУЩЕСТВА СИСТЕМЫ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-4 font-sans">{item.title}</h3>
              <p className="text-gray-400 font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
