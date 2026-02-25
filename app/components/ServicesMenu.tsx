export function ServicesMenu() {
  return (
    <div className="absolute top-full right-0 mt-4 w-80 bg-black/95 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 space-y-6 text-sm">

      <h3 className="text-yellow-100 tracking-widest uppercase font-light">
        Leistungen
      </h3>

      {/* Paket 1 */}
      <div className="space-y-1 border-b border-neutral-800 pb-4">
        <div className="text-yellow-100 font-light">🥉 Paket 1 — Elegant</div>
        <div className="opacity-70 text-xs leading-relaxed">
          30–45 Sek. Video • Basis-Szenario • 1 Korrekturrunde • 350€
        </div>
      </div>

      {/* Paket 2 */}
      <div className="space-y-1 border-b border-neutral-800 pb-4">
        <div className="text-yellow-100 font-light">🥈 Paket 2 — Signature</div>
        <div className="opacity-70 text-xs leading-relaxed">
          60–90 Sek. • Individuelle Story • 2 Korrekturrunden • Titel & Musik • 550€
        </div>
      </div>

      {/* Paket 3 */}
      <div className="space-y-1">
        <div className="text-yellow-100 font-light">🥇 Paket 3 — Cinematic Story</div>
        <div className="opacity-70 text-xs leading-relaxed">
          2–3 Min. • Emotionale Geschichte • Premium Schnitt • 850€ – 1100€
        </div>
      </div>

    </div>
  );
}