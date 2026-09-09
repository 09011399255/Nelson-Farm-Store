import React from "react";
import { ArrowRight, ShieldCheck, Check, UserCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection({ onLearnMore, onOpenInquiry }) {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (7 cols): Story, CTA Button, and Farm Landscape Visual */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ScrollReveal duration={750} distance={20}>
              <div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#072418] leading-[1.18] sm:leading-[1.14] tracking-tight mb-5">
                  Farming with purpose, <br className="hidden sm:block" />
                  <span className="text-[#1ca350]">
                    for a healthier, reliable future.
                  </span>
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
                  Nelson Farms Store is an agricultural business dedicated to
                  raising quality livestock and supplying wholesome farm
                  products. We are building a trusted agricultural brand centred
                  around responsible care, consistency, and nutritional value.
                </p>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Every pen, coop, and aquaculture tank is managed under strict
                  bio-security protocols designed to eliminate contamination
                  risks, ensuring that our products reaching your kitchen or
                  business are fresh, safe, and dependable.
                </p>

                {/* Action Buttons (Ecoland Style Pill) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                  <button
                    onClick={onLearnMore}
                    className="group inline-flex items-center justify-center gap-3 bg-[#072418] hover:bg-[#0d4628] text-white font-bold text-xs uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    <span>Explore Farm Operations</span>
                    <div className="w-6 h-6 rounded-full bg-[#a3e635] text-[#072418] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={13} className="stroke-[2.5]" />
                    </div>
                  </button>

                  <button
                    onClick={() => onOpenInquiry("Partner With Nelson Farms")}
                    className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-[#a3e635]/15 border border-[#a3e635] text-[#072418] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm w-full sm:w-auto"
                  >
                    <span>Partner With Us</span>
                    <div className="w-6 h-6 rounded-full bg-[#a3e635]/30 text-[#072418] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={12} />
                    </div>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Farm Landscape Image */}
            <ScrollReveal delay={100} duration={750} distance={20}>
              <div className="overflow-hidden rounded-2xl sm:rounded-[32px] shadow-farm-lg border-2 sm:border-4 border-white relative group">
                <img
                  src="/about-farm.jpg"
                  alt="Nelson Farms Agricultural Landscape"
                  className="w-full h-[220px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#072418]/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#a3e635]/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a3e635]"></span>
                  <span className="truncate">
                    Bio-Secure Farmlands • Certified Facilities
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (5 cols): Stacked Lime + Deep Green Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Card: Fresh Eco Lime */}
            <ScrollReveal delay={150} duration={750} distance={20}>
              <div className="bg-[#a3e635] rounded-2xl sm:rounded-[32px] p-5 sm:p-8 shadow-lg text-[#072418] flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#072418]/90">
                      Trust By Clients & Partners
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#072418] mb-3">
                    15,000+
                  </div>

                  <p className="text-xs sm:text-sm text-[#072418] font-medium leading-relaxed">
                    Delivering wholesome table eggs, fresh live catfish, market
                    hogs, and heritage dressed turkeys to families, restaurants,
                    and retail grocers.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#072418]/20 flex items-center justify-between text-xs font-bold text-[#072418]">
                  <span>Direct Farm Gate Deliveries</span>
                  <span>100% Wholesome</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom Card: Deep Dark Forest Green */}
            <ScrollReveal delay={250} duration={750} distance={20}>
              <div className="bg-[#072418] rounded-2xl sm:rounded-[32px] p-5 sm:p-8 text-white shadow-xl border border-emerald-800/40 flex flex-col justify-between">
                <div>
                  {/* Checkmarked Bullet Points */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-100">
                      <div className="w-5 h-5 rounded-full bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Modern Agriculture & Sanitary Pens</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-100">
                      <div className="w-5 h-5 rounded-full bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Fresh Harvest of Eggs & Fish</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-100">
                      <div className="w-5 h-5 rounded-full bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Zero Hormones • 100% Wholesome Grains</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-emerald-900/80 my-6"></div>

                  {/* Sub-Feature Highlight Rows */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                        <UserCheck size={20} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a3e635]">
                          HIGHLY QUALIFIED VETERINARY TEAM
                        </h4>
                        <p className="text-xs text-emerald-200/80 mt-0.5 leading-relaxed font-normal">
                          Certified animal scientists conducting routine
                          wellness checks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                        <ShieldCheck size={20} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a3e635]">
                          POULTRY, PIGGERY, TURKEY & FISHERY
                        </h4>
                        <p className="text-xs text-emerald-200/80 mt-0.5 leading-relaxed font-normal">
                          Four bio-secure commercial divisions with pure
                          borehole water.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-8 pt-5 border-t border-emerald-900/80">
                  <button
                    onClick={onLearnMore}
                    className="group flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#a3e635] hover:text-white transition-colors"
                  >
                    <span className="underline underline-offset-4">
                      Read Farm Standards & History
                    </span>
                    <div className="w-6 h-6 rounded-full bg-emerald-900 text-[#a3e635] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={13} />
                    </div>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
