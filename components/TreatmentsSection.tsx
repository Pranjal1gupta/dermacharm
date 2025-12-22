'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data';

const treatments = services
  .filter((service) => service.featured === true)
  .map((service) => ({
    id: service.id,
    name: service.title,
    image: service.image,
    shortDescription: service.description,
    description: service.details,
    benefits: service.recommendedProcedures,
  }));

const truncateCopy = (text: string) => (text.length > 120 ? `${text.slice(0, 118).trim()}.....` : text);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

export default function TreatmentsSection() {
  const [selectedTreatment, setSelectedTreatment] = useState<(typeof treatments)[number] | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FAFAF8] to-[#F5F2EE] w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 overflow-visible">
      <div className="mx-auto max-w-7xl overflow-visible">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.p 
            className="text-sm lg:text-base font-semibold uppercase tracking-[0.4em] text-[#C9A961] mb-4"
            variants={cardVariants}
          >
            Curated Protocol Index
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#404040] leading-tight mb-6 lg:mb-8 max-w-4xl mx-auto"
            variants={cardVariants}
          >
            List Of Treatments At  Dermacharm Aesthetics
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-3xl text-sm sm:text-base lg:text-lg text-[#404040]/80 leading-relaxed"
            variants={cardVariants}
          >
            Immerse in multi-sensory dermatology that fuses clinical precision with deeply restorative rituals for skin,
            scalp, and total complexion health.
          </motion.p>
        </motion.div>

        {/* Treatments Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {treatments.map((treatment) => (
            <motion.div 
              key={treatment.id} 
              className="group relative overflow-hidden rounded-2xl h-56 lg:h-64 shadow-2xl shadow-[#D4C5B9]/30 hover:shadow-3xl hover:shadow-[#C9A961]/20 transition-all duration-500 border border-[#C9A961]/20 hover:border-[#C9A961]/40 cursor-pointer"
              onClick={() => setSelectedTreatment(treatment)}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Background Image */}
              <Image 
                src={treatment.image} 
                alt={treatment.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300" 
                priority={false}
              />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Front Card Content */}
              <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-end">
                <h3 className="text-base lg:text-lg font-bold text-white text-center mb-1 leading-tight">{treatment.name}</h3>
                <p className="text-xs text-white/80 text-center font-medium uppercase tracking-wider">
                  Tap to explore
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/95 to-[#E8DCC8]/95 p-4 lg:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                <p className="text-xs lg:text-sm font-medium leading-relaxed text-white/95 mb-4">
                  {truncateCopy(treatment.shortDescription)}
                </p>
                <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-1.5 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white">Preview</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Link href="/services">
            <button className="group relative px-8 lg:px-12 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-sm lg:text-base overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Explore Our Treatments</span>
              <div className="absolute inset-0 bg-white/20 -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#404040]/80 backdrop-blur-sm p-4" 
            onClick={() => setSelectedTreatment(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl rounded-3xl border-2 border-[#C9A961]/30 bg-white/95 backdrop-blur-xl shadow-3xl shadow-[#D4C5B9]/40"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg shadow-[#C9A961]/30 flex items-center justify-center text-xl lg:text-2xl font-bold text-[#404040] hover:text-[#C9A961] hover:bg-[#C9A961]/10 hover:scale-110 transition-all duration-200 z-10"
              onClick={() => setSelectedTreatment(null)}
            >
              ✕
            </button>

            <div className="p-6 lg:p-8 max-h-[85vh] overflow-y-auto">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-start">
                {/* Image */}
                <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAFAF8] to-[#F0EDE8] group flex-shrink-0 shadow-2xl shadow-[#D4C5B9]/20 border border-[#C9A961]/20">
                  <Image 
                    src={selectedTreatment.image} 
                    alt={selectedTreatment.name}
                    fill 
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-700" />
                </div>

                {/* Content */}
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <p className="text-xs lg:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961] mb-2">Treatment Blueprint</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#404040] leading-tight">{selectedTreatment.name}</h2>
                  </div>
                  
                  <p className="text-sm lg:text-base text-[#404040]/80 leading-relaxed">{selectedTreatment.description}</p>
                  
                  <ul className="space-y-2 lg:space-y-3">
                    {selectedTreatment.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 lg:gap-4 group">
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] rounded-full mt-1.5 lg:mt-2 flex-shrink-0 animate-pulse group-hover:scale-125 transition-transform duration-200" />
                        <span className="text-sm lg:text-base text-[#404040] leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full lg:w-auto group relative px-6 lg:px-10 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-xs lg:text-sm overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300">
                    <span className="relative z-10">Book Consultation</span>
                    <div className="absolute inset-0 bg-white/20 -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>
                </div>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
