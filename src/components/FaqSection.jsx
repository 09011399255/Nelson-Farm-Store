import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { FAQS } from "../data/farmsData";

export default function FaqSection({ onAskQuestion }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#072418] text-xs font-semibold tracking-wide mb-3">
            <HelpCircle size={14} className="text-[#1ca350]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Everything you need to know about our livestock breeding, bio-secure
            husbandry, and farm-to-table delivery logistics across Nigeria.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-sans text-base sm:text-lg font-bold text-[#072418]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#072418] text-[#a3e635]"
                        : "bg-emerald-50 text-emerald-800"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-emerald-950/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box (Ecoland CTA) */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#a3e635]/20 text-[#072418] flex items-center justify-center flex-shrink-0 font-bold">
              <MessageSquare size={18} />
            </div>
            <div>
              <h5 className="font-sans text-sm font-bold text-[#072418]">
                Have a custom inquiry or special livestock request?
              </h5>
              <p className="text-xs text-stone-500 mt-0.5">
                Our farm representatives are available 6 days a week to assist.
              </p>
            </div>
          </div>

          <button
            onClick={onAskQuestion}
            className="group inline-flex items-center gap-2.5 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex-shrink-0"
          >
            <span>Ask Farm Desk</span>
            <div className="w-5 h-5 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={11} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
