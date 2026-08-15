import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { REVIEWS, LocalizedReview } from '../data';
import { useLanguage } from '../LanguageContext';

interface ReviewsCarouselProps {
  onOpenBooking: () => void;
}

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentReview: LocalizedReview = REVIEWS[currentIndex];
  const reviewText = lang === 'es' && currentReview.textEs ? currentReview.textEs : currentReview.text;

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#171817]">
      <div className="max-w-5xl mx-auto">
        {/* Centered Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1e1f1e] border border-[#D4AF37]/30 text-xs text-[#D4AF37] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
            <span className="font-mono ml-1 font-bold">5.0 / 5.0 VERIFIED RATING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-header text-white uppercase tracking-tight mb-3">
            {t('reviewsHeader1')} <span className="gold-gradient-text">{t('reviewsHeader2')}</span>
          </h2>
          <p className="text-gray-300 font-light max-w-lg mx-auto text-sm sm:text-base">
            {t('reviewsSub')}
          </p>
        </div>

        {/* Carousel Card Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1c1d1c] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1c1d1c] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1c1d1c] border border-[#505250] hover:border-[#D4AF37] rounded-2xl p-6 sm:p-10 shadow-2xl relative gold-border-glow"
            >
              <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-200 font-light italic leading-relaxed mb-6">
                "{reviewText}"
              </p>

              <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {currentReview.name}
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </h4>
                    <span className="text-xs text-gray-400 block font-mono">
                      {currentReview.location}
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs font-mono">
                  <span className="text-[#D4AF37] font-semibold block">
                    Barber: {currentReview.barber}
                  </span>
                  <span className="text-gray-500">{currentReview.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-10 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1e1f1e] hover:bg-[#282928] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider text-[#FFF0BD] transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" /> {t('joinClientsBtn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

