'use client';

import { useEffect, useState } from 'react';
import { Facebook, Instagram, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Topbar() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#E8DCC8] border-b border-[#C9A961]/40 text-[#404040] text-xs sm:text-sm shadow-sm shadow-[#D4C5B9]/30">
      <motion.div 
        className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-4 flex-wrap"
        initial="hidden"
        animate={showAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex items-center gap-3 sm:gap-6 flex-wrap"
          variants={containerVariants}
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-xs sm:text-sm"
            variants={itemVariants}
          >
            <span className="h-2 w-2 rounded-full bg-[#C9A961] flex-shrink-0" />
            <span className="hidden sm:inline">Open at</span> <span className="sm:hidden">9am-8pm</span> <span className="hidden sm:inline">9am – 8pm</span>
          </motion.span>
          <motion.span 
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[#404040]/80 text-xs sm:text-sm"
            variants={itemVariants}
          >
            <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.14 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="">+91 800-505-1055</span>
          </motion.span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2 sm:gap-4 text-[#404040]/80"
          variants={containerVariants}
        >
          <motion.a 
            href="mailto:hello@dermacharm.in" 
            className="hidden sm:inline transition hover:text-[#C9A961] text-xs sm:text-sm truncate"
            variants={itemVariants}
            whileHover={{ color: '#C9A961' }}
          >
            dermacharmaesthetics@gmail.com
          </motion.a>
          <motion.div 
            className="flex items-center gap-2.5 sm:gap-3"
            variants={containerVariants}
          >
            <motion.a 
              href="https://www.instagram.com/dermacharmaesthetics/" 
              aria-label="Instagram" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition hover:text-[#C9A961] flex-shrink-0"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Instagram className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            </motion.a>
            <motion.a 
              href="https://wa.me/918005051055" 
              aria-label="WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition hover:text-[#C9A961] flex-shrink-0"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <MessageCircleMore className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/p/Dermacharm-Aesthetics-61577171443099/" 
              aria-label="Facebook" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition hover:text-[#C9A961] flex-shrink-0"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Facebook className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
