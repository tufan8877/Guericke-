import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const sanitaerServices = [
  'Trinkwasserinstallationen',
  'Rohrleitungen',
  'Armaturen',
  'WC-Anlagen',
  'Waschtische',
  'Küchenanschlüsse',
  'Badezimmertechnik',
  'Reparaturen',
  'Undichtheiten',
  'Gebrechensbehebung',
  'Sanitärinstallationen',
];

const sanitaerImage =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function Sanitaer() {
  return (
    <>
      <SEO
        title="Wasser & Sanitär | Guericke Gebäudetechnik Wien"
        description="Trinkwasserinstallationen, Rohrleitungen, Armaturen, Sanitärtechnik und Reparaturen – professionelle Sanitärinstallationen in Wien und Umgebung."
        path="/sanitaer"
      />
      <PageHeader
        eyebrow="Wasser / Sanitär"
        title="Wasser & Sanitär"
        intro="Von der Trinkwasserinstallation bis zur Reparatur von Armaturen und Sanitäranlagen stehen fachgerechte Ausführung und zuverlässige Technik im Mittelpunkt."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden bg-anthracite/5">
              <img
                src={sanitaerImage}
                alt="Installateur montiert Stahlrohre mit fachgerechten Werkzeugen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="heading-3 mb-6">Unsere Leistungen im Bereich Sanitär</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {sanitaerServices.map((s) => (
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

      <CTASection title="Fragen zu Ihrer Sanitäranlage?" text="Kontaktieren Sie uns für Ihre Anfrage." />
    </>
  );
}
