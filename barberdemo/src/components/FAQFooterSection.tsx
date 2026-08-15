import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, Scissors, Heart } from 'lucide-react';
import { FAQS, BUSINESS_INFO, LocalizedFAQ } from '../data';
import { useLanguage } from '../LanguageContext';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

export const FAQFooterSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#141514]">
      <div className="max-w-4xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e1f1e] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> {t('faqHeader')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-header text-white uppercase tracking-tight mb-3">
            {t('faqTitle1')} <span className="gold-gradient-text">{t('faqTitle2')}</span>
          </h2>
          <p className="text-gray-300 font-light text-sm sm:text-base">
            {t('faqSub')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {FAQS.map((faq: LocalizedFAQ) => {
            const isOpen = openId === faq.id;
            const question = lang === 'es' && faq.questionEs ? faq.questionEs : faq.question;
            const answer = lang === 'es' && faq.answerEs ? faq.answerEs : faq.answer;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl bg-[#1e1f1e] border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 'border-[#505250]/80 hover:border-gray-600'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#D4AF37] font-mono text-sm">?</span>
                    <span>{question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-gray-300 font-light leading-relaxed border-t border-gray-800/80 pt-4"
                    >
                      {answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Comprehensive Footer */}
        <footer className="border-t border-[#D4AF37]/30 pt-12 pb-24 text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#1e1f1e] border border-[#D4AF37] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <Scissors className="w-6 h-6 text-[#D4AF37] transform rotate-12" />
            </div>
            <h3 className="text-2xl font-bold font-serif-header text-white mb-1">
              CARMEN & LILO’S BARBERSHOP
            </h3>
            <p className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-4">
              1577 LAWRENCE AVE WEST • APT 109 • TORONTO, ON
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#1e1f1e] border border-gray-700 hover:border-[#D4AF37] text-xs font-mono text-gray-300 hover:text-[#D4AF37] transition-all flex items-center gap-2.5 group"
              >
                <InstagramIcon className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" /> @{BUSINESS_INFO.instagramHandle}
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#1e1f1e] border border-gray-700 hover:border-[#D4AF37] text-xs font-mono text-gray-300 hover:text-[#D4AF37] transition-all flex items-center gap-2.5 group"
              >
                <FacebookIcon className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" /> {BUSINESS_INFO.facebookHandle}
              </a>

              <a
                href={`https://wa.me/16474078051`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#1e1f1e] border border-gray-700 hover:border-[#25D366] text-xs font-mono text-gray-300 hover:text-[#25D366] transition-all flex items-center gap-2.5 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform fill-[#25D366]" /> {BUSINESS_INFO.phonePrimary}
              </a>
            </div>
          </div>

          <div className="text-xs font-mono text-gray-500 space-y-1">
            <p>© 2026 {BUSINESS_INFO.name}. {t('allRightsReserved')}</p>
            <p className="text-gray-500 text-[11px] flex items-center justify-center gap-1">
              {t('craftedBy')} <Heart className="w-3 h-3 text-[#D4AF37] inline fill-[#D4AF37]" />
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

