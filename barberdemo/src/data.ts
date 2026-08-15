import { ServiceItem, PortfolioImage, ReviewItem, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: "Carmen & Lilo’s Barbershop",
  tagline: "Master-Level Haircuts. Honest Apartment Pricing.",
  subtagline: "Experience high-end precision barbering in our private 1st-floor studio setting in Toronto. Zero commercial storefront overhead means you get a master cut for honest pricing.",
  address: "1577 Lawrence Ave. West, Apartment 109, Toronto, ON M6L 1C4",
  addressShort: "1577 Lawrence Ave W, Apt 109 (1st Floor)",
  city: "Toronto, ON",
  postalCode: "M6L 1C4",
  phonePrimary: "467-407-8051",
  phoneSecondary: "647-407-8051",
  whatsappNumber: "647-407-8051",
  whatsappUrl: "https://wa.me/16474078051",
  instagramHandle: "carmenandlilobarber",
  instagramUrl: "https://instagram.com/carmenandlilobarber",
  facebookHandle: "carmen and lilo barber",
  facebookUrl: "https://facebook.com/search/top?q=carmen%20and%20lilo%20barber",
  mapEmbedUrl: "https://maps.google.com/maps?q=1577+Lawrence+Ave+West+Toronto+ON+M6L+1C4&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsDirect: "https://maps.google.com/?q=1577+Lawrence+Ave+West+Toronto+ON+M6L+1C4",
  hours: [
    { days: "Monday - Friday", time: "9:00 AM - 8:00 PM", daysEs: "Lunes - Viernes", timeEs: "9:00 AM - 8:00 PM" },
    { days: "Saturday", time: "9:00 AM - 7:00 PM", daysEs: "Sábado", timeEs: "9:00 AM - 7:00 PM" },
    { days: "Sunday", time: "10:00 AM - 5:00 PM (By Appt Only)", daysEs: "Domingo", timeEs: "10:00 AM - 5:00 PM (Solo con Cita)" }
  ]
};

export interface LocalizedServiceItem extends ServiceItem {
  nameEs?: string;
  descriptionEs?: string;
  includesEs?: string[];
}

export const SERVICES: LocalizedServiceItem[] = [
  {
    id: "signature-cut",
    name: "The Signature Fade & Cut",
    nameEs: "Corte y Fade Firma",
    price: 30,
    duration: "40 mins",
    popular: true,
    description: "Precision skin fade, drop fade, or classic scissor cut tailored to your head shape. Includes hairline razor detail & warm hot towel neck finish.",
    descriptionEs: "Fade / degradado de alta precisión a la piel, drop fade o corte clásico con tijera adaptado a la forma de su cabeza. Incluye cerco con navaja y toalla caliente en la nuca.",
    includes: [
      "Precision Fade, Taper or Scissor Craft",
      "Hairline Razor Line-Up & Edge-Up",
      "Warm Herbal Hot Towel Neck Shave",
      "Styling & Matte Clay Finish",
      "Complimentary Beverage (Espresso / Cold Drink)"
    ],
    includesEs: [
      "Fade de precisión, Taper o Trabajo con Tijera",
      "Cerco de contorno con navaja de afeitar",
      "Afeitado de nuca con toalla caliente herbal",
      "Peinado profesional y acabado con cera mate",
      "Bebida de cortesía (Espresso / Bebida fría)"
    ]
  },
  {
    id: "executive-combo",
    name: "Executive Cut & Beard Sculpting",
    nameEs: "Corte Ejecutivo y Arreglo de Barba",
    price: 45,
    duration: "60 mins",
    popular: true,
    description: "The complete grooming ritual. Signature haircut combined with full hot towel beard sculpting, straight razor detailing, and organic beard oil treatment.",
    descriptionEs: "El ritual de arreglo completo. Corte firma combinado con perfilado de barba con toalla caliente, navaja de afeitar y tratamiento con aceite orgánico.",
    includes: [
      "Full Signature Haircut & Fade",
      "Hot Towel Beard Steam & Beard Sculpting",
      "Straight Razor Sharp Cheek & Neck Lines",
      "Exfoliating Face Massage & Cool Towel",
      "Organic Beard Oil & Balm Application"
    ],
    includesEs: [
      "Corte completo firma y Fade maestro",
      "Toalla caliente al vapor y perfilado de barba",
      "Líneas afiladas en pómulos y cuello con navaja",
      "Masaje facial exfoliante y toalla fresca",
      "Aplicación de aceite y bálsamo orgánico para barba"
    ]
  },
  {
    id: "duo-combo",
    name: "Father & Son / Duo Combo",
    nameEs: "Combo Padre e Hijo / Dúo",
    price: 55,
    duration: "75 mins",
    description: "Book two master cuts back-to-back for family or friends. Private studio time with no rush and custom styling for both.",
    descriptionEs: "Reserve dos cortes maestros seguidos para familiares o amigos. Tiempo privado en el estudio sin prisas y peinado personalizado para ambos.",
    includes: [
      "2x Signature Master Haircuts",
      "2x Razor Line-ups & Edge-ups",
      "Hot Towel Finish for Adults",
      "Choice of Music or Live Sports on TV"
    ],
    includesEs: [
      "2x Cortes Maestros Firma",
      "2x Cercos y contornos con navaja",
      "Acabado con toalla caliente para adultos",
      "Música o deportes en vivo en TV a su elección"
    ]
  },
  {
    id: "beard-detail",
    name: "Razor Beard Trim & Line-Up",
    nameEs: "Recorte de Barba y Cerco con Navaja",
    price: 20,
    duration: "25 mins",
    description: "Sharpen your beard & necklines between cuts. Includes hot towel steam, foil shaver smooth fade, and straight razor contouring.",
    descriptionEs: "Defina su barba y líneas del cuello entre cortes. Incluye toalla caliente, degradado suave con rasuradora de lámina y contorno con navaja.",
    includes: [
      "Hot Towel Beard Steam",
      "Scissor Length Uniforming",
      "Straight Razor Outline Detailing",
      "Beard Hydration Treatment"
    ],
    includesEs: [
      "Toalla caliente al vapor para barba",
      "Emparejado de longitud con tijera",
      "Delineado de contorno con navaja barbera",
      "Tratamiento de hidratación para la barba"
    ]
  },
  {
    id: "student-special",
    name: "Student & Youth Cut",
    nameEs: "Corte para Estudiantes y Jóvenes",
    price: 25,
    duration: "35 mins",
    description: "High school & university student discount. Get top-tier fade & line-up quality at student-friendly pricing with valid ID.",
    descriptionEs: "Descuento para estudiantes de secundaria y universidad. Obtenga calidad superior en fade y cerco a un precio accesible con identificación válida.",
    includes: [
      "Modern Taper, Burst Fade, or Scissor Cut",
      "Razor Hairline Line-Up",
      "Matte Pomade / Texture Spray Finish"
    ],
    includesEs: [
      "Taper moderno, Burst Fade o Corte con Tijera",
      "Cerco de contorno frontal con navaja",
      "Acabado con pomada mate o spray texturizante"
    ]
  }
];

