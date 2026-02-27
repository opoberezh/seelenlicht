"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"], // Next.js font API expects array
});

export default function FooterContact() {
  return (
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
            href="mailto:opoberezh.2015@gmail.com"
            className="inline-block border border-yellow-200 text-yellow-200 rounded-xl px-8 py-3 tracking-[0.25em] uppercase hover:bg-yellow-200 hover:text-black transition duration-300"
          >
            Kontakt aufnehmen
          </a>
        </motion.div>
      </section>
  );
}