import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { LIVESTOCK_SECTORS } from "../data/farmsData";

export default function Footer({ onNavigate, onSelectFarm, onOpenInquiry }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#072418] text-emerald-100/90 font-sans relative">
      {/* Overlapping Floating CTA Card (Matching Reference Screenshot) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-24 sm:-mt-36 mb-12 sm:mb-16 relative z-20">
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

            {/* Pill CTA Button (Matching Reference Screenshot) */}
            <button
              onClick={() =>
                onOpenInquiry
                  ? onOpenInquiry("Free Order & Supply Consultation")
                  : onNavigate("home", "contact")
              }
              className="group/btn inline-flex items-center justify-center gap-3 bg-[#a3e635] hover:bg-[#84cc16] text-[#072418] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <span>Book a Free Consultation</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#072418] flex items-center justify-center font-bold group-hover/btn:translate-x-0.5 transition-transform shadow-sm">
                <ArrowRight size={13} className="stroke-[3]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand Bio & Socials (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                Nelson <span className="text-[#a3e635]">Farms</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed mb-6 font-normal">
              Growing smarter, greener, and together — your trusted agricultural
              partner in ethical livestock husbandry and wholesome farm produce.
            </p>

            {/* Social Icons (Rounded Green Circles) */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-[#a3e635] hover:text-[#072418] text-emerald-300 flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-[#a3e635] hover:text-[#072418] text-emerald-300 flex items-center justify-center transition-colors shadow-sm"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-[#a3e635] hover:text-[#072418] text-emerald-300 flex items-center justify-center transition-colors shadow-sm"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-[#a3e635] hover:text-[#072418] text-emerald-300 flex items-center justify-center transition-colors shadow-sm"
              >
                <MessageCircle size={15} />
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
                  onClick={() => onNavigate("home", "standards")}
                  className="hover:text-[#a3e635] transition-colors"
                >
                  Quality Standards
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

          {/* Col 3: Farm Divisions (2 cols) */}
          <div className="lg:col-span-2">
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

          {/* Col 4: Direct Support / Hub (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-4">
              Direct Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-emerald-200/80">
              <p>
                <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  Call & WhatsApp
                </span>
                <a
                  href="tel:+2348012345678"
                  className="hover:text-white font-semibold block mt-0.5"
                >
                  +234 801 234 5678
                </a>
              </p>
              <p>
                <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:info@nelsonfarmsstore.com"
                  className="hover:text-white block mt-0.5"
                >
                  info@nelsonfarmsstore.com
                </a>
              </p>
              <p>
                <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  Hub Location
                </span>
                <span className="block mt-0.5">
                  Lagos & Ogun State, Nigeria
                </span>
              </p>
            </div>
          </div>

          {/* Col 5: Newsletter Subscription (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-2">
              Join 15,000+ Customers
            </h4>
            <p className="text-xs text-emerald-200/70 mb-4 leading-relaxed font-normal">
              Receive weekly farm dispatch updates, fresh harvest alerts, and
              wholesale rates.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-900/80 border border-emerald-700 flex items-center gap-2.5 text-xs text-[#a3e635]">
                <CheckCircle2 size={16} />
                <span>You're subscribed to farm updates!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-xs text-white placeholder-emerald-400/50 focus:outline-none focus:border-[#a3e635] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#a3e635] hover:bg-[#84cc16] text-[#072418] font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Join Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

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
