import React from "react";

const Portfolio360 = () => {
  return (
    <>
      <section className="portfolio-360">
        {/* IMAGE */}
        <div className="image-wrapper">
          <img src="/photo/full-screen.jpg" alt="360 Portfolio" />
        </div>

        {/* CONTENT */}
        <div className="portfolio-content">
          <span className="tag">OUR PORTFOLIO</span>
          <h1>360° Digital Innovation</h1>
          <p>
            Experience our work through immersive visuals, crafted to deliver
            performance, creativity, and innovation.
          </p>
          <button>Explore Our Work</button>
        </div>
      </section>

      {/* ===== CSS ===== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .portfolio-360 {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: radial-gradient(circle at top, #0a1a2f, #02040a);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* IMAGE CONTAINER */
        .image-wrapper {
          position: absolute;
          width: 85vw;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 22px;
          animation: rotate360 18s linear infinite;
          transition: transform 0.8s ease, box-shadow 0.8s ease;
          box-shadow: 0 40px 90px rgba(0,0,0,0.7);
        }

        /* HOVER EFFECT */
        .image-wrapper:hover img {
          animation-play-state: paused;
          transform: scale(1.08);
          box-shadow: 0 50px 120px rgba(45,156,255,0.5);
        }

        /* DARK OVERLAY */
        .portfolio-360::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.15),
            rgba(0,0,0,0.75)
          );
          z-index: 1;
        }

        /* CONTENT */
        .portfolio-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 820px;
          padding: 20px;
          animation: fadeUp 1.4s ease forwards;
        }

        .tag {
          display: inline-block;
          background: rgba(45,156,255,0.15);
          color: #4da6ff;
          padding: 6px 18px;
          border-radius: 30px;
          font-size: 13px;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .portfolio-content h1 {
          color: white;
          font-size: 52px;
          margin-bottom: 18px;
        }

        .portfolio-content p {
          color: #d0def5;
          line-height: 1.7;
          margin-bottom: 35px;
          font-size: 16px;
        }

        .portfolio-content button {
          background: linear-gradient(135deg, #2d9cff, #1d6cff);
          border: none;
          padding: 15px 42px;
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.4s;
        }

        .portfolio-content button:hover {
          transform: scale(1.1);
          box-shadow: 0 18px 50px rgba(45,156,255,0.6);
        }

        /* ANIMATIONS */
        @keyframes rotate360 {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .image-wrapper {
            width: 92vw;
            height: 70vh;
          }

          .portfolio-content h1 {
            font-size: 34px;
          }

          .portfolio-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio360;
