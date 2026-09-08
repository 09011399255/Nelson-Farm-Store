import React, { useState } from "react";
import {
  Calculator,
  Sparkles,
  Check,
  ArrowRight,
  Truck,
  Tag,
} from "lucide-react";
import { LIVESTOCK_SECTORS } from "../data/farmsData";

// Flatten all products across sectors
const ALL_PRODUCTS = LIVESTOCK_SECTORS.flatMap((sec) =>
  sec.products.map((p) => ({
    ...p,
    sectorName: sec.shortName,
    sectorId: sec.id,
  })),
);

export default function PriceCalculator({ onProceedOrder }) {
  const [selectedProductId, setSelectedProductId] = useState(
    ALL_PRODUCTS[3]?.id || ALL_PRODUCTS[0]?.id,
  );
  const [quantity, setQuantity] = useState(5);

  const selectedProduct =
    ALL_PRODUCTS.find((p) => p.id === selectedProductId) || ALL_PRODUCTS[0];

  // Pricing calculations
  const unitPrice = selectedProduct.price;
  const rawSubtotal = unitPrice * quantity;

  // Bulk discount rule: 5% off if quantity >= 10, or orders over ₦100,000
  const isEligibleDiscount = quantity >= 10 || rawSubtotal >= 100000;
  const discountAmount = isEligibleDiscount
    ? Math.round(rawSubtotal * 0.05)
    : 0;
  const finalTotal = rawSubtotal - discountAmount;
  const isFreeDelivery = finalTotal >= 60000;

  const handleOrder = () => {
    const summary = `${quantity}x ${selectedProduct.name} (Estimated: ₦${finalTotal.toLocaleString()})`;
    onProceedOrder(summary);
  };

  return (
    <section
      id="calculator"
      className="py-20 bg-gradient-to-b from-white to-[#F7F5F0] relative border-t border-emerald-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-farm-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator size={13} className="text-emerald-700" />
            <span>Interactive Order Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-farm-darkest">
            Calculate Your Order Estimate
          </h2>
          <p className="text-farm-muted text-sm sm:text-base mt-3">
            Choose your desired farm product, adjust your quantity, and receive
            instant transparent pricing with available bulk savings.
          </p>
        </div>

        {/* Calculator Widget Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-emerald-950/10 shadow-farm-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                1. Select Farm Product
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-farm-darkest focus:outline-none focus:border-farm-primary focus:ring-2 focus:ring-emerald-100 bg-farm-sand/50"
              >
                {ALL_PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    [{prod.sectorName}] {prod.name} — ₦
                    {prod.price.toLocaleString()} {prod.unit}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-farm-muted mt-1.5 flex items-center gap-1">
                <Tag size={12} className="text-emerald-600" />
                <span>{selectedProduct.specs}</span>
              </p>
            </div>

            {/* Quantity Controls */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  2. Select Quantity ({selectedProduct.unit})
                </label>
                <span className="font-serif text-lg font-bold text-farm-primary">
                  {quantity}{" "}
                  <span className="text-xs font-sans font-normal text-gray-500">
                    {selectedProduct.unit}
                  </span>
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="1"
                max="50"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-full accent-farm-primary cursor-pointer h-2 bg-gray-200 rounded-lg"
              />

              {/* Quick preset buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[1, 5, 10, 20, 30, 50].map((num) => (
                  <button
                    key={num}
                    onClick={() => setQuantity(num)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      quantity === num
                        ? "bg-farm-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Highlights / Badges */}
            <div className="pt-2 space-y-2 border-t border-gray-100 text-xs">
              <div className="flex items-center gap-2 text-emerald-800">
                <Check size={14} className="text-emerald-600" />
                <span>
                  Orders of 10+ units automatically receive a 5% bulk discount
                </span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800">
                <Truck size={14} className="text-emerald-600" />
                <span>Free dispatch in Lagos on orders exceeding ₦60,000</span>
              </div>
            </div>
          </div>

          {/* Right Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-farm-dark to-farm-darkest text-white p-6 sm:p-7 rounded-2xl shadow-farm-md flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/40">
                <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">
                  Estimate Summary
                </span>
                <span className="text-[10px] bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded-full">
                  Real-time
                </span>
              </div>

              <div className="py-5 space-y-3">
                <div className="flex justify-between text-xs text-emerald-200/80">
                  <span>Unit Price:</span>
                  <span className="font-semibold text-white">
                    ₦{unitPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-emerald-200/80">
                  <span>Quantity:</span>
                  <span className="font-semibold text-white">{quantity}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-200/80">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-white">
                    ₦{rawSubtotal.toLocaleString()}
                  </span>
                </div>

                {isEligibleDiscount && (
                  <div className="flex justify-between text-xs text-emerald-400 font-bold bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/30">
                    <span>5% Bulk Savings:</span>
                    <span>-₦{discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs text-emerald-200/80">
                  <span>Lagos Delivery:</span>
                  <span
                    className={
                      isFreeDelivery
                        ? "text-emerald-400 font-bold"
                        : "text-white"
                    }
                  >
                    {isFreeDelivery ? "FREE Dispatch" : "Standard Rate"}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800/60">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-xs uppercase font-bold text-emerald-200">
                  Total Estimate:
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-300">
                  ₦{finalTotal.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleOrder}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-farm-darkest font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Order</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
