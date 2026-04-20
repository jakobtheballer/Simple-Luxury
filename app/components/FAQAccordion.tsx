"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/faq-data";

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

type Props = {
  faq: FAQ & { paragraphs2?: string[] };
  index: number;
};

export default function FAQAccordion({ faq, index }: Props) {
  const [open, setOpen] = useState(false);

  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="border-b border-[#0A0A0A]/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-7 flex items-start gap-6 group"
        aria-expanded={open}
      >
        {/* Number */}
        <span
          className="text-[10px] uppercase tracking-[0.2em] pt-0.5 shrink-0 transition-colors duration-300 w-6"
          style={{ color: open ? GOLD : `${DARK}40` }}
        >
          {num}
        </span>

        {/* Question */}
        <span
          className="flex-1 text-base md:text-lg leading-snug transition-colors duration-300"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            color: open ? DARK : `${DARK}CC`,
          }}
        >
          {faq.question}
        </span>

        {/* Icon */}
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-opacity duration-300"
            style={{ opacity: open ? 1 : 0.4 }}
          >
            <path
              d="M7 1v12M1 7h12"
              stroke={open ? GOLD : DARK}
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Answer — animated with max-height */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "2000px" : "0px" }}
      >
        <div className="pb-8 pl-12 pr-2">
          {/* Paragraphs */}
          <div className="space-y-4 mb-6">
            {faq.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[#0A0A0A]/60 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* List */}
          {faq.list && faq.list.length > 0 && (
            <ul className="space-y-2.5 mb-6">
              {faq.list.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0A0A0A]/60 leading-relaxed">
                  <span
                    className="mt-2 h-px w-4 shrink-0"
                    style={{ backgroundColor: GOLD }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* paragraphs2 (after list) */}
          {(faq as FAQ & { paragraphs2?: string[] }).paragraphs2?.map((p, i) => (
            <p key={i} className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {/* Internal links */}
          {faq.links && faq.links.length > 0 && (
            <div
              className="flex flex-wrap gap-3 mt-6 pt-6 border-t"
              style={{ borderColor: `${DARK}10` }}
            >
              {faq.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.15em] border px-4 py-2 transition-all duration-200 hover:text-white"
                  style={{
                    borderColor: `${DARK}20`,
                    color: DARK,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = DARK;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = DARK;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${DARK}20`;
                  }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
