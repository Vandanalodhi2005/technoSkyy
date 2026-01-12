import React from "react";

const expertServices = [
  {
    title: "Certified Technical Experts",
    desc: "Our certified professionals resolve complex technical issues with speed and precision.",
    icon: "👨‍💻",
  },
  {
    title: "24/7 Priority Support",
    desc: "Round-the-clock expert assistance to keep your systems running without interruptions.",
    icon: "⚡",
  },
  {
    title: "Advanced Troubleshooting",
    desc: "Deep diagnostic analysis to identify and fix root causes, not just symptoms.",
    icon: "🛠️",
  },
  {
    title: "Remote & On-Site Support",
    desc: "Flexible support models including secure remote access and on-site assistance.",
    icon: "🌐",
  },
  {
    title: "System Optimization",
    desc: "Performance tuning and system optimization to improve productivity and efficiency.",
    icon: "📈",
  },
  {
    title: "Proactive Monitoring",
    desc: "Continuous monitoring to prevent issues before they impact your business.",
    icon: "🔍",
  },
];

const ExpertTechSupportSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="expert-hero">
        <div className="expert-hero-content slide-down">
          <span className="expert-tag">EXPERT TECH SUPPORT</span>
          <h1>Expert Technical Support You Can Trust</h1>
          <p>
            Get fast, reliable, and expert-level technical support designed to
            keep your business systems secure, optimized, and always available.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="expert-services">
        <div className="expert-grid">
          {expertServices.map((item, index) => (
            <div
              key={index}
              className="expert-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="expert-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SUPPORT PROCESS ===== */}
      <section className="expert-process">
        <h2 className="fade-in">How Our Expert Support Works</h2>
        <div className="process-grid">
          {[
            "Issue Identification",
            "Expert Analysis",
            "Quick Resolution",
            "System Optimization",
            "Ongoing Monitoring",
          ].map((step, index) => (
            <div
              key={index}
              className="process-card slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span>{index + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="expert-cta fade-in">
        <h2>Need Immediate Expert Assistance?</h2>
        <p>
          Our tech specialists are ready to help you solve critical issues and
          keep your business running smoothly.
        </p>
        <button>Get Expert Support Now</button>
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
        .expert-hero {
          min-height: 65vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .expert-hero-content {
          max-width: 820px;
          opacity: 0;
        }

        .expert-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 108, 255, 0.15);
          color: #2d6cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .expert-hero h1 {
          font-size: 46px;
          margin-bottom: 16px;
        }

        .expert-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* SERVICES */
        .expert-services {
          padding: 100px 20px;
        }

        .expert-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .expert-card {
          background: rgba(18, 38, 58, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 44px 30px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          transition: 0.4s;
        }

        .expert-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
        }

        .expert-icon {
          font-size: 42px;
          margin-bottom: 16px;
        }

        .expert-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .expert-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* PROCESS */
        .expert-process {
          padding: 80px 20px;
          text-align: center;
        }

        .expert-process h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }

        .process-grid {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .process-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 28px 20px;
          opacity: 0;
          animation: slideUp 0.9s ease forwards;
        }

        .process-card span {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          background: #2d6cff;
          border-radius: 50%;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .process-card h4 {
          font-size: 15px;
        }

        /* CTA */
        .expert-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .expert-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .expert-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .expert-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 34px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .expert-cta button:hover {
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
          .expert-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .expert-hero h1 {
            font-size: 32px;
          }

          .expert-process h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default ExpertTechSupportSection;
