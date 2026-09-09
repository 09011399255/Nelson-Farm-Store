import React from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-12 sm:pt-20 lg:pt-24 pb-36 sm:pb-52 lg:pb-60 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal
          duration={750}
          distance={20}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 text-[#072418] mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#1ca350] animate-pulse"></span>
            Farm Gate & Ordering Desk
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#072418] tracking-tight leading-[1.15] mb-4">
            Ready to order fresh <br className="hidden sm:inline" />
            from Nelson Farms?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Connect directly with our farm team on WhatsApp or phone to book
            livestock, fresh cuts, and wholesale commercial supplies. We deliver
            across all regions and welcome visitors to our farm site.
          </p>
        </ScrollReveal>

        {/* 2-Column Balanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Farm Location & Address (Prominently Showcased) - 6 cols */}
          <ScrollReveal
            duration={750}
            distance={20}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-950/10 flex flex-col justify-between h-full relative overflow-hidden group">
              {/* Subtle top decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1ca350] to-[#a3e635]"></div>

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#1ca350] flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                        Farm & Corporate Location
                      </span>
                      <h3 className="font-sans text-lg font-bold text-[#072418]">
                        Visit Nelson Farms
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100">
                    Ido LGA
                  </span>
                </div>

                {/* Big Prominent Address Display */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                    Company & Farm Address
                  </span>
                  <p className="font-sans text-lg sm:text-2xl font-extrabold text-[#072418] leading-snug">
                    KM 7 Akufo Road, Ibadan
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-stone-600 mt-0.5">
                    Oyo State, Nigeria
                  </p>
                  <p className="text-xs text-stone-500 mt-2.5 leading-relaxed">
                    Located along the Akufo agricultural corridor in Ibadan. Easily
                    accessible for haulage trucks, wholesale pickups, and scheduled
                    farm inspections.
                  </p>
                </div>

                {/* Visiting / Farm Gate Hours */}
                <div className="space-y-2 mb-6 text-xs text-stone-600">
                  <div className="flex items-center gap-2.5 font-medium">
                    <Clock size={15} className="text-[#1ca350] flex-shrink-0" />
                    <span>
                      <strong className="text-stone-900">Monday – Friday:</strong> 7:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium">
                    <Clock size={15} className="text-[#1ca350] flex-shrink-0" />
                    <span>
                      <strong className="text-stone-900">Saturday:</strong> 7:00 AM – 5:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium">
                    <Clock size={15} className="text-stone-400 flex-shrink-0" />
                    <span>
                      <strong className="text-stone-900">Sunday:</strong> Scheduled deliveries only
                    </span>
                  </div>
                </div>
              </div>

              {/* Action: Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=KM+7+Akufo+Road+Ibadan+Oyo+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl bg-[#072418] hover:bg-[#0d4628] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow group/map"
              >
                <span>Open Location in Google Maps</span>
                <ExternalLink
                  size={14}
                  className="group-hover/map:translate-x-0.5 group-hover/map:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2: Direct Contact & Order Channels - 6 cols */}
          <ScrollReveal
            delay={120}
            duration={750}
            distance={20}
            className="lg:col-span-6 flex flex-col justify-between space-y-4"
          >
            {/* WhatsApp Direct Action Card */}
            <a
              href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-200 group flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#1ca350] uppercase tracking-wider block">
                    Fastest Response
                  </span>
                  <h4 className="font-sans text-base sm:text-lg font-bold text-[#072418]">
                    Order via WhatsApp
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Live availability, weight specs & quick booking
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#1ca350] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href="tel:+2349069711500"
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-emerald-950/10 hover:border-[#072418] transition-all duration-200 group flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#072418] text-[#a3e635] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                    Direct Farm Line
                  </span>
                  <h4 className="font-sans text-base sm:text-lg font-bold text-[#072418]">
                    Call 0906 971 1500
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Speak directly with our farm desk supervisor
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center flex-shrink-0 group-hover:bg-[#072418] group-hover:text-white transition-colors">
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </a>

            {/* Guarantees / Service Highlights Card */}
            <div className="bg-[#072418] text-white rounded-3xl p-5 sm:p-6 shadow-md border border-emerald-900/60">
              <span className="text-[11px] font-bold text-[#a3e635] uppercase tracking-wider block mb-3">
                Farm Dispatch Guarantees
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-emerald-100/90">
                <div className="flex items-center gap-2">
                  <Truck size={15} className="text-[#a3e635] flex-shrink-0" />
                  <span>Delivery across all regions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    size={15}
                    className="text-[#a3e635] flex-shrink-0"
                  />
                  <span>100% Bio-Secure Reared</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-[#a3e635] flex-shrink-0"
                  />
                  <span>Sanitized Farm Gate Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-[#a3e635] flex-shrink-0"
                  />
                  <span>Wholesale & Bulk Supply</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
