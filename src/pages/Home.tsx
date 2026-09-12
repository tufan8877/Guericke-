import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShieldCheck, Sparkles, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/config/services';

const values = [
  { icon: Wrench, title: 'Fachkompetenz', text: 'Technisches Verständnis und fachgerechte Ausführung.' },
  { icon: ShieldCheck, title: 'Zuverlässigkeit', text: 'Klare Kommunikation und zuverlässige Abwicklung.' },
  { icon: Sparkles, title: 'Saubere Ausführung', text: 'Sorgfältiges Arbeiten und sauberer Arbeitsbereich.' },
  { icon: Users, title: 'Persönliche Betreuung', text: 'Direkter Kontakt ohne unnötige Umwege.' },
];

const qualityItems = [
  {
    title: 'Fachkompetenz',
    text: 'Technisches Verständnis und fachgerechte Ausführung stehen bei jeder Arbeit im Mittelpunkt.',
  },
  {
    title: 'Zuverlässigkeit',
    text: 'Klare Kommunikation und eine zuverlässige Abwicklung gehören für uns zu professionellem Handwerk.',
  },
  {
    title: 'Saubere Ausführung',
    text: 'Sorgfältiges Arbeiten und ein sauber hinterlassener Arbeitsbereich sind Teil unseres Qualitätsanspruchs.',
  },
  {
    title: 'Persönliche Betreuung',
    text: 'Direkter Kontakt und verständliche Kommunikation ohne unnötige Umwege.',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Guericke Gebäudetechnik | Gas · Wasser · Heizung in Wien"
        description="Guericke Gebäudetechnik – Gas, Wasser, Heizung, Wartung, Reparatur und professioneller Gebäudetechnik-Service in Wien und Umgebung."
        path="/"
      />
      <Hero />

      {/* Intro section */}
      <section className="section-padding bg-warmwhite">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Willkommen bei Guericke</p>
            <h2 className="heading-2 mb-6 text-balance">
              Handwerk. Technik. Verlässlichkeit.
            </h2>
            <p className="text-lg text-anthracite/70 leading-relaxed mb-12">
              Guericke Gebäudetechnik steht für fachgerechte Arbeit, technische
              Kompetenz und zuverlässigen Service rund um Gas, Wasser und
              Heizung.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-copper/30">
                  <v.icon size={20} className="text-copper" />
                </div>
                <h3 className="font-sans font-semibold text-navy text-sm mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-anthracite/60 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="section-padding bg-warmwhite-200">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Leistungen</p>
            <h2 className="heading-2 mb-4">Gebäudetechnik aus einer Hand</h2>
            <p className="text-anthracite/70 leading-relaxed">
              Von Gas- und Sanitärtechnik über Heizungsanlagen bis zu Wartung,
              Reparatur und technischer Störungsbehebung – wir bieten
              professionelle Lösungen für Wien und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/leistungen" className="btn-secondary">
              Alle Leistungen im Überblick
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quality section - dark */}
      <section className="section-padding bg-navy-800 text-warmwhite">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-copper-200 mb-4">Qualität</p>
            <h2 className="heading-2 text-warmwhite mb-4">
              Qualität, auf die Sie sich verlassen können.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityItems.map((q, i) => (
              <div key={q.title} className="border-l border-copper/30 pl-5">
                <span className="font-serif text-2xl text-copper-200/40 mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-sans font-semibold text-warmwhite text-base mb-2">
                  {q.title}
                </h3>
                <p className="text-sm text-warmwhite/60 leading-relaxed">
                  {q.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warmwhite">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="heading-2 mb-4">Sie haben eine Frage oder einen Auftrag?</h2>
          <p className="text-lg text-anthracite/70 leading-relaxed mb-8">
            Kontaktieren Sie uns für Ihre Anfrage – telefonisch, per E-Mail oder
            über unser Kontaktformular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary">
              Kontakt aufnehmen
            </Link>
            <Link to="/leistungen" className="btn-secondary">
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
