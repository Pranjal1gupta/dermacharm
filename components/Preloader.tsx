'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-white via-white to-[#CDBBA7]/20 z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center gap-4 xs:gap-5 sm:gap-6 px-4">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <Image
            src="/logo.png"
            alt="DermaCharm Aesthetics"
            width={200}
            height={60}
            priority
            className="h-auto w-36 xs:w-40 sm:w-48 drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="flex gap-1.5 xs:gap-2 sm:gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2 xs:h-2.5 sm:h-3 w-2 xs:w-2.5 sm:w-3 rounded-full bg-gradient-to-r from-[#C9A961] to-[#E8DCC8]"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-[#C9A961] text-xs xs:text-sm sm:text-base font-light tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C9A961] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E8DCC8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </motion.div>
    </motion.div>
  );
}
