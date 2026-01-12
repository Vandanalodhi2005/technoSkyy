import React from "react";

const features = [
  {
    title: "Custom Website Design",
    desc: "Pixel-perfect UI designs focused on branding, user experience, and conversion.",
    icon: "🎨",
  },
  {
    title: "Responsive Development",
    desc: "Fully responsive websites that work flawlessly across all devices.",
    icon: "📱",
  },
  {
    title: "Performance Optimization",
    desc: "Fast-loading, SEO-friendly websites optimized for high performance.",
    icon: "⚡",
  },
  {
    title: "CMS & Admin Panels",
    desc: "Easy-to-manage CMS solutions with secure and scalable admin panels.",
    icon: "🧩",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Secure and scalable online stores with seamless checkout experiences.",
    icon: "🛒",
  },
  {
    title: "Ongoing Support",
    desc: "Continuous maintenance, updates, and technical support post-launch.",
    icon: "🛠️",
  },
];

const WebDesignDevelopmentSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="web-hero">
        <div className="web-hero-content slide-down">
          <span className="web-tag">WEB SERVICES</span>
          <h1>Web Designing & Development</h1>
          <p>
            We build visually stunning, high-performance websites that help
            businesses grow and stand out in the digital world.
          </p>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="web-features">
        <div className="web-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className="web-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="web-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="web-process">
        <h2 className="fade-in">Our Development Process</h2>
        <div className="process-grid">
          {["Planning", "Design", "Development", "Testing", "Launch"].map(
            (step, index) => (
              <div
                key={index}
                className="process-card slide-up"
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
      <section className="web-cta fade-in">
        <h2>Let’s Build Your Website</h2>
        <p>
          Transform your ideas into a powerful online presence with our expert
          web development team.
        </p>
        <button>Get Started Today</button>
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
        .web-hero {
          min-height: 65vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .web-hero-content {
          max-width: 800px;
          opacity: 0;
        }

        .web-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 156, 255, 0.15);
          color: #2d9cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .web-hero h1 {
          font-size: 48px;
          margin-bottom: 18px;
        }

        .web-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* FEATURES */
        .web-features {
          padding: 100px 20px;
        }

        .web-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .web-card {
          background: rgba(18, 38, 58, 0.75);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 44px 32px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          transition: 0.4s;
        }

        .web-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }

        .web-icon {
          font-size: 44px;
          margin-bottom: 18px;
        }

        .web-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .web-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* PROCESS */
        .web-process {
          padding: 80px 20px;
          text-align: center;
        }

        .web-process h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }

        .process-grid {
          max-width: 900px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .process-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 30px 20px;
          opacity: 0;
          animation: slideUp 0.9s ease forwards;
        }

        .process-card span {
          font-size: 26px;
          font-weight: bold;
          color: #2d9cff;
        }

        .process-card h4 {
          margin-top: 12px;
          font-size: 16px;
        }

        /* CTA */
        .web-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .web-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .web-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .web-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 32px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .web-cta button:hover {
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
          .web-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .web-hero h1 {
            font-size: 34px;
          }

          .web-process h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default WebDesignDevelopmentSection;
