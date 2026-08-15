import React, { useState, useEffect } from 'react';
import { Scissors, Phone, MessageSquare, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navServices'), href: '#pricing' },
    { name: t('navWhyUs'), href: '#benefits' },
    { name: t('navGallery'), href: '#gallery' },
    { name: t('navLocation'), href: '#location' },
    { name: t('navReviews'), href: '#reviews' },
    { name: t('navFaq'), href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181918]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-2.5 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#242524] border border-[#D4AF37] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Scissors className="w-5 h-5 text-[#D4AF37] transform -rotate-12 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-header text-base sm:text-lg font-bold tracking-wider text-white leading-tight">
              {t('brandName')}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" /> {t('brandSubtitle')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-gray-300 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Controls: Flag Toggle & WhatsApp Quick Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Persistent EN / ES Language Toggle */}
          <div className="flex items-center bg-[#1e1f1e] p-1 rounded-full border border-gray-700 shadow-inner">
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                  : 'text-gray-300 hover:text-white'
              }`}
              title="English (Canada)"
            >
              <span className="text-sm leading-none">🇨🇦</span>
              <span>EN</span>
            </button>

            <button
              onClick={() => setLang('es')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                lang === 'es'
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                  : 'text-gray-300 hover:text-white'
              }`}
              title="Español (República Dominicana)"
            >
              <span className="text-sm leading-none">🇩🇴</span>
              <span>ES</span>
            </button>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.whatsappNumber}`}
            className="px-3 py-1.5 rounded-full border border-gray-700 hover:border-[#D4AF37] text-xs font-semibold text-gray-200 hover:text-[#D4AF37] transition-all duration-200 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{BUSINESS_INFO.phoneSecondary}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2 rounded-full shimmer-btn text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('bookNav')}</span>
          </button>
        </div>

        {/* Mobile Header Controls: Mobile Flag Toggle & Hamburger Menu */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Toggle */}
          <div className="flex items-center bg-[#1e1f1e] p-0.5 rounded-full border border-gray-700">
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                lang === 'en'
                  ? 'bg-[#D4AF37] text-black'
                  : 'text-gray-300'
              }`}
            >
              <span>🇨🇦</span>
              <span>EN</span>
            </button>
            <button
              onClick={() => setLang('es')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                lang === 'es'
                  ? 'bg-[#D4AF37] text-black'
                  : 'text-gray-300'
              }`}
            >
              <span>🇩🇴</span>
              <span>ES</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1b1a] border-b border-[#D4AF37]/30 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp ({BUSINESS_INFO.whatsappNumber})
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl shimmer-btn text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Scissors className="w-4 h-4" /> {t('heroBookBtn')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

