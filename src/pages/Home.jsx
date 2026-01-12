import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBusinessSection from "../components/HeroBusinessSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import CTASection from "../components/CTASection";
import OurServicesSection from "../components/OurServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialSection from "../components/TestimonialSection";
import PerformanceCTASection from "../components/PerformanceCTASection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import PortfolioSection from "../components/PortfolioSection";
import BusinessServiceBanner from "../components/BusinessServiceBanner";
// import StartBusinessSection from "../components/StartBusinessSection";

const Home = () => {
  return (
    <div className="bg-dark text-white overflow-hidden">
      <Header bgTransparent />

      {/* HERO */}
      <HeroBusinessSection />

      {/* SECTIONS */}
      <WhatWeDoSection />
      <CTASection />
      <OurServicesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PerformanceCTASection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <BusinessServiceBanner />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
