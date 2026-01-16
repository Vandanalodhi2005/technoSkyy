import React from "react";
import {
  FiTrendingUp,
  FiBarChart2,
  FiSearch,
  FiMail,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Improve organic rankings, visibility, and long-term traffic growth.",
    icon: FiSearch,
    animation: "slide-left",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "Run high-converting paid campaigns with optimized ad spend.",
    icon: FiTarget,
    animation: "slide-up",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Social Media Marketing",
    desc: "Strengthen brand presence and engagement across social platforms.",
    icon: FiUsers,
    animation: "slide-right",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
  },
  {
    title: "Content & Email Marketing",
    desc: "Deliver meaningful content and email campaigns that convert.",
    icon: FiMail,
    animation: "slide-left",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  },
  {
    title: "Analytics & Performance Reporting",
    desc: "Measure success with data-driven insights and clear reporting.",
    icon: FiBarChart2,
    animation: "slide-up",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Turn visitors into customers with optimized user journeys.",
    icon: FiTrendingUp,
    animation: "slide-right",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
];

const DigitalMarketingSection = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="dm-hero">
        <div className="dm-hero-content fade-down">
          <span className="dm-tag">DIGITAL MARKETING SERVICES</span>
          <h1>Data-Driven Digital Growth Solutions</h1>
          <p>
            We help businesses increase visibility, attract qualified traffic,
            and convert visitors into loyal customers using proven digital
            marketing strategies.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="dm-services">
        <div className="dm-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className={`dm-card ${item.animation}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={item.image} alt={item.title} />
              <div className="dm-card-content">
                <div className="dm-icon">
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="dm-strategy">
        <h2 className="fade-in">Our Digital Marketing Approach</h2>
        <div className="strategy-grid">
          {[
            "Research & Analysis",
            "Strategic Planning",
            "Campaign Execution",
            "Continuous Optimization",
            "Growth & Scaling",
          ].map((step, index) => (
            <div
              key={index}
              className="strategy-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span>0{index + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="dm-cta fade-in">
        <h2>Ready to Grow Your Digital Presence?</h2>
        <p>
          Partner with Techno Sky Solutions to build scalable digital marketing
          campaigns that deliver measurable and sustainable results.
        </p>
        <button>Request a Free Consultation</button>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`
        body {
          background: #050b14;
          color: #fff;
        }

        /* HERO */
        .dm-hero {
          min-height: 70vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .dm-hero-content {
          max-width: 850px;
          opacity: 0;
        }

        .dm-tag {
          display: inline-block;
          padding: 6px 22px;
          border-radius: 30px;
          background: rgba(46, 160, 255, 0.12);
          color: #2ea0ff;
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .dm-hero h1 {
          font-size: 44px;
          margin-bottom: 14px;
        }

        .dm-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* SERVICES */
        .dm-services {
          padding: 100px 20px;
        }

        .dm-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .dm-card {
          background: rgba(16, 30, 55, 0.85);
          border-radius: 22px;
          overflow: hidden;
          opacity: 0;
          animation: fadeUp 1s ease forwards;
          transition: 0.4s;
        }

        .dm-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 70px rgba(46, 160, 255, 0.18);
        }

        .dm-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .dm-card-content {
          padding: 28px;
          text-align: center;
        }

        .dm-icon {
          width: 46px;
          height: 46px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: rgba(46, 160, 255, 0.15);
          color: #2ea0ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dm-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .dm-card p {
          font-size: 14.5px;
          color: #c6d5ef;
          line-height: 1.7;
        }

        /* STRATEGY */
        .dm-strategy {
          padding: 90px 20px;
          text-align: center;
        }

        .strategy-grid {
          max-width: 1000px;
          margin: 60px auto 0;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .strategy-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 30px 20px;
          opacity: 0;
          animation: slideUp 1s ease forwards;
        }

        .strategy-card span {
          font-size: 24px;
          font-weight: bold;
          color: #2ea0ff;
        }

        /* CTA */
        .dm-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 100px 20px;
          text-align: center;
          opacity: 0;
        }

        .dm-cta button {
          background: linear-gradient(135deg, #2d6cff, #2ea0ff);
          border: none;
          padding: 14px 36px;
          border-radius: 14px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .dm-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
        .fade-down {
          animation: fadeDown 1.2s ease forwards;
        }

        .slide-left {
          animation: slideLeft 1s ease forwards;
        }

        .slide-right {
          animation: slideRight 1s ease forwards;
        }

        .slide-up {
          animation: slideUp 1s ease forwards;
        }

        .fade-in {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-60px); }
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

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .dm-grid {
            grid-template-columns: 1fr;
          }

          .strategy-grid {
            grid-template-columns: 1fr;
          }

          .dm-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingSection;
