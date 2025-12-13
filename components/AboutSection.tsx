'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const treatmentSlides = [
  {
    id: 'laser-artistry',
    caption: 'Laser artistry session',
    detail: 'Hybrid resurfacing mapped to facial contours',
    src: 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?fm=jpg&q=80&w=800&ixlib=rb-4.1.0',
  },
  {
    id: 'cellular-regen',
    caption: 'Cellular regeneration lab',
    detail: 'PRP boosters blended with light therapy',
    src: 'https://images.unsplash.com/photo-1742280159636-3a06652ac9d9?fm=jpg&q=80&w=800&ixlib=rb-4.1.0',
  },
  {
    id: 'scalp-ritual',
    caption: 'Scalp ritual suite',
    detail: 'Detox massage paired with growth factors',
    src: 'https://static.glossgenius.com/public/service/927c7da91558b470456567fd78eeae0cc63978d3/image/91d7a4a3a5dfe35dcf0aae4b0ceff560.jpg',
  },
];

const careHighlights = [
  'Board-certified trichology and aesthetic dermatology under one roof',
  'Evidence-led protocols complemented with hormonal and nutritional profiling',
  'Concierge follow-ups with digital skin journals for measurable progress',
  'Private therapy pods designed for sensory calm and post-care recovery',
];

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % treatmentSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = treatmentSlides[activeSlide];

  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 ">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">About Dermacharm</p>
          <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#404040]">Where medical precision meets sensorial calm</h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Founded by Dr. Anurag Agrahari, Dermacharm Aesthetics integrates cutting-edge dermatological science with
            luxurious wellness experiences, delivering personalized treatments that honor both clinical excellence and
            holistic patient care.
          </p>
        </div>

        <div className="grid items-center gap-6 xs:gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Founder</p>
              <h3 className="mt-1 xs:mt-2 sm:mt-3 text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-[#404040]">Dr. Anurag Agrahari</h3>
              <p className="mt-1.5 xs:mt-2 sm:mt-2 text-xs xs:text-sm sm:text-base text-[#404040]/70 leading-relaxed">
                Board-certified dermatologist with extensive expertise in aesthetic and regenerative medicine. Dedicated to
                crafting personalized treatment protocols that combine cutting-edge clinical technology with holistic
                wellness for transformative skin and hair health.
              </p>
            </div>
            <div className="grid gap-2 xs:gap-3 sm:gap-4 grid-cols-2">
              <div className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/50 bg-white px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-6 shadow-lg shadow-[#D4C5B9]/30">
                <p className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#C9A961]">18+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#404040]/60 mt-1">Years of expertise</p>
              </div>
              <div className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/50 bg-white px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-6 shadow-lg shadow-[#D4C5B9]/30">
                <p className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#C9A961]">9k+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#404040]/60 mt-1">Revived journeys</p>
              </div>
            </div>
            <p className="text-xs xs:text-sm sm:text-base text-[#404040] leading-relaxed">
              &quot;Every protocol is sketched from lab diagnostics, emotional wellbeing, and biomimetic actives. We believe in
              rituals that respect physiology and truly transform the stories skin wants to tell.&quot;
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] border border-[#C9A961]/50 bg-gradient-to-br from-white via-[#FAFAF8] to-[#E8DCC8] shadow-2xl shadow-[#D4C5B9]/50">
              <Image src="https://res.cloudinary.com/dlifnml9x/image/upload/v1765614239/524812885_18515732488065041_7772136519625680684_n_1_bubo6d.webp" alt="Dr. Anurag Agrahari, Founder" fill priority className="object-cover" />
            </div>
            <div className="absolute -bottom-2 xs:-bottom-3 sm:-bottom-6 right-2 xs:right-3 sm:right-6 rounded-lg xs:rounded-lg sm:rounded-2xl border border-[#C9A961]/60 bg-[#C9A961] px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-white shadow-xl shadow-[#C9A961]/40">
              <p className="text-[0.65rem] xs:text-xs uppercase tracking-[0.4em] text-white/70">Credentials</p>
              <p className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold mt-0.5 xs:mt-1">Fellow, American Academy of Dermatology</p>
              <p className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold">Member, Global Regenerative Council</p>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C9A961]/40 bg-white/90 shadow-2xl shadow-[#D4C5B9]/40">
            <div className="relative h-64 sm:h-80 w-full">
              {treatmentSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image src={slide.src} alt={slide.caption} fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
                  <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 rounded-lg sm:rounded-2xl bg-white/90 px-4 sm:px-6 py-3 sm:py-4 text-[#404040]">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961]">{slide.caption}</p>
                    <p className="text-sm sm:text-base font-medium mt-1">{slide.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-[#C9A961]/20 bg-white/90 px-3 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev - 1 + treatmentSlides.length) % treatmentSlides.length)}
                className="rounded-full border border-[#C9A961]/50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#404040] transition hover:bg-[#C9A961]/10 hover:border-[#C9A961]"
              >
                Prev
              </button>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {treatmentSlides.map((slide, index) => (
                  <span key={slide.id} className={`h-1 rounded-full transition-all ${index === activeSlide ? 'w-8 sm:w-10 bg-[#C9A961]' : 'w-3 sm:w-4 bg-[#E0E0E0]'}`} />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % treatmentSlides.length)}
                className="rounded-full border border-[#C9A961]/50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#404040] transition hover:bg-[#C9A961]/10 hover:border-[#C9A961]"
              >
                Next
              </button>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Why patients choose us</p>
            <h4 className="text-2xl sm:text-3xl font-semibold text-[#404040]">Treatment suites choreographed for measurable calm</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#404040]/80">
              {careHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#C9A961] flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
