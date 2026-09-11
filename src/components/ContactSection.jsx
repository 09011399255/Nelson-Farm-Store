import React from "react";
import { MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const farmMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=KM+7+Akufo+Road+Ibadan+Oyo+State+Nigeria";
  const officeMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Block+7+Iyana+Lepa+Awotan+Apete+Ibadan";

  return (
    <section
      id="contact"
      className="pt-10 sm:pt-14 pb-36 sm:pb-52 lg:pb-60 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={750} distance={20}>
          {/* Main Visual Location Card */}
          <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-lg border border-stone-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Information & Actions */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  {/* Brand Tag */}
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1ca350] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#1ca350]"></span>
                    <span>Nelson Farms</span>
                  </div>

                  {/* Main Heading */}
                  <div>
                    <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#072418] tracking-tight leading-tight">
                      Visit & connect with us
                    </h2>
                    <p className="text-stone-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      Reach our office for administrative enquiries or visit our
                      farm for inspections, bookings, and wholesale pickups.
                    </p>
                  </div>
                </div>

                {/* Card 1: Office Address */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1ca350] flex items-center justify-center flex-shrink-0 border border-emerald-100">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                        Office Address
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#072418]">
                        Block 7 Iyana Lepa, Awotan Apete
                      </p>
                      <p className="text-xs text-stone-500">
                        Ibadan, Oyo State, Nigeria
                      </p>
                    </div>
                  </div>

                  <a
                    href={officeMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Office on Google Maps"
                    aria-label="Open Office on Google Maps"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-50/80 hover:bg-emerald-50 text-stone-500 hover:text-[#1ca350] border border-stone-200 flex items-center justify-center transition-all shadow-sm flex-shrink-0 group"
                  >
                    <ExternalLink
                      size={17}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>

                {/* Card 2: Farm Address */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1ca350] flex items-center justify-center flex-shrink-0 border border-emerald-100">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                        Farm Facility Address
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#072418]">
                        KM 7 Akufo Road
                      </p>
                      <p className="text-xs text-stone-500">
                        Ibadan, Oyo State, Nigeria
                      </p>
                    </div>
                  </div>

                  <a
                    href={farmMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Farm on Google Maps"
                    aria-label="Open Farm on Google Maps"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-50/80 hover:bg-emerald-50 text-stone-500 hover:text-[#1ca350] border border-stone-200 flex items-center justify-center transition-all shadow-sm flex-shrink-0 group"
                  >
                    <ExternalLink
                      size={17}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>

                {/* Card 3: Official Email */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-200/60">
                      <Mail size={19} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                        Official Email
                      </span>
                      <a
                        href="mailto:nelsonfarmingstores@gmail.com"
                        className="text-xs sm:text-sm md:text-base font-bold text-[#072418] hover:text-[#1ca350] transition-colors truncate block font-mono"
                      >
                        nelsonfarmingstores@gmail.com
                      </a>
                    </div>
                  </div>

                  <a
                    href="mailto:nelsonfarmingstores@gmail.com"
                    title="Send Email"
                    aria-label="Send Email"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-50/80 hover:bg-emerald-50 text-stone-500 hover:text-[#1ca350] border border-stone-200 flex items-center justify-center transition-all shadow-sm flex-shrink-0 group"
                  >
                    <Mail
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                </div>

                {/* Card 4: Contact Channels */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#072418]/5 text-[#072418] flex items-center justify-center flex-shrink-0 border border-stone-200/60">
                      <Phone size={19} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                        Direct Desk & Orders
                      </span>
                      <a
                        href="tel:+2349069711500"
                        className="text-sm sm:text-base font-bold text-[#072418] hover:text-[#1ca350] transition-colors font-mono tracking-tight block"
                      >
                        0906 971 1500
                      </a>
                    </div>
                  </div>

                  {/* Direct Action Icon Buttons */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* WhatsApp Action Button */}
                    <a
                      href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </a>

                    {/* Phone Call Action Button */}
                    <a
                      href="tel:+2349069711500"
                      title="Call: 0906 971 1500"
                      aria-label="Call: 0906 971 1500"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#072418] hover:bg-[#0e3827] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                </div>

                {/* Social Media Channels */}
                <div className="p-3.5 sm:p-4 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                      Social Channels
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#072418]">
                      Connect & Follow Us
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Instagram */}
                    <a
                      href="https://instagram.com/nelson_farming_stores"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram: @nelson_farming_stores"
                      aria-label="Instagram: @nelson_farming_stores"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#E4405F] text-stone-700 hover:text-white border border-stone-200/80 transition-all text-xs font-semibold shadow-sm group hover:scale-105"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span>Instagram</span>
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://tiktok.com/@nelson_farming_stores"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="TikTok: @nelson_farming_stores"
                      aria-label="TikTok: @nelson_farming_stores"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-black text-stone-700 hover:text-white border border-stone-200/80 transition-all text-xs font-semibold shadow-sm group hover:scale-105"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                      </svg>
                      <span>TikTok</span>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com/nelsonfarmingstores"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook: nelsonfarmingstores"
                      aria-label="Facebook: nelsonfarmingstores"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#1877F2] text-stone-700 hover:text-white border border-stone-200/80 transition-all text-xs font-semibold shadow-sm group hover:scale-105"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Location Landscape & Map Route */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="relative h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group border border-stone-200/80 flex flex-col justify-between p-4 sm:p-6">
                  {/* Scenic Road & Farm Aerial Image */}
                  <img
                    src="/about-farm.jpg"
                    alt="Nelson Farms Road and Facilities"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gentle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35"></div>

                  {/* Top Tags: Locations */}
                  <div className="relative z-10 flex flex-col sm:flex-row gap-2.5 items-start">
                    {/* Farm Location Tag */}
                    <div className="backdrop-blur-md bg-black/50 border border-white/20 text-white px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-lg">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#1ca350] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin size={15} />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-emerald-200 leading-tight">
                          Farm Site
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                          KM 7 Akufo Road
                        </div>
                      </div>
                    </div>

                    {/* Office Location Tag */}
                    <div className="backdrop-blur-md bg-black/50 border border-white/20 text-white px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-lg">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#a3e635] text-[#072418] flex items-center justify-center flex-shrink-0 shadow-sm font-bold">
                        <Building2 size={15} />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-emerald-200 leading-tight">
                          Office Location
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                          Awotan Apete
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Map links */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4">
                    <div className="backdrop-blur-md bg-black/45 border border-white/20 text-white px-3 sm:px-3.5 py-1.5 rounded-full hidden sm:flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
                      <span className="text-xs font-medium text-emerald-100">
                        Akufo Agricultural Corridor, Ibadan
                      </span>
                    </div>

                    <a
                      href={farmMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="backdrop-blur-md bg-white/95 hover:bg-white text-[#072418] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg transition-all hover:scale-105"
                    >
                      <span>Open Farm on Google Maps</span>
                      <ExternalLink size={13} className="text-[#1ca350]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
