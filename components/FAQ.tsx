'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    id: 'consultation',
    question: 'How long does an initial consultation take?',
    answer: 'Your first consultation typically lasts 45-60 minutes. During this time, our specialists will assess your skin or hair condition, discuss your goals, and create a personalized treatment plan tailored to your needs.',
  },
  {
    id: 'downtime',
    question: 'What is the typical downtime after treatments?',
    answer: 'Downtime varies by treatment. Non-invasive treatments like facials and LED therapy require no downtime. Laser treatments may cause temporary redness (1-3 days), while more intensive procedures like microneedling or chemical peels may require 5-7 days of recovery. We\'ll provide specific guidelines for your treatment.',
  },
  {
    id: 'results',
    question: 'When will I see results?',
    answer: 'Results vary depending on the treatment. Some treatments, like microcurrent toning, show immediate effects, while others require multiple sessions. Most clients see noticeable improvements within 2-4 weeks. We recommend a series of treatments for optimal, lasting results.',
  },
  {
    id: 'frequency',
    question: 'How often do I need to repeat treatments?',
    answer: 'Treatment frequency depends on your specific goals. Some treatments require weekly sessions initially, while others transition to monthly maintenance. During your consultation, we\'ll create a customized schedule that fits your lifestyle and budget.',
  },
  {
    id: 'skin-type',
    question: 'Can treatments be done on all skin types?',
    answer: 'Most of our treatments are suitable for all skin types. Our dermatologists customize each session to your specific concerns. During your consultation, we\'ll discuss any skin sensitivities and adjust treatments accordingly to ensure safety and effectiveness.',
  },
  {
    id: 'pregnant',
    question: 'Can I get treatments if I am pregnant?',
    answer: 'Surgical and invasive treatments are generally not recommended during pregnancy. However, many non-invasive, gentle treatments can be safely performed. Please inform us about your pregnancy during your consultation so we can recommend safe options for you.',
  },
  {
    id: 'side-effects',
    question: 'Are there any side effects?',
    answer: 'Most treatments have minimal side effects. Common temporary effects include mild redness or slight swelling that typically resolve within hours to days. Serious side effects are rare when treatments are performed by qualified professionals. We\'ll discuss all potential effects during your consultation.',
  },
  {
    id: 'maintenance',
    question: 'What post-treatment care is needed?',
    answer: 'Post-treatment care varies by procedure. Generally, we recommend gentle skincare, sun protection, and avoiding harsh products. We provide detailed aftercare instructions for each treatment, and our team is available to answer any questions during your recovery.',
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 bg-[#FAFAF7]">
      <motion.div 
        className="mx-auto max-w-4xl space-y-8 xs:space-y-10 sm:space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center"
          variants={headerVariants}
        >
          <motion.p 
            className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
            variants={itemVariants}
          >
            Common Questions
          </motion.p>
          <motion.h2 
            className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]"
            variants={itemVariants}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p 
            className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Find answers to common questions about our treatments, procedures, and services.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6"
          variants={containerVariants}
        >
          {faqs.map((faq) => (
            <motion.button
              key={faq.id}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full text-left"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white/90 p-4 xs:p-5 sm:p-6 shadow-md shadow-[#D4C5B9]/30 transition hover:border-[#C9A961] hover:shadow-lg hover:shadow-[#D4C5B9]/40"
                layout
              >
                <div className="flex items-start gap-3 xs:gap-4 sm:gap-5">
                  <div className="flex h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 items-center justify-center rounded-full bg-[#F5F5F5] flex-shrink-0 mt-0.5">
                    <svg
                      className={`h-4 xs:h-5 sm:h-6 w-4 xs:w-5 sm:w-6 text-[#C9A961] transition-transform duration-300 ${
                        openId === faq.id ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-[#404040]">{faq.question}</h3>
                  </div>
                </div>

                {openId === faq.id && (
                  <motion.div 
                    className="mt-4 xs:mt-5 sm:mt-6 pl-9 xs:pl-11 sm:pl-13 border-l-2 border-[#C9A961]/20"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs xs:text-sm sm:text-base text-[#404040]/80 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-gradient-to-br from-white via-[#FAFAF8] to-[#E8DCC8]/20 p-6 xs:p-8 sm:p-10 text-center shadow-md shadow-[#D4C5B9]/30"
          variants={itemVariants}
        >
          <motion.p 
            className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961]"
            variants={itemVariants}
          >
            Still have questions?
          </motion.p>
          <motion.h3 
            className="mt-2 xs:mt-3 sm:mt-4 text-lg xs:text-xl sm:text-2xl font-semibold text-[#404040]"
            variants={itemVariants}
          >
            Connect with our team
          </motion.h3>
          <motion.p 
            className="mt-2 xs:mt-2.5 sm:mt-3 text-xs xs:text-xs sm:text-sm text-[#404040]/70 mb-4 xs:mb-5 sm:mb-6"
            variants={itemVariants}
          >
            Our concierge team is here to help. Reach out via phone, email, or schedule a free consultation.
          </motion.p>
          <motion.div 
            className="flex flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center flex-wrap"
            variants={containerVariants}
          >
            <motion.a
              href="tel:+918005051055"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:shadow-lg hover:shadow-[#C9A961]/40"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              Call Us
            </motion.a>
            <motion.a
              href="mailto:dermacharmaesthetics@gmail.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#C9A961] px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] transition hover:bg-[#C9A961] hover:text-white"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              Email Us
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
