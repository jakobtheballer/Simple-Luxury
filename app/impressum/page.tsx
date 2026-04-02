import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Simple Luxury",
  description: "Impressum – Angaben gemäß § 5 TMG",
};

export default function ImpressumPage() {
  return (
    <main className="bg-white pt-16">

      <section className="py-14 md:py-20 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">Rechtliches</p>
          <h1 className="text-3xl md:text-5xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto space-y-10 text-sm text-[#0A0A0A]/70 leading-relaxed">

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-[#0A0A0A] font-medium mb-1">Hütter & Streich Adventures</p>
            <p className="text-[#0A0A0A] font-medium mb-1">Simple Luxury</p>
            <p>Moltkestraße 39</p>
            <p>69120 Heidelberg</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Kontakt</h2>
            <p>Telefon: <a href="tel:+4915738248355" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">+49 157 38 24 8355</a></p>
            <p>E-Mail: <a href="mailto:booking@simpleluxuryservice.de" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">booking@simpleluxuryservice.de</a></p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: wird nachgereicht</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Moritz Hütter & Jakob Streich</p>
            <p>Moltkestraße 39, 69120 Heidelberg</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A96E] transition-colors duration-300">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/8 flex flex-wrap gap-6">
            <a href="/datenschutz" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → Datenschutzerklärung
            </a>
            <a href="/legal/imprint" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → English Version
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
