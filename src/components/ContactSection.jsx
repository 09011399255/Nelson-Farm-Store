import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=KM+7+Akufo+Road+Ibadan+Oyo+State+Nigeria";

  return (
    <section
      id="contact"
      className="pt-10 sm:pt-14 pb-36 sm:pb-52 lg:pb-60 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={750} distance={20}>
          {/* Main Visual Location Card */}
          <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-lg border border-stone-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Information & Actions */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                {/* Brand Tag */}
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1ca350]">
                  <span className="w-2 h-2 rounded-full bg-[#1ca350]"></span>
                  <span>Nelson Farms</span>
                </div>

                {/* Main Heading */}
                <div>
                  <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#072418] tracking-tight leading-tight">
                    Visit our farm in Ibadan
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 leading-relaxed">
                    Open for inspections, live stock bookings, and wholesale pickups.
                  </p>
                </div>

                {/* Address Block */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 space-y-1">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    Farm & Gate Address
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#072418]">
                    KM 7 Akufo Road
                  </div>
                  <div className="text-xs sm:text-sm text-stone-600 font-medium">
                    Ibadan, Oyo State, Nigeria
                  </div>
                </div>

                {/* Contact Actions: Primary WhatsApp + Call Icon Button */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-stone-400">
                    Direct Orders & Inquiries
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Primary Action: WhatsApp */}
                    <a
                      href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-[#072418] hover:bg-[#0e3827] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3.5 rounded-full shadow-sm transition-all hover:scale-[1.02]"
                    >
                      <svg
                        className="w-4 h-4 fill-[#25D366] flex-shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Chat on WhatsApp</span>
                    </a>

                    {/* Secondary Action: Call Icon Button */}
                    <a
                      href="tel:+2349069711500"
                      title="Call: 0906 971 1500"
                      aria-label="Call 0906 971 1500"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-stone-200 bg-stone-50 hover:bg-stone-100 text-[#072418] flex items-center justify-center transition-transform hover:scale-105 shadow-sm flex-shrink-0"
                    >
                      <Phone size={18} />
                    </a>

                    {/* Phone Number Display */}
                    <span className="text-xs sm:text-sm font-bold text-stone-700 font-mono">
                      0906 971 1500
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Location Landscape & Map Route */}
              <div className="lg:col-span-7">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-[280px] sm:h-[360px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group border border-stone-200/80 cursor-pointer"
                >
                  {/* Scenic Road & Farm Aerial Image */}
                  <img
                    src="/about-farm.jpg"
                    alt="Nelson Farms Road and Facilities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gentle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/20 group-hover:opacity-90 transition-opacity"></div>

                  {/* Top-Left Frosted Tag: Location Destination */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 backdrop-blur-md bg-black/45 border border-white/20 text-white px-3 sm:px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-lg">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#1ca350] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-200 leading-tight">
                        Nelson Farms Site
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                        KM 7 Akufo Road
                      </div>
                    </div>
                  </div>

                  {/* Middle-Right Frosted Tag: Road Corridor Marker */}
                  <div className="absolute bottom-16 right-4 sm:right-6 backdrop-blur-md bg-black/45 border border-white/20 text-white px-3 sm:px-3.5 py-1.5 rounded-full hidden sm:flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
                    <span className="text-xs font-medium text-emerald-100">
                      Akufo Agricultural Corridor
                    </span>
                  </div>

                  {/* Bottom-Left Frosted Pill: Google Maps Link */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 backdrop-blur-md bg-white/90 group-hover:bg-white text-[#072418] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg transition-all">
                    <span>Open in Google Maps</span>
                    <ExternalLink size={13} className="text-[#1ca350]" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
