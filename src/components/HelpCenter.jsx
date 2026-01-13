import React from "react";

const HelpCenter = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="help-hero">
        <h1>How can we help you?</h1>
        <p>Search our knowledge base or contact our support team</p>

        <div className="search-wrapper">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search articles, topics or keywords..." />
        </div>
      </section>

      {/* ===== SUPPORT OPTIONS ===== */}
      <section className="help-cards">
        <div className="help-card slide-left">
          <div className="icon-box">
            <i className="fa-solid fa-comments"></i>
          </div>
          <h3>Free Consultation</h3>
          <p>Get expert advice to choose the right digital solution for your business.</p>
        </div>

        <div className="help-card slide-up">
          <div className="icon-box">
            <i className="fa-solid fa-headset"></i>
          </div>
          <h3>Ticket Support</h3>
          <p>Submit a support ticket and our technical team will assist you quickly.</p>
        </div>

        <div className="help-card slide-right">
          <div className="icon-box">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <h3>Documentation</h3>
          <p>Browse detailed guides, FAQs and tutorials for all our services.</p>
        </div>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Inter", "Segoe UI", sans-serif;
        }

        body {
          background: #050b14;
          color: #fff;
        }

        /* HERO */
        .help-hero {
          padding: 90px 20px 140px;
          background: radial-gradient(circle at top, #0c2c4a, #050b14 70%);
          text-align: center;
          animation: fadeIn 1.2s ease;
        }

        .help-hero h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 12px;
        }
          .help-hero {
  padding: 90px 20px 80px; /* reduced */
}
.help-cards {
  margin: 60px auto 60px; /* reduced */
}


        .help-hero p {
          color: #b7c7e0;
          margin-bottom: 35px;
          font-size: 17px;
        }

        .help-hero {
          margin-top: 80px; /* same height as header */
         }


        .search-wrapper {
          max-width: 620px;
          margin: auto;
          background: rgba(18, 38, 58, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .search-wrapper i {
          font-size: 22px;
          color: #4f8cff;
        }

        .search-wrapper input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 16px;
        }

        /* CARDS */
        .help-cards {
          max-width: 1150px;
          margin: 60px auto 120px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .help-card {
          background: linear-gradient(180deg, #0f2238, #0b1a2b);
          border-radius: 22px;
          padding: 45px 35px;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0,0,0,0.45);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .help-card:hover {
          transform: translateY(-14px);
          box-shadow: 0 35px 70px rgba(79,140,255,0.25);
        }

        .icon-box {
          width: 85px;
          height: 85px;
          margin: auto auto 20px;
          border-radius: 18px;
          background: linear-gradient(135deg, #2d6cff, #6aa2ff);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-box i {
          font-size: 36px;
          color: #fff;
        }

        .help-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .help-card p {
          font-size: 15px;
          color: #b7c7e0;
          line-height: 1.7;
        }

        /* ANIMATIONS */
        .slide-left { animation: slideLeft 1s ease forwards; animation-delay: 0.2s; }
        .slide-up { animation: slideUp 1s ease forwards; animation-delay: 0.4s; }
        .slide-right { animation: slideRight 1s ease forwards; animation-delay: 0.6s; }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .help-cards {
            grid-template-columns: 1fr;
            margin-top: 60px;
          }

          .help-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
};

export default HelpCenter;
