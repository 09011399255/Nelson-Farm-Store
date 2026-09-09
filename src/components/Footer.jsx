import React from "react";
import {
  Phone,
  MapPin,
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
          {/* Col 1: Brand Bio & Socials (3 cols) */}
          <div className="lg:col-span-3">
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
            <div className="space-y-2.5 mb-6 text-xs text-emerald-200/85">
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={15}
                  className="text-[#a3e635] flex-shrink-0 mt-0.5"
                />
                <span>KM 7 Akufo Road, Ibadan, Oyo State, Nigeria</span>
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

            {/* WhatsApp Contact */}
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

          {/* Col 4: WhatsApp Farm Updates (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-2">
              WhatsApp Farm Updates
            </h4>
            <p className="text-xs text-emerald-200/70 mb-4 leading-relaxed font-normal">
              Connect directly on WhatsApp for weekly farm dispatch schedules,
              live stock availability, and wholesale rates.
            </p>
            <a
              href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20receive%20farm%20updates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Get WhatsApp Updates</span>
            </a>
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
