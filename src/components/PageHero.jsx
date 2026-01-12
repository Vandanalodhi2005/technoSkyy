import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </section>

      {/* ===== COMPONENT SCOPED CSS ===== */}
      <style>{`
        .page-hero {
          position: relative;
          width: 100%;
          min-height: 460px;
          background:
            radial-gradient(circle at top right, #1e5aa8, transparent 45%),
            linear-gradient(135deg, #05070d, #0b1d34);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .page-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='900' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 260 Q200 200 420 260 T900 240' fill='none' stroke='%232d6cff' stroke-width='2' opacity='0.4'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: bottom left;
        }

        .page-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          animation: heroFade 0.8s ease;
        }

        .page-hero-content h1 {
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .page-hero-content p {
          font-size: 18px;
          color: #c7d2e1;
          max-width: 640px;
          margin: 0 auto;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .page-hero {
            min-height: 220px;
          }

          .page-hero-content h1 {
            font-size: 32px;
          }

          .page-hero-content p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default PageHero;
