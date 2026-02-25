"use client";

import Header from "@/app/components/Header";
import LogoLegendary from "@/app/components/Logo";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function SeelenlichtHomepage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section id="start" className="relative h-screen flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/hero-seelenlicht.mp4"
        />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
              className="max-w-lg text-lg font-light leading-relaxed"
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
                className="inline-block border border-yellow-200 text-yellow-200 px-8 py-3 tracking-[0.25em] uppercase hover:bg-yellow-200 hover:text-black transition duration-300"
              >
                Projekt anfragen
              </a>
            </motion.div>
          </div>

          <div className="hidden md:flex justify-center">
            <LogoLegendary />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className={`${playfair.className} text-4xl md:text-5xl mb-20 text-center`}>Leistungen</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-neutral-800 rounded-2xl p-8 space-y-6 hover:border-yellow-200 transition duration-300">
            <h3 className="text-xl font-light tracking-widest uppercase text-yellow-100">🥉 Elegant</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              30–45 Sek. Video • Basis-Szenario • 1 Korrekturrunde
            </p>
            <div className="text-2xl text-yellow-200 font-light">350€</div>
          </div>

          <div className="border border-neutral-800 rounded-2xl p-8 space-y-6 hover:border-yellow-200 transition duration-300 scale-105 bg-neutral-900">
            <h3 className="text-xl font-light tracking-widest uppercase text-yellow-100">🥈 Signature</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              60–90 Sek. • Individuelle Story • 2 Korrekturrunden • Titel & Musik
            </p>
            <div className="text-2xl text-yellow-200 font-light">550€</div>
          </div>

          <div className="border border-neutral-800 rounded-2xl p-8 space-y-6 hover:border-yellow-200 transition duration-300">
            <h3 className="text-xl font-light tracking-widest uppercase text-yellow-100">🥇 Cinematic Story</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              2–3 Min. • Emotionale Geschichte • Premium Schnitt • Storytelling Konzept
            </p>
            <div className="text-2xl text-yellow-200 font-light">850€ – 1100€</div>
          </div>

        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${playfair.className} text-4xl md:text-5xl mb-16`}
        >
          Visual Poetry Portfolio
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.03 }}
              className="aspect-4/5 bg-neutral-900 rounded-2xl overflow-hidden relative group"
            >
              <Image
                src={`/portfolio-${item}.jpg`}
                alt="Portfolio preview"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                width={800}
                height={1000}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-40 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-10"
        >
          <h2 className={`${playfair.className} text-4xl md:text-6xl leading-tight`}
          >
            Erzählen wir Ihre Atmosphäre in Licht
          </h2>

          <a
            href="mailto:contact@seelenlicht.com"
            className="inline-block border border-yellow-200 text-yellow-200 px-10 py-4 tracking-[0.3em] uppercase hover:bg-yellow-200 hover:text-black transition duration-300"
          >
            Kontakt aufnehmen
          </a>
        </motion.div>
      </section>
    </main>
  );
}
