import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { WhatsAppIcon } from './Icons';

interface StickyWhatsAppCTAProps {
  onOpenBooking: () => void;
}

export const StickyWhatsAppCTA: React.FC<StickyWhatsAppCTAProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 w-full px-3 py-3 sm:px-6 sm:py-4 bg-[#141514]/95 border-t border-[#25D366]/40 backdrop-blur-md shadow-[0_-8px_30px_rgba(37,211,102,0.3)] flex items-center justify-center"
        >
          <div className="w-full max-w-2xl mx-auto relative flex items-center">
            {/* Full-Width Mobile/Desktop Button */}
            <button
              onClick={onOpenBooking}
              className="w-full relative py-3.5 sm:py-4 pl-16 sm:pl-22 pr-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_0_35px_rgba(37,211,102,0.85)] hover:shadow-[0_0_50px_rgba(37,211,102,1)] transition-all duration-300 flex items-center justify-center sm:justify-between group"
            >
              {/* Oversized WhatsApp Badge that is bigger than the button itself */}
              <div className="absolute -left-2 sm:-left-3 -top-2.5 sm:-top-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#25D366] text-black border-4 border-[#141514] shadow-[0_0_30px_rgba(37,211,102,1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                <WhatsAppIcon className="w-10 h-10 sm:w-12 sm:h-12 fill-black text-black" />
                <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#D4AF37] border-2 border-[#141514] animate-ping" />
                <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#D4AF37] border-2 border-[#141514]" />
              </div>

              {/* Clean Single Call to Action */}
              <span className="font-black text-black tracking-widest text-center text-sm sm:text-base uppercase flex items-center gap-2">
                {t('stickyBookText')}
              </span>

              {/* Arrow */}
              <span className="hidden sm:inline-block text-black font-extrabold text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
