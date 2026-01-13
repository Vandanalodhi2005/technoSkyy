import React from "react";
import AboutHeroSection from "./AboutHeroSection";

const AboutPage = () => {
  return (
    <>
      

      {/* ===== WHO WE ARE ===== */}
      <section className="py-24 bg-[#050b14]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Techno Sky Solutions"
            className="rounded-2xl shadow-xl animate-slide-left"
          />

          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-[#b7c7e0] leading-relaxed mb-4">
              Techno Sky Solutions is a global technology services company
              dedicated to helping businesses harness the power of digital
              innovation. We provide end-to-end solutions including website
              design and development, digital marketing, software development,
              and IT support for businesses of all sizes.
            </p>
            <p className="text-[#b7c7e0] leading-relaxed">
              With a strong focus on quality, reliability, and customer
              satisfaction, we partner with organizations worldwide to build
              secure, scalable, and future-ready digital solutions.
            </p>
          </div>

        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 bg-gradient-to-b from-[#050b14] to-[#0b1224]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-[#101b2f] p-10 rounded-2xl shadow-lg hover:-translate-y-2 transition animate-fade-up">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-[#b7c7e0] leading-relaxed">
              Our mission is to empower businesses through innovative
              technology solutions that improve efficiency, enhance digital
              presence, and drive sustainable growth while maintaining
              transparency and long-term relationships.
            </p>
          </div>

          <div className="bg-[#101b2f] p-10 rounded-2xl shadow-lg hover:-translate-y-2 transition animate-fade-up delay-200">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-[#b7c7e0] leading-relaxed">
              Our vision is to become a globally trusted technology partner
              known for innovation, excellence, and customer-centric services,
              helping businesses stay competitive in a rapidly changing
              digital world.
            </p>
          </div>

        </div>
      </section>

      {/* ===== Animations ===== */}
      <style>{`
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .animate-slide-left {
          opacity: 0;
          animation: slideLeft 1.2s ease forwards;
        }

        .animate-slide-right {
          opacity: 0;
          animation: slideRight 1.2s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
