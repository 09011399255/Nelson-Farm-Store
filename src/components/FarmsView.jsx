import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  Building2,
  Heart,
  Check,
  PhoneCall,
} from "lucide-react";
import { LIVESTOCK_SECTORS } from "../data/farmsData";

export default function FarmsView({
  onBackToHome,
  onOpenInquiry,
  selectedFarmId,
}) {
  useEffect(() => {
    if (selectedFarmId) {
      const el = document.getElementById(selectedFarmId);
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          100,
        );
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedFarmId]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans">
      {/* Farms Page Hero */}
      <section className="relative py-20 lg:py-28 bg-[#072418] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('/hero-farm.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#072418] via-[#072418]/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-[#a3e635] hover:text-white text-xs font-bold uppercase tracking-wider mb-8 transition-colors px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#a3e635] text-xs font-semibold tracking-wide mb-4">
              <Sparkles size={14} className="text-[#a3e635]" />
              <span>Operational Facilities & Divisions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-6 leading-[1.12]">
              Growing healthy livestock. <br />
              <span className="text-[#1ca350]">Raising quality products.</span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              Tour the farming practices behind Nelson Farms Store. Each
              division is built around bio-security, humane livestock handling,
              and precision organic feeding to supply superior foods to Nigerian
              households and businesses.
            </p>
          </div>

          {/* Quick jump pills */}
          <div className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-emerald-900/50">
            <span className="text-xs font-bold text-[#a3e635] uppercase tracking-wider mr-2">
              Jump to division:
            </span>
            {LIVESTOCK_SECTORS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-4 py-2 rounded-full bg-emerald-950/80 hover:bg-[#1ca350] border border-emerald-800/60 text-xs font-bold text-white transition-all shadow-sm"
              >
                {sec.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Divisions Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-44 sm:pb-56">
        <div className="space-y-20">
          {LIVESTOCK_SECTORS.map((sector, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={sector.id}
                id={sector.id}
                className="scroll-mt-28 bg-white rounded-3xl border border-emerald-950/10 shadow-md overflow-hidden p-6 sm:p-10 lg:p-12 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 ${isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative group overflow-hidden rounded-3xl shadow-farm-lg bg-gray-100">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#072418]/90 backdrop-blur-md text-[#a3e635] text-xs font-bold px-4 py-2 rounded-full border border-[#a3e635]/30">
                        {sector.eyebrow}
                      </div>
                    </div>

                    {/* Operational Metrics Cards */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {Object.entries(sector.metrics).map(
                        ([key, value], idx) => (
                          <div
                            key={idx}
                            className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-emerald-950/5 text-center"
                          >
                            <span className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                              {key}
                            </span>
                            <span className="block text-xs sm:text-sm font-bold text-[#072418] mt-1">
                              {value}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Content Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""}`}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#072418] text-xs font-semibold tracking-wide mb-3">
                      <Sparkles size={14} className="text-emerald-700" />
                      <span>{sector.badge}</span>
                    </div>

                    <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#072418] tracking-tight mb-4">
                      {sector.name}
                    </h2>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {sector.description}
                    </p>

                    {/* Standards / Features Checklist */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
                        Division Standards & Biosecurity
                      </h4>
                      <ul className="space-y-2.5">
                        {sector.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-stone-800"
                          >
                            <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#1ca350] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} className="stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Product Offerings Table */}
                    <div className="mb-8 p-5 rounded-2xl bg-[#FAF8F5] border border-emerald-950/10">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#072418] mb-3">
                        Available Products & Cuts
                      </h4>
                      <div className="divide-y divide-emerald-950/5">
                        {sector.products.map((prod, idx) => (
                          <div
                            key={idx}
                            className="py-2.5 flex justify-between items-center text-xs sm:text-sm"
                          >
                            <span className="font-bold text-[#072418]">
                              {prod.name}
                            </span>
                            <span className="text-emerald-800 font-medium text-xs">
                              {prod.specs}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() =>
                          onOpenInquiry(`Order Inquiry: ${sector.name}`)
                        }
                        className="group inline-flex items-center gap-3 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                      >
                        <span>Make an Enquiry / Order</span>
                        <div className="w-6 h-6 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                          <ArrowRight size={13} />
                        </div>
                      </button>

                      <a
                        href="tel:+2348012345678"
                        className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-[#1ca350] transition-colors py-2 px-3"
                      >
                        <PhoneCall size={14} className="text-emerald-700" />
                        <span>Call Unit Desk</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
