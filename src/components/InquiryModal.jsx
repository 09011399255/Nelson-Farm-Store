import React, { useState, useEffect } from "react";
import { X, CheckCircle2, PhoneCall, ArrowRight, Sparkles } from "lucide-react";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subject: initialSubject }));
    setSent(false);
  }, [initialSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-950/10 relative transform transition-all overflow-hidden"
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
              Order Request Submitted!
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              We have received your order request for{" "}
              <span className="font-bold text-[#1ca350]">
                {formData.subject}
              </span>
              . Our desk will contact you via WhatsApp/phone shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#072418] text-[11px] font-semibold tracking-wide mb-2.5">
              <Sparkles size={12} className="text-[#1ca350]" />
              <span>Direct Farm Order Desk</span>
            </div>
            <h3 className="font-sans text-2xl font-bold text-[#072418] mb-1">
              Quick Order & Quote Request
            </h3>
            <p className="text-xs text-stone-500 mb-6 font-normal">
              Inquiring for:{" "}
              <strong className="text-emerald-800">{formData.subject}</strong>
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
                    placeholder="+234 800..."
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
                  placeholder="E.g., 5 crates of jumbo eggs, 2 live market hogs, or delivery to Ikeja..."
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 font-sans"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href="tel:+2348012345678"
                  className="text-xs font-bold text-stone-600 hover:text-[#1ca350] flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall size={14} className="text-emerald-700" />
                  <span>Call instead</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2.5 bg-[#1ca350] hover:bg-[#168a42] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Request</span>
                      <div className="w-5 h-5 rounded-full bg-[#0d5328] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight size={11} />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
