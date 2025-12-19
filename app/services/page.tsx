'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "hyperpigmentation",
    title: "Hyperpigmentation Treatment",
    description: "Advanced solutions to reduce dark spots and uneven skin tone. Specialized treatments to restore even complexion.",
    condition: "Hyperpigmentation",
    category: "Skin",
    recommendedProcedures: [
      "Chemical Peels",
      "Carbon Facial",
      "Medi Facials",
      "Microneedling",
      "IV Drips"
    ],
    details: "Hyperpigmentation occurs due to excess melanin production. Our treatments focus on exfoliation, collagen stimulation, and skin brightening to restore an even complexion.",
    image: "https://res.cloudinary.com/dlifnml9x/image/upload/v1766150275/Hyperpigmentation_Treatment_wy6b2j.webp",
    link: "/treatments/skin/hyperpigmentation"
  },
  {
    id: "acne",
    title: "Acne & Active Pimples Treatment",
    description: "Clinically proven treatments to control acne and inflammation. Deep cleansing and bacteria elimination to prevent future breakouts.",
    category: "Skin",
    condition: "Acne",
    recommendedProcedures: [
      "Advanced Hydrafacial",
      "Carbon Facial",
      "Chemical Peels",
      "High Frequency",
      "Medi Facials"
    ],
    details: "Acne is caused by clogged pores, bacteria, and inflammation. Our therapies deeply cleanse pores, reduce acne-causing bacteria, and prevent future breakouts.",
    image: "https://images.unsplash.com/photo-1564377617733-e8b90253effd?w=600&h=600&fit=crop",
    link: "/treatments/skin/acne"
  },
  {
    id: "acne-scars",
    title: "Acne Scars & Marks Treatment",
    description: "Reduce acne scars with collagen-boosting procedures. Improve skin texture and diminish scar depth.",
    condition: "Acne Marks / Scars",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Face PRP",
      "Chemical Peels"
    ],
    details: "Acne scars develop due to tissue damage. These treatments promote collagen remodeling to improve skin texture and reduce scar depth.",
    image: "https://images.unsplash.com/photo-1620916566398-aa61d5f0b827?w=600&h=600&fit=crop",
    link: "/treatments/skin/acne-scars"
  },
  {
    id: "melasma",
    title: "Melasma Treatment",
    description: "Targeted therapies for hormonal and sun-induced pigmentation. Customized protocols with gentle exfoliation and pigmentation control.",
    condition: "Melasma",
    category: "Skin",
    recommendedProcedures: [
      "Chemical Peels",
      "Carbon Facial",
      "Medi Facials",
      "Microneedling"
    ],
    details: "Melasma requires controlled and customized treatments. Our protocols focus on gentle exfoliation and pigmentation control without irritating the skin.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
    link: "/treatments/skin/melasma"
  },
  {
    id: "dark-circles",
    title: "Under-Eye Dark Circles Treatment",
    description: "Brighten and rejuvenate tired-looking under eyes. PRP therapy and microneedling improve circulation and restore radiance.",
    condition: "Under-eye Dark Circles",
    category: "Skin",
    recommendedProcedures: [
      "Face PRP",
      "Medi Facials",
      "IV Drips",
      "Microneedling"
    ],
    details: "Dark circles may result from pigmentation, hollowing, or poor circulation. Our treatments improve skin quality, hydration, and collagen production.",
    image: "https://images.unsplash.com/photo-1556575457-779305bab477?w=600&h=600&fit=crop",
    link: "/treatments/skin/dark-circles"
  },
  {
    id: "open-pores",
    title: "Open Pores Treatment",
    description: "Minimize enlarged pores and refine skin texture. Microneedling and radiofrequency stimulate collagen for tightened pores.",
    condition: "Open Pores",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Carbon Facial",
      "Medi Facials"
    ],
    details: "Enlarged pores are commonly caused by excess oil and collagen loss. These procedures tighten pores and enhance skin smoothness.",
    image: "https://images.unsplash.com/photo-1596755094514-ff4ee14644e5?w=600&h=600&fit=crop",
    link: "/treatments/skin/open-pores"
  },
  {
    id: "anti-aging",
    title: "Anti-Aging & Skin Rejuvenation",
    description: "Combat fine lines, wrinkles, and sagging skin. HIFU and PRP treatments restore firmness and youthful glow.",
    condition: "Skin Aging",
    category: "Skin",
    recommendedProcedures: [
      "HIFU",
      "MNRF (Microneedling RF)",
      "Face PRP",
      "IV Drips",
      "Medi Facials"
    ],
    details: "Aging skin benefits from collagen stimulation and skin tightening. Our treatments restore firmness, glow, and youthful texture.",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&h=600&fit=crop",
    link: "/treatments/skin/anti-aging"
  },
  {
    id: "skin-tag-removal",
    title: "Skin Tag & Mole Removal",
    description: "Safe and effective removal with minimal discomfort and quick recovery. Precision procedures with excellent cosmetic outcomes.",
    condition: "Skin Tags / Moles",
    category: "Skin",
    recommendedProcedures: [
      "Skin Tag / Mole Removal"
    ],
    details: "Non-invasive procedures ensure precise removal with minimal discomfort and downtime.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    link: "/treatments/skin/skin-tag-removal"
  },
  {
    id: "stretch-marks",
    title: "Stretch Marks Reduction",
    description: "Improve appearance of stretch marks and skin texture. Microneedling and PRP therapy reduce visibility and restore elasticity.",
    condition: "Stretch Marks",
    category: "Skin",
    recommendedProcedures: [
      "Microneedling",
      "MNRF (Microneedling RF)",
      "Face PRP"
    ],
    details: "Stretch marks occur due to rapid skin stretching. Collagen-inducing treatments help improve skin elasticity and appearance.",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&h=600&fit=crop",
    link: "/treatments/skin/stretch-marks"
  },
  {
    id: "double-chin",
    title: "Double Chin Reduction",
    description: "Non-surgical fat reduction and skin tightening. HIFU technology defines jawline and enhances facial contours.",
    condition: "Double Chin",
    category: "Skin",
    recommendedProcedures: [
      "HIFU"
    ],
    details: "HIFU tightens skin and reduces fat deposits to enhance jawline definition.",
    image: "https://images.unsplash.com/photo-1605880622519-57aa0c645bf3?w=600&h=600&fit=crop",
    link: "/treatments/skin/double-chin"
  },
  {
    id: "hair-fall",
    title: "Hair Fall & Balding Treatment",
    description: "Advanced hair restoration combining PRP and growth factor therapy. Stimulate follicles and promote natural regrowth.",
    condition: "Hair Fall / Balding",
    category: "Hair",
    recommendedProcedures: [
      "PRP + Microneedling",
      "GFC + Microneedling",
      "Meso Therapy",
      "LED Therapy"
    ],
    details: "Hair loss treatments stimulate follicles, improve scalp health, and promote natural hair regrowth.",
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e90?w=600&h=600&fit=crop",
    link: "/treatments/hair/hair-fall"
  },
  {
    id: "laser-hair-reduction",
    title: "Unwanted Hair Reduction",
    description: "Permanent hair reduction with advanced laser technology. Safe, effective, and long-lasting removal with minimal discomfort.",
    condition: "Unwanted / Ingrown Hair",
    category: "Hair",
    recommendedProcedures: [
      "Laser Hair Reduction"
    ],
    details: "Laser technology targets hair follicles to reduce unwanted hair growth safely and effectively.",
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e90?w=600&h=600&fit=crop",
    link: "/treatments/hair/laser-hair-reduction"
  },
  {
    id: "dandruff",
    title: "Dandruff Treatment",
    description: "Effective scalp treatments to control flakes and itching. Medical-grade therapies eliminate fungal growth and restore balance.",
    condition: "Dandruff",
    category: "Hair",
    recommendedProcedures: [
      "Meso Therapy",
      "LED Therapy",
      "High Frequency Comb"
    ],
    details: "These treatments soothe the scalp, control fungal growth, and restore scalp balance.",
    image: "https://images.unsplash.com/photo-1580489944761-b0a7bade59f5?w=600&h=600&fit=crop",
    link: "/treatments/hair/dandruff"
  },
  {
    id: "seborrheic-dermatitis",
    title: "Seborrheic Dermatitis Treatment",
    description: "Medical-grade solutions for chronic scalp conditions. LED and high-frequency therapy reduce inflammation and prevent flare-ups.",
    condition: "Seborrheic Dermatitis",
    category: "Hair",
    recommendedProcedures: [
      "LED Therapy",
      "High Frequency Comb",
      "Meso Therapy"
    ],
    details: "Targeted scalp therapies help reduce inflammation, redness, and recurring flakes.",
    image: "https://images.unsplash.com/photo-1580489944761-b0a7bade59f5?w=600&h=600&fit=crop",
    link:"/treatments/hair/seborrheic-dermatitis"
  },
  {
    id: "premature-greying",
    title: "Premature Greying Treatment",
    description: "Improve scalp nutrition and slow down premature greying. Regenerative therapies support melanin production and natural color.",
    condition: "Premature Greying Hair",
    category: "Hair",
    recommendedProcedures: [
      "Meso Therapy",
      "LED Therapy"
    ],
    details: "Nutritional and regenerative therapies support melanin production and scalp health.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    link: "/treatments/hair/premature-greying"
  },
  {
    id: "alopecia-areata",
    title: "Alopecia Areata Treatment",
    description: "Specialized treatments for patchy hair loss. PRP and growth factor therapy combine with microneedling to stimulate regrowth.",
    condition: "Alopecia Areata",
    category: "Hair",
    recommendedProcedures: [
      "Alopecia Areata Treatment",
      "PRP + Microneedling",
      "GFC + Microneedling"
    ],
    details: "Autoimmune-related hair loss requires focused regenerative and immune-modulating treatments.",
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e90?w=600&h=600&fit=crop",
    link: "/treatments/hair/alopecia-areata"
  }
];


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
            Our Services
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
