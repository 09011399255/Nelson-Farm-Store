import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Play, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero({ onExploreFarms, onOpenInquiry }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="relative">
      {/* Hero Section with Left-Side Dark Gradient and Panoramic Farm Background */}
      <section className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#072418] text-white">
        {/* Panoramic Farm Background (Pigs, Turkey, Chickens & Fish Pond in the same scenic pasture) */}
        <div
          className="absolute inset-0 bg-cover bg-right lg:bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('/hero-farm.jpg')`,
          }}
        >
          {/* Deep dark forest-green mask from left to right (Zero text disturbance) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#072418] via-[#072418]/90 via-45% to-transparent"></div>
          {/* Subtle top/bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#072418]/60 via-transparent to-[#072418]/40"></div>
        </div>

        {/* Hero Left Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            <ScrollReveal duration={800} distance={20}>
              {/* Pill Tag (Ecoland Style) */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/10 text-[#a3e635] text-[11px] sm:text-xs font-semibold tracking-wide mb-5 sm:mb-6 backdrop-blur-sm">
                <span>We are Raising Natural Livestock & Produce</span>
              </div>

              {/* Main Headline (Bold, Clean, Impactful) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 font-sans">
                Organic Farming <br />
                <span className="text-white">and Agriculture</span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-lg text-emerald-100/85 leading-relaxed mb-6 sm:mb-8 max-w-lg font-normal">
                Nelson Farms Store raises healthy livestock with wholesome
                nutrition and strict biosecurity across our Chicken, Piggery,
                Turkey, and Fishery divisions.
              </p>
            </ScrollReveal>

            {/* Dual Pill CTA Buttons (Matching Ecoland Reference Style) */}
            <ScrollReveal delay={150} duration={800} distance={18}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {/* Primary Green Pill with Circular Arrow */}
                <button
                  onClick={onExploreFarms}
                  className="group inline-flex items-center justify-center gap-3 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <span>Discover More</span>
                  <div className="w-6 h-6 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={13} />
                  </div>
                </button>

                {/* Outlined Pill with Circular Arrow */}
                <button
                  onClick={() => onOpenInquiry("Wholesale & Retail Service")}
                  className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 border border-[#a3e635]/80 text-[#a3e635] hover:text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto"
                >
                  <span>See All Services</span>
                  <div className="w-6 h-6 rounded-full bg-[#a3e635]/20 text-[#a3e635] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={13} />
                  </div>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom Lime/Spring Feature Ribbon (Mobile Responsive) */}
      <section className="bg-[#a3e635] text-[#072418] py-4 sm:py-5 lg:py-6 px-4 sm:px-8 relative z-20 shadow-md">
        <ScrollReveal duration={700} distance={16}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Left: Customer Social Proof Avatars */}
            <div className="flex items-center gap-3.5 w-full md:w-auto justify-between sm:justify-center md:justify-start">
              <div className="flex -space-x-3 overflow-hidden flex-shrink-0">
                <img
                  className="inline-block h-11 w-11 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="/hero_clients/client1.jpg"
                  alt="Client 1"
                />
                <img
                  className="inline-block h-11 w-11 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="/hero_clients/client2.jpg"
                  alt="Client 2"
                />
                <img
                  className="inline-block h-11 w-11 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="/hero_clients/client3.jpg"
                  alt="Client 3"
                />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg text-[#072418] tracking-tight leading-tight">
                  15,000+ Clients
                </div>
                <div className="text-xs font-semibold text-[#0a3822]">
                  With Positive Reviews
                </div>
              </div>
            </div>

            {/* Middle: Circular Green Badge with Arrow */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full border-2 border-dashed border-[#0a3822] flex items-center justify-center p-1 bg-white/20 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#0a3822] text-[#a3e635] flex items-center justify-center shadow-md">
                  <ArrowUpRight size={18} className="animate-pulse" />
                </div>
              </div>
              <div className="text-xs font-bold text-[#072418] uppercase tracking-wider leading-snug">
                100% Bio-Secure <br />
                <span className="font-semibold text-[#0a3822] lowercase">
                  certified farm produce
                </span>
              </div>
            </div>

            {/* Right: Healthy Life With Fresh Products & Video Thumbnail */}
            <div className="flex items-center justify-between sm:justify-center md:justify-end gap-3 sm:gap-4 w-full md:w-auto pt-3 md:pt-0 border-t border-[#072418]/15 md:border-t-0">
              <div className="text-left sm:text-right">
                <div className="font-bold text-sm sm:text-base lg:text-lg text-[#072418] leading-tight">
                  Watch Farm Tour
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#0a3822]">
                  Fresh Products & Facilities
                </div>
              </div>

              {/* Farm Video / Tour Preview Thumbnail Card */}
              <div
                onClick={() => onOpenInquiry("Farm Tour Video & Audit")}
                className="relative w-28 h-16 sm:w-36 sm:h-20 rounded-xl overflow-hidden shadow-md cursor-pointer group border-2 border-white/80 flex-shrink-0"
              >
                <img
                  src="/fishery-commercial.jpg"
                  alt="Farm tour"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1ca350] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={12} fill="white" className="ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