export interface LocalizedPortfolioImage extends PortfolioImage {
  titleEs?: string;
}

export const PORTFOLIO_IMAGES: LocalizedPortfolioImage[] = [
  {
    id: "p1",
    url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    title: "Precision Mid Skin Fade & Scissor Texture",
    titleEs: "Fade Medio a la Piel y Textura con Tijera",
    category: "fades",
    alt: "Precision mid skin fade men haircut"
  },
  {
    id: "p2",
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    title: "Crisp Razor Beard Line-Up & Taper Fade",
    titleEs: "Cerco de Barba con Navaja y Taper Fade",
    category: "beards",
    alt: "Crisp razor beard line up and taper fade"
  },
  {
    id: "p3",
    url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
    title: "Low Drop Fade with Matte Pompadour",
    titleEs: "Drop Fade Bajo con Tupé Mate",
    category: "fades",
    alt: "Low drop fade with matte pompadour haircut"
  },
  {
    id: "p4",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Classic Scissor Haircut & Natural Flow",
    titleEs: "Corte Clásico con Tijeras y Caída Natural",
    category: "scissors",
    alt: "Classic scissor haircut men grooming"
  },
  {
    id: "p5",
    url: "https://images.unsplash.com/photo-1517832606589-715746203e51?auto=format&fit=crop&w=800&q=80",
    title: "Sharp Edge-Up & Textured Crop Top",
    titleEs: "Cerco Afilado y Crop Top Texturizado",
    category: "lineups",
    alt: "Sharp edge up textured crop top barbering"
  },
  {
    id: "p6",
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    title: "Sculpted Beard Contour & Hot Towel Detail",
    titleEs: "Contorno de Barba Perfilado y Toalla Caliente",
    category: "beards",
    alt: "Sculpted beard contour hot towel detail"
  }
];

export interface LocalizedBenefit {
  icon: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
}

