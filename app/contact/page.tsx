'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Get In Touch</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]">
            We&apos;d love to hear from you
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Have questions about our treatments or want to schedule a consultation? Reach out to our team and we&apos;ll be in touch within one business day.
          </p>
        </div>

        <div className="grid gap-8 xs:gap-10 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-6 xs:space-y-8 sm:space-y-10">
            <div>
              <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961]">Contact Information</p>
              <h3 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl font-semibold text-[#404040]">Dermacharm Aesthetics</h3>
            </div>

            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              <div className="flex gap-3 xs:gap-4 sm:gap-6">
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.14 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">Phone</p>
                  <Link href="tel:+918005051055" className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040] hover:text-[#C9A961] transition">
                    +91 800-505-1055
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 xs:gap-4 sm:gap-6">
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">Email</p>
                  <Link href="mailto:hello@dermacharm.in" className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040] hover:text-[#C9A961] transition break-all">
                    dermacharmaesthetics@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 xs:gap-4 sm:gap-6">
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">Hours</p>
                  <p className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040]">9:00 AM – 8:00 PM</p>
                  <p className="text-xs xs:text-xs sm:text-sm text-[#404040]/70">Monday to Sunday</p>
                </div>
              </div>
            </div>

            <div className="pt-4 xs:pt-6 sm:pt-8">
              <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-3 xs:mb-4">Follow Us</p>
              <div className="flex gap-3 xs:gap-4">
                <Link href="https://www.instagram.com/dermacharmaesthetics/" target="_blank" rel="noopener noreferrer" className="flex h-10 xs:h-12 w-10 xs:w-12 items-center justify-center rounded-lg xs:rounded-xl bg-[#E8DCC8] text-[#C9A961] hover:bg-[#C9A961] hover:text-white transition">
                  <svg className="h-5 xs:h-6 w-5 xs:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </Link>
                <Link href="https://wa.me/918000222111" target="_blank" rel="noopener noreferrer" className="flex h-10 xs:h-12 w-10 xs:w-12 items-center justify-center rounded-lg xs:rounded-xl bg-[#E8DCC8] text-[#C9A961] hover:bg-[#C9A961] hover:text-white transition">
                  <svg className="h-5 xs:h-6 w-5 xs:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 0 0-5.031 1.378c-3.055 2.2-5.02 5.97-5.02 10.006 0 5.035 3.362 9.424 7.926 9.424h.642a10.004 10.004 0 0 0 7.926-3.712l.526-1.297-3.239-.474-.474 3.144a9.888 9.888 0 0 1-5.39 1.625h-.642c-3.159 0-5.697-2.191-5.697-4.978 0-2.487 1.565-4.782 3.7-5.480a9.877 9.877 0 0 1 4.316-.722c1.67 0 3.295.235 4.823.684l1.287-3.953A9.9 9.9 0 0 0 12.051 6.98Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/50 bg-white/90 p-4 xs:p-6 sm:p-8 shadow-lg shadow-[#D4C5B9]/30">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Send us a message</p>
            <h3 className="mt-2 xs:mt-3 sm:mt-4 text-lg xs:text-xl sm:text-2xl font-semibold text-[#404040]">We&apos;ll get back to you shortly</h3>

            <form onSubmit={handleSubmit} className="mt-4 xs:mt-6 sm:mt-8 space-y-3 xs:space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="+91 8000 222 111"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#C9A961] px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-[#D4C5B9]/60 transition hover:-translate-y-0.5 hover:shadow-[#D4C5B9]/80 hover:bg-[#B8935D] mt-4 xs:mt-5 sm:mt-6"
              >
                Send Message
              </button>

              {submitted && (
                <div className="rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-xs xs:text-xs sm:text-sm font-medium text-[#404040] text-center">
                  ✓ Message sent successfully! We&apos;ll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
