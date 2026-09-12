import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import { company } from '@/config/company';

const impressumData = [
  { label: 'Firmenname', value: 'Guericke Gebäudetechnik' },
  { label: 'Inhaber', value: '[NAME]' },
  { label: 'Adresse', value: '[ADRESSE]' },
  { label: 'Telefon', value: company.phone },
  { label: 'E-Mail', value: company.email },
  { label: 'Gewerbe', value: '[GEWERBE]' },
  { label: 'Aufsichtsbehörde', value: '[BEHÖRDE]' },
  { label: 'UID', value: '[UID FALLS VORHANDEN]' },
  { label: 'Firmenbuchnummer', value: '[FALLS VORHANDEN]' },
  { label: 'Firmenbuchgericht', value: '[FALLS VORHANDEN]' },
];

export default function Impressum() {
  return (
    <>
      <SEO
        title="Impressum | Guericke Gebäudetechnik Wien"
        description="Impressum von Guericke Gebäudetechnik – Firmenname, Inhaber, Adresse und Kontaktdaten."
        path="/impressum"
      />
      <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Angaben gemäß österreichischer Rechtsvorschriften über die Pflicht zur Veröffentlichung von Unternehmensinformationen."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page max-w-2xl">
          <div className="space-y-5">
            {impressumData.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 py-4 border-b border-anthracite/10"
              >
                <span className="font-sans text-sm font-medium text-anthracite/50 tracking-wide">
                  {item.label}
                </span>
                <span className="text-sm text-navy">{item.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-anthracite/50 leading-relaxed">
            Die mit [KLAMMERN] markierten Felder sind Platzhalter und werden mit
            den tatsächlichen Unternehmensdaten ausgefüllt, sobald diese
            bereitgestellt werden.
          </p>
        </div>
      </section>
    </>
  );
}
