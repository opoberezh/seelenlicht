"use client";


import { motion } from "framer-motion";

export default function LogoLegendary() {
  return (
    <div className="flex flex-col items-start select-none">

      {/* Artistic Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative flex items-center justify-center mb-3"
      >
        {/* Light aura */}
        <div className="absolute w-20 h-20 rounded-full border border-yellow-100/10 blur-xl" />

        {/* Legendary S-L monogram */}
        <span
          className="relative text-yellow-100 text-3xl tracking-[0.5em] font-extralight"
          style={{ fontFamily: "serif" }}
        >
          S
          <span className="mx-2 opacity-60">✧</span>
          L
        </span>
      </motion.div>

      {/* Brand Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col leading-none"
      >
        <span
          className="text-white text-4xl md:text-5xl font-light tracking-wide"
          style={{ fontFamily: "serif" }}
        >
          Seelenlicht
        </span>

        <span className="text-yellow-100 text-xs tracking-[0.45em] uppercase mt-3 opacity-50">
          Visual Art Boutique
        </span>
      </motion.div>

    </div>
  );
}