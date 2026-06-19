import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage, then fallback to class list, then system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('color-scheme');
      if (stored) return stored;
      
      const hasClass = document.documentElement.classList.contains('light');
      if (hasClass) return 'light';
      
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('color-scheme', theme);
  }, [theme]);

  // Listen to system changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e) => {
      // Only adapt if user hasn't pinned a manual preference
      if (!localStorage.getItem('color-scheme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl glass hover:text-accent-primary hover:border-accent-primary transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md focus:outline-none"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle Theme"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-5 h-5 text-amber-400" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-5 h-5 text-indigo-600" />
        </motion.div>
      )}
    </motion.button>
  );
}
