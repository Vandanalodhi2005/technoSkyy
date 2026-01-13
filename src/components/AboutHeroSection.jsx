import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#061625] via-[#0b1f33] to-[#061625] text-white">
      
      {/* ===== Background Shapes ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right gradient blob */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-b from-[#1e6cff] to-[#0a3a7a] rounded-bl-[200px] opacity-90" />

        {/* Vertical wave */}
        <svg className="absolute right-[15%] top-0 h-full" viewBox="0 0 2 1000">
          <path
            d="M1 0 C1 200 1 400 1 600 C1 800 1 900 1 1000"
            stroke="#2d6cff"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* Bottom curve */}
        <svg className="absolute bottom-0 left-0 w-[35%]" viewBox="0 0 600 400">
          <path
            d="M0 300 C150 200 300 400 600 100"
            stroke="#2d6cff"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Our mission is to make your business better <br />
          through technology
        </p>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 1s ease forwards;
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
      `}</style>
    </section>
  );
};

export default AboutHeroSection;
