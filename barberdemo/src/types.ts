export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
  includes: string[];
}

export interface PortfolioImage {
  id: string;
  url: string;
  title: string;
  category: 'fades' | 'beards' | 'scissors' | 'lineups';
  alt: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  location: string;
  text: string;
  barber: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'location' | 'booking' | 'payment';
}

export interface BookingState {
  serviceId: string;
  barber: 'Carmen' | 'Lilo' | 'Any Available';
  date: string;
  time: string;
  name: string;
  phone: string;
  notes: string;
}
