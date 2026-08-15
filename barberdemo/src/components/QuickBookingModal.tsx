import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Scissors, Phone, MapPin } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, LocalizedServiceItem } from '../data';
import { BookingState } from '../types';
import { useLanguage } from '../LanguageContext';
import { WhatsAppIcon } from './Icons';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const { lang, t } = useLanguage();
  const [booking, setBooking] = useState<BookingState>({
    serviceId: initialServiceId || SERVICES[0].id,
    barber: 'Any Available',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    name: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    if (initialServiceId) {
      setBooking((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const selectedServiceObj: LocalizedServiceItem = SERVICES.find((s) => s.id === booking.serviceId) || SERVICES[0];
  const serviceName = lang === 'es' && selectedServiceObj.nameEs ? selectedServiceObj.nameEs : selectedServiceObj.name;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const isEs = lang === 'es';
    const textMessage = isEs
      ? `¡Hola Carmen y Lilo! 👋\n\nMe gustaría reservar una cita en Apartment 109:\n\n✂️ *Servicio:* ${serviceName}\n💈 *Barbero:* ${booking.barber}\n📅 *Fecha:* ${booking.date}\n⏰ *Hora:* ${booking.time}\n👤 *Nombre:* ${booking.name || 'No proporcionado'}\n📱 *Teléfono:* ${booking.phone || 'No proporcionado'}\n${booking.notes ? `📝 *Notas:* ${booking.notes}` : ''}\n\nPor favor confirmen disponibilidad para 1577 Lawrence Ave W, Apt 109. ¡Gracias!`
      : `Hello Carmen & Lilo! 👋\n\nI'd like to book an appointment at Apartment 109:\n\n✂️ *Service:* ${serviceName}\n💈 *Barber:* ${booking.barber}\n📅 *Date:* ${booking.date}\n⏰ *Time Slot:* ${booking.time}\n👤 *Name:* ${booking.name || 'Not provided'}\n📱 *Phone:* ${booking.phone || 'Not provided'}\n${booking.notes ? `📝 *Notes:* ${booking.notes}` : ''}\n\nPlease confirm availability for 1577 Lawrence Ave W, Apt 109. Thank you!`;

    const encoded = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/16474078051?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
    '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM',
    '05:30 PM', '06:30 PM', '07:15 PM'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#1c1d1c] border-2 border-[#D4AF37] rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="bg-[#141514] border-b border-[#D4AF37]/30 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#242524] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif-header text-white leading-tight uppercase">
                  {t('bookModalTitle')}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> 1577 LAWRENCE AVE W • PRIVATE STUDIO
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#242524] border border-gray-700 hover:border-[#D4AF37] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Booking Form Body */}
          <form onSubmit={handleSendWhatsApp} className="p-6 space-y-6">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                1. {t('stepService')}:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                {SERVICES.map((srv: LocalizedServiceItem) => {
                  const sName = lang === 'es' && srv.nameEs ? srv.nameEs : srv.name;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setBooking({ ...booking, serviceId: srv.id })}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        booking.serviceId === srv.id
                          ? 'bg-[#242524] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'bg-[#141514] border-gray-800 hover:border-gray-600'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">{sName}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{srv.duration}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Barber */}
            <div>
              <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                2. {t('stepBarber')}:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Carmen', 'Lilo', 'Any Available'] as const).map((b) => {
                  const barberLabel = b === 'Any Available' && lang === 'es' ? 'Cualquiera' : b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBooking({ ...booking, barber: b })}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                        booking.barber === b
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                          : 'bg-[#141514] text-gray-300 border-gray-800 hover:border-gray-600'
                      }`}
                    >
                      {barberLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {t('stepDate')}:
                </label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141514] border border-gray-700 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {t('stepTime')}:
                </label>
                <select
                  value={booking.time}
                  onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141514] border border-gray-700 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                  {t('yourName')}:
                </label>
                <input
                  type="text"
                  placeholder={lang === 'es' ? 'Ej. Mateo Silva' : 'e.g. Michael Smith'}
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141514] border border-gray-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                  {t('phoneNumber')}:
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 647-555-0199"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141514] border border-gray-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                {t('customNotes')}:
              </label>
              <input
                type="text"
                placeholder={lang === 'es' ? 'Ej. Fade bajo, raya lateral...' : 'e.g. Low skin fade, hard part, long top...'}
                value={booking.notes}
                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#141514] border border-gray-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 fill-black text-black" /> {t('sendWhatsAppBtn')}
              </button>

              <a
                href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                className="py-3.5 px-5 rounded-xl bg-[#242524] hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-gray-700"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" /> {t('callDirectBtn')}
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

