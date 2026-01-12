import React from "react";
import {
  FiLock,
  FiUsers,
  FiAward,
  FiHeadphones,
} from "react-icons/fi";

const WhyChooseUsSection = () => {
  return (
    <section className="relative bg-gradient-to-b w-full from-[#0b1224] to-[#152233] py-28 overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#2ea0ff] text-xs font-semibold tracking-[0.3em] uppercase">
            Why choose us
          </span>

          <h2 className="mt-4 text-white text-3xl lg:text-4xl font-bold leading-tight">
            Let us change the way you think
            <br />
            about technology.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Card 1 — UP on desktop */}
          <div className="bg-[#455f78] rounded-xl p-8 text-center md:transform md:-translate-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#2ea0ff] flex items-center justify-center text-white">
              <FiLock size={22} />
            </div>
            <h4 className="mt-6 text-white font-semibold text-lg">
              Smart & secure system
            </h4>
            <p className="mt-3 text-[#cfd6ea] text-sm leading-relaxed">
              Duis gravida integer commodo cursus ante vehicula lobortis
              quam dis at tristique.
            </p>
          </div>

          {/* Card 2 — DOWN on desktop */}
          <div className="bg-gradient-to-b from-[#2d6cff] to-[#1f5eff] rounded-xl p-8 text-center shadow-lg shadow-blue-500/30 md:transform md:translate-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-white/20 flex items-center justify-center text-white">
              <FiUsers size={22} />
            </div>
            <h4 className="mt-6 text-white font-semibold text-lg">
              Professional team
            </h4>
            <p className="mt-3 text-white/90 text-sm leading-relaxed">
              Duis gravida integer commodo cursus ante vehicula lobortis
              quam dis at tristique.
            </p>
          </div>

          {/* Card 3 — UP on desktop */}
          <div className="bg-[#455f78] rounded-xl p-8 text-center md:transform md:-translate-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#2ea0ff] flex items-center justify-center text-white">
              <FiAward size={22} />
            </div>
            <h4 className="mt-6 text-white font-semibold text-lg">
              Certified Expert
            </h4>
            <p className="mt-3 text-[#cfd6ea] text-sm leading-relaxed">
              Duis gravida integer commodo cursus ante vehicula lobortis
              quam dis at tristique.
            </p>
          </div>

          {/* Card 4 — DOWN on desktop */}
          <div className="bg-[#455f78] rounded-xl p-8 text-center md:transform md:translate-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#2ea0ff] flex items-center justify-center text-white">
              <FiHeadphones size={22} />
            </div>
            <h4 className="mt-6 text-white font-semibold text-lg">
              24/7 Premium Support
            </h4>
            <p className="mt-3 text-[#cfd6ea] text-sm leading-relaxed">
              Duis gravida integer commodo cursus ante vehicula lobortis
              quam dis at tristique.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
