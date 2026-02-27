"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/app/lib/portfolioData";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function PortfolioLuxury() {
  const [video, setVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">

      <h2  className={`${playfair.className} text-4xl md:text-5xl mb-20 text-center text-white`}>
        Visual Poetry Portfolio
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {portfolioItems.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-4/5 cursor-pointer overflow-hidden rounded-xl border border-neutral-800 group bg-black  hover:border-yellow-200 transition duration-300"
            onClick={() => setVideo(item.video)}
          >

           <Image
  src={item.thumbnail}
  alt={item.alt || "Seelenlicht Portfolio"}
  fill
  priority
  className="object-cover opacity-30 group-hover:scale-105 transition duration-500"
/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-liner-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xl font-light tracking-widest uppercase text-yellow-100">
                {item.title}
              </span>
            </div>

            {/* Play indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="border border-white/40 rounded-full p-4 backdrop-blur-sm">
                ▶
              </div>
            </div>

          </motion.div>
        ))}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
            onClick={() => setVideo(null)}
          >

            <div className="relative w-full max-w-4xl">
              <video
                src={video}
                controls
                autoPlay
                className="w-full rounded-xl"
              />

              <button
                className="absolute -top-10 right-0 text-white text-xl"
                onClick={() => setVideo(null)}
              >
                ✕
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}