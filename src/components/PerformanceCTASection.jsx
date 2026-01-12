import React from "react";

const PerformanceCTASection = () => {
  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/business-man-using-mobile-phone-with-digital-society-network-symbols-smart-city-concept.jpg)",
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#0b2a3f]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-8xl px-6">
        <h6 className="text-white text-xl md:text-xl lg:text-2xl font-bold leading-tight">
          Our performance is your success.
          <br />
          Our passion is innovation. Our
          <br />
          expertise is unmatched. We get you
          <br />
          more
        </h6>

        <p className="mt-6 text-[#d6def0] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <button
          className="
            mt-8
            bg-[#2d6cff]
            hover:bg-[#1f5eff]
            px-8
            py-3
            rounded-md
            text-white
            text-sm
            font-semibold
            transition
          "
        >
          Discover more
        </button>
      </div>
    </section>
  );
};

export default PerformanceCTASection;
