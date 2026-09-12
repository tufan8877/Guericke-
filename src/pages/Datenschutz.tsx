import SEO from '@/components/SEO';
import PageHeader from '@/components/PageHeader';
import { company } from '@/config/company';

export default function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutz | Guericke Gebäudetechnik Wien"
        description="Datenschutzerklärung von Guericke Gebäudetechnik zum Umgang mit personenbezogenen Daten über das Kontaktformular und E-Mail-Verkehr."
        path="/datenschutz"
      />
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        intro="Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und behandeln Ihre Daten vertraulich und gemäß der datenschutzrechtlichen Bestimmungen."
      />

      <section className="section-padding bg-warmwhite">
        <div className="container-page max-w-3xl">
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="font-serif text-xl text-navy mb-3">1. Verantwortlicher</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-sm text-navy mt-2">
                {company.name}<br />
                [ADRESSE]<br />
                {company.phone}<br />
                {company.email}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">2. Erhebung und Verarbeitung von Daten</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Beim Aufruf dieser Website werden automatisch technische
                Informationen durch den Server erfasst (sogenannte
                Server-Logfiles). Diese umfassen die IP-Adresse des
                anfragenden Geräts, den Zeitpunkt der Anfrage, den angeforderten
                URL und ggf. weitere technische Daten. Diese Daten werden
                ausschließlich zum Zweck der technischen Betriebsabwicklung
                und Sicherheit verarbeitet.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">3. Kontaktformular</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed mb-3">
                Über das Kontaktformular auf dieser Website können Sie uns
                eine Nachricht senden. Dabei werden folgende personenbezogene
                Daten verarbeitet:
              </p>
              <ul className="text-sm text-anthracite/70 leading-relaxed space-y-1 ml-4 list-disc">
                <li>Vorname und Nachname</li>
                <li>Telefonnummer</li>
                <li>E-Mail-Adresse</li>
                <li>Straße / Adresse (sofern eingegeben)</li>
                <li>PLZ und Ort</li>
                <li>Betreff und gewünschte Leistung</li>
                <li>Nachricht</li>
              </ul>
              <p className="text-sm text-anthracite/70 leading-relaxed mt-3">
                Die Verarbeitung erfolgt auf Grundlage Ihrer ausdrücklichen
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch Setzen
                des Häkchens bei der Datenschutzerklärung erteilen. Die Daten
                werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">4. E-Mail-Versand</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Die Übermittlung Ihrer Anfrage erfolgt über eine sichere
                Server-Verbindung per E-Mail an unsere Kontaktadresse. Für den
                E-Mail-Versand wird ein externer SMTP-Dienst genutzt. Die
                übermittelten Daten werden nicht an Dritte weitergegeben, die
                nicht an der Bearbeitung Ihrer Anfrage beteiligt sind.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">5. Speicherdauer</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Ihre Daten werden für die Dauer der Bearbeitung Ihrer Anfrage
                gespeichert und danach gelöscht, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen. Die Einwilligung kann
                jederzeit mit Wirkung für die Zukunft widerrufen werden.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">6. Hosting</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Diese Website wird auf einem externen Hosting-Server
                bereitgestellt. Der Hosting-Anbieter verarbeitet
                Server-Logfiles im Rahmen der technischen Betriebsabwicklung.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">7. Cookies</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Diese Website verwendet keine nicht notwendigen Cookies. Es
                werden keine Tracking-Cookies, Analyse-Tools oder
                Marketing-Cookies eingesetzt. Es werden keine Dienste wie
                Google Analytics oder Meta Pixel verwendet.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">8. Ihre Rechte</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerspruch. Zur Ausübung Ihrer Rechte kontaktieren Sie uns
                bitte unter den oben angegebenen Kontaktdaten.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy mb-3">9. Aktualität</h2>
              <p className="text-sm text-anthracite/70 leading-relaxed">
                Diese Datenschutzerklärung entspricht dem aktuellen Stand der
                auf dieser Website verwendeten Technologie. Bei Änderungen
                wird die Datenschutzerklärung entsprechend aktualisiert.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
