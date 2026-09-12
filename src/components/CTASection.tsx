import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { company } from '@/config/company';

interface CTASectionProps {
  title?: string;
  text?: string;
}

export default function CTASection({
  title = 'Fragen zu Ihrer Anlage?',
  text = 'Kontaktieren Sie uns für Ihre Anfrage.',
}: CTASectionProps) {
  return (
    <section className="section-padding bg-navy-800 text-warmwhite">
      <div className="container-page text-center max-w-2xl mx-auto">
        <h2 className="heading-2 text-warmwhite mb-4">{title}</h2>
        <p className="text-warmwhite/70 leading-relaxed mb-8">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/kontakt" className="btn-primary bg-copper hover:bg-copper-500">
            Anfrage senden
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="btn-secondary border-warmwhite/30 text-warmwhite hover:bg-warmwhite hover:text-navy"
          >
            <Phone size={16} />
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
