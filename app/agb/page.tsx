import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Simple Luxury",
};

export default function AGBPage() {
  return (
    <main className="bg-white pt-16">
      <div className="max-w-3xl mx-auto px-8 py-16 space-y-8 text-gray-700">
        <h1 className="text-4xl font-bold" style={{ color: "#0D1F2D" }}>Allgemeine Geschäftsbedingungen</h1>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>1. Geltung</h2>
          <p>Diese AGB gelten für alle Buchungen und Mietverträge über Simple Luxury Services.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>2. Buchung & Bestätigung</h2>
          <p>Eine Buchung ist verbindlich nur nach schriftlicher Bestätigung durch Simple Luxury Services. Die Buchung erfolgt über WhatsApp oder E-Mail.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>3. Preise & Zahlungsbedingungen</h2>
          <p>Alle angegebenen Preise verstehen sich zuzüglich MwSt. und APA (Advance Provisioning Allowance). Eine Anzahlung ist zur Sicherung der Buchung erforderlich.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>4. Stornierungsbedingungen</h2>
          <p>Stornierungen müssen schriftlich erfolgen.</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>30+ Tage vorher: 100 % Rückerstattung</li>
            <li>7–30 Tage vorher: 50 % Rückerstattung</li>
            <li>Unter 7 Tagen: Keine Rückerstattung</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>5. Haftung</h2>
          <p>Simple Luxury Services haftet nicht für Ausfallzeiten, Wetterverhältnisse oder höhere Gewalt.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>6. Hausordnung</h2>
          <p>Gäste müssen die Hausordnung des Schiffes einhalten und können bei Verstoß von der Buchung ausgeschlossen werden.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>7. Versicherung</h2>
          <p>Alle Charter-Optionen enthalten Vollkaskoversicherung. Eine persönliche Reiseversicherung ist empfohlen.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#0D1F2D" }}>8. Salvatorische Klausel</h2>
          <p>Sollte eine Bestimmung unwirksam sein, bleibt der Rest der AGB gültig.</p>
        </section>

        <p className="text-sm text-gray-400 pt-4">Letzte Aktualisierung: März 2026</p>
      </div>
    </main>
  );
}
