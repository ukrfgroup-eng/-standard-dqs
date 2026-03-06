import React from 'react';

const SERVICES = [
  { 
    id: "01", 
    title: "Цифровой консалтинг", 
    text: "Автоматизация бизнес-процессов на базе нейронных сетей и ИИ." 
  },
  { 
    id: "02", 
    title: "B2B Экосистемы", 
    text: "Создание закрытых торговых площадок и тендерных систем." 
  },
  { 
    id: "03", 
    title: "Аналитика данных", 
    text: "Глубокий анализ рынка МСБ и прогнозирование спроса." 
  },
  { 
    id: "04", 
    title: "HR-инструменты", 
    text: "Интеллектуальный подбор кадров и управление талантами." 
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl text-[#c9a84c] mb-6 italic">Услуги системы</h2>
            <p className="text-gray-400 font-sans leading-relaxed">
              Мы предоставляем комплексные инструменты для трансформации классического бизнеса в цифровую автономную структуру.
            </p>
          </div>
          <div className="text-6xl font-serif text-white/5 hidden md:block">SERVICES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-[#06060a] p-10 hover:bg-[#0a0a0f] transition-colors group">
              <span className="text-[#c9a84c] font-serif text-sm mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">
                / {service.id}
              </span>
              <h3 className="text-2xl font-serif text-[#f0eee8] mb-4">{service.title}</h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
