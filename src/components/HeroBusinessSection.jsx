import React from "react";
import {
  FiTrendingUp,
} from "react-icons/fi";

const HeroBusinessSection = () => {
  return (
    <section
      className="
        relative
        pt-36
        pb-28
        overflow-hidden
        w-full
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "url('https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/part-of-earth-with-sun-rise-and-lens-flare-background-internet-network-concept.jpg')",
      }}
    >
      {/* Dark overlay (IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/95 via-[#0a0f1f]/90 to-[#0b1224]/95" />

      {/* Right background glow */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>
            <span className="text-[#2ea0ff] text-xs font-semibold tracking-[0.25em] uppercase">
              Start your digital business
            </span>

            <h1 className="mt-5 text-white text-4xl lg:text-[44px] font-bold leading-[1.25]">
              We make IT simple,
              <br />
              faster, and less
              <br />
              expensive.
            </h1>

            <p className="mt-6 text-[#9aa4bf] max-w-lg leading-relaxed">
              Vivamus mollis nisi lectus, vitae sodales ipsum. Senectus vitae
              pulvinar rhoncus.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="bg-[#2d6cff] hover:bg-[#1f5eff] px-6 py-3 rounded-md text-sm font-semibold text-white transition">
                Get Started
              </button>

              <button className="border border-white/20 hover:border-[#2ea0ff] hover:text-[#2ea0ff] px-6 py-3 rounded-md text-sm font-semibold text-white transition">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center">
            <div className="w-[420px] h-[320px] rounded-2xl bg-gradient-to-br from-[#2d6cff] via-[#2ea0ff] to-[#1f5eff] shadow-2xl shadow-blue-500/40 flex items-center justify-center">
              <FiTrendingUp size={64} className="text-white opacity-90" />
              {/* <SvgCom /> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBusinessSection;
