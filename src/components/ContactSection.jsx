import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "Chicken & Eggs",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
    }, 500);
  };

  return (
    <section
      id="contact"
      className="pt-10 sm:pt-16 lg:pt-20 pb-36 sm:pb-52 lg:pb-60 bg-[#FAF8F5] relative border-t border-emerald-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Simple, Authentic & Balanced */}
          <ScrollReveal
            duration={750}
            distance={20}
            className="lg:col-span-6 lg:pt-6"
          >
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#072418] tracking-tight leading-[1.18] sm:leading-[1.14] mb-3 sm:mb-4">
              Ready to order fresh <br className="hidden sm:inline" />
              from Nelson Farms?
            </h2>

            <p className="text-stone-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-7 font-normal max-w-lg">
              Reach out to our farm desk to book live stock, fresh cuts, or
              commercial bulk supplies. We deliver daily across all regions.
            </p>

            {/* Authentic WhatsApp Action Button */}
            <div>
              <a
                href="https://wa.me/2349069711500?text=Hello%20Nelson%20Farms%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base py-3.5 px-6 sm:px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
              >
                {/* Official WhatsApp Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Order via WhatsApp</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Quick Contact & Farm Location Cards */}
            <div className="mt-8 pt-6 border-t border-emerald-950/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-[#1ca350] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                    Company & Farm Address
                  </span>
                  <p className="text-sm font-semibold text-[#072418] leading-snug">
                    KM 7 Akufo Road, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-[#1ca350] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+2349069711500"
                    className="text-sm font-semibold text-[#072418] hover:text-[#1ca350] transition-colors"
                  >
                    +234 906 971 1500
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Clean, Modern Form Card */}
          <ScrollReveal
            delay={120}
            duration={750}
            distance={20}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border border-emerald-950/10">
              {submitted ? (
                <div className="text-center py-10 px-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#1ca350] mx-auto flex items-center justify-center mb-3.5">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-[#072418] mb-1.5">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mb-5 leading-relaxed">
                    Thank you,{" "}
                    <strong className="text-stone-900">{formData.name}</strong>.
                    Our farm desk will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        product: "Chicken & Eggs",
                        message: "",
                      });
                    }}
                    className="text-xs font-bold text-white bg-[#072418] hover:bg-[#168a42] py-2.5 px-6 rounded-full transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-sans text-2xl font-bold text-[#072418]">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Fill out your request below and we will get back to you.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Adeleke"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 bg-[#FAF8F5]/60 transition-all font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
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
                      className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 bg-[#FAF8F5]/60 transition-all font-sans"
                    />
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Produce / Farm Division *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 bg-[#FAF8F5]/60 transition-all font-sans"
                    >
                      <option value="Chicken & Eggs">
                        Chicken & Jumbo Eggs
                      </option>
                      <option value="Piggery">
                        Piggery (Market Hogs & Weaners)
                      </option>
                      <option value="Turkey">
                        Heritage Turkey (Live & Dressed)
                      </option>
                      <option value="Fishery">Fresh & Smoked Catfish</option>
                      <option value="Wholesale">
                        Commercial Bulk Wholesale
                      </option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Quantity or Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Optional: quantities, delivery location, etc."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#1ca350] focus:ring-2 focus:ring-emerald-100 bg-[#FAF8F5]/60 transition-all resize-y font-sans"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#072418] hover:bg-[#168a42] text-white font-bold text-sm py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-3 group"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Request</span>
                        <ArrowRight
                          size={15}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
