import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { services } from '@/config/services';

export default function Leistungen() {
  return (
    <>
      <SEO
        title="Leistungen | Guericke Gebäudetechnik Wien"
        description="Gebäudetechnik aus einer Hand: Gas, Wasser, Sanitär, Heizung, Fernwärme, Service, Wartung und Reparatur in Wien und Umgebung."
        path="/leistungen"
      />
      <PageHeader
        eyebrow="Leistungen"
        title="Gebäudetechnik aus einer Hand"
        intro="Von Gas- und Sanitärtechnik über Heizungsanlagen bis zu Wartung, Reparatur und technischer Störungsbehebung bietet Guericke Gebäudetechnik professionelle Lösungen für Wien und Umgebung."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page space-y-16 lg:space-y-24">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-anthracite/5">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="eyebrow mb-3">
                  0{i + 1} — {s.title}
                </p>
                <h2 className="heading-3 mb-4">{s.title}</h2>
                <p className="text-anthracite/70 leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                  {s.services.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-anthracite/70 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-copper rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.route}
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-copper transition-colors"
                >
                  Mehr zu {s.title}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
