import React from 'react';
import { motion } from 'framer-motion';

const stones = [
  { 
    name: 'Space', 
    color: 'rgba(59, 130, 246, 0.15)', 
    coreColor: '#3b82f6', 
    size: 'w-72 h-72' 
  }, // Blue
  { 
    name: 'Reality', 
    color: 'rgba(239, 68, 68, 0.12)', 
    coreColor: '#ef4444', 
    size: 'w-80 h-80' 
  }, // Red
  { 
    name: 'Power', 
    color: 'rgba(168, 85, 247, 0.15)', 
    coreColor: '#a855f7', 
    size: 'w-96 h-96' 
  }, // Purple
  { 
    name: 'Mind', 
    color: 'rgba(245, 158, 11, 0.12)', 
    coreColor: '#f59e0b', 
    size: 'w-64 h-64' 
  }, // Yellow/Gold
  { 
    name: 'Time', 
    color: 'rgba(16, 185, 129, 0.12)', 
    coreColor: '#10b981', 
    size: 'w-80 h-80' 
  }, // Green
  { 
    name: 'Soul', 
    color: 'rgba(249, 115, 22, 0.12)', 
    coreColor: '#f97316', 
    size: 'w-72 h-72' 
  }  // Orange
];

export default function InfinityStonesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Center Avengers Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] z-0">
        <svg 
          className="w-[26rem] h-[26rem] sm:w-[32rem] sm:h-[32rem] md:w-[42rem] md:h-[42rem] text-accent-primary animate-pulse" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ animationDuration: '8s' }}
        >
          {/* Outer circle with gap on left */}
          <path d="M 5.5 16 A 9.5 9.5 0 1 1 5.5 8" />
          {/* Main A diagonals */}
          <path d="M 8.5 20 L 14 4 L 19.5 20" />
          {/* Extended crossbar */}
          <path d="M 4.5 13 L 16.5 13" />
        </svg>
      </div>

      {stones.map((stone, idx) => {
        // Generate floating coordinates targeting active viewport regions
        const randomX = [
          `${10 + (idx * 15) % 80}vw`,
          `${Math.random() * 70 + 10}vw`,
          `${Math.random() * 70 + 10}vw`,
          `${10 + (idx * 15) % 80}vw`
        ];
        const randomY = [
          `${10 + (idx * 12) % 80}vh`,
          `${Math.random() * 70 + 10}vh`,
          `${Math.random() * 70 + 10}vh`,
          `${10 + (idx * 12) % 80}vh`
        ];

        return (
          <motion.div
            key={idx}
            className="absolute pointer-events-none"
            style={{
              left: 0,
              top: 0
            }}
            animate={{
              x: randomX,
              y: randomY
            }}
            transition={{
              duration: 35 + idx * 8, // slow fluid motion
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* The giant blurry glowing aura of the stone */}
            <div 
              className={`absolute rounded-full blur-[90px] sm:blur-[120px] -translate-x-1/2 -translate-y-1/2 ${stone.size}`}
              style={{ backgroundColor: stone.color }}
            />

            {/* The visible small glowing stone core */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/40 flex items-center justify-center"
              style={{ 
                backgroundColor: stone.coreColor,
                boxShadow: `0 0 15px ${stone.coreColor}, 0 0 5px ${stone.coreColor}`
              }}
            >
              <span className="w-0.5 h-0.5 rounded-full bg-white opacity-90"></span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
