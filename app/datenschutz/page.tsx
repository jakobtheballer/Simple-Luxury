import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Simple Luxury",
  description: "Datenschutzerklärung gemäß DSGVO – Simple Luxury Services",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-white pt-16">

      <section className="py-14 md:py-20 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">Rechtliches</p>
          <h1 className="text-3xl md:text-5xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto space-y-10 text-sm text-[#0A0A0A]/70 leading-relaxed">

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">1. Verantwortlicher</h2>
            <p className="text-[#0A0A0A] font-medium mb-1">Simple Luxury Services</p>
            <p>Moltkestraße 39</p>
            <p>69120 Heidelberg, Deutschland</p>
            <p className="mt-2">E-Mail: <a href="mailto:booking@simpleluxuryservice.de" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">booking@simpleluxuryservice.de</a></p>
            <p>Telefon: <a href="tel:+4915738248355" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">+49 157 38 24 8355</a></p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-2">
              Diese Website verwendet <strong className="text-[#0A0A0A]">kein Tracking, keine Analyse-Tools und keine Werbe-Cookies</strong>. Es werden keine personenbezogenen Daten automatisch gespeichert oder an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben. Wir erheben Daten ausschließlich, wenn Sie diese uns aktiv mitteilen — etwa durch:
            </p>
            <ul className="mt-3 space-y-1.5 pl-4">
              {["Kontaktformular auf /contact", "Direkte E-Mail-Anfragen", "WhatsApp-Kommunikation"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Die von Ihnen übermittelten Daten (Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt) werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre Einwilligung an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">4. WhatsApp-Kommunikation</h2>
            <p>
              Wir nutzen WhatsApp (WhatsApp LLC, 1601 Willow Road, Menlo Park, CA 94025, USA) als Kommunikationskanal. Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten auf Servern von WhatsApp verarbeitet. WhatsApp ist Teil des Meta-Konzerns. Die Datenschutzbestimmungen von WhatsApp finden Sie unter{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A96E] transition-colors duration-300">
                whatsapp.com/legal/privacy-policy-eea
              </a>.
            </p>
            <p className="mt-2">
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kundenkommunikation).
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">5. Hosting & Server-Logs</h2>
            <p>
              Diese Website wird über Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA gehostet. Beim Aufruf der Website werden automatisch Informationen in Server-Log-Dateien gespeichert (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs). Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">6. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Marketing-, Analyse- oder Tracking-Cookies eingesetzt. Einer gesonderten Einwilligung bedarf es hierfür nicht.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">7. Datenweitergabe an Dritte</h2>
            <p>
              Eine Weitergabe Ihrer Daten an Dritte findet nicht statt, es sei denn, wir sind gesetzlich dazu verpflichtet oder Sie haben ausdrücklich eingewilligt. Dienstleister, die im Rahmen der Auftragsverarbeitung eingesetzt werden (z. B. Hosting), sind vertraglich zur Einhaltung der DSGVO verpflichtet.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">8. Ihre Rechte</h2>
            <p>Sie haben gemäß DSGVO folgende Rechte:</p>
            <ul className="mt-3 space-y-1.5 pl-4">
              {[
                "Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung Ihrer Daten (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                "Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:booking@simpleluxuryservice.de" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">booking@simpleluxuryservice.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">9. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">10. Aktualität und Änderungen</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/8 flex flex-wrap gap-6">
            <a href="/impressum" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → Impressum
            </a>
            <a href="/legal/privacy" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → English Version
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
