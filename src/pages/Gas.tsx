import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const gasServices = [
  'Gasinstallationen',
  'Gasleitungen',
  'Gasgeräte',
  'Gasthermen',
  'Wartung',
  'Reparatur',
  'Störungssuche',
  'Dichtheitsprüfungen',
  'Technische Überprüfung',
];

const gasImage =
  'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function Gas() {
  return (
    <>
      <SEO
        title="Gasinstallation & Gastechnik | Guericke Gebäudetechnik Wien"
        description="Gasinstallation, Gasleitungen, Gasthermen, Wartung, Reparatur und Dichtheitsprüfungen – professionelle Gastechnik in Wien und Umgebung."
        path="/gas"
      />
      <PageHeader
        eyebrow="Gas"
        title="Gasinstallation & Gastechnik"
        intro="Arbeiten an Gasanlagen erfordern technisches Verständnis, Sorgfalt und präzise Ausführung."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden bg-anthracite/5">
              <img
                src={gasImage}
                alt="Techniker wartet eine Gastherme mit präzisen Instrumenten"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="heading-3 mb-6">Unsere Leistungen im Bereich Gas</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {gasServices.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-anthracite/70 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 bg-copper rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Fragen zu Ihrer Gasanlage?" text="Kontaktieren Sie uns für Ihre Anfrage." />
    </>
  );
}
