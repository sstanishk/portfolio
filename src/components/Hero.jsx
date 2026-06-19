import React, { useState, useEffect } from 'react';
import { Award, Cloud, ArrowRight, Download, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, HackerrankIcon } from './Icons';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const titles = [
  'Information Technology Student',
  'Aspiring Cloud Engineer',
  'Full Stack Developer'
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Add character
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Remove character
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Neon Glow Dots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Info Details */}
          <motion.div 
            className="md:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-glass-border text-xs font-semibold tracking-wider uppercase text-accent-primary">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Actively Preparing for Placements
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-text-primary">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Tanishk S S</span>
            </h1>

            {/* Custom Typing Animation */}
            <div className="h-8 sm:h-10 text-xl sm:text-2xl font-semibold text-text-secondary flex items-center">
              <span>{currentText}</span>
              <span className="inline-block w-[3px] h-6 bg-accent-primary ml-1 animate-pulse"></span>
            </div>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              Passionate about Cloud Computing, Full Stack Development, AWS, and Problem Solving. 
              I enjoy building scalable applications and participating in hackathons to solve real-world challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/Tanishk_SS_Resume.pdf"
                download="Tanishk_S_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-accent-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-primary font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 text-accent-primary" />
              </a>
            </div>

            {/* Social profiles */}
            <div className="pt-6 border-t border-border-color/50 flex items-center gap-4">
              <span className="text-sm text-text-secondary">Profiles:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/tanishkss"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/tanishk-ss-34b935374"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/tanishkss"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                  aria-label="LeetCode"
                >
                  <LeetcodeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://hackerrank.com/profile/tanishkss"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                  aria-label="HackerRank"
                >
                  <HackerrankIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Coder Avatar with glowing glass frame */}
          <motion.div 
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Outer light glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur opacity-35 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass border-2 profile-glow-animate">
                <img
                  src={profileImg}
                  alt="Tanishk S S Profile"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
              
              {/* Tech Badge floating overlay */}
              <motion.div 
                className="absolute -bottom-4 -left-4 glass border border-glass-border p-3.5 rounded-2xl flex items-center gap-3 shadow-xl"
                initial={{ x: -30, opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: [0, -6, 0]
                }}
                transition={{ 
                  x: { delay: 0.5, duration: 0.6 },
                  opacity: { delay: 0.5, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="p-2.5 rounded-xl bg-accent-primary/10 text-accent-primary">
                  <Cloud className="w-5 h-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs text-text-secondary">Focusing on</p>
                  <p className="text-sm font-bold text-text-primary">AWS & DevOps</p>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-4 -right-4 glass border border-glass-border p-3.5 rounded-2xl flex items-center gap-3 shadow-xl"
                initial={{ x: 30, opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: [0, 6, 0]
                }}
                transition={{ 
                  x: { delay: 0.7, duration: 0.6 },
                  opacity: { delay: 0.7, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="p-2.5 rounded-xl bg-accent-secondary/10 text-accent-secondary">
                  <FileText className="w-5 h-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs text-text-secondary">Coding Style</p>
                  <p className="text-sm font-bold text-text-primary">Full-Stack dev</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
