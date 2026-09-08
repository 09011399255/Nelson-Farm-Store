import React from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { LIVESTOCK_SECTORS } from "../data/farmsData";

export default function LivestockSection({ onSelectFarm, onOpenInquiry }) {
  return (
    <section id="livestock" className="py-14 sm:py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight mb-3 sm:mb-4 font-sans">
            Our Four Farm Divisions
          </h2>
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore our specialized farming units — managed under strict
            bio-security, sustainable feeding, and ethical animal welfare.
          </p>
        </div>

        {/* Vertical Stack of Spacious Cards (Chicken first, Piggery second, Turkey, Fishery) */}
        <div className="space-y-10 sm:space-y-16">
          {LIVESTOCK_SECTORS.map((sector, index) => {
            const isReverse = index % 2 === 1;
            return (
              <article
                key={sector.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-emerald-950/10 shadow-sm hover:shadow-farm-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center p-5 sm:p-10 lg:p-12">
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 ${isReverse ? "lg:order-2" : ""}`}
                  >
                    <div className="relative h-[220px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-gray-100 group">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#072418]/70 via-transparent to-transparent"></div>

                      {/* Clean Badge Overlays (Lime/Green accents) */}
                      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#072418]/90 backdrop-blur-md text-[#a3e635] text-[11px] sm:text-xs font-bold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#a3e635]/40">
                        {sector.tag}
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#a3e635] animate-pulse"></span>
                        <span>{sector.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 ${isReverse ? "lg:order-1" : ""} space-y-5 sm:space-y-6`}
                  >
                    <div>
                      <span className="text-emerald-800 text-[11px] sm:text-xs font-bold uppercase tracking-widest block mb-1.5 sm:mb-2">
                        {sector.eyebrow}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#072418] font-sans tracking-tight leading-tight">
                        {sector.name}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-base leading-relaxed mt-2.5 sm:mt-3 font-normal">
                        {sector.description}
                      </p>
                    </div>

                    {/* Operational Highlights Checklist */}
                    <div className="space-y-2 pt-1">
                      {sector.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#1ca350] flex-shrink-0 mt-0.5"
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Clean Action Row */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-t border-gray-100">
                      <button
                        onClick={() => onOpenInquiry(`Order: ${sector.name}`)}
                        className="group inline-flex items-center justify-center gap-3 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
                      >
                        <span>Order {sector.shortName}</span>
                        <div className="w-5 h-5 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                          <ArrowRight size={11} />
                        </div>
                      </button>

                      <button
                        onClick={() => onSelectFarm(sector.id)}
                        className="text-xs font-bold text-[#072418] hover:text-[#1ca350] py-2.5 sm:py-3 px-3 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 w-full sm:w-auto"
                      >
                        <span>Division Details</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
