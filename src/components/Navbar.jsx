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
      <div className="bg-farm-darkest text-emerald-100/80 text-xs py-2.5 sm:py-3 px-4 sm:px-8 border-b border-emerald-950 flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium">
            Farm fresh deliveries available daily across Lagos & Ogun State
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="tel:+2348012345678"
            className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium"
          >
            <PhoneCall size={12} className="text-emerald-400" />
            +234 801 234 5678
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
            ? "glass-nav shadow-farm-md py-3.5 sm:py-4 border-b border-emerald-900/10"
            : "bg-white/95 backdrop-blur-md py-5 sm:py-6 lg:py-7 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-farm-primary to-farm-dark text-white flex items-center justify-center font-serif text-xl font-bold shadow-farm-sm group-hover:scale-105 transition-transform duration-200 border border-emerald-700/30">
              <span className="text-emerald-300">◒</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-farm-darkest flex items-center gap-1">
                Nelson{" "}
                <span className="font-serif italic font-normal text-farm-medium">
                  Farms
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-800/80 -mt-0.5">
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
              onClick={() => navigateTo("home", "standards")}
              className="px-3.5 py-2 rounded-lg hover:text-farm-primary hover:bg-gray-50 transition-all font-medium"
            >
              Standards
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

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry("General Inquiry")}
              className="group inline-flex items-center gap-2.5 bg-[#1ca350] hover:bg-[#168a42] text-white text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get Started Now</span>
              <div className="w-5 h-5 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={11} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry("General Inquiry")}
              className="bg-farm-primary text-white text-xs font-bold px-3 py-2 rounded-full"
            >
              Inquire
            </button>
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
                  onClick={() => navigateTo("home", "standards")}
                  className="text-left px-4 py-3 rounded-xl font-semibold text-base text-gray-700 hover:bg-gray-50"
                >
                  Quality Standards
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

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry("General Order");
                }}
                className="w-full bg-farm-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-farm-md"
              >
                <span>Make an Order / Inquiry</span>
                <ArrowRight size={16} />
              </button>
              <div className="text-center text-xs text-gray-500">
                Call us:{" "}
                <strong className="text-gray-800">+234 801 234 5678</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
