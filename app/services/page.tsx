'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 'skin-therapy',
    title: 'Skin Therapy Studio',
    description: 'Custom facials, HydraGlow rituals, and pigment-correcting programs for luminous skin.',
    icon: '✨',
    details: 'Our skin therapy studio combines advanced clinical treatments with luxurious spa rituals designed to address every skin concern. From acne and sensitivity to aging and hyperpigmentation, we create personalized protocols tailored to your unique complexion.',
    benefits: ['Customized facials', 'Hydration boosters', 'Pigment correction', 'Barrier repair'],
    link: '/treatments/skin',
  },
  {
    id: 'hair-revive',
    title: 'Hair Revive Lounge',
    description: 'Scalp detox, PRP stimulation, and strengthening boosters that restore fuller strands.',
    icon: '💆‍♀️',
    details: 'Transform your hair health with our comprehensive scalp analysis and regenerative treatments. We combine scientific diagnostics with proven therapies to strengthen follicles, reduce thinning, and restore volume.',
    benefits: ['Scalp analysis', 'PRP therapy', 'LED rejuvenation', 'Growth stimulation'],
    link: '/treatments/hair',
  },
  {
    id: 'laser-atelier',
    title: 'Laser Atelier',
    description: 'Next-gen diode and Q-switch lasers for scar revision, hair reduction, and resurfacing.',
    icon: '⚡',
    details: 'Experience cutting-edge laser technology administered by board-certified professionals. Our laser suite offers precision treatments for tattoo removal, hair reduction, scar revision, and skin resurfacing.',
    benefits: ['Hair removal', 'Scar revision', 'Tattoo removal', 'Skin resurfacing'],
    link: '/treatments/laser',
  },
  {
    id: 'aesthetic-artistry',
    title: 'Aesthetic Artistry',
    description: 'Injectables, contouring, and regenerative treatments that enhance natural harmony.',
    icon: '🌸',
    details: 'Achieve facial harmony and natural enhancement through artfully administered injectables and contouring treatments. Our aesthetic specialists focus on enhancing your unique features while maintaining your natural expression.',
    benefits: ['Volume restoration', 'Contour enhancement', 'Expression refinement', 'Natural results'],
    link: '/treatments/aesthetic',
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);

  return (
    <section className="w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Our Services</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]">
            Signature treatments crafted for transformation
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Explore our comprehensive range of clinically-proven treatments designed to enhance your natural beauty and wellbeing.
          </p>
        </div>

        <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative overflow-hidden rounded-2xl border border-[#C9A961]/30 bg-white/90 p-4 xs:p-6 sm:p-8 text-left shadow-lg shadow-[#D4C5B9]/30 transition hover:-translate-y-1 hover:border-[#C9A961]"
            >
              <div className="flex h-12 xs:h-14 sm:h-16 w-12 xs:w-14 sm:w-16 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] text-2xl xs:text-3xl sm:text-4xl text-[#404040]">
                {service.icon}
              </div>
              <h3 className="mt-4 xs:mt-6 sm:mt-8 text-lg xs:text-xl sm:text-2xl font-semibold text-[#404040]">{service.title}</h3>
              <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#404040]/70 leading-relaxed">{service.description}</p>
              <div className="mt-4 xs:mt-6 sm:mt-8 inline-flex items-center text-xs xs:text-xs sm:text-sm font-semibold text-[#C9A961] transition group-hover:gap-2">
                Learn more
                <svg className="ml-2 h-3 xs:h-3.5 sm:h-4 w-3 xs:w-3.5 sm:w-4 transition duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1516]/70 px-2 xs:px-3 sm:px-4 py-4 xs:py-6 sm:py-10 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl sm:rounded-[32px] border border-[#C9A961]/30 bg-white p-4 xs:p-6 sm:p-8 text-left shadow-2xl shadow-[#D4C5B9]/40"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-3 xs:right-4 sm:right-6 top-3 xs:top-4 sm:top-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040] hover:text-[#C9A961] transition"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>
            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              <div>
                <div className="flex h-14 xs:h-16 sm:h-20 w-14 xs:w-16 sm:w-20 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] text-3xl xs:text-4xl sm:text-5xl text-[#404040]">
                  {selectedService.icon}
                </div>
                <h2 className="mt-4 xs:mt-6 sm:mt-8 text-2xl xs:text-3xl sm:text-4xl font-bold text-[#404040]">{selectedService.title}</h2>
              </div>
              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <p className="text-xs xs:text-sm sm:text-base text-[#404040]/80 leading-relaxed">{selectedService.details}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-2 xs:mb-3 sm:mb-4">Key Benefits</p>
                  <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                    {selectedService.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm sm:text-base text-[#404040]">
                        <span className="mt-1.5 xs:mt-2 h-2 xs:h-2.5 w-2 xs:w-2.5 rounded-full bg-[#C9A961] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                href={selectedService.link}
                className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#B8935D] mt-4"
              >
                Explore {selectedService.title}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
