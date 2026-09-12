import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@/config/company';

const footerNav = {
  leistungen: [
    { label: 'Gas', path: '/gas' },
    { label: 'Wasser / Sanitär', path: '/sanitaer' },
    { label: 'Heizung', path: '/heizung' },
    { label: 'Service & Wartung', path: '/service' },
  ],
  unternehmen: [
    { label: 'Über uns', path: '/ueber-uns' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Kontakt', path: '/kontakt' },
  ],
  rechtliches: [
    { label: 'Impressum', path: '/impressum' },
    { label: 'Datenschutz', path: '/datenschutz' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-warmwhite">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-1 leading-none">
              <span className="font-serif font-bold text-2xl tracking-[0.05em]">
                {company.wordmark}
              </span>
              <span className="font-sans font-medium text-[10px] tracking-[0.3em] text-warmwhite/50">
                {company.submark}
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-copper-200 mt-1">
                {company.slogan}
              </span>
            </div>
            <p className="mt-6 text-sm text-warmwhite/60 max-w-xs leading-relaxed">
              Professionelle Gebäudetechnik für Wien und Umgebung. Gas, Wasser,
              Heizung, Wartung und Reparatur aus einer Hand.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-copper-200 mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2.5">
              {footerNav.leistungen.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-warmwhite/60 hover:text-warmwhite transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-copper-200 mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-2.5">
              {footerNav.unternehmen.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-warmwhite/60 hover:text-warmwhite transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches + Kontakt */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-copper-200 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2.5 mb-6">
              {footerNav.rechtliches.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-warmwhite/60 hover:text-warmwhite transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2.5 text-sm text-warmwhite/60">
              <a
                href={`tel:${company.phoneHref}`}
                className="flex items-center gap-2 hover:text-warmwhite transition-colors"
              >
                <Phone size={14} className="text-copper-200" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-warmwhite transition-colors"
              >
                <Mail size={14} className="text-copper-200" />
                {company.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-copper-200" />
                {company.area}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warmwhite/10">
          <p className="text-xs text-warmwhite/40">
            © {new Date().getFullYear()} {company.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
