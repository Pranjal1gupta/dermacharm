"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Treatments" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
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

const sidebarVariants = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: { duration: 0.2 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    skin: boolean;
    hair: boolean;
    mediFacials: boolean;
  }>({ skin: false, hair: false, mediFacials: false });

  const toggleSection = (section: "skin" | "hair" | "mediFacials") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="border-b border-[#C9A961]/30 bg-white/95 backdrop-blur-xl shadow-md shadow-[#D4C5B9]/20">
      <div className="w-full px-2 xs:px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16">
            <button
              type="button"
              className="md:hidden inline-flex h-8 xs:h-9 w-8 xs:w-9 items-center justify-center rounded-full border border-[#C9A961]/40 text-[#404040] shadow-sm hover:text-[#C9A961] transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d={
                    menuOpen
                      ? "M6 6l12 12M6 18L18 6"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <motion.div
              className="hidden md:flex flex-1 items-center space-x-2 lg:space-x-6 text-xs sm:text-sm font-medium text-[#404040]"
              variants={containerVariants}
              initial="hidden"
              animate={showAnimation ? "visible" : "hidden"}
            >
              {primaryLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="px-1 xs:px-2 py-1 transition-colors hover:text-[#C9A961]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-1 md:flex-none justify-center px-2 xs:px-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                showAnimation
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Dermacharm home"
              >
                <Image
                  src="/logo.png"
                  alt="Dermacharm"
                  width={140}
                  height={40}
                  priority
                  className="h-10 xs:h-12 sm:h-14 w-auto"
                />
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
                  Skin Treatments
                  <svg
                    className="h-3 xs:h-3.5 lg:h-4 w-3 xs:w-3.5 lg:w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 top-full pt-2 xs:pt-3 w-44 xs:w-52 lg:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto">
                  <div className="rounded-lg lg:rounded-2xl border border-[#C9A961]/40 bg-white/95 p-2 lg:p-3 text-[#404040] shadow-xl shadow-[#D4C5B9]/30 text-xs lg:text-sm">
                    <div className="flex flex-col gap-1">
                      {services
                        .filter((s) => s.category === "Skin")
                        .map((option) => (
                          <Link
                            key={option.id}
                            href={option.link}
                            className="rounded-lg px-2 xs:px-3 py-1 xs:py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition hover:bg-[#E8DCC8]/40 hover:text-[#C9A961]"
                          >
                            {option.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-2 lg:px-3 py-1 xs:py-1.5 text-[#404040] transition hover:text-[#C9A961] text-xs lg:text-sm"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hair Treatments
                  <svg
                    className="h-3 xs:h-3.5 lg:h-4 w-3 xs:w-3.5 lg:w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 top-full pt-2 xs:pt-3 w-44 xs:w-52 lg:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto">
                  <div className="rounded-lg lg:rounded-2xl border border-[#C9A961]/40 bg-white/95 p-2 lg:p-3 text-[#404040] shadow-xl shadow-[#D4C5B9]/30 text-xs lg:text-sm">
                    <div className="flex flex-col gap-1">
                      {services
                        .filter((s) => s.category === "Hair")
                        .map((option) => (
                          <Link
                            key={option.id}
                            href={option.link}
                            className="rounded-lg px-2 xs:px-3 py-1 xs:py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition hover:bg-[#E8DCC8]/40 hover:text-[#C9A961]"
                          >
                            {option.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-2 lg:px-3 py-1 xs:py-1.5 text-[#404040] transition hover:text-[#C9A961] text-xs lg:text-sm"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Medi Facials
                  <svg
                    className="h-3 xs:h-3.5 lg:h-4 w-3 xs:w-3.5 lg:w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 top-full pt-2 xs:pt-3 w-44 xs:w-52 lg:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto">
                  <div className="rounded-lg lg:rounded-2xl border border-[#C9A961]/40 bg-white/95 p-2 lg:p-3 text-[#404040] shadow-xl shadow-[#D4C5B9]/30 text-xs lg:text-sm">
                    <div className="flex flex-col gap-1">
                      {services
                        .filter((s) => s.category === "Medi Facials")
                        .map((option) => (
                          <Link
                            key={option.id}
                            href={option.link}
                            className="rounded-lg px-2 xs:px-3 py-1 xs:py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition hover:bg-[#E8DCC8]/40 hover:text-[#C9A961]"
                          >
                            {option.title}
                          </Link>
                        ))}
                    </div>
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
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 bg-black/40 z-30"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="md:hidden fixed left-0 top-0 h-screen w-56 xs:w-64 bg-white shadow-2xl shadow-[#D4C5B9]/30 z-40 flex flex-col overflow-y-auto"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between border-b border-[#C9A961]/20 px-4 py-4 xs:py-5 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Dermacharm"
                  width={120}
                  height={35}
                  className="h-9 xs:h-10 w-auto"
                />
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C9A961]/40 text-[#404040] hover:text-[#C9A961] transition"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close sidebar"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M6 6l12 12M6 18L18 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <motion.div
                className="flex-1 min-h-0 overflow-y-auto flex flex-col space-y-1 px-3 py-4 xs:py-5 text-[#404040]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {primaryLinks.map((link) => (
                  <motion.div key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-4 py-3 font-medium hover:bg-[#E8DCC8]/30 hover:text-[#C9A961] text-sm xs:text-base transition block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="border-t border-[#C9A961]/20 my-3 xs:my-4" />

                <motion.div
                  className="rounded-lg border border-[#C9A961]/40 bg-[#FAFAF8] px-4 py-3 xs:py-4"
                  variants={linkVariants}
                  style={{ pointerEvents: "auto" }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection("skin");
                    }}
                    className="w-full flex items-center justify-between hover:text-[#C9A961] transition"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A961]">
                      Skin Treatments
                    </p>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        expandedSections.skin ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.skin && (
                      <motion.div
                        className="flex flex-col space-y-1 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services
                          .filter((s) => s.category === "Skin")
                          .map((option) => (
                            <Link
                              key={option.id}
                              href={option.link}
                              className="rounded-lg px-3 py-2 text-xs xs:text-sm font-medium hover:bg-[#E8DCC8]/40 hover:text-[#C9A961] transition block"
                              onClick={() => setMenuOpen(false)}
                            >
                              {option.title}
                            </Link>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  className="rounded-lg border border-[#C9A961]/40 bg-[#FAFAF8] px-4 py-3 xs:py-4"
                  variants={linkVariants}
                  style={{ pointerEvents: "auto" }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection("hair");
                    }}
                    className="w-full flex items-center justify-between hover:text-[#C9A961] transition"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A961]">
                      Hair Treatments
                    </p>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        expandedSections.hair ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.hair && (
                      <motion.div
                        className="flex flex-col space-y-1 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services
                          .filter((s) => s.category === "Hair")
                          .map((option) => (
                            <Link
                              key={option.id}
                              href={option.link}
                              className="rounded-lg px-3 py-2 text-xs xs:text-sm font-medium hover:bg-[#E8DCC8]/40 hover:text-[#C9A961] transition block"
                              onClick={() => setMenuOpen(false)}
                            >
                              {option.title}
                            </Link>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  className="rounded-lg border border-[#C9A961]/40 bg-[#FAFAF8] px-4 py-3 xs:py-4"
                  variants={linkVariants}
                  style={{ pointerEvents: "auto" }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection("mediFacials");
                    }}
                    className="w-full flex items-center justify-between hover:text-[#C9A961] transition"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A961]">
                      Medi Facials
                    </p>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        expandedSections.mediFacials ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSections.mediFacials && (
                      <motion.div
                        className="flex flex-col space-y-1 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services
                          .filter((s) => s.category === "Medi Facials")
                          .map((option) => (
                            <Link
                              key={option.id}
                              href={option.link}
                              className="rounded-lg px-3 py-2 text-xs xs:text-sm font-medium hover:bg-[#E8DCC8]/40 hover:text-[#C9A961] transition block"
                              onClick={() => setMenuOpen(false)}
                            >
                              {option.title}
                            </Link>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              <div className="border-t border-[#C9A961]/20 px-3 py-4 xs:py-5 bg-white flex-shrink-0">
                <Link
                  href="/book"
                  className="rounded-full bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] px-4 py-3 xs:py-3.5 text-center text-white shadow-lg shadow-[#C9A961]/40 text-xs xs:text-sm font-medium transition hover:shadow-xl block animate-bounce w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Visit
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
