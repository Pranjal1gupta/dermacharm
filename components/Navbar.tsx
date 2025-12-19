'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Treatments' },
  { href: '/contact', label: 'Contact' },
];


const treatmentOptions = [
  { href: '/treatments/skin', label: 'Skin Treatments' },
  { href: '/treatments/hair', label: 'Hair Treatment' },
  { href: '/treatments/aesthetic', label: 'Aesthetic Treatment' },
  { href: '/treatments/laser', label: 'Laser Treatment' },
  { href: '/treatments/dermatosurgery', label: 'Dermatosurgery' },
];

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="border-b border-[#C9A961]/30 bg-white/95 backdrop-blur-xl shadow-md shadow-[#D4C5B9]/20 sticky top-0 z-40">
      <div className="w-full px-2 xs:px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16">
            <motion.div 
              className="hidden md:flex flex-1 items-center space-x-2 lg:space-x-6 text-xs sm:text-sm font-medium text-[#404040]"
              variants={containerVariants}
              initial="hidden"
              animate={showAnimation ? "visible" : "hidden"}
            >
              {primaryLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link href={link.href} className="px-1 xs:px-2 py-1 transition-colors hover:text-[#C9A961]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-1 md:flex-none justify-center px-2 xs:px-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={showAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="inline-flex items-center" aria-label="Dermacharm home">
                <Image src="/logo.png" alt="Dermacharm" width={140} height={40} priority className="h-10 xs:h-12 sm:h-14 w-auto" />
              </Link>
            </motion.div>

            <motion.div 
              className="hidden md:flex flex-1 justify-end items-center space-x-2 lg:space-x-6 text-xs sm:text-sm font-medium text-[#404040]"
              variants={containerVariants}
              initial="hidden"
              animate={showAnimation ? "visible" : "hidden"}
            >
              <div className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-2 lg:px-3 py-1 xs:py-1.5 text-[#404040] transition hover:text-[#C9A961] text-xs lg:text-sm"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Treatments
                  <svg className="h-3 xs:h-3.5 lg:h-4 w-3 xs:w-3.5 lg:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="pointer-events-none absolute right-0 top-full mt-2 xs:mt-3 w-44 xs:w-52 lg:w-64 rounded-lg lg:rounded-2xl border border-[#C9A961]/40 bg-white/95 p-2 lg:p-3 text-[#404040] shadow-xl shadow-[#D4C5B9]/30 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 text-xs lg:text-sm">
                  <div className="flex flex-col gap-1">
                    {treatmentOptions.map((option) => (
                      <Link
                        key={option.href}
                        href={option.href}
                        className="rounded-lg px-2 xs:px-3 py-1 xs:py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition hover:bg-[#E8DCC8]/40 hover:text-[#C9A961]"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.div variants={linkVariants}>
                <Link
                  href="/book"
                  className="bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white px-2 xs:px-3 lg:px-4 py-1 xs:py-1.5 lg:py-2 rounded-full text-xs lg:text-sm shadow-lg shadow-[#C9A961]/40 transition hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap animate-bounce"
                >
                  Book Visit
                </Link>
              </motion.div>
            </motion.div>

            <button
              type="button"
              className="md:hidden inline-flex h-8 xs:h-9 w-8 xs:w-9 items-center justify-center rounded-full border border-[#C9A961]/40 text-[#404040] shadow-sm hover:text-[#C9A961] transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden origin-top overflow-hidden bg-white/95 px-3 xs:px-4 pb-3 xs:pb-4 shadow-xl shadow-[#D4C5B9]/20"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="flex flex-col space-y-1.5 xs:space-y-2 pt-2 xs:pt-3 text-[#404040]"
              variants={containerVariants}
              initial="hidden"
              animate={showAnimation ? "visible" : "hidden"}
            >
              {primaryLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-2 font-medium hover:bg-[#F5F5F5]/70 text-xs xs:text-sm transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="rounded-lg border border-[#C9A961]/40 bg-[#FAFAF8] px-3 py-2 xs:py-2.5 mt-2"
                variants={linkVariants}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A961]">Treatments</p>
                <motion.div 
                  className="mt-1.5 xs:mt-2 flex flex-col space-y-0.5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {treatmentOptions.map((option) => (
                    <motion.div key={option.href} variants={linkVariants}>
                      <Link
                        href={option.href}
                        className="rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-[#E8DCC8]/40 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        {option.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div variants={linkVariants}>
                <Link
                  href="/book"
                  className="rounded-full bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] px-4 py-2 text-center text-white shadow shadow-[#C9A961]/40 text-xs xs:text-sm font-medium transition hover:shadow-lg mt-1 block animate-bounce"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Visit
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
