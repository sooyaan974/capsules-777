export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-10 md:mb-14">
      <div className="glass px-6 py-10 md:px-10 md:py-14">
        <div className="max-w-3xl">
          <p className="inline-flex items-center text-xs uppercase tracking-widest text-white/70 mb-3">
            Publication auto • Toutes les 5 h
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">
            Boeing 777 — sujets courts, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">illustrés</span> et agréables à lire.
          </h2>
          <p className="text-white/80">
            Des explications pédagogiques et originales (sans contenu propriétaire), accompagnées de photos et de vidéos.
          </p>
        </div>
      </div>
    </section>
  )
}
