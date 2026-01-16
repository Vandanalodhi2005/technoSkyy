import React from "react";
import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Cloud,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailor-made software solutions designed to meet your unique business requirements.",
    icon: <Code2 />,
    img: "/images/software/custom.jpg",
    animation: "left",
  },
  {
    title: "Web Application Development",
    desc: "Scalable, secure, and high-performance web applications using modern technologies.",
    icon: <Globe />,
    img: "/images/software/web.jpg",
    animation: "right",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for Android and iOS platforms.",
    icon: <Smartphone />,
    img: "/images/software/mobile.jpg",
    animation: "bottom",
  },
  {
    title: "Enterprise Solutions",
    desc: "Robust enterprise-grade systems that streamline workflows and improve productivity.",
    icon: <Building2 />,
    img: "/images/software/enterprise.jpg",
    animation: "top",
  },
  {
    title: "Cloud & SaaS Development",
    desc: "Cloud-native and SaaS-based applications built for performance and scalability.",
    icon: <Cloud />,
    img: "/images/software/cloud.jpg",
    animation: "left",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous monitoring, updates, and technical support to keep systems running smoothly.",
    icon: <Wrench />,
    img: "/images/software/support.jpg",
    animation: "right",
  },
];

const SoftwareDevelopmentSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-hero-content">
          <span className="sd-tag">SOFTWARE DEVELOPMENT</span>
          <h1>Building Powerful Software Solutions</h1>
          <p>
            We design, develop, and deploy secure software solutions that help
            businesses innovate, scale, and succeed in the digital era.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sd-services">
        <div className="sd-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className={`sd-card animate-${item.animation}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className="sd-image"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="sd-content">
                <div className="sd-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="sd-process">
        <h2>Our Development Process</h2>
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
              className="process-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span>0{index + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta">
        <h2>Transform Your Ideas Into Software</h2>
        <p>
          Partner with our expert developers to build reliable, scalable, and
          future-ready software solutions.
        </p>
        <button >Start Your Project</button>
      </section>

      {/* STYLES */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Inter", sans-serif;
        }

        body {
          background: #0b0f1a;
          color: #ffffff;
        }

        /* HERO */
        .sd-hero {
          min-height: 70vh;
          background: radial-gradient(circle at top, #1b2a4e, #0b0f1a);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .sd-hero-content {
          max-width: 820px;
          animation: fadeDown 1s ease forwards;
        }

        .sd-tag {
          display: inline-block;
          padding: 8px 22px;
          border-radius: 30px;
          background: rgba(120, 140, 255, 0.15);
          color: #9fb0ff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .sd-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .sd-hero p {
          color: #c7d2e5;
          font-size: 16px;
          line-height: 1.7;
        }

        /* SERVICES */
        .sd-services {
          padding: 110px 20px;
        }

        .sd-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .sd-card {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 22px;
          overflow: hidden;
          backdrop-filter: blur(14px);
          opacity: 0;
          transition: 0.4s ease;
        }

        .sd-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .sd-image {
          height: 190px;
          background-size: cover;
          background-position: center;
          filter: brightness(0.85);
        }

        .sd-content {
          padding: 28px;
        }

        .sd-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(120, 140, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: #9fb0ff;
        }

        .sd-icon svg {
          width: 22px;
          height: 22px;
        }

        .sd-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .sd-card p {
          color: #c7d2e5;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* PROCESS */
        .sd-process {
          padding: 90px 20px;
          text-align: center;
        }

        .sd-process h2 {
          font-size: 36px;
          margin-bottom: 40px;
        }

        .process-grid {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
        }

        .process-card {
          background: linear-gradient(135deg, #12263a, #0b2c4a);
          border-radius: 18px;
          padding: 26px 16px;
          animation: fadeUp 0.9s ease forwards;
          opacity: 0;
        }

        .process-card span {
          font-size: 22px;
          font-weight: bold;
          color: #9fb0ff;
        }

        .process-card h4 {
          margin-top: 10px;
          font-size: 14px;
        }

        /* CTA */
        .sd-cta {
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(180deg, #0f1b33, #0b0f1a);
        }

        .sd-cta h2 {
          font-size: 38px;
          margin-bottom: 14px;
        }

        .sd-cta p {
          max-width: 600px;
          margin: 0 auto 30px;
          color: #c7d2e5;
        }

        .sd-cta button {
          background: linear-gradient(135deg, #6f86ff, #4d63ff);
          border: none;
          padding: 14px 36px;
          border-radius: 14px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .sd-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
        .animate-left {
          animation: slideLeft 0.9s ease forwards;
        }

        .animate-right {
          animation: slideRight 0.9s ease forwards;
        }

        .animate-bottom {
          animation: slideUp 0.9s ease forwards;
        }

        .animate-top {
          animation: slideDown 0.9s ease forwards;
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .sd-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .sd-hero h1 {
            font-size: 32px;
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
