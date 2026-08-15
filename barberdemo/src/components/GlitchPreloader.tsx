import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles, ChevronRight } from 'lucide-react';

interface GlitchPreloaderProps {
  onComplete: () => void;
}

export const GlitchPreloader: React.FC<GlitchPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500);
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12 + 8);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1c1d1c] text-white px-4 overflow-hidden"
        >
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Logo Emblem Container with Glitch Layers */}
            <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
              {/* Glitch Shadow Copy 1 (Cyan/Gold Shift) */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[#40E0D0] opacity-70 animate-glitch-1">
                <Scissors className="w-24 h-24 transform -rotate-45" />
              </div>

              {/* Glitch Shadow Copy 2 (Magenta/Gold Shift) */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[#D4AF37] opacity-80 animate-glitch-2">
                <Scissors className="w-24 h-24 transform rotate-45" />
              </div>

              {/* Main Gold Scissors & Razor Emblem */}
              <div className="relative z-10 w-28 h-28 rounded-full border-2 border-[#D4AF37] bg-[#242524] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.3)]">
                <div className="absolute -inset-1 rounded-full border border-[#D4AF37]/30 animate-ping" />
                <Scissors className="w-14 h-14 text-[#D4AF37] transform rotate-12" />
                <span className="absolute bottom-2 font-serif-header text-xs tracking-widest text-[#FFF0BD] font-bold">C & L</span>
              </div>
            </div>

            {/* Brand Title with Glitch Effect */}
            <h1 className="text-3xl sm:text-4xl font-black font-serif-header tracking-wider text-white mb-2">
              CARMEN & LILO’S
            </h1>
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-mono mb-6 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> PRIVATE BARBER STUDIO • TORONTO
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#2A2B2A] border border-[#505250] rounded-full h-2.5 p-0.5 mb-4 relative overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#FFF5CC] rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Counter percentage & Status */}
            <div className="w-full flex justify-between items-center text-xs font-mono text-gray-400 mb-8">
              <span>APARTMENT 109 • TORONTO</span>
              <span className="text-[#D4AF37] font-bold">{progress}%</span>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="px-5 py-2 text-xs font-mono text-gray-400 hover:text-[#D4AF37] border border-gray-700 hover:border-[#D4AF37] rounded-full transition-all duration-200 flex items-center gap-1 bg-[#242524]/60 backdrop-blur"
            >
              SKIP INTRO <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
