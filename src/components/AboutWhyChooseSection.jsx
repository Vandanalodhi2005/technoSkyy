import React from "react";
import {
  FiGlobe,
  FiUsers,
  FiShield,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

const whyChoose = [
  {
    icon: <FiGlobe />,
    title: "Global Service Delivery",
    desc: "Supporting clients across multiple regions with reliable and scalable solutions.",
  },
  {
    icon: <FiUsers />,
    title: "Experienced Professionals",
    desc: "Skilled developers, marketers, and IT specialists with real-world expertise.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Client-Focused Approach",
    desc: "Customized solutions designed specifically for your business needs.",
  },
  {
    icon: <FiShield />,
    title: "Secure & Reliable",
    desc: "Industry best practices and modern technologies for maximum security.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Transparent Communication",
    desc: "Clear processes, regular updates, and complete project visibility.",
  },
];

const approachSteps = [
  "Understanding Your Needs",
  "Strategic Planning",
  "Design & Development",
  "Testing & Deployment",
  "Ongoing Support",
];

const AboutWhyChooseSection = () => {
  return (
    <>
      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-28 bg-[#050b14]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16 animate-fade-up">
            Why Choose Techno Sky Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="why-card animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-28 bg-gradient-to-b from-[#050b14] to-[#0b1224]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16 animate-fade-up">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="approach-card animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span>{index + 1}</span>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL REACH ===== */}
      <section className="py-28 bg-[#050b14]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Global Reach"
            className="rounded-2xl shadow-xl animate-slide-left"
          />

          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold text-white mb-6">
              Global Reach, Local Focus
            </h2>
            <p className="text-[#b7c7e0] leading-relaxed mb-4">
              Serving clients worldwide, we understand the importance of
              regional markets, time zones, and business cultures.
            </p>
            <p className="text-[#b7c7e0] leading-relaxed">
              Our flexible engagement models allow us to deliver consistent
              quality and timely support regardless of location.
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUALITY & COMPLIANCE ===== */}
      <section className="py-28 bg-gradient-to-b from-[#050b14] to-[#0b1224]">
        <div className="max-w-6xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Commitment to Quality & Compliance
          </h2>
          <p className="text-[#b7c7e0] max-w-3xl mx-auto leading-relaxed">
            Techno Sky Solutions operates with a strong commitment to ethical
            business practices, data protection, and service transparency.
            We follow industry standards and comply with applicable regulations
            to ensure secure and dependable services.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 bg-[#0b1224] text-center">
        <h2 className="text-4xl font-bold text-white mb-6 animate-fade-up">
          Let’s Work Together
        </h2>
        <p className="text-[#b7c7e0] max-w-2xl mx-auto mb-10">
          Whether you are a startup, growing business, or established enterprise,
          Techno Sky Solutions is ready to support your digital journey.
        </p>
        <button className="cta-btn">
          Get Started Today
        </button>
      </section>

      {/* ===== STYLES & ANIMATIONS ===== */}
      <style>{`
        .why-card {
          background: rgba(18, 38, 58, 0.8);
          border-radius: 22px;
          padding: 40px 30px;
          text-align: center;
          backdrop-filter: blur(12px);
          opacity: 0;
          transition: 0.4s;
        }

        .why-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(46,160,255,0.25);
        }

        .icon-wrap {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #2d6cff, #2ea0ff);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          color: #fff;
          font-size: 30px;
        }

        .why-card h3 {
          color: #fff;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .why-card p {
          color: #b7c7e0;
          font-size: 14.5px;
          line-height: 1.7;
        }

        .approach-card {
          background: #101b2f;
          border-radius: 18px;
          padding: 30px 20px;
          text-align: center;
          opacity: 0;
        }

        .approach-card span {
          font-size: 28px;
          font-weight: bold;
          color: #2ea0ff;
        }

        .approach-card h4 {
          color: #fff;
          margin-top: 10px;
          font-size: 15px;
        }

        .cta-btn {
          background: linear-gradient(135deg, #2d6cff, #2ea0ff);
          padding: 16px 36px;
          border-radius: 14px;
          color: #fff;
          font-weight: 600;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: scale(1.08);
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 1s ease forwards;
        }

        .animate-slide-left {
          opacity: 0;
          animation: slideLeft 1.2s ease forwards;
        }

        .animate-slide-right {
          opacity: 0;
          animation: slideRight 1.2s ease forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
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

export default AboutWhyChooseSection;
