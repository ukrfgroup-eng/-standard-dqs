import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mic, ChevronDown, User, Menu, X, Globe, MessageSquare } from 'lucide-react';

// --- Данные экосистемы ---
const PLATFORMS = [
  "Сеть-Закупок.РФ", "Сеть_Поставок.РФ", "Сеть-Услуг.РФ", "Сеть-Инет.РФ",
  "Онлайн-Офис.РФ", "Купи-Продай-Онлайн.РФ", "Маркет-Сети.РФ", "Делаю-Сам.РФ",
  "Вакансия-Онлайн.РФ", "Мой-Партнер.РФ", "Мой-Стандарт.РФ", "Учеба-Образование.РФ",
  "Мое-здоровье.РФ", "Я-Производитель.РФ", "Стандарт-ЦСК.РФ"
];

const GOLD = "#c9a84c";

// --- Вспомогательный хук для клика вне элемента ---
function useOnClickOutside(ref: any, handler: () => void) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

export const Header: React.FC<{ currentPlatform?: string }> = ({ currentPlatform }) => {
  const [index, setIndex] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const loginRef = useRef(null);
  const menuRef = useRef(null);

  useOnClickOutside(loginRef, () => setIsLoginOpen(false));
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  // Автопрокрутка карусели доменов
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PLATFORMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[100] bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 h-20 px-4 md:px-8 flex items-center justify-between text-[#DM Sans]">
      
      {/* 2.1. ЛЕВАЯ ЧАСТЬ: 3D КАРУСЕЛЬ */}
      <div className="flex items-center gap-6 min-w-[200px]">
        <div className="w-10 h-10 border-2 border-[#c9a84c] flex items-center justify-center font-bold text-[#c9a84c] rounded-lg shadow-[0_0_15px_rgba(201,168,76,0.3)]">
          M
        </div>
        <div className="hidden lg:block perspective-1000 h-8">
          <AnimatePresence mode="wait">
            <motion.a
              key={PLATFORMS[index]}
              href={`https://${PLATFORMS[index]}`}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-lg font-['Cormorant Garamond'] font-bold uppercase tracking-wider block cursor-pointer hover:text-[#c9a84c] transition-colors`}
              style={{ color: PLATFORMS[index] === currentPlatform ? GOLD : 'white' }}
            >
              {PLATFORMS[index]}
            </motion.a>
          </AnimatePresence>
        </div>
      </div>

      {/* 2.2. ПРАВАЯ ЧАСТЬ: ПОИСК И КНОПКИ */}
      <div className="hidden lg:flex items-center gap-4">
        
        {/* Поисковая строка */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 group focus-within:border-[#c9a84c]/50 transition-all">
          <Search size={18} className="text-gray-400 group-focus-within:text-[#c9a84c]" />
          <input 
            type="text"
            placeholder="Поиск по экосистеме..."
            className="bg-transparent border-none outline-none text-sm px-3 w-48 xl:w-64 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => alert("Голосовой поиск в разработке")} title="Голосовой поиск">
            <Mic size={16} className="text-gray-500 hover:text-[#c9a84c]" />
          </button>
        </div>

        {/* Кнопка Вход */}
        <div className="relative" ref={loginRef}>
          <button 
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b09341] text-black px-5 py-2 rounded-md font-bold text-sm transition-all shadow-lg"
          >
            <User size={16} /> ВХОД <ChevronDown size={14} className={isLoginOpen ? 'rotate-180 transition-transform' : ''} />
          </button>
          
          <AnimatePresence>
            {isLoginOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-3 w-56 bg-[#16161a] border border-white/10 rounded-lg shadow-2xl p-2"
              >
                <a href="https://lk.цск.рф" className="block p-3 hover:bg-white/5 rounded text-sm text-gray-300">Онлайн-Офис</a>
                <button onClick={() => alert("СМС Вход")} className="w-full text-left p-3 hover:bg-white/5 rounded text-sm text-gray-300">Вход по СМС</button>
                <button onClick={() => alert("Госуслуги")} className="w-full text-left p-3 hover:bg-white/5 rounded text-sm text-gray-300">Вход Госуслуги</button>
                <a href="#" className="block p-3 border-t border-white/5 hover:bg-white/5 rounded text-sm text-[#c9a84c]">Цифровой Каталог по ИНН</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Кнопка Меню поиска */}
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-2 rounded-md font-bold text-sm transition-all"
          >
            МЕНЮ ПОИСКА <ChevronDown size={14} />
          </button>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 mt-3 w-72 bg-[#16161a] border border-white/10 rounded-lg shadow-2xl p-4 grid grid-cols-2 gap-2"
              >
                <MenuOption icon={<Globe size={14}/>} label="Для Бизнеса" />
                <MenuOption icon={<Globe size={14}/>} label="Работа" />
                <MenuOption icon={<Globe size={14}/>} label="Объявления" />
                <MenuOption icon={<MessageSquare size={14} color={GOLD}/>} label="Рада Чат" action={() => window.dispatchEvent(new CustomEvent('open-chat'))} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* МОБИЛЬНАЯ КНОПКА (БУРГЕР) */}
      <div className="lg:hidden flex items-center gap-4">
        <button onClick={() => setIsMobileMenu(!isMobileMenu)} className="text-[#c9a84c]">
          {isMobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 2.3. МОБИЛЬНОЕ МЕНЮ */}
      <AnimatePresence>
        {isMobileMenu && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed inset-0 top-20 bg-[#0a0a0c] z-[90] p-6 flex flex-col gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-500 text-xs uppercase tracking-widest font-bold">Аккаунты</h3>
              <button className="text-left text-xl font-bold">Войти в Офис</button>
              <button className="text-left text-xl font-bold">Вход по СМС</button>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-500 text-xs uppercase tracking-widest font-bold">Разделы</h3>
              <button className="text-left text-xl font-bold text-[#c9a84c]">Поиск работы</button>
              <button className="text-left text-xl font-bold">Для Бизнеса</button>
              <button className="text-left text-xl font-bold text-blue-400">Чат Рада</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Вспомогательный компонент для пунктов меню
const MenuOption = ({ icon, label, action }: { icon: any, label: string, action?: () => void }) => (
  <button 
    onClick={action}
    className="flex flex-col items-center justify-center p-3 hover:bg-white/5 border border-transparent hover:border-white/10 rounded-lg transition-all gap-2 text-[10px] uppercase font-bold text-gray-400 hover:text-white"
  >
    <div className="text-[#c9a84c]">{icon}</div>
    {label}
  </button>
);
