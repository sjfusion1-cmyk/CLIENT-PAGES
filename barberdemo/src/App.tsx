import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { GlitchPreloader } from './components/GlitchPreloader';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualTouchSliderGallery } from './components/DualTouchSliderGallery';
import { BenefitsMatrix } from './components/BenefitsMatrix';
import { LocationMapSection } from './components/LocationMapSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { FAQFooterSection } from './components/FAQFooterSection';
import { StickyWhatsAppCTA } from './components/StickyWhatsAppCTA';
import { SERVICES } from './data';

function MainApp() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const { lang } = useLanguage();

  const handleOpenBooking = (serviceId?: string) => {
    const isEs = lang === 'es';
    const selectedService = serviceId ? SERVICES.find((s) => s.id === serviceId) : undefined;
    const name = selectedService ? (isEs && selectedService.nameEs ? selectedService.nameEs : selectedService.name) : '';
    const price = selectedService ? selectedService.price : '';

    const textMessage = selectedService
      ? (isEs
          ? `¡Hola Carmen y Lilo! 👋\n\nMe gustaría reservar el paquete *${name}* ($${price}) en Apartment 109 (1577 Lawrence Ave W, Toronto).\n\nPor favor déjenme saber sus horarios disponibles. ¡Gracias!`
          : `Hello Carmen & Lilo! 👋\n\nI'd like to book the *${name}* ($${price}) package at Apartment 109 (1577 Lawrence Ave W, Toronto).\n\nPlease let me know your available appointment times. Thank you!`)
      : (isEs
          ? `¡Hola Carmen y Lilo! 👋\n\nMe gustaría reservar una cita de barbería en Apartment 109 (1577 Lawrence Ave W, Toronto).\n\nPor favor déjenme saber sus horarios disponibles. ¡Gracias!`
          : `Hello Carmen & Lilo! 👋\n\nI'd like to book a haircut appointment at Apartment 109 (1577 Lawrence Ave W, Toronto).\n\nPlease let me know your available appointment times. Thank you!`);

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/16474078051?text=${encoded}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#141514] text-gray-100 font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* 1. Glitch Preloader */}
      <GlitchPreloader onComplete={() => setPreloaderDone(true)} />

      {/* 2. Continuous Ambient Background Mesh & Particle Canvas */}
      <AmbientBackground />

      {/* Main Content Layer (revealed after preloader) */}
      <div className={`transition-opacity duration-700 ${preloaderDone ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Section 1: Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Section 2: Dual-Image Touch Slider & Lightbox Gallery */}
        <DualTouchSliderGallery />

        {/* Section 3: Convenience & Key Benefits Matrix */}
        <BenefitsMatrix />

        {/* Section 4: Location Map & Service Hub */}
        <LocationMapSection />

        {/* Section 5: Services, Packages & Transparent Pricing */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Section 6: Client Reviews & Social Proof Carousel */}
        <ReviewsCarousel onOpenBooking={() => handleOpenBooking()} />

        {/* Section 7: Interactive FAQ & Footer */}
        <FAQFooterSection />

        {/* Sticky WhatsApp CTA Bar with Overflowing 3D Icon */}
        <StickyWhatsAppCTA onOpenBooking={() => handleOpenBooking()} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

