import React from "react";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailor-made software solutions designed to meet your unique business requirements.",
    icon: "🧩",
  },
  {
    title: "Web Application Development",
    desc: "Scalable, secure, and high-performance web applications using modern technologies.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for Android and iOS platforms.",
    icon: "📱",
  },
  {
    title: "Enterprise Solutions",
    desc: "Robust enterprise-grade systems that streamline workflows and improve productivity.",
    icon: "🏢",
  },
  {
    title: "Cloud & SaaS Development",
    desc: "Cloud-native and SaaS-based applications built for performance and scalability.",
    icon: "☁️",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous monitoring, updates, and technical support to keep systems running smoothly.",
    icon: "🛠️",
  },
];

const SoftwareDevelopmentSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="sd-hero">
        <div className="sd-hero-content slide-down">
          <span className="sd-tag">SOFTWARE DEVELOPMENT</span>
          <h1>Building Powerful Software Solutions</h1>
          <p>
            We design, develop, and deploy secure software solutions that help
            businesses innovate, scale, and succeed in the digital era.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="sd-services">
        <div className="sd-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className="sd-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="sd-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="sd-process">
        <h2 className="fade-in">Our Development Process</h2>
        <div className="process-grid">
          {[
            "Requirement Analysis",
            "UI / UX Design",
            "Development",
            "Testing & QA",
            "Deployment",
            "Support",
          ].map((step, index) => (
            <div
              key={index}
              className="process-card slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span>0{index + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="sd-cta fade-in">
        <h2>Transform Your Ideas Into Software</h2>
        <p>
          Partner with our expert developers to build reliable, scalable, and
          future-ready software solutions.
        </p>
        <button>Start Your Project</button>
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
        .sd-hero {
          min-height: 65vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .sd-hero-content {
          max-width: 820px;
          opacity: 0;
        }

        .sd-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 108, 255, 0.15);
          color: #2d6cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .sd-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .sd-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* SERVICES */
        .sd-services {
          padding: 100px 20px;
        }

        .sd-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .sd-card {
          background: rgba(18, 38, 58, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 44px 30px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          transition: 0.4s;
        }

        .sd-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
        }

        .sd-icon {
          font-size: 42px;
          margin-bottom: 16px;
        }

        .sd-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .sd-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* PROCESS */
        .sd-process {
          padding: 80px 20px;
          text-align: center;
        }

        .sd-process h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }

        .process-grid {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .process-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 28px 18px;
          opacity: 0;
          animation: slideUp 0.9s ease forwards;
        }

        .process-card span {
          font-size: 24px;
          font-weight: bold;
          color: #2d6cff;
        }

        .process-card h4 {
          margin-top: 10px;
          font-size: 15px;
        }

        /* CTA */
        .sd-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .sd-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .sd-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .sd-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 32px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .sd-cta button:hover {
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
          .sd-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .sd-hero h1 {
            font-size: 34px;
          }

          .sd-process h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default SoftwareDevelopmentSection;
