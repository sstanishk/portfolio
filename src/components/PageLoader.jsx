import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PageLoader({ onComplete }) {
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    // Portal spins/pulses for 2.2 seconds, then begins expanding to open the portal
    const expandTimer = setTimeout(() => {
      setIsExpanding(true);
    }, 2200);

    // Complete loader after expand animation finishes (0.8s later)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#030712] z-50 flex items-center justify-center overflow-hidden">
      {/* Background stars or grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      {/* Ambient glowing radial light in the background */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-accent-primary/10 blur-[120px]"></div>

      {/* Main Portal Container */}
      <div className="relative flex flex-col items-center">
        
        {/* Outer Rotating Energy Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-44 h-44 rounded-full border-4 border-dashed border-t-accent-primary border-r-transparent border-b-accent-secondary border-l-transparent absolute blur-[1px]"
        />

        {/* Outer Steady Glowing Ring */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-36 rounded-full border-2 border-accent-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.3)] absolute"
        />

        {/* Tech Particles Orbiting */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="w-52 h-52 rounded-full border border-dashed border-accent-secondary/20 absolute flex items-center justify-between"
        >
          <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_#3b82f6]"></span>
          <span className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#06b6d4]"></span>
        </motion.div>

        {/* Portal Core (The expanding gateway element) */}
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={isExpanding 
            ? { 
                scale: 30, 
                opacity: [1, 1, 0], 
                backgroundColor: "rgba(3, 7, 18, 0.95)" 
              } 
            : { 
                scale: 1, 
                opacity: 1 
              }
          }
          transition={isExpanding 
            ? { duration: 0.8, ease: "easeIn" } 
            : { duration: 0.8, ease: "easeOut" }
          }
          className="w-28 h-28 rounded-full bg-gradient-to-br from-accent-primary via-blue-600 to-accent-secondary flex items-center justify-center shadow-[0_0_70px_rgba(59,130,246,0.6)] z-10"
        >
          {/* Central logo */}
          <motion.div 
            animate={isExpanding ? { opacity: 0, scale: 0.3 } : {}}
            className="text-white font-display font-black text-xl select-none tracking-widest"
          >
            T &bull; S
          </motion.div>
        </motion.div>

        {/* Title details */}
        <motion.div 
          animate={isExpanding ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-36 text-center z-20"
        >
          <h3 className="font-display font-black text-text-primary text-lg tracking-wider uppercase">
            Entering Gateway
          </h3>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <p className="text-xs text-text-secondary font-semibold uppercase tracking-widest">
              Connecting Tanishk...
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
