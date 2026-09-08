import React, { useState, useEffect } from "react";
import {
  Shield,
  Truck,
  Users,
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { TESTIMONIALS } from "../data/farmsData";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Calculate sliding translation
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  let shiftIndex = 0;
  let transformStyle = "";

  if (isMobile) {
    shiftIndex = activeIndex;
    transformStyle = `translateX(calc(-${shiftIndex} * (100% + 24px)))`;
  } else if (isTablet) {
    shiftIndex = Math.min(activeIndex, TESTIMONIALS.length - 2);
    transformStyle = `translateX(calc(-${shiftIndex} * (50% + 12px)))`;
  } else {
    shiftIndex = Math.min(
      Math.max(0, activeIndex - 1),
      Math.max(0, TESTIMONIALS.length - 3),
    );
    transformStyle = `translateX(calc(-${shiftIndex} * (33.3333% + 8px)))`;
  }

  const pillars = [
    {
      num: "01",
      title: "Quality Livestock",
      desc: "Vigorous, disease-resilient breeds raised in sanitary, well-ventilated housing with balanced organic nutrition.",
    },
    {
      num: "02",
      title: "Responsible Practice",
      desc: "Zero shortcuts, zero growth accelerants, and 100% veterinary accountability throughout animal life cycles.",
    },
    {
      num: "03",
      title: "Fresh Farm Products",
      desc: "Crated eggs, dressed cuts, and live stock prepared fresh upon confirmed orders for maximum flavor and nutrition.",
    },
    {
      num: "04",
      title: "Customer Focused",
      desc: "Transparent direct farm-gate terms, reliable scheduled delivery, and dedicated sales representatives for repeat partners.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4">
            Good farming starts with <br />
            <span className="text-[#1ca350]">uncompromising care.</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            We hold ourselves to elevated bio-security and husbandry standards
            so you never have to wonder where your food came from or how it was
            raised.
          </p>
        </div>
        <ScrollReveal duration={700} distance={20}>
          <div className="max-w-3xl mb-10 sm:mb-16">
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4">
              Good farming starts with <br />
              <span className="text-[#1ca350]">uncompromising care.</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
              We hold ourselves to elevated bio-security and husbandry standards
              so you never have to wonder where your food came from or how it was
              raised.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-24">
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#a3e635]/60 transition-all duration-300 group">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#a3e635]/20 text-[#072418] font-bold text-xs sm:text-sm flex items-center justify-center border border-[#a3e635]/40 mb-4 sm:mb-5 group-hover:bg-[#a3e635] group-hover:text-[#072418] transition-colors">
              01
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-[#072418] mb-1.5 sm:mb-2 group-hover:text-[#1ca350] transition-colors">
              Quality Livestock
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Vigorous, disease-resilient breeds raised in sanitary,
              well-ventilated housing with balanced organic nutrition.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#a3e635]/60 transition-all duration-300 group">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#a3e635]/20 text-[#072418] font-bold text-xs sm:text-sm flex items-center justify-center border border-[#a3e635]/40 mb-4 sm:mb-5 group-hover:bg-[#a3e635] group-hover:text-[#072418] transition-colors">
              02
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-[#072418] mb-1.5 sm:mb-2 group-hover:text-[#1ca350] transition-colors">
              Responsible Practice
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Zero shortcuts, zero growth accelerants, and 100% veterinary
              accountability throughout animal life cycles.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#a3e635]/60 transition-all duration-300 group">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#a3e635]/20 text-[#072418] font-bold text-xs sm:text-sm flex items-center justify-center border border-[#a3e635]/40 mb-4 sm:mb-5 group-hover:bg-[#a3e635] group-hover:text-[#072418] transition-colors">
              03
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-[#072418] mb-1.5 sm:mb-2 group-hover:text-[#1ca350] transition-colors">
              Fresh Farm Products
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Crated eggs, dressed cuts, and live stock prepared fresh upon
              confirmed orders for maximum flavor and nutrition.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#a3e635]/60 transition-all duration-300 group">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#a3e635]/20 text-[#072418] font-bold text-xs sm:text-sm flex items-center justify-center border border-[#a3e635]/40 mb-4 sm:mb-5 group-hover:bg-[#a3e635] group-hover:text-[#072418] transition-colors">
              04
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-[#072418] mb-1.5 sm:mb-2 group-hover:text-[#1ca350] transition-colors">
              Customer Focused
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Transparent direct farm-gate terms, reliable scheduled delivery,
              and dedicated sales representatives for repeat partners.
            </p>
          </div>
          {pillars.map((pillar, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 75}
              duration={700}
              distance={20}
            >
              <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#a3e635]/60 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#a3e635]/20 text-[#072418] font-bold text-xs sm:text-sm flex items-center justify-center border border-[#a3e635]/40 mb-4 sm:mb-5 group-hover:bg-[#a3e635] group-hover:text-[#072418] transition-colors">
                    {pillar.num}
                  </span>
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#072418] mb-1.5 sm:mb-2 group-hover:text-[#1ca350] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 'Real Stories. Real Impact.' Testimonial Slider Section */}
        <div className="pt-10 sm:pt-16 border-t border-emerald-950/10">
          {/* Header Row: Title on Left, Prev/Next on Right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
            <div>
              <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.15]">
                Real Stories. <br />
                Real Impact.
              </h2>
            </div>
          <ScrollReveal duration={700} distance={20}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
              <div>
                <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.15]">
                  Real Stories. <br />
                  Real Impact.
                </h2>
              </div>

            {/* Circular Carousel Controls */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-stone-300 hover:border-[#072418] bg-white text-stone-700 hover:text-[#072418] flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 focus:outline-none"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#a3e635] hover:bg-[#84cc16] text-[#072418] flex items-center justify-center transition-all shadow-sm hover:shadow-md active:scale-95 focus:outline-none font-bold"
              >
                <ArrowRight size={16} />
              </button>
              {/* Circular Carousel Controls */}
              <div className="flex items-center gap-3 self-start sm:self-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-stone-300 hover:border-[#072418] bg-white text-stone-700 hover:text-[#072418] flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 focus:outline-none"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#a3e635] hover:bg-[#84cc16] text-[#072418] flex items-center justify-center transition-all shadow-sm hover:shadow-md active:scale-95 focus:outline-none font-bold"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Carousel Viewport Container */}
          <div className="overflow-hidden px-1 py-4 -mx-1 -my-4">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
              style={{ transform: transformStyle }}
            >
              {TESTIMONIALS.map((t, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={t.id || idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 transition-all duration-300 rounded-2xl sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#072418] text-white shadow-2xl border-2 border-[#a3e635]/40 scale-[1.01]"
                        : "bg-white text-stone-700 shadow-sm hover:shadow-md border border-stone-200/80 hover:border-stone-300"
                    }`}
                  >
                    <div>
                      {/* 5-Star Rating Header */}
                      <div className="flex items-center gap-1 mb-5">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#a3e635"
                            className="text-[#a3e635]"
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p
                        className={`text-sm sm:text-[15px] leading-relaxed mb-6 font-normal ${
                          isActive ? "text-emerald-50/95" : "text-stone-600"
                        }`}
                      >
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Details Row */}
          <ScrollReveal delay={100} duration={750} distance={20}>
            <div className="overflow-hidden px-1 py-4 -mx-1 -my-4">
              <div
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
                style={{ transform: transformStyle }}
              >
                {TESTIMONIALS.map((t, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      className={`flex items-center gap-3.5 pt-4 border-t ${
                        isActive ? "border-emerald-800/60" : "border-stone-100"
                      key={t.id || idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 transition-all duration-300 rounded-2xl sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-between cursor-pointer ${
                        isActive
                          ? "bg-[#072418] text-white shadow-2xl border-2 border-[#a3e635]/40 scale-[1.01]"
                          : "bg-white text-stone-700 shadow-sm hover:shadow-md border border-stone-200/80 hover:border-stone-300"
                      }`}
                    >
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className={`w-11 h-11 rounded-full object-cover shadow-sm ${
                          isActive
                            ? "border-2 border-[#a3e635]"
                            : "border-2 border-stone-200"
                        }`}
                      />
                      <div>
                        <h5
                          className={`font-sans font-bold text-sm sm:text-base ${
                            isActive ? "text-white" : "text-[#072418]"
                          }`}
                        >
                          {t.author}
                        </h5>
                        {/* 5-Star Rating Header */}
                        <div className="flex items-center gap-1 mb-5">
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill="#a3e635"
                              className="text-[#a3e635]"
                            />
                          ))}
                        </div>

                        {/* Quote Text */}
                        <p
                          className={`text-xs font-semibold ${
                            isActive ? "text-[#a3e635]" : "text-emerald-800"
                          className={`text-sm sm:text-[15px] leading-relaxed mb-6 font-normal ${
                            isActive ? "text-emerald-50/95" : "text-stone-600"
                          }`}
                        >
                          {t.role}
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Author Details Row */}
                      <div
                        className={`flex items-center gap-3.5 pt-4 border-t ${
                          isActive ? "border-emerald-800/60" : "border-stone-100"
                        }`}
                      >
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className={`w-11 h-11 rounded-full object-cover shadow-sm ${
                            isActive
                              ? "border-2 border-[#a3e635]"
                              : "border-2 border-stone-200"
                          }`}
                        />
                        <div>
                          <h5
                            className={`font-sans font-bold text-sm sm:text-base ${
                              isActive ? "text-white" : "text-[#072418]"
                            }`}
                          >
                            {t.author}
                          </h5>
                          <p
                            className={`text-xs font-semibold ${
                              isActive ? "text-[#a3e635]" : "text-emerald-800"
                            }`}
                          >
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pagination Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-[#a3e635]"
                    : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
            {/* Pagination Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-[#a3e635]"
                      : "w-2.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
