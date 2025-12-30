'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
  exit: (custom: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      delay: custom * 0.05,
    },
  }),
};

const highlightsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

const highlightItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const metricsVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.12,
    },
  }),
  exit: (custom: number) => ({
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
      delay: custom * 0.05,
    },
  }),
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
    sideImage: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767100873/Revive_hair_and_scalp_health_with_precision_diagnostics_m7dllw.jpg',
    focus: 'Revive Tricho Lab',
    metric: '8k+ successful hair journeys and counting',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setShowAnimation(true);
    }, 1500);

    return () => clearTimeout(preloaderTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden mt-0 xs:mt-0 sm:mt-0 bg-gradient-to-br from-white via-[#FBF9F6] to-[#F5EDE3]">
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#FBF9F6]/70 to-[#E8D5B5]/60" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-white/20 to-white/80 pointer-events-none" />
      <div 
        className="relative w-full
    px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8
    text-gray-900"
      >
        <div className="mx-auto max-w-7xl w-full flex flex-col py-10 md:py-16">
          <div className="grid gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className="flex flex-col justify-between"
                initial="hidden"
                animate={showAnimation ? "visible" : "hidden"}
                exit="exit"
                variants={textVariants}
              >
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <motion.p 
                  className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
                  variants={textVariants}
                  custom={0}
                >
                  {activeSlide.badge}
                </motion.p>
                <motion.h1 
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#8B6F47] via-[#C9A961] to-[#D4C5B9] bg-clip-text text-transparent"
                  variants={textVariants}
                  custom={1}
                >
                  {activeSlide.heading}
                </motion.h1>
                <motion.p 
                  className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
                  variants={textVariants}
                  custom={2}
                >
                  {activeSlide.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 sm:gap-3 pt-2"
                  variants={highlightsVariants}
                  initial="hidden"
                  animate={showAnimation ? "visible" : "hidden"}
                >
                  {activeSlide.highlights.map((item) => (
                    <motion.span 
                      key={item} 
                      className="rounded-full border border-[#E8D5B5] bg-[#FFFBF5] px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 text-[0.65rem] xs:text-xs sm:text-xs font-semibold uppercase tracking-widest text-[#8B6F47]"
                      variants={highlightItemVariants}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <motion.div 
                className="mt-8 xs:mt-10 sm:mt-0 flex flex-col xs:flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 xs:gap-5 sm:gap-6 text-sm text-gray-600"
                initial="hidden"
                animate={showAnimation ? "visible" : "hidden"}
              >
                <motion.div
                  variants={metricsVariants}
                  custom={0}
                >
                  <motion.p 
                    className="text-xs uppercase tracking-[0.4em] text-[#C9A961] font-semibold"
                    variants={metricsVariants}
                    custom={0}
                  >
                    Signature focus
                  </motion.p>
                  <motion.p 
                    className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mt-1"
                    variants={metricsVariants}
                    custom={1}
                  >
                    {activeSlide.focus}
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="hidden sm:block h-8 w-px bg-[#E8D5B5]"
                  variants={metricsVariants}
                  custom={2}
                />
                <motion.div
                  variants={metricsVariants}
                  custom={2}
                >
                  <motion.p 
                    className="text-xs uppercase tracking-[0.4em] text-[#C9A961] font-semibold"
                    variants={metricsVariants}
                    custom={2}
                  >
                    Result insight
                  </motion.p>
                  <motion.p 
                    className="text-sm xs:text-base sm:text-lg font-medium text-gray-900 mt-1"
                    variants={metricsVariants}
                    custom={3}
                  >
                    {activeSlide.metric}
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex gap-1.5 sm:gap-2 flex-wrap pt-2"
                initial="hidden"
                animate={showAnimation ? "visible" : "hidden"}
                variants={textVariants}
                custom={3}
              >
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`h-1 rounded-full transition-all ${index === activeIndex ? 'w-6 xs:w-8 sm:w-12 bg-[#C9A961]' : 'w-3 xs:w-4 sm:w-6 bg-[#D4C5B9]'}`}
                    aria-label={`Show ${slide.focus}`}
                    aria-current={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </motion.div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className="relative rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#E8D5B5] overflow-hidden shadow-2xl shadow-[#D4C5B9]/50 mt-8 lg:mt-0 h-48 xs:h-56 sm:h-80 md:h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={showAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  key={activeSlide.id}
                  src={activeSlide.sideImage}
                  alt={`${activeSlide.focus} visual`}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#E8D5B5]/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

