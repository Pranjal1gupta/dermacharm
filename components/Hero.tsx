// 


'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Slide = {
  id: string;
  badge: string;
  heading: string;
  description: string;
  highlights: string[];
  image: string;
  sideImage: string;
  focus: string;
  metric: string;
};

const slides: Slide[] = [
  {
    id: 'radiance',
    badge: 'Dermacharm Aesthetics',
    heading: 'Radiance programs blending laser resurfacing with regenerative care',
    description: 'Tailored glow plans that combine pigment correction, collagen restoration, and soothing biocare to unveil balanced luminosity.',
    highlights: ['Laser resurfacing', 'Collagen induction', 'Barrier repair'],
    image: '/hero-slide-1.svg',
    sideImage: 'https://www.laserskincarehome.com/wp-content/uploads/2025/09/Fractional-Laser-1-1.jpg',
    focus: 'Glow Reset Series',
    metric: '92% clients notice smoother tone in 4 weeks',
  },
  {
    id: 'confidence',
    badge: 'Teal Signature Care',
    heading: 'Confidence rituals for sculpted contours and lifted profiles',
    description: 'Advanced injectables, contouring devices, and lymphatic therapies orchestrated to enhance your natural definition.',
    highlights: ['Contours & lift', 'Bio-fillers', 'Sonic lymphatic'],
    image: '/hero-slide-2.svg',
    sideImage: 'https://static.wixstatic.com/media/11062b_5a4855ceb3e844f88266b2b555f6f60a~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facial.jpg',
    focus: 'Contour Atelier',
    metric: 'Personalized plans with certified dermatologists',
  },
  {
    id: 'revive',
    badge: 'Clinically Curated',
    heading: 'Revive hair and scalp health with precision diagnostics',
    description: 'Scalp mapping, PRP boosters, and LED rejuvenation converge to strengthen follicles and restore confident volume.',
    highlights: ['PRP boost', 'LED rejuvenation', 'Nutrient infusions'],
    image: '/hero-slide-3.svg',
    sideImage: 'https://static.glossgenius.com/public/service/927c7da91558b470456567fd78eeae0cc63978d3/image/91d7a4a3a5dfe35dcf0aae4b0ceff560.jpg',
    focus: 'Revive Tricho Lab',
    metric: '8k+ successful hair journeys and counting',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden mt-0 xs:mt-0 sm:mt-0" style={{ height: '100vh' }}>
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.focus} visual`}
              fill
              priority={index === activeIndex}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#404040]/70 via-[#6B5D52]/40 to-[#C9A961]/20" />
          </div>
        ))}
      </div>
      <div 
        className="relative w-full px-2 xs:px-3 sm:px-4 pb-6 xs:pb-8 sm:pb-10 pt-8 xs:pt-10 sm:pt-12 lg:pt-16 text-white"
        style={{ height: '100vh' }}
      >
        <div className="mx-auto max-w-7xl h-full flex flex-col justify-end">
          <div className="grid gap-3 xs:gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-[1.1fr_0.9fr] flex-1">
            <div className="flex flex-col justify-between">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">{activeSlide.badge}</p>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{activeSlide.heading}</h1>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{activeSlide.description}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                  {activeSlide.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-white/30 bg-white/10 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 text-[0.65rem] xs:text-xs sm:text-xs font-semibold uppercase tracking-widest text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col xs:flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 xs:gap-5 sm:gap-6 text-sm text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signature focus</p>
                  <p className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mt-1">{activeSlide.focus}</p>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/20" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Result insight</p>
                  <p className="text-sm xs:text-base sm:text-lg font-medium text-white mt-1">{activeSlide.metric}</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-2 flex-wrap pt-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`h-1 rounded-full transition-all ${index === activeIndex ? 'w-6 xs:w-8 sm:w-12 bg-[#C9A961]' : 'w-3 xs:w-4 sm:w-6 bg-white/40'}`}
                    aria-label={`Show ${slide.focus}`}
                    aria-current={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/40 overflow-hidden shadow-2xl shadow-[#D4C5B9]/30 mt-8 lg:mt-0 lg:h-[600px]">
              <Image
                key={activeSlide.id}
                src={activeSlide.sideImage}
                alt={`${activeSlide.focus} visual`}
                fill
                priority
                className="object-cover transition-opacity duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C9A961]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
