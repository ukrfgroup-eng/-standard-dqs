import React from 'react';
import { Header } from './blocks/Header';
import { Hero } from './blocks/Hero';

export default function App() {
  return (
    <main className="bg-[#06060a] min-h-screen text-[#f0eee8]">
      <Header />
      <Hero />
    </main>
  );
}
