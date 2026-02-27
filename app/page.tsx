"use client";

import Header from "@/components/Header";
import PremiumHero from "@/components/PremiumHero";
import  ServicesMenu  from "@/components/ServicesMenu";
import { motion } from "framer-motion";
import PortfolioLuxury  from "@/components/Portfolio";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });


export default function SeelenlichtHomepage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <Header />

      {/* Hero Section */}
     <PremiumHero/>

      {/* Services Section */}
      <ServicesMenu/>

      {/* Portfolio Preview */}
      <PortfolioLuxury/>
      
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
