import React from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { LIVESTOCK_SECTORS } from "../data/farmsData";
import ScrollReveal from "./ScrollReveal";

export default function LivestockSection({ onSelectFarm, onOpenInquiry }) {
  return (
    <section
      id="livestock"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAF8F5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal duration={700} distance={20}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight mb-3 sm:mb-4 font-sans">
              Our Four Farm Divisions
            </h2>
            <p className="text-stone-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
              Explore our specialized farming units — managed under strict
              bio-security, sustainable feeding, and ethical animal welfare.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Stack of Spacious Cards */}
        <div className="space-y-10 sm:space-y-16">
          {LIVESTOCK_SECTORS.map((sector, index) => {
            const isReverse = index % 2 === 1;
            return (
              <ScrollReveal
                as="article"
                key={sector.id}
                delay={index * 80}
                duration={750}
                distance={24}
                className="bg-white rounded-2xl sm:rounded-3xl border border-emerald-950/10 shadow-sm hover:shadow-farm-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center p-5 sm:p-10 lg:p-12">
                  {/* Image Column */}
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

                      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#072418]/90 backdrop-blur-md text-[#a3e635] text-[11px] sm:text-xs font-bold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#a3e635]/40">
                        {sector.tag}
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#a3e635] animate-pulse"></span>
                        <span>{sector.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
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

                    {/* Features */}
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

                    {/* Action Row */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-t border-gray-100">
                      <button
                        onClick={() => onOpenInquiry(`Order: ${sector.name}`)}
                        className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Order {sector.shortName}</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