export const BENEFITS: LocalizedBenefit[] = [
  {
    icon: "Building2",
    title: "Zero Retail Rent Markup",
    titleEs: "Sin Aumento por Alquiler Comercial",
    subtitle: "Affordable Master Haircuts",
    subtitleEs: "Cortes Maestros Accesibles",
    description: "High-street barbershop leases in Toronto cost $8,000+/month. Operating from our private 1st-floor studio passes those savings directly to you.",
    descriptionEs: "Los locales comerciales de barbería en Toronto cuestan más de $8,000 al mes. Operar desde nuestro estudio privado en el 1er piso le traslada esos ahorros a usted."
  },
  {
    icon: "UserCheck",
    title: "1-on-1 Private Studio",
    titleEs: "Estudio Privado 1 a 1",
    subtitle: "Zero Waiting Room Chaos",
    subtitleEs: "Sin Caos en Sala de Espera",
    description: "No awkward waiting chairs or loud crowded shops. You get our undivided 1-on-1 focus with custom music, TV sports, and zero rush.",
    descriptionEs: "Sin ruidosas salas de espera ni aglomeraciones. Obtiene nuestra atención privada 1 a 1 con su música preferida, deportes en TV y sin prisas."
  },
  {
    icon: "DoorOpen",
    title: "Ground Floor Access",
    titleEs: "Acceso en Planta Baja",
    subtitle: "1577 Lawrence W, Apt 109",
    subtitleEs: "1577 Lawrence W, Apto 109",
    description: "Located on the 1st floor of the building. Walk right into Apartment 109 without waiting for elevators or climbing endless stairs.",
    descriptionEs: "Ubicado en el 1er piso del edificio. Entre directamente al Apartamento 109 sin esperar ascensores ni subir escaleras infinitas."
  },
  {
    icon: "Sparkles",
    title: "Hot Towel & Razor Finish",
    titleEs: "Toalla Caliente y Navaja Incluidas",
    subtitle: "Barber Tradition Included",
    subtitleEs: "Tradición Barbera Incluida",
    description: "Every cut comes standard with a warm herbal hot towel treatment, straight razor neck clean up, and premium hair styling.",
    descriptionEs: "Cada corte incluye de forma estándar un tratamiento de toalla caliente herbal, limpieza de nuca con navaja y peinado premium."
  },
  {
    icon: "Car",
    title: "Free Visitor Parking",
    titleEs: "Estacionamiento Gratis de Visitantes",
    subtitle: "Hassle-Free Arrival",
    subtitleEs: "Llegada Sin Complicaciones",
    description: "Convenient visitor parking right on-site at 1577 Lawrence Ave West. No downtown parking tickets or searching for meters.",
    descriptionEs: "Cómodos puestos de estacionamiento para visitantes en la propiedad de 1577 Lawrence Ave West. Sin multas ni buscar parquímetros."
  },
  {
    icon: "Clock",
    title: "Flexible & Evening Slots",
    titleEs: "Horarios Flexibles y Vespertinos",
    subtitle: "Accommodating Busy Schedules",
    subtitleEs: "Adaptado a su Agenda",
    description: "Need a late cut after work or early weekend appointment? We offer flexible hours tailored to North York and Toronto professionals.",
    descriptionEs: "¿Necesita un corte al salir del trabajo o temprano el fin de semana? Ofrecemos horarios adaptados a profesionales de Toronto."
  }
];

export interface LocalizedReview extends ReviewItem {
  textEs?: string;
  locationEs?: string;
}

export const REVIEWS: LocalizedReview[] = [
  {
    id: "r1",
    name: "Marcus Vance",
    rating: 5,
    location: "North York, Toronto",
    locationEs: "North York, Toronto",
    text: "Carmen & Lilo give cuts that put high-priced downtown barbers to shame. Carmen took his time with my skin fade and the hot towel finish is incredible. Getting a master Dominican cut in a comfortable private studio is the best setup in Toronto!",
    textEs: "Carmen y Lilo hacen cortes que dejan en vergüenza a los barberos costosos del centro. Carmen se tomó su tiempo con mi fade y el acabado con toalla caliente es increíble. ¡Tener un corte maestro dominicano en un estudio privado es lo mejor en Toronto!",
    barber: "Carmen",
    date: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    name: "David K.",
    rating: 5,
    location: "Lawrence Manor",
    locationEs: "Lawrence Manor",
    text: "Lilo is a wizard with beard line-ups. I was skeptical about an apartment studio at first, but Apt 109 is super clean, professional, and private. Plus 1st floor access makes it super easy to drop in. 10/10 recommend!",
    textEs: "Lilo es un maestro perfilando la barba. Al principio tenía dudas sobre un estudio en apartamento, pero el Apto 109 es súper limpio, profesional y privado. Además el acceso en el 1er piso es facilísimo. ¡Recomendado 10/10!",
    barber: "Lilo",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r3",
    name: "Alexandre Tremblay",
    rating: 5,
    location: "Amesbury / Weston",
    locationEs: "Amesbury / Weston",
    text: "Switched to Carmen & Lilo 4 months ago and never looked back. Best burst fade in the city, free parking right at 1577 Lawrence Ave, and direct WhatsApp booking.",
    textEs: "Me cambié con Carmen y Lilo hace 4 meses y fue la mejor decisión. El mejor burst fade de la ciudad, estacionamiento gratis en 1577 Lawrence Ave y reserva directa por WhatsApp.",
    barber: "Carmen",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r4",
    name: "Jason Patel",
    rating: 5,
    location: "Keele & Lawrence",
    locationEs: "Keele & Lawrence",
    text: "Took my 12 year old son for the Father & Son combo. Both barbers worked with crazy precision. Extremely polite, welcoming atmosphere, cold drinks offered. Found my forever barbers!",
    textEs: "Llevé a mi hijo de 12 años para el combo Padre e Hijo. Ambos barberos trabajaron con una precisión brutal. Sumamente educados, ambiente acogedor y bebidas frías. ¡Encontré mis barberos definitivos!",
    barber: "Carmen & Lilo",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  }
];

