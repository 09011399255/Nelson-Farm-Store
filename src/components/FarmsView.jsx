import React, { useState, useEffect } from "react";
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
import ScrollReveal from "./ScrollReveal";

const FARM_HERO_SLIDES = [
  {
    id: "poultry",
    title: "Chicken & Poultry Division",
    subtitle: "Layers & Broilers",
    image: "/poultry-battery-cages.jpg",
  },
  {
    id: "piggery",
    title: "Commercial Piggery Division",
    subtitle: "Swine Breeding & Finishing",
    image: "/piggery-commercial.jpg",
  },
  {
    id: "turkey",
    title: "Heritage Turkey Division",
    subtitle: "Free-Range Pasture",
    image: "/turkey-commercial.jpg",
  },
  {
    id: "fishery",
    title: "Aquaculture & Fishery Division",
    subtitle: "Concrete Flow-Through Ponds",
    image: "/fishery-commercial.jpg",
  },
];

const formatMetricLabel = (label) => {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export default function FarmsView({
  onBackToHome,
  onOpenInquiry,
  selectedFarmId,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides every 3s (faster, lively transition)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FARM_HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedFarmId) {
      const matchedIdx = FARM_HERO_SLIDES.findIndex(
        (s) => s.id === selectedFarmId,
      );
      if (matchedIdx !== -1) {
        setCurrentSlide(matchedIdx);
      }
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
      {/* Farms Page Hero with Homepage Left-Side Gradient & Multi-Farm Scenic Backdrop */}
      <section className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center py-14 sm:py-20 lg:py-24 bg-[#072418] text-white overflow-hidden">
        {/* Dynamic Cross-Fading Panoramic Backgrounds (Poultry, Piggery, Turkey, Fishery) */}
        {FARM_HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-right lg:bg-center transition-all duration-700 transform ${
              idx === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        ))}

        {/* Deep dark forest-green mask from left to right (Matching Homepage Hero: zero text disturbance, vibrant scenery on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072418] via-[#072418]/90 via-45% to-[#072418]/30 lg:to-transparent"></div>
        {/* Subtle top/bottom vignette for cinematic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#072418]/70 via-transparent to-[#072418]/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          {/* Subtle, non-competing navigation back link */}
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2.5 text-emerald-200/80 hover:text-white text-xs font-semibold mb-5 sm:mb-6 transition-colors focus:outline-none"
          >
            <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#a3e635] text-[#a3e635] group-hover:text-[#072418] border border-white/15 flex items-center justify-center transition-all shadow-sm">
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </span>
            <span className="tracking-wide">Back to Home</span>
          </button>

          <ScrollReveal duration={750} distance={20}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3.5 sm:px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#a3e635] text-[11px] sm:text-xs font-semibold tracking-wide mb-4 sm:mb-5 backdrop-blur-sm">
                <span>Operational Facilities & Divisions</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-4 sm:mb-6 leading-[1.14] sm:leading-[1.12]">
                Growing healthy livestock. <br />
                <span className="text-[#1ca350]">
                  Raising quality products.
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                Tour the farming practices behind Nelson Farms Store. Each
                division is built around bio-security, humane livestock
                handling, and precision organic feeding to supply superior foods
                to Nigerian households and businesses.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick jump pills - synced with scenic slider */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-emerald-900/50">
            {LIVESTOCK_SECTORS.map((sec, idx) => {
              const isCurrent = idx === currentSlide;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    const el = document.getElementById(sec.id);
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 ${
                    isCurrent
                      ? "bg-[#a3e635] text-[#072418] border border-[#a3e635] font-extrabold shadow-md scale-105"
                      : "bg-emerald-950/80 hover:bg-[#1ca350] border border-emerald-800/60 text-white/90"
                  }`}
                >
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#072418] animate-pulse" />
                  )}
                  <span>{sec.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Farm Divisions Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-36 sm:pb-56">
        <div className="space-y-12 sm:space-y-20">
          {LIVESTOCK_SECTORS.map((sector, index) => {
            const isEven = index % 2 === 1;
            return (
              <ScrollReveal
                as="article"
                key={sector.id}
                id={sector.id}
                delay={index * 60}
                duration={750}
                distance={20}
                className="scroll-mt-28 bg-white rounded-2xl sm:rounded-3xl border border-emerald-950/10 shadow-md overflow-hidden p-5 sm:p-10 lg:p-12 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 ${isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-farm-lg bg-gray-100">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="w-full h-[220px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#072418]/90 backdrop-blur-md text-[#a3e635] text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-[#a3e635]/30">
                        {sector.eyebrow}
                      </div>
                    </div>

                    {/* Operational Metrics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-3.5 sm:mt-4">
                      {Object.entries(sector.metrics).map(
                        ([key, value], idx) => (
                          <div
                            key={idx}
                            className="bg-[#FAF8F5] p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-emerald-950/5 text-center flex sm:flex-col justify-between sm:justify-center items-center px-4 sm:px-2"
                          >
                            <span className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                              {formatMetricLabel(key)}
                            </span>
                            <span className="block text-xs sm:text-sm font-bold text-[#072418] sm:mt-1">
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
                            className="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm"
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
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <button
                        onClick={() =>
                          onOpenInquiry(`Order Inquiry: ${sector.name}`)
                        }
                        className="group inline-flex items-center justify-center gap-3 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-xs uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
                      >
                        <span>Make an Enquiry / Order</span>
                        <div className="w-6 h-6 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                          <ArrowRight size={13} />
                        </div>
                      </button>

                      <a
                        href="tel:+2348012345678"
                        className="inline-flex items-center justify-center gap-2 text-xs font-bold text-stone-600 hover:text-[#1ca350] transition-colors py-2.5 sm:py-2 px-3 rounded-full border border-stone-200 sm:border-0 w-full sm:w-auto"
                      >
                        <PhoneCall size={14} className="text-emerald-700" />
                        <span>Call Unit Desk</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
