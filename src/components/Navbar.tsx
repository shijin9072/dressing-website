import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, User, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-bg/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {['Collections', 'Studio', 'Shop', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className={`text-2xl md:text-3xl font-serif tracking-widest transition-all duration-500 ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}>
            VOGUE
          </h1>
        </a>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleDarkMode}
            className="hover:text-accent transition-colors"
          >
            {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button className="hover:text-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden md:block hover:text-accent transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="relative hover:text-accent transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button 
            className="md:hidden hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {['Collections', 'Studio', 'Shop', 'About'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif hover:italic transition-all"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
