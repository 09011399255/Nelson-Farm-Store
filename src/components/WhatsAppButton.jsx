import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = "2349069711500";
  const defaultMessage = encodeURIComponent(
    "Hello Nelson Farms Store, I would like to make an inquiry about your livestock and farm products.",
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-farm-darkest text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-emerald-900/10 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Order via WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-emerald-500/40 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp with Nelson Farms Store"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"></span>
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
}
