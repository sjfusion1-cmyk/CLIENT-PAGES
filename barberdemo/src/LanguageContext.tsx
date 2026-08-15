import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Brand
    brandName: "CARMEN & LILO’S",
    brandSubtitle: "APT 109 • TORONTO",
    barberOrigin: "Dominican Master Barbers in Toronto 🇩🇴",

    // Nav Links
    navServices: "Services & Rates",
    navWhyUs: "Why Apt 109",
    navGallery: "Cut Portfolio",
    navLocation: "Location & Map",
    navReviews: "Client Reviews",
    navFaq: "FAQ",
    bookNav: "Book Apt 109",

    // Hero
    heroBadge: "5.0 Rated Barbers in North York, Toronto",
    heroTitle: "CARMEN & LILO’S STUDIO",
    heroTagline: "Master-Level Haircuts. Honest Apartment Pricing.",
    heroSubheadline: "Experience high-end precision barbering in our private 1st-floor studio setting in Toronto. Dominican master craftsmanship with zero commercial storefront overhead.",
    heroBookBtn: "Book Appointment on WhatsApp",
    heroRatesBtn: "View Rates & Packages",

    // Hero Stat Cards
    statMasterCut: "Master Fade & Cut",
    statMasterCutSub: "Dominican Precision Craft",
    statPrivateStudio: "1-on-1 Studio",
    statPrivateStudioSub: "Zero Wait Room Noise",
    statFirstFloor: "1st Floor Access",
    statFirstFloorSub: "Apt 109 Walk-Right-In",
    statBarbers: "Carmen & Lilo 🇩🇴",
    statBarbersSub: "10+ Yrs Master Barbers",

    // Benefits Section
    benefitsHeader: "THE APT 109 ADVANTAGE",
    benefitsTitle1: "LUXURY BARBERING,",
    benefitsTitle2: "ZERO STOREFRONT OVERHEAD",
    benefitsSub: "Why pay extra to subsidize high commercial lease rents? Here is how our apartment studio model works for you:",

    // Pricing Section
    pricingHeader: "TRANSPARENT FLAT-RATE MENU",
    pricingTitle1: "MASTER SERVICES &",
    pricingTitle2: "HONEST RATES",
    pricingSub: "Zero surprise add-ons. Every haircut includes custom styling, hot towel neck shave finish, and crisp razor line-up.",
    mostPopular: "MOST POPULAR",
    flatRate: "FLAT RATE",
    whatsIncluded: "What's Included:",
    bookService: "Book Service",

    // Gallery
    galleryHeader: "PORTFOLIO GALLERY",
    galleryTitle1: "PRECISION CUTS &",
    galleryTitle2: "FADES",
    gallerySub: "Real clients. Real Dominican master barber craft from Carmen & Lilo.",
    allCuts: "All Cuts",
    skinFades: "Skin Fades",
    beardsShaves: "Beards & Shaves",
    scissorCuts: "Scissor Cuts",
    razorLineups: "Razor Line-Ups",

    // Location
    locationHeader: "CONVENIENT TORONTO LOCATION",
    locationTitle1: "EASY ACCESS TO",
    locationTitle2: "APARTMENT 109",
    locationSub: "Located on the ground/1st floor of 1577 Lawrence Ave West. Free visitor parking on site with instant walk-in entrance.",
    exactAddressLabel: "Exact Studio Address:",
    arrivalTitle: "Arrival Instructions:",
    arrivalDesc: "Enter main lobby doors at 1577 Lawrence W. Walk straight into 1st floor hallway to Apt 109. Ring doorbell or message us on WhatsApp upon arrival!",
    parkingTitle: "Parking Availability:",
    parkingDesc: "Free visitor parking spots directly in front and side lot of 1577 Lawrence Ave W.",
    hoursTitle: "Studio Hours:",
    hoursDesc: "Mon-Fri: 9am–8pm | Sat: 9am–7pm | Sun: Appt",
    openMapsBtn: "Open In Google Maps",

    // Reviews
    reviewsHeader1: "WHAT TORONTO CLIENTS",
    reviewsHeader2: "ARE SAYING",
    reviewsSub: "Real feedback from men across North York, Lawrence Manor, Amesbury, and Weston.",
    joinClientsBtn: "Join 100+ Satisfied Toronto Clients",

    // FAQ
    faqHeader: "COMMON QUESTIONS",
    faqTitle1: "FREQUENTLY ASKED",
    faqTitle2: "QUESTIONS",
    faqSub: "Everything you need to know about visiting Apartment 109, parking, and our master haircut services.",
    allRightsReserved: "All Rights Reserved.",
    craftedBy: "Crafted for high-end barbershop experience in Toronto",

    // Booking Modal
    bookModalTitle: "BOOK APARTMENT 109",
    stepService: "Select Service ($30 Cut Standard):",
    stepBarber: "Preferred Barber:",
    barberAny: "Any Available",
    stepDate: "Preferred Date:",
    stepTime: "Time Slot:",
    yourName: "Your Name:",
    phoneNumber: "Phone Number:",
    customNotes: "Custom Cut Notes (Optional):",
    sendWhatsAppBtn: "Send WhatsApp Request Now",
    callDirectBtn: "Call Direct",

    // Sticky CTA
    stickyBookText: "BOOK YOUR HAIRCUT NOW",
    stickySubtext: "Fast WhatsApp Response • Carmen & Lilo Apt 109",
  },
  es: {
    // Brand
    brandName: "CARMEN & LILO’S",
    brandSubtitle: "APTO 109 • TORONTO",
    barberOrigin: "Barberos Maestros Dominicanos en Toronto 🇩🇴",

    // Nav Links
    navServices: "Servicios y Tarifas",
    navWhyUs: "¿Por Qué Apto 109?",
    navGallery: "Portafolio de Cortes",
    navLocation: "Ubicación y Mapa",
    navReviews: "Reseñas de Clientes",
    navFaq: "Preguntas Frecuentes",
    bookNav: "Reservar Apto 109",

    // Hero
    heroBadge: "Barberos Calificados 5.0 en North York, Toronto 🇩🇴",
    heroTitle: "ESTUDIO CARMEN & LILO",
    heroTagline: "Cortes de Nivel Maestro. Precios Honestos de Apartamento.",
    heroSubheadline: "Experimente barbería de alta precisión en nuestro estudio privado del 1er piso en Toronto. Maestría dominicana sin los altos costos de un local comercial.",
    heroBookBtn: "Reservar Cita por WhatsApp",
    heroRatesBtn: "Ver Tarifas y Paquetes",

    // Hero Stat Cards
    statMasterCut: "Corte y Fade Maestro",
    statMasterCutSub: "Precisión Dominicana",
    statPrivateStudio: "Estudio Privado 1 a 1",
    statPrivateStudioSub: "Sin Ruido de Sala de Espera",
    statFirstFloor: "Acceso 1er Piso",
    statFirstFloorSub: "Apto 109 - Entre Directo",
    statBarbers: "Carmen y Lilo 🇩🇴",
    statBarbersSub: "10+ Años Maestros Barberos",

    // Benefits Section
    benefitsHeader: "LA VENTAJA DEL APTO 109",
    benefitsTitle1: "BARBERÍA DE LUJO,",
    benefitsTitle2: "SIN COSTOS DE LOCAL COMERCIAL",
    benefitsSub: "¿Por qué pagar de más para subsidiar costosos alquileres comerciales? Así es como nuestro estudio privado trabaja para usted:",

    // Pricing Section
    pricingHeader: "MENÚ DE TARIFAS TRANSPARENTES",
    pricingTitle1: "SERVICIOS MAESTROS Y",
    pricingTitle2: "TARIFAS HONESTAS",
    pricingSub: "Sin costos sorpresa. Cada corte incluye peinado personalizado, toalla caliente en la nuca y cerco preciso con navaja.",
    mostPopular: "MÁS POPULAR",
    flatRate: "TARIFA FIJA",
    whatsIncluded: "Lo Que Incluye:",
    bookService: "Reservar Servicio",

    // Gallery
    galleryHeader: "GALERÍA DE TRABAJOS",
    galleryTitle1: "CORTES Y",
    galleryTitle2: "FADES DE PRECISIÓN",
    gallerySub: "Clientes reales. Arte de barbería maestra dominicana por Carmen & Lilo.",
    allCuts: "Todos los Cortes",
    skinFades: "Fades / Degradados",
    beardsShaves: "Barbas y Afeitados",
    scissorCuts: "Cortes con Tijera",
    razorLineups: "Cercos con Navaja",

    // Location
    locationHeader: "UBICACIÓN EN TORONTO",
    locationTitle1: "ACCESO AL",
    locationTitle2: "APARTAMENTO 109",
    locationSub: "Ubicado en la planta baja/1er piso de 1577 Lawrence Ave West. Estacionamiento de visitantes gratuito.",
    exactAddressLabel: "Dirección Exacta del Estudio:",
    arrivalTitle: "Instrucciones de Llegada:",
    arrivalDesc: "Entre al lobby principal en 1577 Lawrence W. Camine por el pasillo del 1er piso hasta el Apto 109. Toque el timbre o envíe WhatsApp al llegar.",
    parkingTitle: "Estacionamiento Gratuito:",
    parkingDesc: "Puestos de visitantes frente al edificio y en el estacionamiento lateral de 1577 Lawrence Ave W.",
    hoursTitle: "Horario del Estudio:",
    hoursDesc: "Lun-Vie: 9am–8pm | Sáb: 9am–7pm | Dom: Con Cita",
    openMapsBtn: "Abrir en Google Maps",

    // Reviews
    reviewsHeader1: "LO QUE DICEN NUESTROS",
    reviewsHeader2: "CLIENTES EN TORONTO",
    reviewsSub: "Comentarios reales de clientes en North York, Lawrence Manor, Amesbury y Weston.",
    joinClientsBtn: "Únase a +100 Clientes Satisfechos",

    // FAQ
    faqHeader: "PREGUNTAS FRECUENTES",
    faqTitle1: "PREGUNTAS",
    faqTitle2: "FRECUENTES",
    faqSub: "Todo lo que necesita saber para visitar el Apartamento 109 y reservar.",
    allRightsReserved: "Todos los derechos reservados.",
    craftedBy: "Diseñado para experiencia de barbería de lujo en Toronto",

    // Booking Modal
    bookModalTitle: "RESERVAR APARTAMENTO 109",
    stepService: "Seleccione Servicio:",
    stepBarber: "Barbero Preferido:",
    barberAny: "Cualquiera Disponible",
    stepDate: "Fecha Preferida:",
    stepTime: "Horario:",
    yourName: "Su Nombre:",
    phoneNumber: "Phone Number:",
    customNotes: "Notas Adicionales (Opcional):",
    sendWhatsAppBtn: "Enviar Solicitud por WhatsApp",
    callDirectBtn: "Llamar Directamente",

    // Sticky CTA
    stickyBookText: "RESERVAR CITA POR WHATSAPP",
    stickySubtext: "Respuesta Rápida por WhatsApp • Carmen & Lilo Apto 109",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>;
    return dict[key] || translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
