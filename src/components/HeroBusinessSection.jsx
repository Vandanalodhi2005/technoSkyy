import React from "react";
import {
  FiGlobe,
  FiCode,
  FiTrendingUp,
  FiSettings,
  FiHeadphones,
  FiShield,
} from "react-icons/fi";

const services = [
  {
    title: "Website Design & Development",
    desc: "Modern, responsive, and scalable websites built for performance and security.",
    icon: <FiCode />,
  },
  {
    title: "Digital Marketing Services",
    desc: "SEO, paid ads, and content strategies to grow visibility and leads globally.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Software Development",
    desc: "Secure custom software, cloud applications, and system integrations.",
    icon: <FiSettings />,
  },
  {
    title: "IT Support for Businesses",
    desc: "Managed IT services, monitoring, and infrastructure support.",
    icon: <FiShield />,
  },
  {
    title: "Expert Tech Support",
    desc: "Reliable technical assistance ensuring business continuity.",
    icon: <FiHeadphones />,
  },
];

const BusinessOverviewSection = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative pt-36 pb-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/95 via-[#0a0f1f]/90 to-[#0b1224]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-[#2ea0ff] text-sm tracking-widest font-semibold uppercase animate-fade-down">
            <FiGlobe /> Global Technology Solutions
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white animate-fade-up">
            Techno Sky Solutions
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-[#b9c9e4] leading-relaxed animate-fade-up delay-150">
            Techno Sky Solutions is a trusted technology partner delivering
            innovative, reliable, and scalable digital solutions worldwide.
            From web development and digital marketing to software engineering
            and IT support, we help businesses grow and succeed.
          </p>

          <div className="mt-10 flex justify-center gap-5 animate-fade-up delay-300">
            <button className="bg-[#2d6cff] hover:bg-[#1f5eff] px-7 py-3 rounded-md text-white font-semibold transition">
              Get a Free Consultation
            </button>
            <button className="border border-white/20 hover:border-[#2ea0ff] hover:text-[#2ea0ff] px-7 py-3 rounded-md text-white font-semibold transition">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28 bg-[#050b14]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="About Techno Sky"
            className="rounded-2xl shadow-xl animate-slide-left"
          />

          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold text-white mb-5">
              Who We Are
            </h2>
            <p className="text-[#b7c7e0] leading-relaxed">
              Techno Sky Solutions is a customer-focused technology services
              company delivering high-quality digital and IT solutions for
              startups, SMEs, and enterprises. Our global delivery model ensures
              transparency, reliability, and timely execution across regions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 bg-gradient-to-b from-[#050b14] to-[#0b1224]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-white mb-16">
            Our Core Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-[#101b2f] rounded-2xl p-8 text-center shadow-lg hover:-translate-y-3 transition duration-500 opacity-0 animate-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#2d6cff]/20 flex items-center justify-center text-[#2d6cff] text-2xl">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-[#b7c7e0] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-[#050b14]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">
            Why Choose Techno Sky Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Global Service Delivery",
              "Experienced Professionals",
              "Customer-Centric Approach",
              "Secure & Reliable",
              "Scalable Solutions",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#101b2f] p-6 rounded-xl text-[#b7c7e0] animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
          opacity: 0;
        }
        .animate-fade-down {
          animation: fadeDown 1s ease forwards;
          opacity: 0;
        }
        .animate-slide-left {
          animation: slideLeft 1.2s ease forwards;
          opacity: 0;
        }
        .animate-slide-right {
          animation: slideRight 1.2s ease forwards;
          opacity: 0;
        }
        .animate-card {
          animation: fadeUp 1s ease forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default BusinessOverviewSection;
