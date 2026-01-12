import React from "react";
import {
    FiPenTool,
    FiBarChart2,
    FiShield,
    FiCode,
} from "react-icons/fi";

const ServicesCardsSection = () => {
    return (
        <section className="py-24 pb-0">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* ===== ROW 1 / COL 1 ===== */}
                    <div className="bg-[#7c6df0] rounded-2xl p-8 text-white min-h-[260px] md:col-start-1 md:row-start-1">
                        <FiPenTool size={28} />
                        <h3 className="text-xl font-semibold mt-6 mb-3">
                            Graphic Design
                        </h3>
                        <p className="text-sm opacity-90">
                            Urna auctor sed dictum libero vestibulum orci a imperdiet
                            quisque nullam nam.
                        </p>
                    </div>

                    {/* ===== BIG CARD / COL 2–3 / ROW 1–2 ===== */}
                    <div className="bg-[#2d6cff] rounded-2xl p-8 text-white relative overflow-hidden min-h-[560px] md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Mobile App Developments
                        </h3>
                        <p className="max-w-md text-sm opacity-90">
                            Urna auctor sed dictum libero vestibulum orci a imperdiet
                            quisque nullam nam.
                        </p>

                        <img
                            src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/mobile_app.png"
                            alt="Mobile App"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] drop-shadow-2xl"
                        />
                    </div>

                    {/* ===== ROW 1 / COL 4 ===== */}
                    <div className="bg-[#1e8f5a] rounded-2xl p-8 text-white relative overflow-hidden min-h-[260px] md:col-start-4 md:row-start-1">
                        <FiShield size={28} />
                        <h3 className="text-xl font-semibold mt-6 mb-3">
                            Cyber Security
                        </h3>
                        <p className="text-sm opacity-90 max-w-xs">
                            Urna auctor sed dictum libero vestibulum orci a imperdiet
                            quisque nullam nam.
                        </p>

                        <img
                            src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/young-hacker-with-glasses-writing-a-dangerous-virus-1.jpg"
                            alt="Security"
                            className="absolute inset-0 w-full h-full object-cover opacity-20"
                        />
                    </div>

                    {/* ===== ROW 2 / COL 1 ===== */}
                    <div className="bg-[#13263a] rounded-2xl p-8 text-white min-h-[260px] md:col-start-1 md:row-start-2">
                        <FiBarChart2 size={28} />
                        <h3 className="text-xl font-semibold mt-6 mb-3">
                            Online Marketing
                        </h3>
                        <p className="text-sm text-[#9aa4bf]">
                            Urna auctor sed dictum libero vestibulum orci a imperdiet
                            quisque nullam nam.
                        </p>
                    </div>

                    {/* ===== ROW 2 / COL 4 ===== */}
                    <div className="bg-[#1b2b3d] rounded-2xl p-8 text-white relative overflow-hidden min-h-[260px] md:col-start-4 md:row-start-2">
                        <FiCode size={28} />
                        <h3 className="text-xl font-semibold mt-6 mb-3">
                            Website Development
                        </h3>
                        <p className="text-sm text-[#9aa4bf] max-w-md">
                            Urna auctor sed dictum libero vestibulum orci a imperdiet
                            quisque nullam nam.
                        </p>

                        <img
                            src="https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/imac_img_.png"
                            alt="Website"
                            className="absolute bottom-4 right-6 w-[240px] drop-shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesCardsSection;
