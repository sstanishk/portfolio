import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageLoader from './components/PageLoader';
import InfinityStonesBackground from './components/InfinityStonesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden selection:bg-accent-primary/30 selection:text-text-primary"
      >
        {/* Dynamic Background Noise/Gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.02),transparent)] pointer-events-none text-text-secondary"></div>
        
        {/* Glowing Infinity Stones Orbs Background */}
        <InfinityStonesBackground />

        {/* Main Layout Navigation */}
        <Navbar />

        {/* Main sections block */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <CodingProfiles />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
}
