"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoLegendary from "@/app/components/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/70 backdrop-blur-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

        <div >
          <LogoLegendary/>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-white text-sm tracking-[0.25em] uppercase font-light">
          <Link href="#start" className="hover:text-yellow-200 transition">Start</Link>
 <Link href="#services" className="hover:text-yellow-200 transition">Leistungen</Link>

          <Link href="#portfolio" className="hover:text-yellow-200 transition">Portfolio</Link>
          <Link href="#contact" className="hover:text-yellow-200 transition">Kontakt</Link>
        </nav>

        <Link
          href="#contact"
          className="hidden md:block border border-yellow-200 text-yellow-200 px-5 py-2 text-sm tracking-widest uppercase hover:bg-yellow-200 hover:text-black transition"
        >
          Projekt anfragen
        </Link>

        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {openMobile && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl text-center py-10 space-y-6 text-white tracking-widest uppercase text-sm">
          <Link href="#start" onClick={() => setOpenMobile(false)} className="block">Start</Link>
          <Link href="#portfolio" onClick={() => setOpenMobile(false)} className="block">Portfolio</Link>
          <Link href="#services" onClick={() => setOpenMobile(false)} className="block">Leistungen</Link>
          <Link href="#contact" onClick={() => setOpenMobile(false)} className="block">Kontakt</Link>
        </div>
      )}
    </header>
  );
}
