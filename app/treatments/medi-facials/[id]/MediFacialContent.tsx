"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

export default function MediFacialContent({ id }: { id: string }) {
  const service = services.find((s) => s.id === id && s.category === "Medi Facials");

  if (!service) {
    return <div>Treatment not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <motion.div
        className="w-full px-2 xs:px-3 sm:px-4 lg:px-8 py-6 xs:py-8 sm:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-6 xs:mb-8 sm:mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-xs xs:text-sm font-medium text-[#C9A961] hover:text-[#B8935D] transition"
            >
              <svg
                className="h-3 xs:h-4 w-3 xs:w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Treatments
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-8 xs:gap-10 sm:gap-12 md:grid-cols-2 mb-8 xs:mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="relative h-96 xs:h-80 sm:h-96 w-full overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="flex flex-col justify-start space-y-4 xs:space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Medi Facials
                </motion.p>
                <motion.h1
                  className="mt-2 xs:mt-3 text-3xl xs:text-4xl sm:text-5xl font-bold text-[#404040]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {service.title}
                </motion.h1>
              </div>

              <motion.p
                className="text-base xs:text-lg sm:text-xl text-[#404040]/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {service.description}
              </motion.p>

              <motion.div
                className="border-t border-[#C9A961]/30 pt-4 xs:pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-3 xs:mb-4">
                  Condition Addressed
                </p>
                <p className="text-base xs:text-lg text-[#404040] font-medium">
                  {service.condition}
                </p>
              </motion.div>

              <motion.div
                className="pt-2 xs:pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white px-6 xs:px-8 sm:px-10 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base font-semibold uppercase tracking-[0.2em] shadow-lg shadow-[#C9A961]/40 transition hover:shadow-xl hover:-translate-y-1"
                >
                  Book Your Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-8 xs:gap-10 sm:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-white/80 rounded-2xl border border-[#C9A961]/30 p-6 xs:p-8 sm:p-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-4 xs:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                Treatment Overview
              </motion.p>
              <motion.p
                className="text-base xs:text-lg text-[#404040] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {service.details}
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-white/80 rounded-2xl border border-[#C9A961]/30 p-6 xs:p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A961] mb-4 xs:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                Recommended Procedures & Overview
              </motion.p>
              <div className="space-y-4 xs:space-y-6">
                {service.recommendedProcedures.map((procedure, idx) => (
                  <motion.div
                    key={procedure}
                    className="border-l-4 border-[#C9A961]/50 pl-4 xs:pl-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.08 }}
                  >
                    <h4 className="text-base xs:text-lg font-semibold text-[#404040] mb-2 xs:mb-3 flex items-center gap-2 xs:gap-3">
                      <span className="h-2.5 xs:h-3 w-2.5 xs:w-3 rounded-full bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] flex-shrink-0" />
                      {procedure}
                    </h4>
                    <p className="text-sm xs:text-base text-[#404040]/75 leading-relaxed">
                      {(
                        service.procedureDescriptions as unknown as Record<
                          string,
                          string
                        >
                      )?.[procedure] ||
                        "Advanced treatment procedure for optimal results."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 xs:mt-14 sm:mt-16 py-8 xs:py-10 sm:py-12 px-6 xs:px-8 sm:px-10 bg-gradient-to-r from-[#C9A961]/10 to-[#E8DCC8]/10 rounded-2xl border border-[#C9A961]/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#404040] mb-3 xs:mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              Ready for your radiant facial transformation?
            </motion.h2>
            <motion.p
              className="text-base xs:text-lg text-[#404040]/70 mb-6 xs:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Schedule a consultation with our expert dermatologists today
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <div className="flex justify-center mt-12 lg:mt-16">
                <Link href="/book">
                  <button className="group relative px-8 lg:px-12 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-sm lg:text-base overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">
                      Schedule a Consultation
                    </span>
                    <div className="absolute inset-0 bg-white/20 -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
