import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { FAQS } from "../data/farmsData";
import ScrollReveal from "./ScrollReveal";

export default function FaqSection({ onAskQuestion }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal duration={700} distance={20}>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#072418] text-[11px] sm:text-xs font-semibold tracking-wide mb-3">
              <HelpCircle size={14} className="text-[#1ca350]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
              Everything you need to know about our livestock breeding,
              bio-secure husbandry, and farm-to-table delivery logistics across
              Nigeria.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <ScrollReveal delay={100} duration={750} distance={20}>
          <div className="space-y-3.5 sm:space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm ${
                    isOpen
                      ? "border-[#1ca350]/60 ring-2 ring-emerald-500/10 shadow-md"
                      : "border-emerald-950/10 hover:border-[#a3e635]/60"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3.5 sm:gap-4 focus:outline-none"
                  >
                    <span className="font-sans text-sm sm:text-lg font-bold text-[#072418] leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#072418] text-[#a3e635]"
                          : "bg-emerald-50 text-emerald-800"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-emerald-950/5 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Bottom Help Box (Ecoland CTA) */}
        <ScrollReveal delay={150} duration={700} distance={18}>
          <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-emerald-950/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#a3e635]/20 text-[#072418] flex items-center justify-center flex-shrink-0 font-bold">
                <MessageSquare size={18} />
              </div>
              <div>
                <h5 className="font-sans text-sm font-bold text-[#072418]">
                  Have a custom inquiry or special livestock order?
                </h5>
                <p className="text-xs text-stone-500 mt-0.5">
                  Our farm representatives are available 6 days a week to
                  assist.
                </p>
              </div>
            </div>

            <button
              onClick={onAskQuestion}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex-shrink-0 w-full sm:w-auto"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat on WhatsApp</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
