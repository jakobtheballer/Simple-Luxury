import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Simple Luxury",
  description: "Privacy Policy – GDPR compliant – Simple Luxury Services",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white pt-16">

      <section className="py-14 md:py-20 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">Legal</p>
          <h1 className="text-3xl md:text-5xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto space-y-10 text-sm text-[#0A0A0A]/70 leading-relaxed">

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">1. Data Controller</h2>
            <p className="text-[#0A0A0A] font-medium mb-1">Simple Luxury Services</p>
            <p>[Street and number]</p>
            <p>[Postal code, City], Germany</p>
            <p className="mt-2">Email: <a href="mailto:booking@simpleluxuryservice.de" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">booking@simpleluxuryservice.de</a></p>
            <p>Phone: <a href="tel:+4915738248355" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">+49 157 38 24 8355</a></p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">2. General Information</h2>
            <p>
              We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
            </p>
            <p className="mt-2">
              This website uses <strong className="text-[#0A0A0A]">no tracking, no analytics tools, and no advertising cookies</strong>. No personal data is automatically stored or passed on to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">3. Data Collection</h2>
            <p>Personal data is only collected on this website to the extent technically necessary. We collect data exclusively when you actively provide it to us — for example through:</p>
            <ul className="mt-3 space-y-1.5 pl-4">
              {["Contact form at /contact", "Direct email enquiries", "WhatsApp communication"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              The data you submit (name, email address, phone number, message content) is used exclusively to process your enquiry and will not be passed on to third parties without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">4. WhatsApp Communication</h2>
            <p>
              We use WhatsApp (WhatsApp LLC, 1601 Willow Road, Menlo Park, CA 94025, USA) as a communication channel. When you contact us via WhatsApp, your data is processed on WhatsApp&apos;s servers. WhatsApp is part of the Meta group. WhatsApp&apos;s privacy policy can be found at{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A96E] transition-colors duration-300">
                whatsapp.com/legal/privacy-policy-eea
              </a>.
            </p>
            <p className="mt-2">
              The legal basis for processing is Art. 6(1)(b) GDPR (pre-contractual measures) and Art. 6(1)(f) GDPR (legitimate interest in efficient customer communication).
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">5. Hosting & Server Logs</h2>
            <p>
              This website is hosted by Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA. When the website is accessed, information is automatically stored in server log files (IP address, browser type, operating system, referrer URL, date and time of access). This data cannot be attributed to specific persons and is not merged with other data sources. The legal basis is Art. 6(1)(f) GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">6. Cookies</h2>
            <p>
              This website uses only technically necessary cookies required for the operation of the site. No marketing, analytics, or tracking cookies are used. No separate consent is required for this.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">7. Data Transfer to Third Parties</h2>
            <p>
              Your data will not be passed on to third parties unless we are legally required to do so or you have expressly consented. Service providers used in the context of order processing (e.g. hosting) are contractually obliged to comply with GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">8. Your Rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul className="mt-3 space-y-1.5 pl-4">
              {[
                "Right of access to your stored data (Art. 15 GDPR)",
                "Right to rectification of inaccurate data (Art. 16 GDPR)",
                "Right to erasure of your data (Art. 17 GDPR)",
                "Right to restriction of processing (Art. 18 GDPR)",
                "Right to data portability (Art. 20 GDPR)",
                "Right to object to processing (Art. 21 GDPR)",
                "Right to withdraw consent at any time (Art. 7(3) GDPR)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise your rights, please contact: <a href="mailto:booking@simpleluxuryservice.de" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">booking@simpleluxuryservice.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">9. Right to Lodge a Complaint</h2>
            <p>
              You have the right to lodge a complaint with a data protection supervisory authority regarding our processing of your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">10. Updates to this Policy</h2>
            <p>
              This privacy policy is currently valid as of April 2026. Due to the further development of our website or changes in legal or regulatory requirements, it may be necessary to update this privacy policy.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/8 flex flex-wrap gap-6">
            <a href="/legal/imprint" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → Legal Notice
            </a>
            <a href="/datenschutz" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → Deutsche Version
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
