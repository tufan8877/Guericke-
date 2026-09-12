import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const serviceItems = [
  'Wartungen',
  'Inspektionen',
  'Kundendienst',
  'Reparaturen',
  'Fehlerdiagnose',
  'Störungsbehebung',
  'Technische Überprüfungen',
  'Dokumentation',
  'Austausch defekter Bauteile',
];

const serviceImage =
  'https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function Service() {
  return (
    <>
      <SEO
        title="Service & Wartung | Guericke Gebäudetechnik Wien"
        description="Wartungen, Inspektionen, Reparaturen, Fehlerdiagnose, Störungsbehebung und technische Überprüfungen in Wien und Umgebung."
        path="/service"
      />
      <PageHeader
        eyebrow="Service & Wartung"
        title="Service & Wartung"
        intro="Professioneller Service beginnt mit einer systematischen Fehlerdiagnose und endet mit einer fachgerechten Lösung."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden bg-anthracite/5">
              <img
                src={serviceImage}
                alt="Industrielle Rohrleitungsanlage mit Druckmanometer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="heading-3 mb-6">Unsere Serviceleistungen</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {serviceItems.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-anthracite/70 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-anthracite/70 leading-relaxed">
                Regelmäßige Wartung hilft dabei, technische Probleme frühzeitig
                zu erkennen und die zuverlässige Funktion von Anlagen
                langfristig zu erhalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Sie benötigen Service oder Wartung?" text="Kontaktieren Sie uns für Ihre Anfrage." />
    </>
  );
}
