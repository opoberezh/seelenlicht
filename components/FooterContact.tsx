"use client";

export default function FooterContact() {
  return (
    <section className="bg-black text-white py-28 px-6 text-center border-t border-white/10">

      <h2 className="text-4xl font-light mb-8">
        Erzählen wir deine Atmosphäre
      </h2>

      <p className="opacity-70 max-w-xl mx-auto mb-12">
        Boutique Studio für stilvolle, inszenierte Einladungsvideos.
        Geschichten, die bleiben.
      </p>

      <a
        href="mailto:contact@dieatmosphaere.de"
        className="inline-block border border-white px-10 py-4 rounded-full hover:scale-105 transition"
      >
        Jetzt anfragen
      </a>

    </section>
  );
}