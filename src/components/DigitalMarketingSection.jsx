import React from "react";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your website ranking and visibility on search engines organically.",
    icon: "🔍",
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand awareness and engagement across all major social platforms.",
    icon: "📱",
  },
  {
    title: "Pay Per Click (PPC)",
    desc: "Target the right audience with high-converting paid ad campaigns.",
    icon: "💰",
  },
  {
    title: "Content Marketing",
    desc: "Create impactful content that educates, engages, and converts users.",
    icon: "✍️",
  },
  {
    title: "Email Marketing",
    desc: "Personalized email campaigns to nurture leads and boost retention.",
    icon: "📧",
  },
  {
    title: "Analytics & Reporting",
    desc: "Data-driven insights to measure performance and optimize strategies.",
    icon: "📊",
  },
];

const DigitalMarketingSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="dm-hero">
        <div className="dm-hero-content slide-down">
          <span className="dm-tag">DIGITAL MARKETING</span>
          <h1>Grow Your Business Digitally</h1>
          <p>
            We help brands reach the right audience, generate quality leads,
            and maximize ROI through result-driven digital marketing strategies.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="dm-services">
        <div className="dm-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className="dm-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="dm-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STRATEGY ===== */}
      <section className="dm-strategy">
        <h2 className="fade-in">Our Marketing Strategy</h2>
        <div className="strategy-grid">
          {["Research", "Planning", "Execution", "Optimization", "Growth"].map(
            (step, index) => (
              <div
                key={index}
                className="strategy-card slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span>0{index + 1}</span>
                <h4>{step}</h4>
              </div>
            )
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="dm-cta fade-in">
        <h2>Ready to Scale Your Business?</h2>
        <p>
          Partner with us to create impactful digital campaigns that drive real
          results and long-term growth.
        </p>
        <button>Start Marketing Today</button>
      </section>

      {/* ===== CSS ===== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          background: #050b14;
          color: #fff;
        }

        /* HERO */
        .dm-hero {
          min-height: 65vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .dm-hero-content {
          max-width: 820px;
          opacity: 0;
        }

        .dm-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(30, 144, 255, 0.15);
          color: #1e90ff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .dm-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
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
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .dm-card {
          background: rgba(18, 38, 58, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 44px 30px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          transition: 0.4s;
        }

        .dm-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }

        .dm-icon {
          font-size: 42px;
          margin-bottom: 16px;
        }

        .dm-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .dm-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* STRATEGY */
        .dm-strategy {
          padding: 80px 20px;
          text-align: center;
        }

        .dm-strategy h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }

        .strategy-grid {
          max-width: 900px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .strategy-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 30px 20px;
          opacity: 0;
          animation: slideUp 0.9s ease forwards;
        }

        .strategy-card span {
          font-size: 26px;
          font-weight: bold;
          color: #1e90ff;
        }

        .strategy-card h4 {
          margin-top: 12px;
          font-size: 16px;
        }

        /* CTA */
        .dm-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .dm-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .dm-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .dm-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 32px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .dm-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
        .slide-down {
          animation: slideDown 1s ease forwards;
        }

        .slide-up {
          animation: slideUp 0.9s ease forwards;
        }

        .fade-in {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
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
            font-size: 34px;
          }

          .dm-strategy h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingSection;
