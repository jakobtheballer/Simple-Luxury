import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Simple Luxury",
};

export default function ImpressumPage() {
  return (
    <main className="bg-white pt-16">
      <div className="max-w-3xl mx-auto px-8 py-16 space-y-8 text-gray-700">
        <h1 className="text-4xl font-bold" style={{ color: "#0D1F2D" }}>Impressum</h1>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>Angaben gemäß § 5 TMG</h2>
          <p>
            Simple Luxury Services<br />
            Hamburg, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>Kontakt</h2>
          <p>
            E-Mail: info@simpleluxuryservice.de<br />
            WhatsApp: +49 157 38248355
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>Haftungsausschluss</h2>
          <p>Die Inhalte unserer Webseite werden mit großer Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für die Aktualität, Korrektheit und Vollständigkeit der bereitgestellten Informationen.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>Externe Links</h2>
          <p>Wir sind nicht verantwortlich für den Inhalt externer Websites, auf die wir verlinken.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>Urheberrecht</h2>
          <p>Die auf dieser Website verwendeten Bilder und Texte sind urheberrechtlich geschützt.</p>
        </section>

        <p className="text-sm text-gray-400 pt-4">Letzte Aktualisierung: März 2026</p>
      </div>
    </main>
  );
}
