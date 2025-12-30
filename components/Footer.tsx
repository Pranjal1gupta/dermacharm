'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: 'facebook', href: 'https://www.facebook.com/p/Dermacharm-Aesthetics-61577171443099/', label: 'Facebook' },
  { icon: 'instagram', href: 'https://www.instagram.com/dermacharmaesthetics/', label: 'Instagram' },
  { icon: 'messagecircle', href: 'https://wa.me/918005051055', label: 'Message' },
  { icon: 'message', href: 'mailto:dermacharmaesthetics@gmail.com', label: 'Email' },
  // { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter' },
  // { icon: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
];

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Treatments' },
  { href: "/testimonials", label: "Testimonials" },
  { href: '/contact', label: 'Contact' },
];

const treatmentLinks = [
  { href: '/treatments/skin/hyperpigmentation', label: 'Hyperpigmentation Treatments' },
  { href: '/treatments/skin/acne', label: 'Acne & Pimples Treatment' },
  { href: '/treatments/skin/double-chin', label: 'Double Chin Reduction' },
  { href: '/treatments/hair/hair-fall', label: 'Hair Fall & Balding Treatment' },
  { href: '/treatments/hair/dandruff', label: 'Dandruff Treatment' },
];

const navGroups = [
  {
    title: 'Explore',
    items: primaryLinks,
  },
  {
    title: 'Treatments',
    items: treatmentLinks,
  },
  {
    title: 'Quick Links',
    items: [
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
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

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] border-t border-[#C9A961]/30 text-[#404040]">
      <div className="w-full px-2 xs:px-3 sm:px-4">
        <motion.div 
          className="max-w-7xl mx-auto py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-2 xs:grid-cols-2 md:grid-cols-4 place-items-center md:place-items-start"
            variants={containerVariants}
          >
            <motion.div 
              className="col-span-2 xs:col-span-2 md:col-span-1 flex flex-col items-center md:items-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/" className="inline-flex items-center" aria-label="Dermacharm home">
                  <Image src="/logo.png" alt="Dermacharm" width={140} height={40} priority className="h-12 xs:h-14 sm:h-16 w-auto" />
                </Link>
              </motion.div>
              <motion.div 
                className="flex gap-3 xs:gap-4 mt-4 xs:mt-5 sm:mt-6"
                variants={containerVariants}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 xs:h-11 xs:w-11 rounded-full border border-[#C9A961]/40 text-[#C9A961] hover:bg-[#C9A961] hover:border-[#C9A961] hover:text-white transition"
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    {social.icon === 'facebook' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                      </svg>
                    )}
                    {social.icon === 'messagecircle' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    )}
                    {social.icon === 'message' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    )}
                    {/* {social.icon === 'twitter' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    )} */}
                  </motion.a>
                ))}
              </motion.div>
              <motion.a 
                href="https://partner.citywitty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-[10px] uppercase tracking-[0.2em] text-[#404040]/40 font-medium hover:text-[#C9A961] transition"
                variants={itemVariants}
              >
                Powered by CW
              </motion.a>
            </motion.div>
            {navGroups.map((group, index) => (
              <motion.div 
                key={group.title} 
                className={`col-span-1 xs:col-span-1 ${index === navGroups.length - 1 ? 'col-span-2 xs:col-span-2 md:col-span-1' : ''}`}
                variants={itemVariants}
              >
                <motion.p 
                  className="text-xs xs:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] text-center md:text-left"
                  variants={itemVariants}
                >
                  {group.title}
                </motion.p>
                <motion.ul 
                  className="mt-2 xs:mt-3 sm:mt-4 space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm text-[#404040]/70 text-center md:text-left"
                  variants={containerVariants}
                >
                  {group.items.map((item) => (
                    <motion.li 
                      key={item.href} 
                      className="hover:text-[#C9A961] transition text-bold"
                      variants={linkVariants}
                      whileHover={{ x: 5 }}
                    >
                      <Link href={item.href} className="hover:text-[#C9A961]">
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
                {group.title === 'Quick Links' && (
                  <motion.div 
                    className="flex flex-col items-center md:items-start mt-4 xs:mt-5 sm:mt-6 gap-3"
                    variants={itemVariants}
                  >
                    <a 
                      href="https://maps.app.goo.gl/gDasRWDekXNursY78?g_st=ac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 hover:opacity-80 transition"
                    >
                      <MapPin className="h-5 w-5 text-[#C9A961] flex-shrink-0 mt-0.5" />
                      <p className="text-xs xs:text-sm text-[#404040]/70 text-left leading-relaxed hover:text-[#C9A961] transition">
                        No 2/237, Vikas Khand, near mayo hospital, Gomti Nagar, Lucknow-226010, Uttar Pradesh
                      </p>
                    </a>
                    <a 
                      href="tel:+918005051055" 
                      className="flex items-center gap-2 hover:opacity-80 transition"
                    >
                      <Phone className="h-5 w-5 text-[#C9A961] flex-shrink-0" />
                      <p className="text-xs xs:text-sm text-[#404040]/70 text-left hover:text-[#C9A961] transition">
                        +91 800-505-1055
                      </p>
                    </a>
                    <p className="flex items-center gap-2 text-xs xs:text-sm text-[#404040]/70 text-left">
                      <Phone className="h-5 w-5 text-[#C9A961] flex-shrink-0" />
                      <span>0522-2981055</span>
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="border-t border-[#C9A961]/20 py-3 xs:py-4 sm:py-5 text-center text-xs xs:text-xs text-[#404040]/60 px-2 xs:px-3 sm:px-4 bg-white/50"
        title="Designed and Developed By -Pranjal Gupta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Dermacharm Aesthetics. All rights reserved.
      </motion.div>
    </footer>
  );
}
