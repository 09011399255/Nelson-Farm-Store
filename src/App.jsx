import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import LivestockSection from "./components/LivestockSection";
import FarmsView from "./components/FarmsView";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState("home"); // 'home' or 'farms'
  const [selectedFarmId, setSelectedFarmId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenWhatsApp = (subject = "General Order") => {
    const text = `Hello Nelson Farms, I am reaching out to place an order regarding: ${subject}.`;
    const whatsappUrl = `https://wa.me/2349069711500?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSelectFarm = (farmId) => {
    setSelectedFarmId(farmId);
    setActiveView("farms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreFarms = () => {
    setSelectedFarmId(null);
    setActiveView("farms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (view, sectionId = null) => {
    setActiveView(view);
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
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-stone-900 selection:bg-[#1ca350] selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 max-w-sm mx-auto sm:mx-0 bg-[#072418] text-white py-3.5 px-5 rounded-2xl shadow-2xl border border-amber-400/40 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">
            {toastMessage}
          </span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenInquiry={handleOpenWhatsApp}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeView === "home" ? (
          <>
            <Hero
              onExploreFarms={handleExploreFarms}
              onOpenInquiry={handleOpenWhatsApp}
            />
            <AboutSection
              onLearnMore={handleExploreFarms}
              onOpenInquiry={handleOpenWhatsApp}
            />
            <LivestockSection
              onSelectFarm={handleSelectFarm}
              onOpenInquiry={handleOpenWhatsApp}
            />
            <ProcessSection />
            <WhyChooseUs />
            <FaqSection
              onAskQuestion={() =>
                handleOpenWhatsApp("Custom Farming Question")
              }
            />
            <ContactSection />
          </>
        ) : (
          <FarmsView
            onBackToHome={() => handleNavigate("home")}
            onOpenInquiry={handleOpenWhatsApp}
            selectedFarmId={selectedFarmId}
          />
        )}
      </main>

      {/* Global Footer with Overlapping CTA */}
      <Footer
        onNavigate={handleNavigate}
        onSelectFarm={handleSelectFarm}
        onOpenInquiry={handleOpenWhatsApp}
      />
    </div>
  );
}
