import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RADA_MESSAGES = [
  "Привет! Я Рада — твой навигатор в мире прямых контактов. Как мне к тебе обращаться?",
  "Я здесь, чтобы помочь тебе найти нужные связи без посредников. Расскажи, что ищешь?",
  "Я — голос нейросети, которая учится у таких, как ты. Поделишься своими интересами?"
];

export const NeuralChat: React.FC = () => {
  const [messages, setMessages] = useState<{text: string, isAi: boolean}[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Стартовое приветствие от Рады
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ text: RADA_MESSAGES[0], isAi: true }]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Добавляем сообщение пользователя
    const newMessages = [...messages, { text: inputValue, isAi: false }];
    setMessages(newMessages);
    setInputValue('');

    // Имитация ответа Рады (в будущем здесь будет запрос к API)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Принято! Мои алгоритмы уже ищут прямые контакты в этой сфере. Хочешь получить доступ к виртуальному офису на год бесплатно, чтобы сохранить результаты?", 
        isAi: true 
      }]);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#06060a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl text-[#c9a84c] mb-4 italic">РАДА • AI ЭКСПЕРТ</h2>
          <p className="text-gray-500 font-sans uppercase tracking-[0.3em] text-xs">
            Автоматизированный коммуникатор экосистемы
          </p>
        </div>

        <div className="bg-[#0a0a0f] border border-white/5 rounded-2xl h-[500px] flex flex-col shadow-2xl relative z-10">
          {/* Окно сообщений */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.isAi ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.isAi ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl font-sans text-sm ${
                    msg.isAi 
                      ? 'bg-white/5 text-[#f0eee8] border border-white/10' 
                      : 'bg-[#c9a84c] text-black font-medium'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Поле ввода */}
          <div className="p-4 border-t border-white/5 flex gap-4">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Спросите Раду о возможностях системы..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-[#c9a84c] hover:bg-[#b39640] text-black px-6 py-3 rounded-xl transition-all active:scale-95"
            >
              <span className="font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Декоративный фон для блока */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
