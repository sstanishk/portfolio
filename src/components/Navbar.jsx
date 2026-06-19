import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass py-3 shadow-lg border-b border-glass-border' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group font-display font-extrabold text-2xl tracking-tight text-text-primary">
              <span className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                <Terminal className="w-5 h-5" />
              </span>
              <span>
                Tanishk
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  whileHover={{ y: -1.5, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-300 font-sans"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="border-l border-border-color pl-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 focus:outline-none transition-all duration-300 cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass border-b border-glass-border overflow-hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  whileTap={{ scale: 0.97 }}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
