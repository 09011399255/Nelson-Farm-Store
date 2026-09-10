import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall, ArrowRight, Shield, Sparkles } from "lucide-react";

export default function Navbar({ activeView, setActiveView, onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (view, sectionId = null) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick contact */}
      <div className="bg-farm-darkest text-emerald-100/80 text-[11px] sm:text-xs py-2 sm:py-2.5 px-3.5 sm:px-8 border-b border-emerald-950 flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
          <span className="font-medium truncate sm:overflow-visible">
            Farm-fresh delivery across all regions
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 flex-shrink-0">
          <a
            href="tel:+2349069711500"
            className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium"
          >
            <PhoneCall size={12} className="text-emerald-400" />
            +234 906 971 1500
          </a>
          <span className="text-emerald-900">•</span>
          <span className="text-emerald-300 font-semibold">
            100% Organically Reared
          </span>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-farm-md py-3 sm:py-3.5 border-b border-emerald-900/10"
            : "bg-white/95 backdrop-blur-md py-3.5 sm:py-5 lg:py-6 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-farm-primary to-farm-dark text-white flex items-center justify-center font-serif text-lg sm:text-xl font-bold shadow-farm-sm group-hover:scale-105 transition-transform duration-200 border border-emerald-700/30 flex-shrink-0">
              <span className="text-emerald-300">◒</span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-farm-darkest flex items-center gap-1 leading-tight">
                Nelson{" "}
                <span className="font-serif italic font-normal text-farm-medium">
                  Farms
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-emerald-800/80 -mt-0.5">
                Livestock & Produce Store
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-semibold text-gray-700">
            <button
              onClick={() => navigateTo("home")}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeView === "home"
                  ? "text-farm-primary bg-emerald-50/80 font-bold"
                  : "hover:text-farm-primary hover:bg-gray-50"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("farms")}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                activeView === "farms"
                  ? "text-farm-primary bg-emerald-50/80 font-bold"
                  : "hover:text-farm-primary hover:bg-gray-50"
              }`}
            >
              Our Farms
            </button>
            <button
              onClick={() => navigateTo("home", "about")}
              className="px-3.5 py-2 rounded-lg hover:text-farm-primary hover:bg-gray-50 transition-all font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo("home", "faq")}
              className="px-3.5 py-2 rounded-lg hover:text-farm-primary hover:bg-gray-50 transition-all font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => navigateTo("home", "contact")}
              className="px-3.5 py-2 rounded-lg hover:text-farm-primary hover:bg-gray-50 transition-all font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Right CTA - Direct WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile WhatsApp & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm"
              aria-label="WhatsApp Us"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-farm-primary rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-farm-primary text-emerald-300 flex items-center justify-center font-bold">
                    ◒
                  </div>
                  <span className="font-bold text-farm-darkest">
                    Nelson Farms
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-800"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2">
                <button
                  onClick={() => navigateTo("home")}
                  className={`text-left px-4 py-3 rounded-xl font-semibold text-base ${
                    activeView === "home"
                      ? "bg-emerald-50 text-farm-primary font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo("farms")}
                  className={`text-left px-4 py-3 rounded-xl font-semibold text-base ${
                    activeView === "farms"
                      ? "bg-emerald-50 text-farm-primary font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Our Farms
                </button>
                <button
                  onClick={() => navigateTo("home", "about")}
                  className="text-left px-4 py-3 rounded-xl font-semibold text-base text-gray-700 hover:bg-gray-50"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigateTo("home", "faq")}
                  className="text-left px-4 py-3 rounded-xl font-semibold text-base text-gray-700 hover:bg-gray-50"
                >
                  FAQs
                </button>
                <button
                  onClick={() => navigateTo("home", "contact")}
                  className="text-left px-4 py-3 rounded-xl font-semibold text-base text-gray-700 hover:bg-gray-50"
                >
                  Contact & Location
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <a
                href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <div className="text-center text-xs text-gray-500 space-y-1.5">
                <div>
                  Call us:{" "}
                  <a
                    href="tel:+2349069711500"
                    className="text-gray-800 font-bold hover:text-emerald-600 font-mono"
                  >
                    +234 906 971 1500
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:nelsonfarmingstores@gmail.com"
                    className="text-gray-600 hover:text-emerald-600 text-[11px] font-medium"
                  >
                    nelsonfarmingstores@gmail.com
                  </a>
                </div>
                <div className="text-[11px] text-gray-400 leading-tight">
                  <span>Office: Block 7 Iyana Lepa, Awotan Apete, Ibadan</span>
                  <span className="block mt-0.5">
                    Farm: KM 7 Akufo Road, Ibadan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
