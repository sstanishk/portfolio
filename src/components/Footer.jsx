import React from 'react';
import { Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-border-color bg-bg-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo & description */}
          <div className="space-y-3">
            <a 
              href="#" 
              onClick={handleScrollTop}
              className="flex items-center gap-2 group font-display font-extrabold text-xl tracking-tight justify-center md:justify-start"
            >
              <span className="p-1.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-text-primary">
                Tanishk
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto md:mx-0">
              Information Technology Student focusing on cloud computing architecture and robust web systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-text-secondary hover:text-accent-primary transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="text-text-secondary hover:text-accent-primary transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="text-text-secondary hover:text-accent-primary transition-colors">Projects</a>
            <a href="#certifications" onClick={(e) => handleLinkClick(e, '#certifications')} className="text-text-secondary hover:text-accent-primary transition-colors">Certifications</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-text-secondary hover:text-accent-primary transition-colors">Contact</a>
          </div>

          {/* Social icons & Copy */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-3">
              <a
                href="https://github.com/tanishkss"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                aria-label="GitHub Link"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/tanishk-ss-34b935374"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                aria-label="LinkedIn Link"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-text-secondary">
              &copy; {new Date().getFullYear()} Tanishk S S. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
