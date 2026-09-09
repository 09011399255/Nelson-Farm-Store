import React, { useState, useEffect } from "react";
import { X, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";

export default function InquiryModal({
  isOpen,
  onClose,
  initialSubject = "General Inquiry",
  onSubmitSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: initialSubject,
    details: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subject: initialSubject }));
    setSent(false);
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const parts = [
      `Hello Nelson Farms, I want to place an order / make an inquiry.`,
      `*Item/Division:* ${formData.subject}`,
      formData.name ? `*Name:* ${formData.name}` : null,
      formData.phone ? `*Phone:* ${formData.phone}` : null,
      formData.email ? `*Email:* ${formData.email}` : null,
      formData.details ? `*Order Specifications:* ${formData.details}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/2349069711500?text=${encodeURIComponent(parts.join("\n"))}`;
    window.open(whatsappUrl, "_blank");
    setSent(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-emerald-950/10 relative transform transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#a3e635] via-[#1ca350] to-[#a3e635]"></div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1ca350] mx-auto flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-sans text-2xl font-bold text-[#072418] mb-2">
              Opening WhatsApp...
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Your order message for{" "}
              <span className="font-bold text-[#1ca350]">
                {formData.subject}
              </span>{" "}
              has been opened in WhatsApp. You can also call us directly on{" "}
              <a
                href="tel:+2349069711500"
                className="font-bold text-[#072418] underline"
              >
                09069711500
              </a>
              .
            </p>
          </div>
        ) : (
          <div>
            <h3 className="font-sans text-2xl font-bold text-[#072418] mb-1">
              Place Your Order
            </h3>
            <p className="text-xs text-stone-500 mb-6 font-normal">
              Ordering for:{" "}
              <strong className="text-emerald-800">{formData.subject}</strong>
              <span className="block text-stone-400 mt-0.5">
                Send details directly to our WhatsApp or call us.
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 906 971 1500"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Quantity / Specifications *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="E.g., 5 crates of jumbo eggs, 2 live market hogs, or delivery details..."
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 font-sans"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href="tel:+2349069711500"
                  className="text-xs font-bold text-stone-700 hover:text-[#1ca350] flex items-center justify-center gap-1.5 transition-colors bg-stone-100 hover:bg-stone-200 px-4 py-3 rounded-full w-full sm:w-auto"
                >
                  <PhoneCall size={14} className="text-emerald-700" />
                  <span>Call: 0906 971 1500</span>
                </a>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Order via WhatsApp</span>
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
