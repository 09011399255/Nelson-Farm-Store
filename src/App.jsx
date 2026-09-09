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
import InquiryModal from "./components/InquiryModal";
import Footer from "./components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState("home"); // 'home' or 'farms'
  const [selectedFarmId, setSelectedFarmId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("General Order");
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenInquiry = (subject = "General Inquiry") => {
    setModalSubject(subject);
    setIsModalOpen(true);
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
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeView === "home" ? (
          <>
            <Hero
              onExploreFarms={handleExploreFarms}
              onOpenInquiry={handleOpenInquiry}
            />
            <AboutSection
              onLearnMore={handleExploreFarms}
              onOpenInquiry={handleOpenInquiry}
            />
            <LivestockSection
              onSelectFarm={handleSelectFarm}
              onOpenInquiry={handleOpenInquiry}
            />
            <ProcessSection />
            <WhyChooseUs />
            <FaqSection
              onAskQuestion={() => handleOpenInquiry("Custom Farming Question")}
            />
            <ContactSection
              onSubmitSuccess={(data) =>
                showToast(
                  `Thank you ${data.name}, opening WhatsApp to complete your order!`,
                )
              }
            />
          </>
        ) : (
          <FarmsView
            onBackToHome={() => handleNavigate("home")}
            onOpenInquiry={handleOpenInquiry}
            selectedFarmId={selectedFarmId}
          />
        )}
      </main>

      {/* Global Footer with Overlapping CTA */}
      <Footer
        onNavigate={handleNavigate}
        onSelectFarm={handleSelectFarm}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Global Order/Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSubject={modalSubject}
        onSubmitSuccess={(data) =>
          showToast(`Inquiry sent for ${data.subject}!`)
        }
      />
    </div>
  );
}
