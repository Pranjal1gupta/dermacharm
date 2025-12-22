'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import Link from 'next/link';

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-[#C9A961]' : 'text-[#D4C5B9]/30'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

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
            Client Success Stories
          </motion.p>
          <motion.h1
            className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Real transformations, real results
          </motion.h1>
          <motion.p
            className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover how our expert treatments have transformed the lives and confidence of our valued clients.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2"
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-[#C9A961]/30 bg-white/90 shadow-lg shadow-[#D4C5B9]/30 transition hover:-translate-y-1 hover:border-[#C9A961] p-4 xs:p-6 sm:p-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 xs:gap-4 sm:gap-4">
                    <motion.div
                      className="relative h-12 xs:h-14 sm:h-16 w-12 xs:w-14 sm:w-16 flex-shrink-0 overflow-hidden rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-sm xs:text-base sm:text-lg font-semibold text-[#404040]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.p
                        className="text-xs xs:text-xs sm:text-sm text-[#C9A961] font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        {testimonial.treatment}
                      </motion.p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {renderStars(testimonial.rating)}
                </motion.div>

                <motion.p
                  className="text-xs xs:text-sm sm:text-base text-[#404040]/80 leading-relaxed italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  &quot;{testimonial.text}&quot;
                </motion.p>

                <motion.div
                  className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 h-8 xs:h-10 sm:h-12 w-8 xs:w-10 sm:w-12 rounded-full bg-gradient-to-br from-[#C9A961]/10 to-[#D4C5B9]/10 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <svg
                    className="h-4 xs:h-5 sm:h-6 w-4 xs:w-5 sm:w-6 text-[#C9A961]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-xs xs:text-sm sm:text-base text-[#404040]/70 mb-4 xs:mb-6">
            Join thousands of satisfied clients who have transformed their confidence
          </p>
          <div className="flex justify-center mt-12 lg:mt-16">
          <Link href="/book">
            <button className="group relative px-8 lg:px-12 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-sm lg:text-base overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-white/20 -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </Link>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
