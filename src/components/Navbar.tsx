import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, User, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Studio', href: '#studio' },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled
        ? 'bg-bg/60 backdrop-blur-xl py-4 border-b border-primary/5'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative text-[10px] uppercase tracking-[0.3em] font-semibold overflow-hidden"
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
              <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-accent">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Center: Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <h1 className={`text-xl md:text-3xl font-serif tracking-[0.4em] transition-all duration-700 ${isScrolled ? 'scale-90 opacity-80' : 'scale-100'
            }`}>
            VOGUE
          </h1>
        </motion.a>

        {/* Right: Icons */}
        <div className="flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-6"
          >
            <button
              onClick={toggleDarkMode}
              className="hover:text-accent transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={18} strokeWidth={1.2} /> : <Moon size={18} strokeWidth={1.2} />}
            </button>
            <button className="hover:text-accent transition-colors duration-300">
              <Search size={18} strokeWidth={1.2} />
            </button>
            <button className="hidden md:block hover:text-accent transition-colors duration-300">
              <User size={18} strokeWidth={1.2} />
            </button>
            <button className="relative group hover:text-accent transition-colors duration-300">
              <ShoppingBag size={18} strokeWidth={1.2} />
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </motion.div>

          <button
            className="md:hidden hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg z-[60] flex flex-col"
          >
            <div className="flex justify-between items-center p-8">
              <span className="text-xl font-serif tracking-widest">VOGUE</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/10"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-serif hover:text-accent transition-colors lowercase italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="p-12 flex justify-center space-x-8 opacity-40 text-xs uppercase tracking-widest">
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">TikTok</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
