import React from "react";
import { FARM_STATS } from "../data/farmsData";

export default function StatsBar() {
  return (
    <section className="bg-farm-dark text-white border-y border-emerald-900/50 py-10 relative z-20 shadow-farm-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-800/40">
          {FARM_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""}`}
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="font-semibold text-white text-sm sm:text-base">
                {stat.label}
              </div>
              <div className="text-emerald-300/70 text-xs mt-1 max-w-[200px]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
