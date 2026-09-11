import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Building2,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { LIVESTOCK_SECTORS } from "../data/farmsData";
import ScrollReveal from "./ScrollReveal";

export default function Footer({ onNavigate, onSelectFarm, onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#072418] text-emerald-100/90 font-sans relative">
      {/* Overlapping Floating CTA Card */}
      <ScrollReveal
        duration={800}
        distance={24}
        className="max-w-6xl mx-auto px-4 sm:px-6 -mt-24 sm:-mt-36 mb-12 sm:mb-16 relative z-20"
      >
        <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[420px] flex items-center justify-center text-center p-6 sm:p-14 border border-emerald-500/20 group">
          {/* Background Photo */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('/cta-farmer.jpg')` }}
          ></div>

          {/* Dark Gradient Mask for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#072418]/95 via-[#072418]/70 to-[#072418]/50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight mb-3 sm:mb-4">
              Ready To Get Started?
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
              Join thousands of families, chefs, and grocers who are
              transforming their tables with certified bio-secure livestock,
              expert support, and trusted farm solutions.
            </p>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-3 bg-[#a3e635] hover:bg-[#84cc16] text-[#072418] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <span>Order via WhatsApp</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#072418] flex items-center justify-center font-bold group-hover/btn:translate-x-0.5 transition-transform shadow-sm">
                <ArrowRight size={13} className="stroke-[3]" />
              </div>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Footer Links & Information Grid */}
      <ScrollReveal
        delay={100}
        duration={750}
        distance={16}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand Bio & Socials (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                Nelson <span className="text-[#a3e635]">Farms</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed mb-4 font-normal">
              Growing smarter, greener, and together — your trusted agricultural
              partner in ethical livestock husbandry and wholesome farm produce.
            </p>

            {/* Address & Contact Info */}
            <div className="space-y-3 mb-6 text-xs text-emerald-200/85">
              <div className="flex items-start gap-2.5">
                <Building2
                  size={15}
                  className="text-[#a3e635] flex-shrink-0 mt-0.5"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300/60 block">
                    Office Address
                  </span>
                  <span>Block 7 Iyana Lepa, Awotan Apete, Ibadan</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin
                  size={15}
                  className="text-[#a3e635] flex-shrink-0 mt-0.5"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300/60 block">
                    Farm Address
                  </span>
                  <span>KM 7 Akufo Road, Ibadan, Oyo State, Nigeria</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#a3e635] flex-shrink-0" />
                <a
                  href="mailto:nelsonfarmingstores@gmail.com"
                  className="hover:text-[#a3e635] transition-colors font-medium break-all"
                >
                  nelsonfarmingstores@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#a3e635] flex-shrink-0" />
                <a
                  href="tel:+2349069711500"
                  className="hover:text-[#a3e635] transition-colors font-medium"
                >
                  +234 906 971 1500
                </a>
              </div>
            </div>

            {/* WhatsApp & Social Channels */}
            <div className="space-y-3">
              <div>
                <a
                  href="https://wa.me/2349069711500"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#a3e635] hover:text-white border border-[#25D366]/40 transition-all text-xs font-bold shadow-sm group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Connect on WhatsApp</span>
                </a>
              </div>

              {/* Social Channels: Instagram, TikTok, Facebook */}
              <div className="flex items-center gap-2 pt-1">
                {/* Instagram */}
                <a
                  href="https://instagram.com/nelson_farming_stores"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram: @nelson_farming_stores"
                  aria-label="Instagram: @nelson_farming_stores"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] text-emerald-100 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm border border-white/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@nelson_farming_stores"
                  target="_blank"
                  rel="noreferrer"
                  title="TikTok: @nelson_farming_stores"
                  aria-label="TikTok: @nelson_farming_stores"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-emerald-100 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm border border-white/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/nelsonfarmingstores"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook: nelsonfarmingstores"
                  aria-label="Facebook: nelsonfarmingstores"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-emerald-100 hover:text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm border border-white/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-200/80">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#a3e635] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "about")}
                  className="hover:text-[#a3e635] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("farms")}
                  className="hover:text-[#a3e635] transition-colors"
                >
                  Farm Divisions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "contact")}
                  className="hover:text-[#a3e635] transition-colors"
                >
                  Contact & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Farm Divisions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-4">
              Farm Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-200/80">
              {LIVESTOCK_SECTORS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectFarm(s.id)}
                    className="hover:text-[#a3e635] transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Farm Dispatch & Schedules (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-2">
              Farm Dispatch & Schedules
            </h4>
            <p className="text-xs text-emerald-200/70 leading-relaxed font-normal">
              Direct farm gate pickups and scheduled deliveries dispatched
              across all regions from our farm site in Ibadan.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
        <div>
          © {new Date().getFullYear()} Nelson Farms Store. All Rights Reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms & Conditions</span>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-[#a3e635] font-bold ml-2"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
