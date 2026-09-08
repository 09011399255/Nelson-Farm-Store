import React from "react";
import {
  ShieldCheck,
  Wheat,
  HeartHandshake,
  Truck,
  Check,
  ChevronRight,
} from "lucide-react";
import { QUALITY_PILLARS } from "../data/farmsData";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Wheat: Wheat,
  HeartHandshake: HeartHandshake,
  Truck: Truck,
};

export default function ProcessSection() {
  return (
    <section
      id="standards"
      className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight leading-[1.15]">
              Our 4-Step Agricultural & Husbandry Process
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 font-normal">
              Every animal and farm-fresh product adheres to our strict,
              certified standards of ethical care, organic feeding, and
              biosecure logistics.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="px-5 py-2.5 rounded-full bg-[#072418] text-[#a3e635] font-bold text-xs uppercase tracking-wider border border-[#a3e635]/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
              Verified Bio-Security
            </div>
          </div>
        </div>

        {/* 2x2 Grid Layout (Two Horizontally First, Next Two Below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {QUALITY_PILLARS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-[#0b3d22] rounded-[32px] p-6 sm:p-7 border border-emerald-500/20 shadow-xl hover:shadow-2xl hover:border-[#a3e635]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md bg-black/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-[#a3e635] text-[#072418] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                        Step {item.step}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#072418]/80 backdrop-blur-md text-[#a3e635] flex items-center justify-center border border-[#a3e635]/30">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  {/* Category Pill Badge (Like Reference Screenshot) */}
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1 rounded-full border border-emerald-400/40 bg-emerald-950/40 text-emerald-300 text-xs font-semibold tracking-wide">
                      {item.category}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#a3e635] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Strip */}
                <div className="mt-6 pt-5 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#a3e635] text-[#072418] flex items-center justify-center">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Nelson Farms Certified Standard</span>
                  </div>
                  <span className="text-[#a3e635] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                    <span>Protocol {item.step}</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
