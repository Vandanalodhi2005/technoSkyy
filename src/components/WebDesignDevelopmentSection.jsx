import React from "react";

const services = [
  {
    title: "Responsive Web Design",
    desc: "Websites that adapt perfectly across mobile, tablet, and desktop devices.",
    img: "/photo/responsive-web.jpg",
    animation: "slide-left",
  },
  {
    title: "eCommerce Development",
    desc: "Secure and scalable eCommerce platforms with seamless checkout.",
    img: "/photo/ecommerce.jpg",
    animation: "slide-up",
  },
  {
    title: "CMS Websites",
    desc: "Easy-to-manage CMS solutions using WordPress, Drupal & Joomla.",
    img: "/photo/cms.jpg",
    animation: "slide-right",
  },
  {
    title: "Custom Web Applications",
    desc: "Powerful web applications built to meet complex business needs.",
    img: "/photo/web-app.jpg",
    animation: "slide-left",
  },
  {
    title: "UI / UX Design",
    desc: "User-focused UI/UX designs that improve engagement and conversions.",
    img: "/photo/ui-ux.jpg",
    animation: "slide-up",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous website monitoring, updates, and performance support.",
    img: "/photo/maintenance.jpg",
    animation: "slide-right",
  },
];

const WebsiteDesignDevelopmentSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="wd-hero">
        <div className="wd-hero-content fade-in">
          <span className="wd-tag">WEB SOLUTIONS</span>
          <h1>Website Design & Development</h1>
          <p>
            We create visually appealing, high-performance websites that help
            brands grow, engage users, and drive results.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="wd-services">
        <div className="wd-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className={`wd-card ${item.animation}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="wd-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="wd-tech fade-in">
        <h2>Technologies We Use</h2>
        <div className="tech-grid">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "WordPress",
            "Shopify",
          ].map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wd-cta fade-in">
        <h2>Let’s Build Your Digital Presence</h2>
        <p>
          Partner with us to design and develop a website that reflects your
          brand and drives success.
        </p>
        <button>Start Your Project</button>
      </section>

      {/* STYLES */}
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
        .wd-hero {
          min-height: 70vh;
          background: linear-gradient(135deg, #071a2c, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .wd-hero-content {
          max-width: 820px;
          opacity: 0;
        }

        .wd-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 156, 255, 0.15);
          color: #2d9cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .wd-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .wd-hero p {
          color: #b9c9e4;
          line-height: 1.7;
        }

        /* SERVICES */
        .wd-services {
          padding: 100px 20px;
        }

        .wd-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .wd-card {
          background: rgba(18, 38, 58, 0.9);
          border-radius: 22px;
          overflow: hidden;
          padding-bottom: 26px;
          opacity: 0;
          animation-duration: 0.9s;
          animation-fill-mode: forwards;
          transition: 0.4s;
        }

        .wd-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .wd-img {
          height: 180px;
          overflow: hidden;
        }

        .wd-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .wd-card:hover img {
          transform: scale(1.1);
        }

        .wd-card h3 {
          margin-top: 20px;
          font-size: 20px;
          text-align: center;
        }

        .wd-card p {
          color: #c6d5ef;
          padding: 0 22px;
          text-align: center;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* TECHNOLOGIES */
        .wd-tech {
          padding: 80px 20px;
          text-align: center;
          opacity: 0;
        }

        .wd-tech h2 {
          font-size: 34px;
          margin-bottom: 30px;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        .tech-badge {
          padding: 10px 18px;
          background: rgba(45, 156, 255, 0.15);
          color: #2d9cff;
          border-radius: 20px;
          font-size: 14px;
        }

        /* CTA */
        .wd-cta {
          padding: 90px 20px;
          text-align: center;
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          opacity: 0;
        }

        .wd-cta h2 {
          font-size: 36px;
        }

        .wd-cta p {
          max-width: 620px;
          margin: 16px auto 30px;
          color: #b6c6df;
        }

        .wd-cta button {
          padding: 14px 32px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #356dff, #1e90ff);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .wd-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
        .fade-in {
          animation: fadeIn 1.2s ease forwards;
        }

        .slide-left {
          animation-name: slideLeft;
        }

        .slide-right {
          animation-name: slideRight;
        }

        .slide-up {
          animation-name: slideUp;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .wd-grid {
            grid-template-columns: 1fr;
          }

          .wd-hero h1 {
            font-size: 32px;
          }

          .wd-tech h2,
          .wd-cta h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default WebsiteDesignDevelopmentSection;