export interface LocalizedFAQ extends FAQItem {
  questionEs?: string;
  answerEs?: string;
}

export const FAQS: LocalizedFAQ[] = [
  {
    id: "faq-1",
    category: "pricing",
    question: "Why are your haircut prices so reasonable compared to retail shops?",
    questionEs: "¿Por qué sus precios son tan razonables en comparación con las barberías comerciales?",
    answer: "Commercial barbershops in Toronto pay $6,000–$10,000/month in retail rent, forcing high rates. Operating out of our private 1st-floor studio at 1577 Lawrence Ave W eliminates high commercial rent. We pass those savings directly to you while using the exact same professional Wahl, Andis, and Babyliss equipment.",
    answerEs: "Las barberías comerciales en Toronto pagan de $6,000 a $10,000 al mes en alquiler comercial, lo que eleva los precios. Al operar desde nuestro estudio privado en el 1er piso en 1577 Lawrence Ave W eliminamos esos costos excesivos. Le trasladamos esos ahorros directamente a usted utilizando equipos profesionales Wahl, Andis y Babyliss."
  },
  {
    id: "faq-2",
    category: "location",
    question: "How do I find Apartment 109 when I arrive at 1577 Lawrence Ave West?",
    questionEs: "¿Cómo encuentro el Apartamento 109 al llegar a 1577 Lawrence Ave West?",
    answer: "When you arrive at 1577 Lawrence Ave. West (M6L 1C4), enter the main residential lobby entrance. We are located on the ground/1st floor. Walk down the main hall to Apartment 109. Ring the doorbell or send us a WhatsApp message (`647-407-8051`) when you arrive!",
    answerEs: "Al llegar a 1577 Lawrence Ave. West (M6L 1C4), entre por la puerta principal del edificio. Estamos ubicados en la planta baja / 1er piso. Camine por el pasillo principal hasta el Apartamento 109. Toque el timbre o envíenos un mensaje por WhatsApp al 647-407-8051 cuando llegue."
  },
  {
    id: "faq-3",
    category: "booking",
    question: "Do I need an appointment or can I walk in?",
    questionEs: "¿Necesito cita previa o puedo llegar sin cita?",
    answer: "Because we offer a 1-on-1 private studio experience without a crowded waiting room, appointments via WhatsApp (`647-407-8051`) or phone (`647-407-8051`) are highly recommended to lock in your preferred time slot. Same-day appointments are often available!",
    answerEs: "Como ofrecemos una experiencia de estudio privado 1 a 1 sin salas de espera llenas, recomendamos reservar por WhatsApp (647-407-8051) o llamada para asegurar su horario preferido. ¡A menudo tenemos disponibilidad para el mismo día!"
  },
  {
    id: "faq-4",
    category: "payment",
    question: "What payment methods do you accept?",
    questionEs: "¿Qué métodos de pago aceptan?",
    answer: "We accept Cash and Interac e-Transfer. Payment is made at the end of your haircut service.",
    answerEs: "Aceptamos Efectivo y Transferencia Interac e-Transfer. El pago se realiza al finalizar su servicio de corte."
  },
  {
    id: "faq-5",
    category: "location",
    question: "Is free parking available on site?",
    questionEs: "¿Hay estacionamiento gratuito disponible?",
    answer: "Yes! 1577 Lawrence Ave West has visitor parking available on the property grounds, plus easy street parking nearby along Lawrence Ave West.",
    answerEs: "¡Sí! 1577 Lawrence Ave West cuenta con estacionamiento para visitantes en la propiedad, además de fácil estacionamiento en la calle a lo largo de Lawrence Ave West."
  }
];
