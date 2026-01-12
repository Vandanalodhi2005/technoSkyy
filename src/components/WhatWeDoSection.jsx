import React from "react";
import { FiPlay } from "react-icons/fi";

const WhatWeDoSection = () => {
    return (
        <section className="bg-[#0b1224] py-28 w-full">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-[#2ea0ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        What we do
                    </span>

                    <h2 className="mt-4 text-white text-3xl lg:text-[34px] font-bold leading-tight">
                        Let us change the way you think
                        <br />
                        about technology.
                    </h2>
                </div>

                {/* Cards (FLEX – CENTERED) */}
                <div className="flex flex-wrap justify-center gap-8">

                    {/* ================= CARD 1 ================= */}
                    <div className="bg-[#111c2e] rounded-xl p-6 pb-0 flex flex-col w-full min-h-[460px] md:w-[260px] lg:w-[320px]">
                        <h4 className="text-[#2ea0ff] text-sm font-semibold mb-2">
                            Mobile Application Development
                        </h4>

                        <p className="text-[#9aa4bf] text-sm leading-relaxed mb-6">
                            Incubate effective ideas across market driven technology.
                        </p>

                        {/* Image at bottom */}
                        <div className="mt-auto h-[240px] flex items-end justify-center overflow-hidden">
                            <img
                                src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/mobile_app.png"
                                alt="Mobile Application"
                                className="h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* ================= CARD 2 ================= */}
                    <div className="bg-[#111c2e] rounded-xl p-6 pb-0 flex flex-col w-full min-h-[460px] md:w-[260px] lg:w-[320px]">
                        <h4 className="text-[#2ea0ff] text-sm font-semibold mb-2">
                            Desktop Application Development & Website
                        </h4>

                        <p className="text-[#9aa4bf] text-sm leading-relaxed mb-6">
                            Incubate effective ideas across market driven technology.
                        </p>

                        {/* Image at bottom */}
                        <div className="mt-auto h-[240px] flex items-end justify-center overflow-hidden">
                            <img
                                src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/imac_img.png"
                                alt="Desktop Application"
                                className="h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* ================= CARD 3 ================= */}
                    <div className="relative bg-[#111c2e] rounded-xl overflow-hidden flex flex-col w-full min-h-[460px] md:w-[260px] lg:w-[320px]">

                        {/* Curved overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2d6cff]/30 to-[#2ea0ff]/10" />

                        {/* Text */}
                        <div className="relative z-10 p-6">
                            <h4 className="text-[#2ea0ff] text-sm font-semibold mb-2">
                                Digital Marketing & Branding
                            </h4>

                            <p className="text-[#9aa4bf] text-sm leading-relaxed">
                                Inceptos ultricies cubilia nascetur nisi ornare consectetur
                                pulvinar curae ligula mattis platea.
                            </p>
                        </div>

                        {/* Play button at bottom */}
                        <div className="relative z-10 mt-auto h-[240px] flex items-center justify-center">
                            <button
                                className="
                  w-16 h-16
                  rounded-full
                  bg-white
                  flex items-center justify-center
                  shadow-[0_0_0_0_rgba(46,160,255,0.7)]
                  animate-pulse
                "
                                aria-label="Play Video"
                            >
                                <FiPlay className="text-[#2d6cff] ml-1" size={22} />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
