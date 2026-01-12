import React from "react";
import {
    FiPenTool,
    FiTrendingUp,
    FiCpu,
    FiBarChart2,
    FiShield,
    FiLayout,
} from "react-icons/fi";
import ServicesCardsSection from "./ServicesCardsSection";

const OurServicesSection = () => {
    return (
        <section className="bg-gradient-to-b w-full from-[#0b1224] to-[#0a0f1f] py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* ================= TOP AREA ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="text-[#2ea0ff] text-xs font-semibold tracking-[0.25em] uppercase">
                            Our Services
                        </span>

                        <h2 className="mt-4 text-white text-3xl lg:text-4xl font-bold leading-tight">
                            Let us do the work, so you can
                            <br />
                            focus on what matters.
                        </h2>

                        <p className="mt-6 text-[#9aa4bf] max-w-xl leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        {/* Feature list */}
                        <div className="mt-8 space-y-5">
                            {[
                                { icon: FiPenTool, title: "Creative Solutions" },
                                { icon: FiTrendingUp, title: "Digital Marketing" },
                                { icon: FiCpu, title: "IOT & Programming" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#2ea0ff] flex items-center justify-center text-white">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="text-[#9aa4bf] text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/imac_img.png"
                            alt="Service Preview"
                            className="max-w-md w-full drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* ================= BOTTOM SERVICE CARDS ================= */}
                <div>
                    <ServicesCardsSection />
                </div>

            </div>
        </section>
    );
};

export default OurServicesSection;
