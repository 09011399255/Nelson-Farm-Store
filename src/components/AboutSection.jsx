import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection({ onLearnMore, onOpenInquiry }) {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden font-sans border-b border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal duration={750} distance={20} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#072418] mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#1ca350]"></span>
            Founder & Heritage
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#072418] tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Built on hands-on experience, <br className="hidden sm:inline" />
            driven by real agricultural standards.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            From two years of intensive groundwork at KOM Farms to four years of building Nelson Farms, our operations are led by authentic field experience.
          </p>
        </ScrollReveal>

        {/* Dual Cards Grid: Founder Journey + Hands-On Practice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Card 1: Founder Journey & KOM Farms Background (5 cols) */}
          <ScrollReveal
            duration={750}
            distance={20}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/90 flex flex-col justify-between h-full">
              <div>
                {/* Founder Suit Headshot */}
                <div className="relative rounded-2xl overflow-hidden mb-6 shadow-sm border border-stone-200/60 group">
                  <img
                    src="/Headshot.png"
                    alt="Founder of Nelson Farms"
                    className="w-full h-[280px] sm:h-[340px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-[#072418]/85 text-white p-3 sm:p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#a3e635]">
                        Founder & Lead Agriculturist
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-white">
                        Nelson Farms Store
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0 font-bold">
                      <Award size={18} />
                    </div>
                  </div>
                </div>

                {/* Founder Narrative */}
                <div className="space-y-3">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#072418] tracking-tight">
                    The Journey Behind Nelson Farms
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Before starting Nelson Farms four years ago, our founder spent two years working hands-on at <strong>KOM Farms</strong> to gain foundational mastery in livestock husbandry, disease prevention, and commercial farm logistics.
                  </p>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    That two-year training period shaped the discipline that governs Nelson Farms today: strict biosecurity, honest feed management, and personal accountability for every animal raised.
                  </p>
                </div>
              </div>

              {/* Experience Milestones */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-stone-100">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1ca350] mb-1">
                    <Clock size={14} />
                    <span>2 Years</span>
                  </div>
                  <div className="text-xs font-bold text-[#072418]">KOM Farms</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Practical Training</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1ca350] mb-1">
                    <Award size={14} />
                    <span>4 Years</span>
                  </div>
                  <div className="text-xs font-bold text-[#072418]">Nelson Farms</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Established Scale</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Hands-On Farm Wear & Veterinary Care in Action (7 cols) */}
          <ScrollReveal
            delay={120}
            duration={750}
            distance={20}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="bg-[#072418] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-emerald-900/60 flex flex-col justify-between h-full">
              <div>
                {/* Header Badge & Title */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-[#a3e635] uppercase tracking-wider block mb-2">
                    Hands-On Farm Oversight
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    Active, On-Site Veterinary Care
                  </h3>
                  <p className="text-emerald-100/80 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl font-normal">
                    Building consumer trust means being present where the work happens. Our founder personally leads health audits, sanitary pen routines, and animal inspections in certified farm wear.
                  </p>
                </div>

                {/* Two Lab Coat Working Photos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Image 1: Clinical Inspections */}
                  <div className="rounded-2xl overflow-hidden bg-[#0a3822] border border-emerald-800/60 group relative flex flex-col">
                    <div className="h-52 sm:h-56 overflow-hidden relative">
                      <img
                        src="/founderfarm.png"
                        alt="Founder conducting clinical inspections"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#072418] via-transparent to-transparent"></div>
                      <span className="absolute bottom-2.5 left-2.5 bg-[#072418]/90 text-[#a3e635] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-emerald-700/50">
                        Clinical Inspections
                      </span>
                    </div>
                    <div className="p-3.5 bg-[#0b3320]">
                      <div className="text-xs font-bold text-white">Health & Instrument Checks</div>
                      <div className="text-[11px] text-emerald-200/70 mt-0.5">
                        Sanitary tools & live animal wellness audits
                      </div>
                    </div>
                  </div>

                  {/* Image 2: On-Site Station Management */}
                  <div className="rounded-2xl overflow-hidden bg-[#0a3822] border border-emerald-800/60 group relative flex flex-col">
                    <div className="h-52 sm:h-56 overflow-hidden relative">
                      <img
                        src="/Founder2.png"
                        alt="Founder at farm desk in lab coat"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#072418] via-transparent to-transparent"></div>
                      <span className="absolute bottom-2.5 left-2.5 bg-[#072418]/90 text-[#a3e635] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-emerald-700/50">
                        Daily Farm Desk
                      </span>
                    </div>
                    <div className="p-3.5 bg-[#0b3320]">
                      <div className="text-xs font-bold text-white">Direct Operational Oversight</div>
                      <div className="text-[11px] text-emerald-200/70 mt-0.5">
                        Bio-security tracking & feed management
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Highlights & Action */}
              <div className="pt-4 border-t border-emerald-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-emerald-100/90 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#a3e635] flex-shrink-0" />
                    <span>Certified Pen Hygiene</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#a3e635] flex-shrink-0" />
                    <span>Zero Antibiotic Abuse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#a3e635] flex-shrink-0" />
                    <span>Transparent Sourcing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#a3e635] flex-shrink-0" />
                    <span>Sanitized Gate Pickup</span>
                  </div>
                </div>

                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a3e635] hover:text-white transition-colors flex-shrink-0"
                >
                  <span>See Our Livestock</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
