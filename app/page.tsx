'use client';

import { motion, easeOut } from 'framer-motion';
import { Sparkles, Zap, Wand2, Wind } from 'lucide-react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import Gallery from '../components/Gallery';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';

const services = [
  {
    title: 'Advanced Skin Correction',
    description:
      'Targeted solutions for pigmentation, acne, scars, melasma, open pores, and dark circles using clinically proven treatments like peels, microneedling, PRP, and medi facials.',
    icon: <Sparkles className="h-full w-full" />,
  },
  {
    title: 'Age Defense & Facial Sculpting',
    description:
      'Non-surgical rejuvenation and contouring with HIFU, PRP, RF microneedling, and IV therapies to restore firmness, refine jawlines, and enhance youthful radiance.',
    icon: <Wand2 className="h-full w-full" />,
  },
  {
    title: 'Laser & Precision Aesthetics',
    description:
      'Advanced laser technologies for hair reduction, carbon facials, scar resurfacing, and precise skin tag or mole removal with minimal downtime and excellent cosmetic outcomes.',
    icon: <Zap className="h-full w-full" />,
  },
  {
    title: 'Hair & Scalp Regeneration',
    description:
      'Comprehensive solutions for hair fall, alopecia, dandruff, premature greying, and scalp disorders using PRP, GFC, mesotherapy, LED therapy, and medical scalp care.',
    icon: <Wind className="h-full w-full" />,
  },
];


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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TreatmentsSection />
      <Gallery />
      <AboutSection />
      
     
      <motion.section 
        className="relative w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 bg-[#FAFAF7]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="absolute inset-x-0 top-2 xs:top-4 sm:top-8 mx-auto h-full max-w-6xl rounded-2xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#F5F5F5] via-[#C9A961] to-[#E8DCC8] blur-3xl opacity-60" />
        <motion.div 
          className="relative mx-auto max-w-7xl rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/60 bg-white/90 px-3 xs:px-4 sm:px-6 md:px-8 py-8 xs:py-12 sm:py-16 md:py-20 shadow-2xl shadow-[#D4C5B9]/40 backdrop-blur"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center"
            variants={headerVariants}
          >
            <motion.p 
              className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
              variants={itemVariants}
            >
              Our Expertise
            </motion.p>
            <motion.h2 
              className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#404040]"
              variants={itemVariants}
            >
              Signature Services crafted for every skin and hair journey
            </motion.h2>
            <motion.p 
              className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#404040]/70 mx-auto max-w-3xl leading-relaxed"
              variants={itemVariants}
            >
              Explore high-touch programs led by board-certified dermatologists using clinically proven devices and
              luxurious care rituals inspired by global wellness destinations.
            </motion.p>
          </motion.div>
          <motion.div 
            className="mt-8 xs:mt-10 sm:mt-12 grid grid-cols-1 gap-3 xs:gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
      <FAQ />
    </>
  );
}
