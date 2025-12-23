'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const galleryImages = [
  { id: 'oasis', src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1764140088/store-images/store_1764140088836_mxyxi528g.webp', alt: 'Calming wellness lounge' },
  { id: 'radiance', src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1764140230/store-images/store_1764140230120_jxkvocq1v.webp', alt: 'Skin therapy suite with natural light' },
  { id: 'serum-lab', src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1764140236/store-images/store_1764140236741_rqtszz7s2.webp', alt: 'Advanced serum laboratory setup' },
  { id: 'scalp-studio', src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1764140088/store-images/store_1764140088836_mxyxi528g.webp', alt: 'Premium scalp treatment studio' },
  { id: 'laser-lounge', src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1764140230/store-images/store_1764140230120_jxkvocq1v.webp', alt: 'Laser treatment technology room' },
  { id: 'ritual-bay', src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1764140236/store-images/store_1764140236741_rqtszz7s2.webp', alt: 'Minimalist ritual bay' },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 bg-[#FAFAF7] px-2 xs:px-3 sm:px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#404040] text-center mb-4 xs:mb-6 sm:mb-8"
          variants={headerVariants}
        >
          Gallery
        </motion.h2>
        <motion.h3 
          className="text-center text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mb-6 xs:mb-8 sm:mb-10 md:mb-12"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Explore our state-of-the-art facilities and treatments.
        </motion.h3>

        <div
          className="relative mx-auto w-full"
          style={{
            height: 'clamp(280px, 60vw, 480px)',
            perspective: '1400px',
          }}
        >
          <div className="relative w-full h-full">
            {galleryImages.map((img, index) => {
              const offset = (index - activeIndex + galleryImages.length) % galleryImages.length;

              let translateX = 0;
              let rotateY = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              const baseTranslate = isMobile ? 120 : 260;

              if (offset === 0) {
                translateX = 0;
                rotateY = 0;
                scale = 1.1;
                zIndex = 50;
              } else if (offset === 1) {
                translateX = baseTranslate;
                rotateY = -40;
                scale = 0.8;
                zIndex = 20;
                opacity = 0.6;
              } else if (offset === galleryImages.length - 1) {
                translateX = -baseTranslate;
                rotateY = 40;
                scale = 0.8;
                zIndex = 20;
                opacity = 0.6;
              } else {
                opacity = 0;
                zIndex = 0;
                scale = 0.5;
              }

              return (
                <motion.div
                  key={img.id}
                  className="absolute top-1/2 left-1/2 rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
                  initial={false}
                  animate={{
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                  style={{
                    width: 'clamp(200px, 50vw, 320px)',
                    height: 'clamp(260px, 65vw, 400px)',
                    transformStyle: 'preserve-3d',
                    transform: `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.button
            onClick={prevSlide}
            className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 text-xl xs:text-2xl sm:text-3xl md:text-4xl bg-white border border-[#C9A961]/40 shadow-xl px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full hover:bg-[#C9A961] hover:text-white hover:border-[#C9A961] z-40 flex-shrink-0 text-[#404040]"
            aria-label="Previous slide"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            ‹
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 text-xl xs:text-2xl sm:text-3xl md:text-4xl bg-white border border-[#C9A961]/40 shadow-xl px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full hover:bg-[#C9A961] hover:text-white hover:border-[#C9A961] z-40 flex-shrink-0 text-[#404040]"
            aria-label="Next slide"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            ›
          </motion.button>
        </div>

        <motion.div 
          className="mt-6 xs:mt-16 sm:mt-10 md:mt-12 text-center px-4 xs:px-6 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#404040] mb-8 xs:mb-8 sm:mb-10 md:mb-12"
            variants={headerVariants}
          >
            Get in Touch
          </motion.h3>
          <motion.div 
            className="flex flex-col xs:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 justify-center items-center"
            variants={containerVariants}
          >
            <motion.a
              href="tel:+918005051055"
              className="flex items-center gap-2 xs:gap-3 text-sm sm:text-base md:text-lg text-[#404040] hover:text-[#C9A961] transition-colors duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[#C9A961]" />
              <span>+91 800-505-1055</span>
            </motion.a>
            <motion.div 
              className="w-full xs:w-px h-px xs:h-8 bg-[#C9A961]/30"
            />
            <motion.a
              href="mailto:dermacharmaesthetics@gmail.com"
              className="flex items-center gap-2 xs:gap-3 text-sm sm:text-base md:text-lg text-[#404040] hover:text-[#C9A961] transition-colors duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[#C9A961]" />
              <span>dermacharmaesthetics@gmail.com</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
