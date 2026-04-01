import type { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact – Plan Your Charter | Simple Luxury",
  description: "Get in touch to plan your private yacht charter, villa rental or concierge experience across Mallorca and Ibiza.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-16">

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24">

        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-8">Get in Touch</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white mb-8" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Plan your<br />experience.
          </h1>
          <p className="text-sm text-white/40 leading-relaxed mb-12 max-w-sm">
            Tell us what you have in mind — dates, group size, preferences. We&apos;ll come back within 15 minutes.
          </p>

          {/* Contact methods */}
          <div className="space-y-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 mb-1">WhatsApp</p>
              <a href="https://wa.me/4915738248355" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
                +49 157 38 24 8355
              </a>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 mb-1">Locations</p>
              <p className="text-sm text-white/40">Mallorca · Ibiza · Formentera</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div>
          <ContactFormClient />
        </div>
      </div>
    </main>
  );
}
