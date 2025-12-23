'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data';


export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);

  const skinServices = services.filter(service => service.category === 'Skin');
  const hairServices = services.filter(service => service.category === 'Hair');

  const ServiceGrid = ({ items }: { items: typeof services }) => (
    <motion.div 
      className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {items.map((service, index) => (
        <motion.button
          key={service.id}
          onClick={() => setSelectedService(service)}
          className="group relative overflow-hidden rounded-2xl border border-[#C9A961]/30 bg-white/90 text-left shadow-lg shadow-[#D4C5B9]/30 transition hover:-translate-y-1 hover:border-[#C9A961]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 sm:gap-8 p-4 xs:p-6 sm:p-8">
            <motion.div 
              className="relative h-40 xs:h-48 w-full sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="flex flex-col justify-center flex-grow">
              <h3 className="text-lg xs:text-xl sm:text-xl font-semibold text-[#404040]">{service.title}</h3>
              <p className="mt-2 xs:mt-3 text-xs xs:text-sm text-[#404040]/70 leading-relaxed">{service.description}</p>
              <div className="mt-4 xs:mt-6 inline-flex items-center text-xs xs:text-xs sm:text-sm font-semibold text-[#C9A961] transition group-hover:gap-2 w-fit">
                Learn more
                <svg className="ml-2 h-3 xs:h-3.5 sm:h-4 w-3 xs:w-3.5 sm:w-4 transition duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );

  return (
    <section className="w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 bg-[#FAFAF8]">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Our treatments
          </motion.p>
          <motion.h1 
            className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Signature treatments crafted for transformation
          </motion.h1>
          <motion.p 
            className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore our comprehensive range of clinically-proven treatments designed to enhance your natural beauty and wellbeing.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-10 xs:space-y-12 sm:space-y-16"
        >
          <div>
            <motion.h2 
              className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#C9A961] to-[#D4C5B9] bg-clip-text text-transparent mb-2 xs:mb-3 sm:mb-4 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Skin Treatments
            </motion.h2>
            <motion.p
              className="text-center text-xs xs:text-sm sm:text-base text-[#404040]/70 mb-8 xs:mb-10 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              Achieve radiant, youthful skin with our advanced skincare solutions.
            </motion.p>
            <ServiceGrid items={skinServices} />
          </div>

          <div>
            <motion.h2 
              className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#C9A961] to-[#D4C5B9] bg-clip-text text-transparent mb-2 xs:mb-3 sm:mb-4 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Hair Treatments
            </motion.h2>
            <motion.p
              className="text-center text-xs xs:text-sm sm:text-base text-[#404040]/70 mb-8 xs:mb-10 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              Restore healthy, vibrant hair with our specialized treatments.
            </motion.p>
            <ServiceGrid items={hairServices} />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1516]/70 px-2 xs:px-3 sm:px-4 py-4 xs:py-6 sm:py-10 overflow-y-auto"
            onClick={() => setSelectedService(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl sm:rounded-[32px] border border-[#C9A961]/30 bg-white p-4 xs:p-6 sm:p-8 text-left shadow-2xl shadow-[#D4C5B9]/40"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-3 xs:right-4 sm:right-6 top-3 xs:top-4 sm:top-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040] hover:text-[#C9A961] transition"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>
            <motion.div 
              className="space-y-4 xs:space-y-6 sm:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <motion.div 
                  className="relative h-14 xs:h-16 sm:h-20 w-14 xs:w-16 sm:w-20 overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.h2 
                  className="mt-4 xs:mt-6 sm:mt-8 text-2xl xs:text-3xl sm:text-4xl font-bold text-[#404040]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedService.title}
                </motion.h2>
              </div>
              <motion.div 
                className="space-y-3 xs:space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p 
                  className="text-xs xs:text-sm sm:text-base text-[#404040]/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  {selectedService.details}
                </motion.p>
                <div>
                  <motion.p 
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-2 xs:mb-3 sm:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Recommended Procedures
                  </motion.p>
                  <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                    {selectedService.recommendedProcedures.map((procedure, idx) => (
                      <motion.li 
                        key={procedure} 
                        className="flex items-start gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm sm:text-base text-[#404040]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + idx * 0.08 }}
                      >
                        <span className="mt-1.5 xs:mt-2 h-2 xs:h-2.5 w-2 xs:w-2.5 rounded-full bg-[#C9A961] flex-shrink-0" />
                        {procedure}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <Link
                  href={selectedService.link}
                  className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#B8935D] mt-4"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    Explore {selectedService.title}
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
