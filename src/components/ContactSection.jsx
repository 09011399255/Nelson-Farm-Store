import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-10 sm:pt-14 pb-36 sm:pb-52 lg:pb-60 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={700} distance={20}>
          {/* Single Long Horizontal Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-stone-200/90 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            {/* Left: Farm Location */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-[#1ca350] flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100/70">
                <MapPin size={26} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#1ca350] uppercase tracking-wider block">
                  Farm & Office Location
                </span>
                <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#072418] tracking-tight mt-0.5">
                  KM 7 Akufo Road, Ibadan
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium mt-1">
                  <span>Oyo State, Nigeria</span>
                  <span className="text-stone-300">•</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=KM+7+Akufo+Road+Ibadan+Oyo+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1ca350] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Direct Actions (WhatsApp & Call) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-shrink-0">
              <a
                href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-sm transition-all hover:scale-[1.02]"
              >
                <svg
                  className="w-5 h-5 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp: 0906 971 1500</span>
              </a>

              <a
                href="tel:+2349069711500"
                className="inline-flex items-center justify-center gap-3 bg-[#072418] hover:bg-[#0e3827] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-sm transition-all hover:scale-[1.02]"
              >
                <Phone size={18} className="text-[#a3e635] flex-shrink-0" />
                <span>Call: 0906 971 1500</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
