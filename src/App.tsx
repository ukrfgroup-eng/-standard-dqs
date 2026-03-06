import React, { useState, useEffect } from 'react';
import { BlockOrchestrator } from './blocks/BlockOrchestrator';
import { MatrixBlock } from './types/matrix';

// Имитация ответа от Блока C (Центральный Мозг)
const MOCK_CONFIG: MatrixBlock[] = [
  {
    id: 'header-1',
    type: 'header',
    content: { title: "MATRIX CORE" },
    settings: { order: 0, className: "sticky top-0 z-50" }
  },
  {
    id: 'hero-1',
    type: 'hero',
    content: { 
      title: "Экосистема Будущего", 
      subtitle: "Масштабируемые ИИ-платформы нового поколения",
      button_text: "Присоединиться",
      background_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    settings: { order: 1, animation: 'fade-up' }
  },
  {
    id: 'stats-1',
    type: 'stats',
    content: {
      items: [
        { label: "Платформ", value: "15+" },
        { label: "Пользователей", value: "100k+" },
        { label: "Транзакций", value: "1M+" }
      ]
    },
    settings: { order: 2, className: "bg-blue-600/5 py-12" }
  },
  {
    id: 'ad-1',
    type: 'ad_showcase',
    content: { 
      title: "Актуальные предложения",
      limit: 4 
    },
    settings: { order: 3, animation: 'slide-in' }
  }
];

function App() {
  const [blocks, setBlocks] = useState<MatrixBlock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитируем задержку сети при обращении к MATRIX CORE
    const timer = setTimeout(() => {
      setBlocks(MOCK_CONFIG);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/30">
      <BlockOrchestrator blocks={blocks} loading={loading} />
      
      {/* Кнопка открытия Чат-бота Рада (глобальный элемент) */}
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform z-50"
        onClick={() => alert("Чат-бот Рада активирован")}
      >
        <span className="text-2xl">🧠</span>
      </button>
    </main>
  );
}

export default App;
