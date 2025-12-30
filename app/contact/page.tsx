"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { motion } from "framer-motion";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `Hi Dermacharm Aesthetics \n\nSomeone interested wants to connect with you!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Inquiry:* ${formData.message}`;

    const whatsappLink = `https://wa.me/918005051055?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <motion.div 
        className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={containerVariants}>
          <motion.p 
            className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
            variants={itemVariants}
          >
            Get In Touch
          </motion.p>
          <motion.h1 
            className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]"
            variants={itemVariants}
          >
            We&apos;d love to hear from you
          </motion.h1>
          <motion.p 
            className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            Have questions about our treatments or want to schedule a
            consultation? Reach out to our team and we&apos;ll be in touch
            within one business day.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-8 xs:gap-10 sm:gap-12 lg:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div className="space-y-6 xs:space-y-8 sm:space-y-10" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961]"
                variants={itemVariants}
              >
                Contact Information
              </motion.p>
              <motion.h3 
                className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl font-semibold text-[#404040]"
                variants={itemVariants}
              >
                Dermacharm Aesthetics
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4 xs:space-y-5 sm:space-y-6" variants={containerVariants}>
              <motion.div className="flex gap-3 xs:gap-4 sm:gap-6" variants={itemVariants}>
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg
                    className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.14 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">
                    Phone
                  </p>
                  <Link
                    href="tel:+918005051055"
                    className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040] hover:text-[#C9A961] transition"
                  >
                    +91 800-505-1055
                  </Link>
                </div>
              </motion.div>

              <motion.div className="flex gap-3 xs:gap-4 sm:gap-6" variants={itemVariants}>
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg
                    className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.14 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">
                    Landline
                  </p>
                  <Link
                    href="tel:+918005051055"
                    className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040] hover:text-[#C9A961] transition"
                  >
                    0522-2981055
                  </Link>
                </div>
              </motion.div>

              <motion.div className="flex gap-3 xs:gap-4 sm:gap-6" variants={itemVariants}>
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg
                    className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">
                    Email
                  </p>
                  <Link
                    href="mailto:hello@dermacharm.in"
                    className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040] hover:text-[#C9A961] transition break-all"
                  >
                    dermacharmaesthetics@gmail.com
                  </Link>
                </div>
              </motion.div>

              <motion.div className="flex gap-3 xs:gap-4 sm:gap-6" variants={itemVariants}>
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg
                    className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">
                    Address
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/ZLHSnud4FuuaJQzi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040] hover:text-[#C9A961] transition"
                  >
                    No 2/237,2/237, Vikas Khand, near mayo hospital, Gomti Nagar, Lucknow-226010, Uttar Pradesh
                  </Link>
                </div>
              </motion.div>

              <motion.div className="flex gap-3 xs:gap-4 sm:gap-6" variants={itemVariants}>
                <div className="flex h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] flex-shrink-0">
                  <svg
                    className="h-5 xs:h-6 sm:h-7 w-5 xs:w-6 sm:w-7 text-[#C9A961]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]/60">
                    Hours
                  </p>
                  <p className="mt-1 xs:mt-1.5 sm:mt-2 text-sm xs:text-base sm:text-lg font-semibold text-[#404040]">
                    11:00 AM – 8:00 PM
                  </p>
                  <p className="text-xs xs:text-xs sm:text-sm text-[#404040]/70">
                    Monday to Sunday
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="pt-4 xs:pt-6 sm:pt-8" variants={itemVariants}>
              <motion.p 
                className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-3 xs:mb-4"
                variants={itemVariants}
              >
                Follow Us
              </motion.p>
              <motion.div className="flex gap-3 xs:gap-4" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <Link
                    href="https://www.instagram.com/dermacharmaesthetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 xs:h-12 w-10 xs:w-12 items-center justify-center rounded-lg xs:rounded-xl bg-[#E8DCC8] text-[#C9A961] hover:bg-[#C9A961] hover:text-white transition"
                  >
                    <svg
                      className="h-5 xs:h-6 w-5 xs:w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href="https://wa.me/918000222111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 xs:h-12 w-10 xs:w-12 items-center justify-center rounded-lg xs:rounded-xl bg-[#E8DCC8] text-[#C9A961] hover:bg-[#C9A961] hover:text-white transition"
                  >
                    <svg className="h-5 xs:h-6 w-5 xs:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href="https://www.facebook.com/p/Dermacharm-Aesthetics-61577171443099/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 xs:h-12 w-10 xs:w-12 items-center justify-center rounded-lg xs:rounded-xl bg-[#E8DCC8] text-[#C9A961] hover:bg-[#C9A961] hover:text-white transition"
                  >
                    <Facebook className="h-5 xs:h-6 w-5 xs:w-6" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/50 bg-white/90 p-4 xs:p-6 sm:p-8 shadow-lg shadow-[#D4C5B9]/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
              variants={itemVariants}
            >
              Send us a message
            </motion.p>
            <motion.h3 
              className="mt-2 xs:mt-3 sm:mt-4 text-lg xs:text-xl sm:text-2xl font-semibold text-[#404040]"
              variants={itemVariants}
            >
              We&apos;ll get back to you shortly
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-4 xs:mt-6 sm:mt-8 space-y-3 xs:space-y-4 sm:space-y-5"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-name"
                  className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-email"
                  className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-phone"
                  className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="+91 8000 222 111"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-subject"
                  className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="contact-message"
                  className="text-xs xs:text-xs sm:text-sm font-medium text-[#404040]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 xs:mt-1.5 sm:mt-2 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full rounded-full bg-[#C9A961] px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-[#D4C5B9]/60 transition hover:-translate-y-0.5 hover:shadow-[#D4C5B9]/80 hover:bg-[#B8935D] mt-4 xs:mt-5 sm:mt-6"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              {submitted && (
                <motion.div 
                  className="rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-xs xs:text-xs sm:text-sm font-medium text-[#404040] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  ✓ Message sent successfully! We&apos;ll be in touch soon.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>

        <motion.div 
          className="rounded-2xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-[#D4C5B9]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15314.095598091486!2d80.9838235!3d26.8497176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be315f7847997%3A0x643e64cf37d01330!2sDermacharm%20Aesthetics!5e1!3m2!1sen!2sin!4v1765966948725!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
