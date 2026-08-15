import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Car, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { useLanguage } from '../LanguageContext';
import { WhatsAppIcon } from './Icons';

export const LocationMapSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#141514] border-y border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
            {t('locationHeader')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-header text-white uppercase tracking-tight mb-3">
            {t('locationTitle1')} <span className="gold-gradient-text">{t('locationTitle2')}</span>
          </h2>
          <p className="text-gray-300 font-light max-w-xl mx-auto text-sm sm:text-base">
            {t('locationSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#1c1d1c] border border-[#505250] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#242524] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif-header text-white">Carmen & Lilo's Studio</h3>
                  <p className="text-xs text-[#D4AF37] font-mono">TORONTO, ON • M6L 1C4</p>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="p-4 rounded-xl bg-[#242524] border border-[#D4AF37]/30 mb-6 space-y-2">
                <span className="text-xs uppercase font-mono text-gray-400 block">{t('exactAddressLabel')}</span>
                <p className="text-base font-bold text-white leading-snug">
                  1577 Lawrence Ave. West<br />
                  <span className="text-[#FFF0BD]">Apartment 109 (1st Floor)</span><br />
                  Toronto, ON M6L 1C4
                </p>
              </div>

              {/* How to enter instructions */}
              <div className="space-y-4 mb-2 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase font-mono">{t('arrivalTitle')}</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t('arrivalDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase font-mono">{t('parkingTitle')}</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t('parkingDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase font-mono">{t('hoursTitle')}</span>
                    <p className="text-xs text-gray-300">{t('hoursDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Link */}
            <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl shimmer-btn text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-102 transition-transform"
              >
                <Navigation className="w-4 h-4" /> {t('openMapsBtn')}
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black text-black" /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Embedded Interactive Google Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#1c1d1c] border border-[#505250] rounded-2xl overflow-hidden min-h-[400px] shadow-2xl relative"
          >
            <iframe
              title="Carmen & Lilo Barbershop Map Location 1577 Lawrence Ave W"
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) saturate(0.9) brightness(0.9)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full min-h-[450px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

