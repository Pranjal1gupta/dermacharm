'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { treatmentSlides, careHighlights, docSpecialties } from '@/lib/data';

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

interface AboutSectionProps {
  showFullContent?: boolean;
}

export default function AboutSection({ showFullContent = false }: AboutSectionProps) {
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
      <motion.div 
        className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
            variants={itemVariants}
          >
            About Dermacharm
          </motion.p>
          <motion.h2 
            className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#404040]"
            variants={itemVariants}
          >
            Modern aesthetics meets medical excellence
          </motion.h2>
          <motion.p 
            className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            Dermacharm Aesthetics is a modern skin, hair, and aesthetic clinic dedicated to delivering safe, effective, 
            and scientifically backed treatments and care. Located in Vikas Khand, Gomti Nagar, Lucknow, our clinic blends 
            medical expertise with advanced aesthetic technology to help patients look and feel their best.
          </motion.p>
          <motion.p 
            className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            We specialize in aesthetic treatments, laser procedures, and advanced skin & hair solutions, offering personalized care 
            tailored to each individual&apos;s skin type, concern, and lifestyle. Every treatment plan is thoughtfully designed to achieve 
            natural-looking results while prioritizing patient safety and comfort.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid items-center gap-6 xs:gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div 
            className="space-y-3 xs:space-y-4 sm:space-y-6 order-2 lg:order-1"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
                variants={itemVariants}
              >
                Medical Director
              </motion.p>
              <motion.h3 
                className="mt-1 xs:mt-2 sm:mt-3 text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-[#404040]"
                variants={itemVariants}
              >
                Dr. Anurag Agrahari
              </motion.h3>
              <motion.p 
                className="mt-1.5 xs:mt-2 sm:mt-2 text-xs xs:text-sm sm:text-base text-[#404040]/70 leading-relaxed"
                variants={itemVariants}
              >
                Consultant Aesthetic Physician and Medical Director at Dermacharm Aesthetics. A skilled and compassionate aesthetic physician 
                with special interest in aesthetic medicine, laser treatments, injectables, and advanced skin & hair procedures. With a strong 
                foundation in evidence-based medicine, Dr. Anurag believes in delivering treatments that are safe, ethical, and personalized.
              </motion.p>
              <motion.p 
                className="mt-2 xs:mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base text-[#404040]/70 leading-relaxed"
                variants={itemVariants}
              >
                Known for his patient-first approach, he focuses on understanding individual concerns, skin types, and expectations. His philosophy 
                emphasizes natural-looking results, long-term skin health, and realistic outcomes rather than over-treatment. He regularly updates 
                his knowledge with latest advancements to ensure world-class care using modern technologies and globally accepted protocols.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid gap-2 xs:gap-3 sm:gap-4 grid-cols-2"
              variants={containerVariants}
            >
              <motion.div 
                className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/50 bg-white px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-6 shadow-lg shadow-[#D4C5B9]/30"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <p className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#C9A961]">6+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#404040]/60 mt-1">Years of expertise</p>
              </motion.div>
              <motion.div 
                className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/50 bg-white px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-6 shadow-lg shadow-[#D4C5B9]/30"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <p className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#C9A961]">9k+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#404040]/60 mt-1">Revived journeys</p>
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xs xs:text-sm sm:text-base text-[#404040] leading-relaxed italic"
              variants={itemVariants}
            >
              &quot;Aesthetic care is not about changing who you are, but about enhancing your natural charm with science, precision, and care. 
              We focus on understanding individual concerns and delivering treatments that prioritize medical ethics, safety, and natural-looking results.&quot;
            </motion.p>
          </motion.div>
          <motion.div 
            className="relative order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div 
              className="relative aspect-[4/5] overflow-hidden rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] border border-[#C9A961]/50 bg-gradient-to-br from-white via-[#FAFAF8] to-[#E8DCC8] shadow-2xl shadow-[#D4C5B9]/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image src="https://res.cloudinary.com/dlifnml9x/image/upload/v1765614239/524812885_18515732488065041_7772136519625680684_n_1_bubo6d.webp" alt="Dr. Anurag Agrahari, Founder" fill priority className="object-cover" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 xs:-bottom-3 sm:-bottom-6 right-2 xs:right-3 sm:right-6 rounded-lg xs:rounded-lg sm:rounded-2xl border border-[#C9A961]/60 bg-[#C9A961] px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-white shadow-xl shadow-[#C9A961]/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-[0.65rem] xs:text-xs uppercase tracking-[0.4em] text-white/70">Specialization</p>
              <p className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold mt-0.5 xs:mt-1">Aesthetic Medicine & Laser Treatments</p>
              <p className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold">Advanced Skin & Hair Procedures</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {showFullContent && (
          <motion.div 
            className="space-y-6 sm:space-y-8 pt-8 sm:pt-10 pb-3 sm:pb-4 border-t border-[#C9A961]/20"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.p 
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
                variants={itemVariants}
              >
                Educational Background
              </motion.p>
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold text-[#404040] mt-2 sm:mt-3"
                variants={itemVariants}
              >
                Dr. Anurag Agrahari
              </motion.h3>
            </motion.div>
            <motion.div 
              className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              <motion.div 
                className="rounded-lg sm:rounded-xl border border-[#C9A961]/40 bg-gradient-to-br from-white to-[#FAFAF8] px-4 sm:px-6 py-4 sm:py-6 shadow-md shadow-[#D4C5B9]/20"
                variants={itemVariants}
              >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-2 sm:mb-3">Qualifications</p>
                <ul className="space-y-2 text-sm sm:text-base text-[#404040]/80">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#C9A961] font-bold mt-0.5">•</span>
                    <span><strong>MBBS</strong> - Krishna Institute of Medical Sciences, Karad, Maharashtra</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#C9A961] font-bold mt-0.5">•</span>
                    <span><strong>FAM (Fellowship in Aesthetic Medicine)</strong> - ILAMED and Medical University Greifswald, Germany</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                className="rounded-lg sm:rounded-xl border border-[#C9A961]/40 bg-gradient-to-br from-white to-[#FAFAF8] px-4 sm:px-6 py-4 sm:py-6 shadow-md shadow-[#D4C5B9]/20"
                variants={itemVariants}
              >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-2 sm:mb-3">Professional Experience</p>
                <ul className="space-y-2 text-sm sm:text-base text-[#404040]/80">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#C9A961] font-bold mt-0.5">•</span>
                    <span>Safdarjang Hospital, Delhi</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#C9A961] font-bold mt-0.5">•</span>
                    <span>PSRI Hospital, Delhi</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#C9A961] font-bold mt-0.5">•</span>
                    <span>Multiple clinics across Delhi NCR</span>
                  </li>
                  <li className="flex gap-2 items-start font-semibold">
                    <span className="text-[#C9A961] font-bold mt-0.5">✓</span>
                    <span><strong>Total Experience:</strong> 6.5 Years</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {showFullContent && (
          <motion.div 
            className="text-center space-y-4 xs:space-y-5 sm:space-y-6 py-6 xs:py-8 sm:py-10 md:py-12 border-y border-[#C9A961]/20"
            variants={containerVariants}
          >
            <motion.p 
              className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
              variants={itemVariants}
            >
              Our Mission
            </motion.p>
            <motion.h3 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-[#404040]"
              variants={itemVariants}
            >
              Ethical, evidence-based aesthetic care
            </motion.h3>
            <motion.p 
              className="mt-3 xs:mt-4 sm:mt-5 text-xs xs:text-sm sm:text-base text-[#404040]/70 mx-auto max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Our mission at Dermacharm Aesthetics is to provide ethical, evidence-based, and result-oriented aesthetic treatments 
              and care in a warm, transparent, and patient-centric environment. We believe that aesthetic care is not about changing 
              who you are, but about enhancing your natural charm with science, precision, and care.
            </motion.p>
          </motion.div>
        )}

        {showFullContent && (
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
          >
            <motion.p 
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961] text-center"
              variants={itemVariants}
            >
              Expertise & Specialties
            </motion.p>
            <motion.h3 
              className="text-2xl sm:text-3xl font-semibold text-[#404040] text-center"
              variants={itemVariants}
            >
              Advanced treatments across multiple disciplines
            </motion.h3>
            <motion.div 
              className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              variants={containerVariants}
            >
              {docSpecialties.map((specialty) => (
                <motion.div 
                  key={specialty} 
                  className="rounded-lg sm:rounded-xl border border-[#C9A961]/40 bg-gradient-to-br from-white to-[#FAFAF8] px-3 sm:px-4 py-3 sm:py-4 text-center shadow-md shadow-[#D4C5B9]/20"
                  variants={itemVariants}
                >
                  <p className="text-xs sm:text-sm font-medium text-[#404040]">{specialty}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {showFullContent && (
          <motion.div 
            className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            variants={containerVariants}
          >
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
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.p 
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
                variants={itemVariants}
              >
                Our Commitment
              </motion.p>
              <motion.h4 
                className="text-2xl sm:text-3xl font-semibold text-[#404040]"
                variants={itemVariants}
              >
                Patient-centric care with medical ethics
              </motion.h4>
              <motion.ul 
                className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#404040]/80"
                variants={containerVariants}
              >
                {careHighlights.map((highlight) => (
                  <motion.li 
                    key={highlight} 
                    className="flex gap-3"
                    variants={itemVariants}
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#C9A961] flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="flex justify-center pt-4 sm:pt-5 md:pt-6 pb-2 sm:pb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <motion.button
              className="group relative px-8 lg:px-12 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-sm lg:text-base overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-600 hover:scale-105 animate-bounce"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">
                Connect With Us
              </span>
              <div className="absolute inset-0 bg-white/20 -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
