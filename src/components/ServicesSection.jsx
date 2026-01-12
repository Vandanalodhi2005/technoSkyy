import React from "react";

const services = [
  {
    title: "Website Design & Development",
    desc: "Modern, responsive, and high-performing websites tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Digital Marketing Services",
    desc: "SEO, social media, paid ads, and marketing strategies that drive real growth.",
    icon: "📈",
  },
  {
    title: "Software Development Services",
    desc: "Custom software solutions built for scalability, security, and performance.",
    icon: "💻",
  },
  {
    title: "IT Support for Businesses",
    desc: "Reliable IT infrastructure, monitoring, and support to keep your business running.",
    icon: "🛠️",
  },
  {
    title: "Expert Tech Support",
    desc: "On-demand expert assistance for complex technical challenges and systems.",
    icon: "🎧",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Secure cloud migration, hosting, and infrastructure optimization services.",
    icon: "☁️",
  },
];

const ServicesSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="services-hero">
        <div className="services-hero-content slide-down">
          <span className="services-tag">SERVICES</span>
          <h1>Our Professional IT Services</h1>
          <p>
            We provide end-to-end technology services to help businesses innovate,
            scale, and stay competitive.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="services-cta fade-in">
        <h2>Ready to Grow Your Business?</h2>
        <p>
          Let our experts design the perfect service strategy for your business.
        </p>
        <button>Request a Free Consultation</button>
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
        .services-hero {
          min-height: 60vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .services-hero-content {
          max-width: 760px;
          opacity: 0;
        }

        .services-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 156, 255, 0.15);
          color: #2d9cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .services-hero h1 {
          font-size: 46px;
          margin-bottom: 18px;
        }

        .services-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* SERVICES GRID */
        .services-section {
          padding: 100px 20px;
        }

        .services-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          background: rgba(18, 38, 58, 0.75);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 42px 32px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          transition: 0.4s;
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }

        .service-icon {
          font-size: 44px;
          margin-bottom: 18px;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .service-card p {
          color: #c6d5ef;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* CTA */
        .services-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
          opacity: 0;
        }

        .services-cta h2 {
          font-size: 36px;
          margin-bottom: 14px;
        }

        .services-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.7;
        }

        .services-cta button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 14px 32px;
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .services-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
        .slide-down {
          animation: slideDown 1s ease forwards;
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
          .services-grid {
            grid-template-columns: 1fr;
          }

          .services-hero h1 {
            font-size: 34px;
          }

          .services-cta h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesSection;
