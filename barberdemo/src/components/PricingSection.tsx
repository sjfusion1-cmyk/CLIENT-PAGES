import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Clock } from 'lucide-react';
import { SERVICES, LocalizedServiceItem } from '../data';
import { useLanguage } from '../LanguageContext';
import { WhatsAppIcon } from './Icons';

interface PricingSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
            {t('pricingHeader')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-header text-white uppercase tracking-tight mb-4">
            {t('pricingTitle1')} <span className="gold-gradient-text">{t('pricingTitle2')}</span>
          </h2>
          <p className="text-gray-300 font-light max-w-2xl mx-auto text-sm sm:text-base">
            {t('pricingSub')}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service: LocalizedServiceItem, index: number) => {
            const name = lang === 'es' && service.nameEs ? service.nameEs : service.name;
            const description = lang === 'es' && service.descriptionEs ? service.descriptionEs : service.description;
            const includes = lang === 'es' && service.includesEs ? service.includesEs : service.includes;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  service.popular
                    ? 'bg-[#1e1f1e] border-2 border-[#D4AF37] gold-border-glow shadow-[0_0_30px_rgba(212,175,55,0.25)]'
                    : 'bg-[#1c1d1c] border border-[#505250] hover:border-[#D4AF37] gold-border-glow-hover'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-black text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> {t('mostPopular')}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4 pt-2">
                    <div>
                      <h3 className="text-xl font-bold font-serif-header text-white mb-1">
                        {name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {service.duration}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-3xl font-black font-serif-header text-[#FFF0BD]">
                        ${service.price}
                      </span>
                      <span className="text-[10px] text-gray-400 block font-mono">{t('flatRate')}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-6 border-b border-gray-800 pb-4">
                    {description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block">
                      {t('whatsIncluded')}
                    </span>
                    {includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <div className="w-4 h-4 rounded-full bg-[#282928] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                        </div>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.id)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md ${
                    service.popular
                      ? 'bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] text-black hover:scale-102 shadow-[0_0_25px_rgba(37,211,102,0.5)]'
                      : 'bg-[#25D366] hover:bg-[#20ba59] text-black hover:scale-102 shadow-[0_0_15px_rgba(37,211,102,0.3)]'
                  }`}
                >
                  <WhatsAppIcon className="w-5 h-5 fill-black text-black" /> {t('bookService')} (${service.price})
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

