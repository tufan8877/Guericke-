export default function HistoricalSection() {
  return (
    <section className="bg-warmwhite-200 py-16 lg:py-20">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-copper/30" />
            <span className="eyebrow">1602 — 1686</span>
            <div className="h-px flex-1 bg-copper/30" />
          </div>

          <h2 className="heading-2 text-center mb-10">
            Die Geschichte hinter unserem Namen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 lg:gap-12 items-start">
            {/* Portrait placeholder */}
            <div className="mx-auto md:mx-0">
              <div className="w-40 h-48 md:w-full md:h-64 bg-warmwhite-300 border border-copper/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-3xl text-copper/40">G</span>
                  <p className="text-[10px] tracking-[0.15em] text-copper/40 mt-2">
                    OTTO VON<br />GUERICKE
                  </p>
                </div>
              </div>
              <p className="text-center text-xs text-anthracite/50 mt-3 tracking-wide">
                1602 — 1686
              </p>
            </div>

            <div>
              <p className="text-anthracite/70 leading-relaxed mb-4">
                Der Name Guericke ist inspiriert von Otto von Guericke
                (1602–1686), einem bedeutenden Naturforscher, Ingenieur und
                Erfinder.
              </p>
              <p className="text-anthracite/70 leading-relaxed mb-4">
                Mit seinen Arbeiten zu Luftdruck und Vakuum sowie der
                Entwicklung einer frühen Vakuumpumpe wurde Guericke zu einem
                bedeutenden technischen Pionier seiner Zeit.
              </p>
              <p className="text-anthracite/70 leading-relaxed">
                Sein Name steht für technischen Forschergeist, Präzision und den
                Anspruch, technische Zusammenhänge zu verstehen und neue Lösungen
                zu entwickeln.
              </p>

              <div className="mt-6 pt-6 border-t border-copper/20">
                <p className="font-serif text-sm text-navy tracking-wide">
                  Otto von Guericke
                </p>
                <p className="text-xs text-anthracite/50 tracking-[0.1em] mt-1">
                  Naturforscher · Ingenieur · Erfinder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
