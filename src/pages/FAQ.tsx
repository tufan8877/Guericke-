import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const faqs = [
  {
    q: 'Welche Leistungen bietet Guericke Gebäudetechnik an?',
    a: 'Unser Leistungsschwerpunkt liegt bei Gas, Wasser, Heizung sowie Wartung, Reparatur und technischer Störungsbehebung.',
  },
  {
    q: 'In welchem Gebiet sind Sie tätig?',
    a: 'Unser Einsatzgebiet umfasst Wien und Umgebung.',
  },
  {
    q: 'Bieten Sie Thermenwartungen an?',
    a: 'Ja, Wartung und Service von Gasthermen gehören zu unserem Leistungsbereich.',
  },
  {
    q: 'Übernehmen Sie Reparaturen?',
    a: 'Ja. Wir führen je nach Anlage und technischer Situation Reparaturen und Fehlerdiagnosen durch.',
  },
  {
    q: 'Arbeiten Sie auch an Fernwärmeanlagen?',
    a: 'Ja, auch Fernwärme, Wohnungsstationen und Heizzentralen gehören zu unserem technischen Leistungsspektrum.',
  },
  {
    q: 'Wie kann ich einen Termin vereinbaren?',
    a: 'Sie können uns telefonisch, per E-Mail oder über unser Kontaktformular erreichen.',
  },
  {
    q: 'Kann ich eine Anfrage über die Website senden?',
    a: 'Ja. Über unser Kontaktformular können Sie uns Ihr Anliegen direkt übermitteln.',
  },
  {
    q: 'Bieten Sie Sanitärreparaturen an?',
    a: 'Ja. Wir übernehmen unter anderem Reparaturen an Armaturen, Leitungen und Sanitärinstallationen.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-anthracite/10">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-medium text-navy text-base pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-copper transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 animate-fade-in">
          <p className="text-sm text-anthracite/70 leading-relaxed">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQ | Guericke Gebäudetechnik Wien"
        description="Häufige Fragen zu Leistungen, Einsatzgebiet, Wartung, Reparatur und Kontaktmöglichkeiten von Guericke Gebäudetechnik in Wien."
        path="/faq"
      />
      <PageHeader
        eyebrow="FAQ"
        title="Häufig gestellte Fragen"
        intro="Antworten auf die häufigsten Fragen zu unseren Leistungen, unserem Einsatzgebiet und unseren Servicemöglichkeiten."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page max-w-3xl">
          <div className="border-t border-anthracite/10">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ihre Frage war nicht dabei?"
        text="Kontaktieren Sie uns – wir beantworten Ihre Fragen gerne persönlich."
      />
    </>
  );
}
