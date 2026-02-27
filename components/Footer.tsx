"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* subtle top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-
      linear-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-28">
       

        {/* Navigation grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6">
              Navigation
            </p>

            <ul className="space-y-4 text-lg">
              {[
                { name: "Impressum", href: "/impressum" },
                { name: "Datenschutz", href: "/datenschutz" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group relative inline-block"
                  >
                    <span className="hover:text-yellow-200 transition">
                      {item.name}
                    </span>

                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6">
              Kontakt
            </p>

            <div className="space-y-4 text-lg">
              <a
                href="mailto:hello@seelenlicht.de"
                className="group relative inline-block"
              >
                <span className="hover:text-yellow-200 transition">
                  hello@seelenlicht.de
                </span>
               
              </a>

              <p className="text-white/60 text-base">Germany</p>
            </div>
          </div>

          {/* Statement */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6">
              Philosophy
            </p>

            <p className="text-white/50 leading-relaxed">
              Seelenlicht ist kein Bild. Es ist ein Gefühl
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Seelenlicht</p>

          <p className="mt-4 md:mt-0">Designed & directed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
