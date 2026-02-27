"use client";

import Header from "@/components/Header";
import PremiumHero from "@/components/PremiumHero";
import  ServicesMenu  from "@/components/ServicesMenu";

import PortfolioLuxury  from "@/components/Portfolio";
import FooterContact from "@/components/FooterContact";




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
     <FooterContact/>
    </main>
  );
}
