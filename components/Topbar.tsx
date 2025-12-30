'use client';

import { useEffect, useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
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
        className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-4 flex-nowrap overflow-x-auto"
        initial="hidden"
        animate={showAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex items-center gap-2 xs:gap-3 sm:gap-6 flex-nowrap flex-shrink-0"
          variants={containerVariants}
        >
          <motion.span 
            className="inline-flex items-center gap-1 xs:gap-2 text-xs whitespace-nowrap"
            variants={itemVariants}
          >
            <span className="h-2 w-2 rounded-full bg-[#C9A961] flex-shrink-0" />
            <span className="hidden xs:inline">11am-8pm</span>
          </motion.span>
          <motion.span 
            className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 text-[#404040]/80 text-xs flex-nowrap"
            variants={itemVariants}
          >
            <svg className="h-3 xs:h-3.5 sm:h-4 w-3 xs:w-3.5 sm:w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.14 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs whitespace-nowrap">+91 8005-051055</span>
          </motion.span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-1.5 xs:gap-2 sm:gap-4 text-[#404040]/80 flex-shrink-0"
          variants={containerVariants}
        >
          <motion.a 
            href="mailto:dermacharmaesthetics@gmail.com" 
            className="hidden sm:inline transition hover:text-[#C9A961] text-xs sm:text-sm truncate"
            variants={itemVariants}
            whileHover={{ color: '#C9A961' }}
          >
            dermacharmaesthetics@gmail.com
          </motion.a>
          <motion.div 
            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3"
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
              <svg className="h-3.5 sm:h-4 w-3.5 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
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
