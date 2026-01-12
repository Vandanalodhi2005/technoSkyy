import React from "react";

const supportServices = [
  {
    title: "24/7 IT Support",
    desc: "Round-the-clock technical support to ensure uninterrupted business operations.",
    icon: "⏱️",
  },
  {
    title: "Managed IT Services",
    desc: "Proactive monitoring, maintenance, and management of your IT infrastructure.",
    icon: "🖥️",
  },
  {
    title: "Network Security",
    desc: "Advanced security solutions to protect your business from cyber threats.",
    icon: "🔐",
  },
  {
    title: "Cloud & Server Management",
    desc: "Secure cloud hosting, server monitoring, and infrastructure optimization.",
    icon: "☁️",
  },
  {
    title: "Data Backup & Recovery",
    desc: "Reliable data protection and disaster recovery solutions for business continuity.",
    icon: "💾",
  },
  {
    title: "IT Consulting & Strategy",
    desc: "Expert IT guidance aligned with your business growth and digital transformation goals.",
    icon: "📊",
  },
];

const ITSupportSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="it-hero">
        <div className="it-hero-content slide-down">
          <span className="it-tag">IT SUPPORT SERVICES</span>
          <h1>IT Support for Business Development</h1>
          <p>
            Empowering businesses with reliable IT support, secure systems, and
            scalable technology solutions that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="it-services">
        <div className="it-grid">
          {supportServices.map((item, index) => (
            <div
              key={index}
              className="it-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="it-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="it-benefits">
        <h2 className="fade-in">Why Choose Our IT Support</h2>
        <div className="benefit-grid">
          {[
            "Reduced Downtime",
            "Improved Security",
            "Scalable IT Solutions",
            "Cost Optimization",
            "Business Continuity",
            "Expert Technical Team",
          ].map((benefit, index) => (
            <div
              key={index}
              className="benefit-card slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span>✔</span>
              <h4>{benefit}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="it-cta fade-in">
        <h2>Reliable IT Support That Grows With Your Business</h2>
        <p>
          Let our IT experts handle your technology while you focus on expanding
          your business.
        </p>
        <button>Request IT Consultation</button>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
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
        .it-hero {
          min-height: 65vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .it-hero-content {
          max-width: 820px;
          opacity: 0;
        }

        .it-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 108, 255, 0.15);
          color: #2d6cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .it-hero h1 {
          font-size: 46px;
          margin-bottom: 16px;
        }

        .it-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* SERVICES */
        .it-services {
          padding: 100px 20px;
        }

        .it-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .it-card {
          background: rgba(18, 38, 58, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 44px 30px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          transition: 0.4s;
        }

        .it-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
        }

        .it-icon {
          font-size: 42px;
          margin-bottom: 16px;
        }

        .it-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .it-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* BENEFITS */
        .it-benefits {
          padding: 80px 20px;
          text-align: center;
        }

        .it-benefits h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }

        .benefit-grid {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .benefit-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 30px 20px;
          opacity: 0;
          animation: slideUp 0.9s ease forwards;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }

        .benefit-card span {
          color: #2d6cff;
          font-size: 22px;
        }

        .benefit-card h4 {
          font-size: 16px;
        }

        /* CTA */
        .it-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .it-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .it-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .it-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 32px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .it-cta button:hover {
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
          .it-grid {
            grid-template-columns: 1fr;
          }

          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .it-hero h1 {
            font-size: 32px;
          }

          .it-benefits h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default ITSupportSection;
