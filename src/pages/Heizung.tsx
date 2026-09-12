import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const heizungServices = [
  'Heizungsanlagen',
  'Gasthermen',
  'Fernwärmeanlagen',
  'Wohnungsstationen',
  'Heizzentralen',
  'Pumpentechnik',
  'Heizkörper',
  'Regelungstechnik',
  'Wartung',
  'Reparatur',
  'Fehlerdiagnose',
  'Störungsbehebung',
];

const heizungImage =
  'https://images.pexels.com/photos/34938442/pexels-photo-34938442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function Heizung() {
  return (
    <>
      <SEO
        title="Heizung & Wärmetechnik | Guericke Gebäudetechnik Wien"
        description="Heizungsanlagen, Gasthermen, Fernwärme, Wohnungsstationen, Pumpentechnik, Heizkörper, Wartung und Reparatur in Wien und Umgebung."
        path="/heizung"
      />
      <PageHeader
        eyebrow="Heizung"
        title="Heizungs- & Wärmetechnik"
        intro="Service, Wartung und technische Lösungen rund um moderne Heizungs- und Wärmetechnik für Wien und Umgebung."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden bg-anthracite/5">
              <img
                src={heizungImage}
                alt="Techniker inspiziert und repariert eine Heizungsanlage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="heading-3 mb-6">Unsere Leistungen im Bereich Heizung</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {heizungServices.map((s) => (
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

      <section className="section-padding bg-warmwhite-200">
        <div className="container-page max-w-3xl text-center">
          <h2 className="heading-2 mb-6">Wärme zuverlässig geregelt.</h2>
          <p className="text-lg text-anthracite/70 leading-relaxed">
            Eine zuverlässig funktionierende Heizungsanlage ist ein wesentlicher
            Bestandteil moderner Gebäudetechnik. Wir unterstützen bei Wartung,
            Reparatur und technischer Fehlerdiagnose.
          </p>
        </div>
      </section>

      <CTASection title="Fragen zu Ihrer Heizungsanlage?" text="Kontaktieren Sie uns für Ihre Anfrage." />
    </>
  );
}
