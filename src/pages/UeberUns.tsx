import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import HistoricalSection from '@/components/HistoricalSection';
import CTASection from '@/components/CTASection';
import { company } from '@/config/company';

export default function UeberUns() {
  return (
    <>
      <SEO
        title="Über uns | Guericke Gebäudetechnik Wien"
        description="Guericke Gebäudetechnik – professionelles Installationshandwerk mit Schwerpunkt auf Gas-, Wasser- und Heiztechnik in Wien und Umgebung."
        path="/ueber-uns"
      />
      <PageHeader
        eyebrow="Über uns"
        title="Handwerk mit technischem Anspruch."
        intro="Guericke Gebäudetechnik steht für professionelles Installationshandwerk mit Schwerpunkt auf Gas-, Wasser- und Heiztechnik."
      />

      {/* Main about section */}
      <section className="section-padding bg-warmwhite">
        <div className="container-page max-w-3xl">
          <div className="space-y-5 text-anthracite/70 leading-relaxed text-lg">
            <p>
              Unser Anspruch ist eine fachgerechte, saubere und zuverlässige
              Ausführung unserer Arbeiten.
            </p>
            <p>
              Von Wartung und Reparatur bis zu technischen Installationen
              stehen Qualität, Sicherheit und persönliche Betreuung im
              Mittelpunkt.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-copper/20">
            <p className="font-sans text-sm tracking-[0.2em] text-copper font-medium">
              {company.slogan}
            </p>
          </div>
        </div>
      </section>

      {/* Historical section */}
      <HistoricalSection />

      {/* Connection to modern brand */}
      <section className="section-padding bg-warmwhite">
        <div className="container-page max-w-3xl text-center">
          <h2 className="heading-2 mb-6">
            Tradition im Namen. Technik für heute.
          </h2>
          <p className="text-lg text-anthracite/70 leading-relaxed mb-8">
            Die Verbindung aus technischem Verständnis, Präzision und Fortschritt
            bildet die Inspiration für unseren Namen. Guericke Gebäudetechnik
            überträgt diesen Anspruch auf moderne Gebäudetechnik – mit
            professionellen Lösungen rund um Gas, Wasser und Heizung.
          </p>

          <div className="inline-flex flex-col items-center gap-1 leading-none py-6">
            <span className="font-serif font-bold text-3xl tracking-[0.05em] text-navy">
              {company.wordmark}
            </span>
            <span className="font-sans font-medium text-xs tracking-[0.3em] text-anthracite/60 mt-1">
              {company.submark}
            </span>
            <span className="font-sans text-xs tracking-[0.25em] text-copper mt-2">
              {company.slogan}
            </span>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
