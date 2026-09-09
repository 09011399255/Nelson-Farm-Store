import React from "react";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-10 sm:pt-16 lg:pt-20 pb-36 sm:pb-52 lg:pb-60 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Simple, Authentic & Balanced */}
          <ScrollReveal
            duration={750}
            distance={20}
            className="lg:col-span-6 lg:pt-6"
          >
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.14] mb-3 sm:mb-4">
              Ready to order fresh <br className="hidden sm:inline" />
              from Nelson Farms?
            </h2>

            <p className="text-stone-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-7 font-normal max-w-lg">
              Call or message us on WhatsApp to book live stock, fresh cuts, or
              commercial bulk supplies. We deliver across all regions.
            </p>

            {/* Authentic WhatsApp Action Button */}
            <div>
              <a
                href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base py-3.5 px-6 sm:px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
              >
                {/* Official WhatsApp Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Order via WhatsApp</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Quick Contact & Farm Location Cards */}
            <div className="mt-8 pt-6 border-t border-emerald-950/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-[#1ca350] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                    Company & Farm Address
                  </span>
                  <p className="text-sm font-semibold text-[#072418] leading-snug">
                    KM 7 Akufo Road, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-[#1ca350] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+2349069711500"
                    className="text-sm font-semibold text-[#072418] hover:text-[#1ca350] transition-colors"
                  >
                    +234 906 971 1500
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Direct Channels & Operational Hub (Zero Form Fields) */}
          <ScrollReveal
            delay={120}
            duration={750}
            distance={20}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-950/10 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-100/80 text-[#072418] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#1ca350] animate-pulse"></span>
                  Instant Farm Access
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#072418]">
                  Direct Orders & Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                  No forms or wait times. Reach our farm sales team directly on WhatsApp or by phone for live stock bookings, dressed cuts, and bulk pricing.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-3.5">
                {/* WhatsApp Channel */}
                <a
                  href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#072418] text-sm sm:text-base">
                        Chat on WhatsApp
                      </div>
                      <div className="text-xs text-stone-500">
                        Fastest response for quotes & immediate booking
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-[#1ca350] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>

                {/* Call Channel */}
                <a
                  href="tel:+2349069711500"
                  className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#072418]/5 hover:bg-[#072418]/10 border border-emerald-950/15 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#072418] text-[#a3e635] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#072418] text-sm sm:text-base">
                        Call Direct: 0906 971 1500
                      </div>
                      <div className="text-xs text-stone-500">
                        Speak directly with our farm desk supervisor
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-[#072418] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>

              {/* Operational & Service Guarantees */}
              <div className="pt-4 border-t border-emerald-950/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1ca350] flex-shrink-0" />
                  <span>Monday – Saturday: 7am – 6pm</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1ca350] flex-shrink-0" />
                  <span>Sanitized Farm Gate Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1ca350] flex-shrink-0" />
                  <span>Delivery across all regions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1ca350] flex-shrink-0" />
                  <span>100% Bio-Secure Reared</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
