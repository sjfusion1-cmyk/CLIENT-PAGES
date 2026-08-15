import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Sparkles } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data';
import { PortfolioImage } from '../types';
import { useLanguage } from '../LanguageContext';

export const DualTouchSliderGallery: React.FC = () => {
  const { lang, t } = useLanguage();
  const [images] = useState<PortfolioImage[]>(PORTFOLIO_IMAGES);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Slider index tracks dual-image pair index
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, images.length - 2);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#191a19]/80">
      <div className="max-w-6xl mx-auto">
        {/* Centered H2 Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242524] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> {t('galleryHeader')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-header text-white uppercase tracking-tight mb-3">
            {t('galleryTitle1')} <span className="gold-gradient-text">{t('galleryTitle2')}</span>
          </h2>
          <p className="text-gray-300 font-light max-w-xl mx-auto text-sm sm:text-base">
            {t('gallerySub')}
          </p>
        </div>

        {/* Dual-Image Touch Slider Container */}
        <div className="relative group">
          {/* Controls */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous portfolio images"
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1c1d1c]/90 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next portfolio images"
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1c1d1c]/90 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider viewport displaying TWO vertical images side-by-side (2 columns) */}
          <div ref={sliderRef} className="overflow-hidden rounded-2xl p-1">
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-6"
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {images.slice(currentIndex, currentIndex + 2).map((img, idx) => {
                const globalIndex = currentIndex + idx;
                return (
                  <motion.div
                    key={img.id}
                    layoutId={`image-${img.id}`}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="relative group/card aspect-[3/4] rounded-xl overflow-hidden bg-[#1c1d1c] border border-[#505250] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                  >
                    {/* Clean Display: Zero text overlays on top of gallery cards */}
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle Hover Zoom Icon Trigger */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#242524]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-xl transform scale-75 group-hover/card:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && images[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6"
          >
            {/* Lightbox Header Bar */}
            <div className="w-full max-w-5xl flex items-center justify-between z-10 text-white py-2">
              <div className="flex items-center gap-3">
                <span className="font-serif-header text-sm sm:text-base font-bold text-[#D4AF37]">
                  CARMEN & LILO PORTFOLIO
                </span>
                <span className="text-xs font-mono text-gray-400 bg-[#242524] px-2.5 py-1 rounded-full border border-gray-700">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-[#242524] border border-gray-700 hover:border-[#D4AF37] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Main Zoom Image View */}
            <div className="relative flex-1 w-full max-w-4xl flex items-center justify-center my-2">
              {/* Previous Image Arrow */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
                }
                className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-[#242524]/80 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <motion.img
                key={images[lightboxIndex].id}
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].alt}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-[75vh] max-w-full object-contain rounded-xl border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.2)]"
              />

              {/* Next Image Arrow */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-[#242524]/80 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Lightbox Footer Info */}
            <div className="w-full max-w-xl text-center bg-[#242524]/90 border border-[#D4AF37]/30 rounded-xl p-3 sm:p-4 backdrop-blur">
              <h3 className="text-base sm:text-lg font-bold font-serif-header text-white mb-1">
                {lang === 'es' && images[lightboxIndex].titleEs ? images[lightboxIndex].titleEs : images[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#D4AF37] font-mono uppercase tracking-widest">
                Master Haircut by Carmen & Lilo • Apt 109 Private Studio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

