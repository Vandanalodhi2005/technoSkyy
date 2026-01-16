import React from "react";
import {
    FiGlobe,
    FiUsers,
    FiCheckCircle,
    FiShield,
    FiMessageSquare,
} from "react-icons/fi";

const whyChooseData = [
    {
        icon: FiGlobe,
        title: "Global Service Delivery",
        desc: "Supporting clients across multiple regions with consistent quality.",
    },
    {
        icon: FiUsers,
        title: "Experienced Professionals",
        desc: "Skilled developers, marketers, and IT specialists.",
    },
    {
        icon: FiCheckCircle,
        title: "Client-Focused Approach",
        desc: "Customized solutions tailored to your business needs.",
    },
    {
        icon: FiShield,
        title: "Secure & Reliable",
        desc: "Industry best practices with modern, secure technologies.",
    },
    {
        icon: FiMessageSquare,
        title: "Transparent Communication",
        desc: "Clear processes and regular project updates.",
    },
];

const approachSteps = [
    "Understanding Your Needs",
    "Strategic Planning",
    "Design & Development",
    "Testing & Deployment",
    "Ongoing Support",
];

const OurServicesSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#0b1224] to-[#050b14] py-28 w-full">
            <div className="max-w-7xl mx-auto px-6">

                {/* ================= HEADER ================= */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#2ea0ff] text-xs tracking-[0.3em] uppercase font-semibold">
                        Our Strengths
                    </span>
                    <h2 className="mt-4 text-white text-4xl font-bold">
                        Why Choose Techno Sky Solutions
                    </h2>
                    <p className="mt-6 text-[#9aa4bf] leading-relaxed">
                        We help businesses grow with secure, scalable, and future-ready
                        digital solutions.
                    </p>
                </div>

                {/* ================= WHY CHOOSE CARDS ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {whyChooseData.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#0f1b34]/80 backdrop-blur-xl rounded-2xl p-8
                                       hover:-translate-y-3 transition-all duration-500
                                       shadow-lg hover:shadow-[0_25px_60px_rgba(46,160,255,0.25)]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2d6cff] to-[#2ea0ff]
                                            flex items-center justify-center text-white mb-6">
                                <item.icon size={24} />
                            </div>

                            <h3 className="text-white font-semibold text-lg mb-3">
                                {item.title}
                            </h3>

                            <p className="text-[#9aa4bf] text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ================= OUR APPROACH ================= */}
                <div className="mt-32">
                    <h3 className="text-white text-3xl font-bold text-center mb-16">
                        Our Approach
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {approachSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-[#0f1b34] rounded-xl p-6 text-center
                                           hover:bg-[#14264a] transition-all duration-300"
                            >
                                <span className="text-[#2ea0ff] text-3xl font-bold">
                                    {index + 1}
                                </span>
                                <h4 className="mt-4 text-white text-sm font-semibold">
                                    {step}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= GLOBAL REACH ================= */}
                <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <img
                        src="/photo/Digital Marketing & Branding.jpg"
                        alt="Global Reach"
                        className="rounded-2xl shadow-2xl w-full"
                    />

                    <div>
                        <h3 className="text-white text-3xl font-bold mb-6">
                            Global Reach, Local Focus
                        </h3>
                        <p className="text-[#9aa4bf] leading-relaxed mb-4">
                            Serving clients worldwide, we understand regional markets,
                            time zones, and business cultures.
                        </p>
                        <p className="text-[#9aa4bf] leading-relaxed">
                            Our flexible engagement models ensure reliable delivery
                            and long-term partnerships.
                        </p>
                    </div>
                </div>

                {/* ================= CTA ================= */}
                <div className="mt-32 text-center">
                    <h3 className="text-white text-4xl font-bold mb-6">
                        Let’s Work Together
                    </h3>
                    <p className="text-[#9aa4bf] max-w-2xl mx-auto mb-10">
                        From startups to enterprises, Techno Sky Solutions is ready
                        to support your digital journey.
                    </p>
                    <button className="px-10 py-4 rounded-xl font-semibold text-white
                                       bg-gradient-to-r from-[#2d6cff] to-[#2ea0ff]
                                       hover:scale-110 transition-transform">
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    );
};

export default OurServicesSection;
