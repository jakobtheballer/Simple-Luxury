import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice | Simple Luxury",
  description: "Legal notice – Simple Luxury Services",
};

export default function ImprintPage() {
  return (
    <main className="bg-white pt-16">

      <section className="py-14 md:py-20 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">Legal</p>
          <h1 className="text-3xl md:text-5xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Legal Notice
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto space-y-10 text-sm text-[#0A0A0A]/70 leading-relaxed">

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Information pursuant to § 5 TMG (German Telemedia Act)</h2>
            <p className="text-[#0A0A0A] font-medium mb-1">Simple Luxury Services</p>
            <p>[Street and number]</p>
            <p>[Postal code, City]</p>
            <p>Germany</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Contact</h2>
            <p>Phone: <a href="tel:+4915738248355" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">+49 157 38 24 8355</a></p>
            <p>Email: <a href="mailto:booking@simpleluxuryservice.de" className="text-[#0A0A0A] hover:text-[#C9A96E] transition-colors duration-300">booking@simpleluxuryservice.de</a></p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">VAT Identification Number</h2>
            <p>VAT identification number pursuant to § 27a of the German Value Added Tax Act: [to be entered]</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Person Responsible for Content (§ 55 para. 2 RStV)</h2>
            <p>[First and last name]</p>
            <p>[Address as above]</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C9A96E] transition-colors duration-300">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG. However, pursuant to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Liability for Links</h2>
            <p>
              Our website contains links to external third-party websites over whose content we have no influence. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-3">Copyright</h2>
            <p>
              The content and works on these pages created by the site operators are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/8 flex flex-wrap gap-6">
            <a href="/legal/privacy" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → Privacy Policy
            </a>
            <a href="/impressum" className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300">
              → Deutsche Version
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
