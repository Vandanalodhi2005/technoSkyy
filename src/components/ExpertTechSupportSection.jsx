import React from "react";

const expertServices = [
  {
    title: "Troubleshooting & Helpdesk",
    desc: "Quick issue resolution through professional helpdesk and expert troubleshooting.",
    img: "/photo/helpdesk.jpg",
    animation: "from-left",
  },
  {
    title: "Software Support",
    desc: "Installation, configuration, updates, and issue resolution for all major software.",
    img: "/photo/software-support.jpg",
    animation: "from-bottom",
  },
  {
    title: "Hardware Assistance",
    desc: "Diagnosis, repair guidance, and performance optimization for hardware systems.",
    img: "/photo/hardware.jpg",
    animation: "from-right",
  },
  {
    title: "24×7 Support Plan",
    desc: "Always-on technical assistance ensuring zero downtime for critical systems.",
    img: "/photo/24x7.jpg",
    animation: "from-top",
  },
  {
    title: "Premium Support",
    desc: "Priority response, faster resolution, and dedicated expert engineers.",
    img: "/photo/premium.jpg",
    animation: "from-left",
  },
  {
    title: "Corporate Support",
    desc: "Enterprise-level IT support customized for large-scale business operations.",
    img: "/photo/corporate.jpg",
    animation: "from-right",
  },
];

const ExpertTechSupportSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="ets-hero">
        <div className="ets-hero-content fade-in">
          <span className="ets-tag">EXPERT TECH SUPPORT</span>
          <h1>Reliable Technical Support for Modern Businesses</h1>
          <p>
            From troubleshooting to enterprise-grade support plans, our experts
            ensure your systems remain secure, fast, and operational 24×7.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ets-services">
        <div className="ets-grid">
          {expertServices.map((item, index) => (
            <div
              key={index}
              className={`ets-card ${item.animation}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="ets-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ets-cta fade-in">
        <h2>Need Immediate Technical Assistance?</h2>
        <p>
          Our certified experts are available round-the-clock to solve critical
          issues and keep your business running smoothly.
        </p>
        <button>Get Expert Support</button>
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
        .ets-hero {
          min-height: 70vh;
          background: linear-gradient(135deg, #071a2c, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .ets-hero-content {
          max-width: 820px;
          opacity: 0;
        }

        .ets-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 108, 255, 0.15);
          color: #2d6cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .ets-hero h1 {
          font-size: 46px;
          margin-bottom: 16px;
        }

        .ets-hero p {
          color: #b9c9e4;
          line-height: 1.7;
        }

        /* SERVICES */
        .ets-services {
          padding: 100px 20px;
        }

        .ets-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .ets-card {
          background: rgba(18, 38, 58, 0.9);
          border-radius: 22px;
          overflow: hidden;
          padding-bottom: 26px;
          opacity: 0;
          animation-duration: 0.9s;
          animation-fill-mode: forwards;
          transition: 0.4s;
        }

        .ets-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55);
        }

        .ets-img {
          height: 180px;
          overflow: hidden;
        }

        .ets-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .ets-card:hover img {
          transform: scale(1.1);
        }

        .ets-card h3 {
          margin-top: 20px;
          font-size: 20px;
          text-align: center;
        }

        .ets-card p {
          color: #c6d5ef;
          padding: 0 22px;
          text-align: center;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* CTA */
        .ets-cta {
          padding: 90px 20px;
          text-align: center;
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          opacity: 0;
        }

        .ets-cta h2 {
          font-size: 36px;
        }

        .ets-cta p {
          max-width: 600px;
          margin: 16px auto 30px;
          color: #b6c6df;
        }

        .ets-cta button {
          padding: 14px 34px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #356dff, #1e90ff);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .ets-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
        .fade-in {
          animation: fadeIn 1.2s ease forwards;
        }

        .from-left {
          animation-name: fromLeft;
        }

        .from-right {
          animation-name: fromRight;
        }

        .from-bottom {
          animation-name: fromBottom;
        }

        .from-top {
          animation-name: fromTop;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes fromLeft {
          from {
            opacity: 0;
            transform: translateX(-70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fromRight {
          from {
            opacity: 0;
            transform: translateX(70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fromBottom {
          from {
            opacity: 0;
            transform: translateY(70px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fromTop {
          from {
            opacity: 0;
            transform: translateY(-70px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .ets-grid {
            grid-template-columns: 1fr;
          }

          .ets-hero h1 {
            font-size: 32px;
          }

          .ets-cta h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default ExpertTechSupportSection;
