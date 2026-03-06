import React from 'react';
import { Header } from './blocks/Header';

export default function App() {
  return (
    <main className="bg-[#06060a] min-h-screen text-[#f0eee8]">
      <Header />
      <section className="pt-32 px-6">
        <h1 className="font-serif text-6xl text-[#c9a84c]">Главная Платформа</h1>
      </section>
    </main>
  );
}
