import React from "react";

const HelpCenter = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <h1 className="hero-title">How can we help?</h1>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input placeholder="Search..." />
        </div>
      </section>

      {/* ===== SUPPORT CARDS ===== */}
      <section className="cards-section">
        <div className="card slide-left">
          <div className="card-icon">💬</div>
          <h3>Free Consultation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="card slide-up">
          <div className="card-icon">✉️</div>
          <h3>Ticket Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="card slide-right">
          <div className="card-icon">📄</div>
          <h3>Documentations</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          background: #050b14;
          color: #fff;
        }

        /* HERO */
        .hero {
          min-height: 60vh;
          background: linear-gradient(135deg, #071a2c, #0b2c4a);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          animation: fadeIn 1.5s ease;
        }

        .hero-title {
          font-size: 48px;
          margin-bottom: 30px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #12263a;
          padding: 18px 20px;
          width: 520px;
          border-radius: 10px;
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          width: 100%;
          font-size: 16px;
        }

        /* CARDS */
        .cards-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: -80px auto 100px;
          padding: 0 20px;
        }

        .card {
          background: #0e1f33;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .card:hover {
          transform: translateY(-10px);
          transition: 0.4s;
        }

        .card-icon {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .card h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .card p {
          color: #b7c7e0;
          font-size: 15px;
          line-height: 1.6;
        }

        /* ANIMATIONS */
        .slide-left { animation-delay: 0.2s; transform: translateX(-80px); }
        .slide-up { animation-delay: 0.4s; transform: translateY(80px); }
        .slide-right { animation-delay: 0.6s; transform: translateX(80px); }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translate(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .cards-section {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .search-box {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default HelpCenter;
