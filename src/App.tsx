import React from 'react';
import { Header } from './blocks/Header/Header';
import { Hero } from './blocks/Hero/Hero';
import { Advantages } from './blocks/Advantages/Advantages';
import { Showcase } from './blocks/Showcase/Showcase';
import { Stats } from './blocks/Stats/Stats';

export default function App() {
  return (
    <main className="bg-[#06060a] min-h-screen text-[#f0eee8]">
      <Header />
      <Hero />
      <Stats />
      <Advantages />
      <Showcase />
    </main>
  );
}
