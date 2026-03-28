import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Simple Luxury",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-white pt-16">
      <div className="max-w-3xl mx-auto px-8 py-16 space-y-8 text-gray-700">
        <h1 className="text-4xl font-bold" style={{ color: "#0D1F2D" }}>Datenschutzerklärung</h1>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>1. Verantwortlicher</h2>
          <p>Simple Luxury Services<br />E-Mail: info@simpleluxuryservice.de</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>2. Datenerfassung</h2>
          <p>Wir erfassen personenbezogene Daten nur, wenn Sie diese freiwillig bereitstellen, etwa durch Kontaktformulare oder WhatsApp-Anfragen.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>3. Verarbeitung & Zweck</h2>
          <p>Ihre Daten werden ausschließlich zur Bearbeitung von Buchungsanfragen und zur Kommunikation verwendet.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>4. Datenschutzrechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten. Kontaktieren Sie uns unter info@simpleluxuryservice.de.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>5. Google Analytics</h2>
          <p>Diese Website verwendet Google Analytics zur Analyse des Nutzerverhaltens.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>6. Cookies</h2>
          <p>Wir verwenden nur technisch notwendige Cookies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>7. Sicherheit</h2>
          <p>Ihre Daten sind durch SSL-Verschlüsselung geschützt.</p>
        </section>

        <p className="text-sm text-gray-400 pt-4">Letzte Aktualisierung: März 2026</p>
      </div>
    </main>
  );
}
