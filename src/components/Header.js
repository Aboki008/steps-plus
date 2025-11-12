// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-dark-900/95 backdrop-blur-lg border-b border-dark-700'
            : 'bg-white/95 backdrop-blur-lg border-b border-gray-200'
          : darkMode
            ? 'bg-dark-900/40 backdrop-blur-sm'
            : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 min-w-0"
          >
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 flex-shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent truncate">
              StepsPlus
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-sm font-medium hover:text-primary-400 transition-colors whitespace-nowrap"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Spacer for desktop */}
          <div className="hidden md:block flex-1" />

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-dark-700 text-yellow-400 hover:bg-dark-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Button - Always visible on mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isMobileMenuOpen
                  ? darkMode
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-500 text-white'
                  : darkMode
                    ? 'bg-dark-700 text-primary-300 hover:bg-dark-600 hover:text-primary-200'
                    : 'bg-gray-200 text-primary-600 hover:bg-gray-300'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mt-4 pb-4 space-y-2 overflow-hidden rounded-lg ${
                darkMode ? 'bg-dark-800/50' : 'bg-gray-100/50'
              }`}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    darkMode
                      ? 'text-gray-300 hover:text-primary-400 hover:bg-primary-500/10'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-500/10'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;