import React from "react";

const solutions = [
  {
    title: "SMB Solutions",
    desc: "Scalable IT and digital solutions tailored for small and medium businesses.",
    icon: "🏢",
    direction: "left",
  },
  {
    title: "E-Commerce Solutions",
    desc: "High-performance online stores with secure payments and growth tools.",
    icon: "🛒",
    direction: "right",
  },
  {
    title: "Healthcare Solutions",
    desc: "Secure, compliant, and efficient digital systems for healthcare providers.",
    icon: "🩺",
    direction: "left",
  },
  {
    title: "Education Solutions",
    desc: "E-learning platforms, portals, and digital classrooms for institutions.",
    icon: "🎓",
    direction: "right",
  },
  {
    title: "FinTech Solutions",
    desc: "Robust fintech platforms with security, speed, and scalability.",
    icon: "💳",
    direction: "left",
  },
  {
    title: "Startup Solutions",
    desc: "End-to-end tech solutions to help startups launch and scale faster.",
    icon: "🚀",
    direction: "right",
  },
];

const SolutionSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="solution-hero">
        <div className="solution-hero-content slide-down">
          <span className="solution-tag">SOLUTIONS</span>
          <h1>Solutions Designed for Every Industry</h1>
          <p>
            We deliver customized technology solutions that help businesses
            innovate, grow, and succeed in the digital world.
          </p>
        </div>
      </section>

      {/* ===== SOLUTIONS GRID ===== */}
      <section className="solutions-section">
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`solution-card slide-${item.direction}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="solution-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="solution-cta fade-in">
        <h2>Need a Custom Solution?</h2>
        <p>
          Our experts are ready to analyze your needs and build the perfect
          solution for your business.
        </p>
        <button>Talk to Our Experts</button>
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
        .solution-hero {
          min-height: 60vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .solution-hero-content {
          max-width: 760px;
          opacity: 0;
        }

        .solution-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 156, 255, 0.15);
          color: #2d9cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .solution-hero h1 {
          font-size: 46px;
          margin-bottom: 18px;
        }

        .solution-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* GRID */
        .solutions-section {
          padding: 100px 20px;
        }

        .solutions-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .solution-card {
          background: rgba(18, 38, 58, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 22px;
          padding: 40px 32px;
          text-align: center;
          opacity: 0;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          animation: fadeUp 1.1s ease forwards;
        }

        .solution-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(45, 156, 255, 0.25);
        }

        /* ICON STYLE */
        .solution-icon {
          font-size: 44px;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #2d9cff, #6fb7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .solution-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .solution-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* CTA */
        .solution-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .solution-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .solution-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
        }

        .solution-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 30px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .solution-cta button:hover {
          transform: scale(1.05);
        }

        /* ANIMATIONS */
        .slide-down {
          animation: slideDown 1.2s ease forwards;
        }

        .fade-in {
          animation: fadeIn 1.3s ease forwards;
        }

        .slide-left {
          animation: slideLeft 1.2s ease forwards;
        }

        .slide-right {
          animation: slideRight 1.2s ease forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
          .solutions-grid {
            grid-template-columns: 1fr;
          }

          .solution-hero h1 {
            font-size: 34px;
          }

          .solution-cta h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default SolutionSection;
