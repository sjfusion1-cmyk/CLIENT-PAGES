import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Star, ShieldCheck, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { WhatsAppIcon } from './Icons';

interface HeroSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Background Barber Image Layer with Dark Charcoal Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2000&q=80"
          alt="Dark barbershop haircut precision texture"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141514]/95 via-[#141514]/85 to-[#141514]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Location & Rating Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1f1e]/90 border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.15)] mb-6 backdrop-blur"
        >
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-200 uppercase tracking-widest border-l border-gray-700 pl-2">
            {t('heroBadge')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black font-serif-header text-center leading-[1.1] tracking-tight uppercase text-white mb-6"
        >
          {t('heroTitle')} <br />
          <span className="gold-gradient-text">{t('heroTagline')}</span>
        </motion.h1>

        {/* Subheadline (No $60 or $30 mention) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-gray-300 max-w-3xl font-light leading-relaxed text-center mb-8"
        >
          {t('heroSubheadline')}
        </motion.p>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
        >
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(37,211,102,0.6)] hover:shadow-[0_0_50px_rgba(37,211,102,0.9)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black group-hover:scale-110 transition-transform" />
            <span className="font-extrabold">{t('heroBookBtn')}</span>
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#1e1f1e] hover:bg-[#282928] border border-[#D4AF37]/40 text-gray-200 hover:text-[#D4AF37] font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Scissors className="w-4 h-4 text-[#D4AF37]" />
            <span>{t('heroRatesBtn')}</span>
          </a>
        </motion.div>

        {/* Trust Badges Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="p-3.5 rounded-xl bg-[#1e1f1e]/80 border border-[#D4AF37]/20 flex flex-col items-center justify-center text-center backdrop-blur hover:border-[#D4AF37]/50 transition-colors">
            <Sparkles className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-sm font-bold text-white">{t('statMasterCut')}</span>
            <span className="text-[11px] text-gray-400">{t('statMasterCutSub')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1e1f1e]/80 border border-[#D4AF37]/20 flex flex-col items-center justify-center text-center backdrop-blur hover:border-[#D4AF37]/50 transition-colors">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-sm font-bold text-white">{t('statPrivateStudio')}</span>
            <span className="text-[11px] text-gray-400">{t('statPrivateStudioSub')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1e1f1e]/80 border border-[#D4AF37]/20 flex flex-col items-center justify-center text-center backdrop-blur hover:border-[#D4AF37]/50 transition-colors">
            <MapPin className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-sm font-bold text-white">{t('statFirstFloor')}</span>
            <span className="text-[11px] text-gray-400">{t('statFirstFloorSub')}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1e1f1e]/80 border border-[#D4AF37]/20 flex flex-col items-center justify-center text-center backdrop-blur hover:border-[#D4AF37]/50 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-sm font-bold text-white">{t('statBarbers')}</span>
            <span className="text-[11px] text-gray-400">{t('statBarbersSub')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

