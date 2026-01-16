import React from "react";

const services = [
  {
    title: "Managed IT Services",
    desc: "Complete IT management ensuring stability, performance, and security.",
    img: "/photo/managed-it.jpg",
  },
  {
    title: "Network Support & Security",
    desc: "Secure networks with firewall protection and continuous monitoring.",
    img: "/photo/network-security.jpg",
  },
  {
    title: "IT Infrastructure Setup",
    desc: "Scalable IT infrastructure designed for business growth.",
    img: "/photo/it-infrastructure.jpg",
  },
  {
    title: "Remote & On-site Support",
    desc: "Fast technical assistance through remote and on-site services.",
    img: "/photo/remote-support.jpg",
  },
  {
    title: "System Monitoring & Maintenance",
    desc: "Proactive monitoring to minimize downtime and risks.",
    img: "/photo/system-monitoring.jpg",
  },
];

const ITSupportSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="it-hero">
        <div className="it-hero-content">
          <span className="it-tag">IT SUPPORT SERVICES</span>
          <h1>Reliable IT Support for Businesses</h1>
          <p>
            We help businesses stay productive, secure, and scalable with
            reliable IT support and expert technical assistance.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="it-services">
        <div className="it-grid">
          {services.map((item, index) => (
            <div
              className="it-card"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="it-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="it-process">
        <h2>Our IT Support Process</h2>
        <div className="process-grid">
          {[
            "Assessment",
            "Planning",
            "Implementation",
            "Monitoring",
            "Issue Resolution",
            "Continuous Support",
          ].map((step, index) => (
            <div className="process-card" key={index}>
              <span>0{index + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="it-cta">
        <h2>Let Us Handle Your IT</h2>
        <p>
          Focus on growing your business while we manage, secure, and support
          your IT systems.
        </p>
        <button>Get IT Support</button>
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
        .it-hero {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #071a2c, #050b14);
          text-align: center;
          padding: 20px;
        }

        

        .it-hero-content {
          max-width: 800px;
          animation: slideDown 1s ease forwards;
        }

        .it-tag {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 108, 255, 0.15);
          color: #2d6cff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .it-hero h1 {
          font-size: 46px;
          margin-bottom: 14px;
        }

        .it-hero p {
          color: #b9c9e4;
          line-height: 1.7;
        }

        /* SERVICES */
        .it-services {
          padding: 100px 20px;
        }

        .it-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .it-card {
          background: rgba(18, 38, 58, 0.9);
          border-radius: 20px;
          overflow: hidden;
          padding-bottom: 30px;
          text-align: center;
          animation: fadeUp 0.9s ease forwards;
          opacity: 0;
          transition: 0.4s;
        }

        .it-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .it-img {
          height: 180px;
          overflow: hidden;
        }

        .it-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .it-card:hover img {
          transform: scale(1.1);
        }

        .it-card h3 {
          margin-top: 20px;
          font-size: 20px;
        }

        .it-card p {
          color: #c6d5ef;
          padding: 0 20px;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* PROCESS */
        .it-process {
          padding: 80px 20px;
          text-align: center;
        }

        .it-process h2 {
          font-size: 34px;
          margin-bottom: 40px;
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
          border-radius: 16px;
          padding: 26px 18px;
          transition: 0.4s;
        }

        .process-card:hover {
          transform: translateY(-8px);
        }

        .process-card span {
          color: #2d6cff;
          font-size: 22px;
          font-weight: bold;
        }

        /* CTA */
        .it-cta {
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          padding: 90px 20px;
          text-align: center;
        }

        .it-cta h2 {
          font-size: 36px;
        }

        .it-cta p {
          color: #b6c6df;
          max-width: 600px;
          margin: 16px auto 30px;
        }

        .it-cta button {
          padding: 14px 32px;
          border-radius: 12px;
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .it-cta button:hover {
          transform: scale(1.06);
        }

        /* ANIMATIONS */
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

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .it-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .it-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default ITSupportSection;
