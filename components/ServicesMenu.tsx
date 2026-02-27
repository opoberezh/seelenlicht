import { Sparkles, Film, Crown } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function ServicesMenu() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto bg-black">
      <h2
        className={`${playfair.className} text-4xl md:text-5xl mb-20 text-center text-white`}
      >
        Leistungen
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Elegant */}
        <div className="bg-black border border-neutral-800 rounded-2xl p-8 space-y-6 hover:border-yellow-200 transition duration-300">
          <h3 className="text-xl font-light tracking-widest uppercase text-yellow-100">
            <div className="flex items-center gap-3 text-yellow-100 font-light">
              <Sparkles size={24} strokeWidth={1.5} /> Elegant{" "}
            </div>
          </h3>

          <p className="text-sm opacity-70 leading-relaxed text-neutral-300">
            20–30 Sek. Video • Individuelle Story • ein Drehort • Titel & Musik•
            1 Korrekturrunde
          </p>

          <div className="text-2xl text-yellow-200 font-light">250€</div>
        </div>

        {/* Signature */}
        <div className="bg-black border border-neutral-800 rounded-2xl p-8 space-y-6 hover:border-yellow-200 transition duration-300">
          <h3 className="text-xl font-light tracking-widest uppercase text-yellow-100">
            <div className="flex items-center gap-3 text-yellow-100 font-light">
              <Film size={18} strokeWidth={1.5} />
              Signature
            </div>
          </h3>

          <p className="text-sm opacity-70 leading-relaxed text-neutral-300">
            45–60 Sek. Video • Individuelle Story • zwei Drehorte • 2 Korrekturrunden • Titel & Musik • Partystyling Video
          </p>

          <div className="text-2xl text-yellow-200 font-light">550€</div>
        </div>

        {/* Cinematic Story */}
        <div className="bg-black border border-neutral-800 rounded-2xl p-8 space-y-6 hover:border-yellow-200 transition duration-300">
          <h3 className="text-xl font-light tracking-widest uppercase text-yellow-100">
            <div className="flex items-center gap-3 text-yellow-100 font-light">
              <Crown size={18} strokeWidth={1.5} />
              Cinematic Story
            </div>
          </h3>

          <p className="text-sm opacity-70 leading-relaxed text-neutral-300">
            2–3 Min. • Emotionale Geschichte • Premium Schnitt • Storytelling Konzept 
          </p>

          <div className="text-2xl text-yellow-200 font-light">
            850€ – 1100€
          </div>
        </div>
      </div>
    </section>
  );
}
