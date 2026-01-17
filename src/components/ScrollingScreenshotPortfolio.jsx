import React from "react";

const ScrollingScreenshotPortfolio = () => {
  return (
    <>
      {/* ===== PORTFOLIO SECTION ===== */}
      <section className="portfolio-section">
        <h1 className="portfolio-title">Our Portfolio</h1>
        <p className="portfolio-subtitle">
          Hover over each project to explore the full website preview
        </p>

        {/* HORIZONTAL SCREENSHOT ROW */}
        <div className="portfolio-row">
          {[1, 2, 3].map((_, index) => (
            <div className="screenshot-frame" key={index}>
              <img
                src="/photo/full-screen.jpeg"
                alt="Website Screenshot"
                className="scrolling-image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== CSS ===== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          background: #05070d;
          color: #ffffff;
        }

        /* SECTION */
        .portfolio-section {
          min-height: 100vh;
          padding: 100px 20px;
          text-align: center;
        }

        .portfolio-title {
          font-size: 46px;
          margin-bottom: 12px;
        }

        .portfolio-subtitle {
          color: #b6c7df;
          max-width: 600px;
          margin: 0 auto 70px;
          font-size: 16px;
        }

        /* HORIZONTAL ROW */
        .portfolio-row {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        /* FRAME */
        .screenshot-frame {
          width: 320px;
          height: 520px;
          overflow: hidden;
          border-radius: 20px;
          background: #000;
          position: relative;
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.4s ease;
        }

        .screenshot-frame:hover {
          transform: translateY(-10px) scale(1.03);
        }

        /* IMAGE */
        .scrolling-image {
          width: 100%;
          height: auto;
          transform: translateY(0);
        }

        /* SCROLL ON HOVER */
        .screenshot-frame:hover .scrolling-image {
          animation: scrollImage 10s linear forwards;
        }

        .screenshot-frame:not(:hover) .scrolling-image {
          animation: none;
          transform: translateY(0);
        }

        /* KEYFRAMES */
        @keyframes scrollImage {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-65%);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .portfolio-row {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 32px;
          }

          .screenshot-frame {
            width: 240px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollingScreenshotPortfolio;
