import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero({ onExploreFarms, onOpenInquiry }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="relative">
      {/* Hero Section with Left-Side Dark Gradient and Panoramic Farm Background */}
      <section className="relative min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#072418] text-white">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Pill Tag (Ecoland Style) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/10 text-[#a3e635] text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
              <span>We are Raising Natural Livestock & Produce</span>
            </div>

            {/* Main Headline (Bold, Clean, Impactful) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 font-sans">
              Organic Farming <br />
              <span className="text-white">and Agriculture</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-emerald-100/85 leading-relaxed mb-8 max-w-lg font-normal">
              Nelson Farms Store raises healthy livestock with wholesome
              nutrition and strict biosecurity across our Chicken, Piggery,
              Turkey, and Fishery divisions.
            </p>

            {/* Dual Pill CTA Buttons (Matching Ecoland Reference Style) */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Green Pill with Circular Arrow */}
              <button
                onClick={onExploreFarms}
                className="group inline-flex items-center gap-3 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Discover More</span>
                <div className="w-6 h-6 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={13} />
                </div>
              </button>

              {/* Outlined Pill with Circular Arrow */}
              <button
                onClick={() => onOpenInquiry("Wholesale & Retail Service")}
                className="group inline-flex items-center gap-3 bg-transparent hover:bg-white/10 border border-[#a3e635]/80 text-[#a3e635] hover:text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200"
              >
                <span>See All Services</span>
                <div className="w-6 h-6 rounded-full bg-[#a3e635]/20 text-[#a3e635] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={13} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Lime/Spring Feature Ribbon (Exact Ecoland Reference Style) */}
      <section className="bg-[#a3e635] text-[#072418] py-6 px-4 sm:px-8 relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Customer Social Proof Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                src="/hero_clients/client1.jpg"
                alt="Client 1"
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                src="/hero_clients/client2.jpg"
                alt="Client 2"
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover"
                src="/hero_clients/client3.jpg"
                alt="Client 3"
              />
            </div>
            <div>
              <div className="font-bold text-lg text-[#072418] tracking-tight leading-tight">
                15,000+ Clients
              </div>
              <div className="text-xs font-semibold text-[#0a3822]">
                With Positive Reviews
              </div>
            </div>
          </div>

          {/* Middle: Circular Green Badge with Arrow */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-[#0a3822] flex items-center justify-center p-1 bg-white/20">
              <div className="w-12 h-12 rounded-full bg-[#0a3822] text-[#a3e635] flex items-center justify-center shadow-md">
                <ArrowUpRight size={22} className="animate-pulse" />
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
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="font-bold text-base sm:text-lg text-stone-900">
                Healthy Life With
              </div>
              <div className="text-xs font-semibold text-stone-800">
                Fresh Farm Products
              </div>
            </div>

            {/* Farm Video / Tour Preview Thumbnail Card */}
            <div
              onClick={() => onOpenInquiry("Farm Tour Video & Audit")}
              className="relative w-36 h-20 rounded-xl overflow-hidden shadow-md cursor-pointer group border-2 border-white/80"
            >
              <img
                src="/fishery-commercial.jpg"
                alt="Farm tour"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#1ca350] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={14} fill="white" className="ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
