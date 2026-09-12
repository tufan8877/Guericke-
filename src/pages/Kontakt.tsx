import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { company } from '@/config/company';

export default function Kontakt() {
  return (
    <>
      <SEO
        title="Kontakt | Guericke Gebäudetechnik Wien"
        description="Kontaktieren Sie Guericke Gebäudetechnik in Wien und Umgebung – telefonisch, per E-Mail oder über unser Kontaktformular."
        path="/kontakt"
      />
      <PageHeader
        eyebrow="Kontakt"
        title="Kontaktieren Sie uns"
        intro="Sie haben eine Frage, benötigen eine Reparatur oder möchten einen Termin vereinbaren? Senden Sie uns Ihre Anfrage oder kontaktieren Sie uns direkt telefonisch."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-copper mb-4">
                  Kontaktdaten
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone size={18} className="text-copper" />
                      <span className="font-sans font-medium text-navy text-sm">Telefon</span>
                    </div>
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="text-navy hover:text-copper transition-colors block ml-9"
                    >
                      {company.phone}
                    </a>
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="inline-flex items-center gap-2 mt-2 ml-9 text-sm text-copper hover:text-copper-500 transition-colors"
                    >
                      <Phone size={14} />
                      Jetzt anrufen
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail size={18} className="text-copper" />
                      <span className="font-sans font-medium text-navy text-sm">E-Mail</span>
                    </div>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-navy hover:text-copper transition-colors block ml-9"
                    >
                      {company.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={18} className="text-copper" />
                      <span className="font-sans font-medium text-navy text-sm">Einsatzgebiet</span>
                    </div>
                    <p className="text-anthracite/70 ml-9">{company.area}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Globe size={18} className="text-copper" />
                      <span className="font-sans font-medium text-navy text-sm">Website</span>
                    </div>
                    <p className="text-anthracite/70 ml-9">guericke.at</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-copper mb-4">
                Anfrage senden
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
