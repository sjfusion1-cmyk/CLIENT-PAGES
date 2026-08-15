import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Building2, UserCheck, DoorOpen, Sparkles, Car, Clock } from 'lucide-react';
import { BENEFITS } from '../data';
import { useLanguage } from '../LanguageContext';

export const BenefitsMatrix: React.FC = () => {
  const { lang, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'DoorOpen': return <DoorOpen className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#D4AF37]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#171817]">
      <div className="max-w-4xl mx-auto">
        {/* Centered Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
            {t('benefitsHeader')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif-header text-white uppercase tracking-tight mb-3">
            {t('benefitsTitle1')} <span className="gold-gradient-text">{t('benefitsTitle2')}</span>
          </h2>
          <p className="text-gray-300 font-light max-w-xl mx-auto text-sm">
            {t('benefitsSub')}
          </p>
        </div>

        {/* Bullet Points Container */}
        <div className="bg-[#1e1f1e] border border-[#505250]/80 rounded-2xl p-6 sm:p-8 shadow-xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BENEFITS.map((item, index) => {
              const itemTitle = lang === 'es' && item.titleEs ? item.titleEs : item.title;
              const itemDesc = lang === 'es' && item.descriptionEs ? item.descriptionEs : item.description;

              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#141514]/60 border border-gray-800 hover:border-[#D4AF37]/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#282928] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    {getIcon(item.icon)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <h3 className="text-base font-bold font-serif-header text-white group-hover:text-[#FFF0BD] transition-colors">
                        {itemTitle}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">
                      {itemDesc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};


