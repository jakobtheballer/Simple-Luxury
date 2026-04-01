"use client";

export default function ContactFormClient() {
  return (
    <form
      action={`https://wa.me/4915738248355`}
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const interest = (form.elements.namedItem("interest") as HTMLSelectElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
        const text = `Hi, my name is ${name}. I'm interested in: ${interest}. ${message}`;
        window.open(`https://wa.me/4915738248355?text=${encodeURIComponent(text)}`, "_blank");
      }}
    >
      {[
        { name: "name", label: "Name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+34 ..." },
      ].map(({ name, label, type, placeholder }) => (
        <div key={name}>
          <label className="block text-[9px] uppercase tracking-[0.2em] text-white/30 mb-3">{label}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white/15 text-white text-sm pb-3 placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-300"
          />
        </div>
      ))}

      <div>
        <label className="block text-[9px] uppercase tracking-[0.2em] text-white/30 mb-3">I&apos;m interested in</label>
        <select
          name="interest"
          className="w-full bg-transparent border-b border-white/15 text-white/60 text-sm pb-3 focus:outline-none focus:border-white/50 transition-colors duration-300 cursor-pointer"
        >
          <option value="Yacht Charter" className="bg-[#0A0A0A]">Yacht Charter</option>
          <option value="Week Charter" className="bg-[#0A0A0A]">Week Charter</option>
          <option value="Private Villa" className="bg-[#0A0A0A]">Private Villa</option>
          <option value="Concierge Services" className="bg-[#0A0A0A]">Concierge Services</option>
          <option value="Something else" className="bg-[#0A0A0A]">Something else</option>
        </select>
      </div>

      <div>
        <label className="block text-[9px] uppercase tracking-[0.2em] text-white/30 mb-3">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us your dates, group size, and any preferences..."
          className="w-full bg-transparent border-b border-white/15 text-white text-sm pb-3 placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 mt-4"
      >
        Send via WhatsApp
      </button>

      <p className="text-[10px] text-white/20 text-center">
        Clicking will open WhatsApp with your message pre-filled.
      </p>
    </form>
  );
}
