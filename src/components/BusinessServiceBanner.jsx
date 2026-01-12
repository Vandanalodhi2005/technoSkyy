import React from "react";

const BusinessServiceBanner = () => {
  return (
    <section className="bg-[#0b1224] py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#1b2b3d] rounded-2xl overflow-hidden p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
              Get the Business IT Service
              <br />
              That Your Company Needs
            </h2>

            <p className="mt-4 text-[#9aa4bf] text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <button className="mt-6 bg-[#2d6cff] hover:bg-[#1f5eff] transition px-6 py-3 text-sm text-white rounded-md">
              Get Started
            </button>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative mt-12 lg:mt-0 lg:w-[420px] flex justify-center">

            {/* SVG-LIKE BLUE SHAPE */}
            <div className="absolute inset-2 flex items-center justify-center">
              <div className="w-[320px] h-[280px] bg-gradient-to-br from-[#2d6cff] to-[#2ea0ff] rounded-[80px] rotate-12 opacity-90" />
            </div>

            {/* MAN IMAGE */}
            <img
              src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/img_team.png"
              alt="Business Expert"
              className="relative z-10 max-h-[420px] object-contain"
            />
          </div>

          {/* DECORATIVE LINE SHAPES */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-white/10 rounded-full" />

        </div>
      </div>
    </section>
  );
};

export default BusinessServiceBanner;
