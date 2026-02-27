"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"], // Next.js font API expects array
});

export default function PremiumHero() {
  return (
    <section id="start" className="relative h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      
     <div className="absolute inset-0 w-full h-full">
    <Image
      src="/images/banner3.jpg"
      alt="Seelenlicht background"
      fill
      priority
      className="object-cover opacity-20"
    />
  </div>
   

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">

        <div className="space-y-8">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${playfair.className} text-6xl md:text-7xl leading-tight`}
          >
            Emotion in Licht erzählt
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4 }}
            className="max-w-lg text-lg font-light leading-relaxed text-neutral-300"
          >
            Seelenlicht ist ein Art Boutique Studio für kreative Videoeinladungen.
            Wir erzählen Ihre Momente in poetischer visueller Form – für Jubiläen,
            Hochzeiten und besondere Lebensereignisse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-block border border-yellow-200 text-yellow-200 rounded-xl px-8 py-3 tracking-[0.25em] uppercase hover:bg-yellow-200 hover:text-black transition duration-300"
            >
              Projekt anfragen
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}