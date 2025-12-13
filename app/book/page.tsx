'use client';

import { FormEvent, useState } from 'react';

const treatmentTypes = [
  'Skin Consultation',
  'Hair Consultation',
  'Laser Treatment',
  'Aesthetic Consultation',
  'General Inquiry',
];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatmentType: '',
    preferredDate: '',
    preferredTime: '',
    concerns: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', treatmentType: '', preferredDate: '', preferredTime: '', concerns: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Schedule Your Visit</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]">
            Book your personalized consultation
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Secure your appointment with our board-certified dermatologists. Our concierge team will confirm your booking within one business day.
          </p>
        </div>

        <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/50 bg-white/90 p-4 xs:p-6 sm:p-8 md:p-10 shadow-lg shadow-[#D4C5B9]/30">
          <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="book-name" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Full Name *
                </label>
                <input
                  id="book-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="book-email" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Email Address *
                </label>
                <input
                  id="book-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="book-phone" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Phone Number *
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="+91 8000 222 111"
                />
              </div>

              <div>
                <label htmlFor="book-treatment" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Treatment Type *
                </label>
                <select
                  id="book-treatment"
                  required
                  value={formData.treatmentType}
                  onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                >
                  <option value="">Select a treatment type</option>
                  {treatmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="book-date" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Preferred Date *
                </label>
                <input
                  id="book-date"
                  type="date"
                  required
                  min={minDate}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                />
              </div>

              <div>
                <label htmlFor="book-time" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Preferred Time *
                </label>
                <select
                  id="book-time"
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="book-concerns" className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                Your Concerns & Goals (Optional)
              </label>
              <textarea
                id="book-concerns"
                rows={4}
                value={formData.concerns}
                onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40 resize-none"
                placeholder="Tell us about your skin/hair concerns and what you hope to achieve..."
              />
            </div>

            <div className="space-y-3 xs:space-y-4 sm:space-y-5 pt-2 xs:pt-3 sm:pt-4">
              <button
                type="submit"
                className="w-full rounded-full bg-[#C9A961] px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-[#D4C5B9]/60 transition hover:-translate-y-0.5 hover:shadow-[#D4C5B9]/80 hover:bg-[#B8935D]"
              >
                Confirm Booking
              </button>

              {submitted && (
                <div className="rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] px-3 xs:px-4 sm:px-6 py-3 xs:py-4 sm:py-5 text-xs xs:text-xs sm:text-sm font-medium text-[#404040] text-center">
                  <p className="font-semibold">✓ Booking request received!</p>
                  <p className="mt-1 text-[#404040]/70">Our concierge team will confirm your appointment within one business day.</p>
                </div>
              )}
            </div>

            <p className="text-xs text-[#404040]/60 text-center pt-2">
              * Required fields. We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
