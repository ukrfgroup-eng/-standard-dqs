// Файл src/App.tsx
import { Header } from './blocks/Header/Header'; // <-- Указали путь к файлу внутри папки

export default function App() {
  return (
    <main className="bg-[#06060a] min-h-screen text-[#f0eee8]">
      <Header />
    </main>
  );
}
