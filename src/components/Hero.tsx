import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { company } from '@/config/company';
import { heroImage, heroImageAlt } from '@/config/services';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/75 to-navy-900/40" />
      </div>

      {/* Content */}
      <div className="relative container-page py-20 lg:py-28">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="eyebrow text-copper-200 mb-6">
            {company.area}
          </p>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-warmwhite leading-[1.05] tracking-[0.02em]">
            GUERICKE
          </h1>
          <p className="font-serif text-xl md:text-2xl text-warmwhite/80 mt-3 tracking-[0.15em]">
            GEBÄUDETECHNIK
          </p>
          <p className="font-sans text-sm tracking-[0.2em] text-copper-200 mt-4">
            {company.slogan}
          </p>

          <p className="mt-8 text-lg text-warmwhite/80 leading-relaxed max-w-xl">
            Professionelle Gebäudetechnik für Wien und Umgebung.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/leistungen" className="btn-primary">
              Unsere Leistungen
            </Link>
            <Link to="/kontakt" className="btn-secondary border-warmwhite/30 text-warmwhite hover:bg-warmwhite hover:text-navy">
              Kontakt aufnehmen
            </Link>
            <a
              href={`tel:${company.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 text-warmwhite/80 hover:text-copper-200 transition-colors text-sm font-medium py-3.5"
            >
              <Phone size={16} />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-copper/30" />
    </section>
  );
}
