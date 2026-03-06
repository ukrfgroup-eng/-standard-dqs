import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen">
      {/* Шапка (заглушка на время настройки) */}
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center border-b border-white/10 bg-[#06060a]/80 backdrop-blur-md">
        <div className="text-[#c9a84c] font-bold text-xl font-serif">MATRIX CORE</div>
        <div className="text-sm font-sans tracking-widest uppercase">Система МСБ</div>
      </nav>

      {/* Hero блок (центр композиции) */}
      <section className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="font-serif text-7xl md:text-9xl mb-6">
            ВАША ПЛАТФОРМА — <br />
            <span className="text-[#c9a84c] italic">ОДНО ОКНО</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto font-sans">
            Интеллектуальная экосистема для вашего бизнеса.
          </p>
        </div>
      </section>
    </main>
  );
}
