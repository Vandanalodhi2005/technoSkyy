import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full Time",
    desc: "Work with React, modern UI libraries, and animation-driven interfaces.",
  },
  {
    title: "Backend Developer",
    location: "Gurugram",
    type: "Full Time",
    desc: "Build scalable APIs using Node.js, Express & databases.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    desc: "Design modern SaaS interfaces with a focus on usability & motion.",
  },
];

const CareerSection = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="career-hero">
        <div className="hero-content slide-down">
          <span className="tag">CAREERS</span>
          <h1>Build Your Career With Techbiz</h1>
          <p>
            Join a team of innovators, creators, and problem solvers shaping the
            future of digital solutions.
          </p>
        </div>
      </section>

      {/* ===== WHY JOIN US ===== */}
      <section className="why-us">
        <div className="why-grid">
          <div className="why-card slide-left">
            <h3>🚀 Growth & Learning</h3>
            <p>
              Continuous learning, mentorship, and career advancement
              opportunities.
            </p>
          </div>

          <div className="why-card slide-up">
            <h3>💼 Flexible Work</h3>
            <p>
              Remote-friendly culture with flexible schedules and healthy work
              life balance.
            </p>
          </div>

          <div className="why-card slide-right">
            <h3>🌍 Inclusive Culture</h3>
            <p>
              A collaborative, diverse, and respectful environment for
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section className="jobs-section">
        <div className="jobs-header fade-in">
          <h2>Open Positions</h2>
          <p>Find a role that matches your skills and passion.</p>
        </div>

        <div className="jobs-list">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div>
                <h3>{job.title}</h3>
                <p className="job-desc">{job.desc}</p>
                <span className="job-meta">
                  📍 {job.location} • ⏱ {job.type}
                </span>
              </div>
              <button>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CSS ===== */}
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
        .career-hero {
          min-height: 60vh;
          background: radial-gradient(circle at top, #0b1f33, #050b14);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .hero-content {
          max-width: 700px;
          opacity: 0;
        }

        .tag {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(30, 144, 255, 0.15);
          color: #1e90ff;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .career-hero h1 {
          font-size: 46px;
          margin-bottom: 18px;
        }

        .career-hero p {
          color: #b9c9e4;
          font-size: 16px;
          line-height: 1.7;
        }

        /* WHY US */
        .why-us {
          padding: 100px 20px;
        }

        .why-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .why-card {
          background: rgba(18, 38, 58, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          transition: 0.4s;
          opacity: 0;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .why-card h3 {
          margin-bottom: 12px;
          font-size: 20px;
        }

        .why-card p {
          color: #c6d5ef;
          line-height: 1.7;
          font-size: 14.5px;
        }

        /* JOBS */
        .jobs-section {
          padding: 100px 20px 120px;
          background: linear-gradient(180deg, #050b14, #071a2c);
        }

        .jobs-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
        }

        .jobs-header h2 {
          font-size: 38px;
          margin-bottom: 10px;
        }

        .jobs-header p {
          color: #b6c6df;
        }

        .jobs-list {
          max-width: 900px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .job-card {
          background: rgba(18, 38, 58, 0.8);
          border-radius: 18px;
          padding: 28px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        .job-card h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .job-desc {
          font-size: 14px;
          color: #c6d5ef;
          margin-bottom: 8px;
        }

        .job-meta {
          font-size: 13px;
          color: #9fb4d9;
        }

        .job-card button {
          background: linear-gradient(135deg, #356dff, #1e90ff);
          border: none;
          padding: 12px 22px;
          border-radius: 10px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }

        .job-card button:hover {
          transform: scale(1.05);
        }

        /* ANIMATIONS */
        .slide-left {
          animation: slideLeft 1s ease forwards;
        }

        .slide-up {
          animation: slideUp 1s ease forwards;
        }

        .slide-right {
          animation: slideRight 1s ease forwards;
        }

        .slide-down {
          animation: slideDown 1s ease forwards;
        }

        .fade-in {
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr;
          }

          .job-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .career-hero h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
};

export default CareerSection;
