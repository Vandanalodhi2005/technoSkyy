import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full Time",
    desc: "Build scalable and performance-driven user interfaces using React and modern frontend tools.",
  },
  {
    title: "Backend Developer",
    location: "Gurugram",
    type: "Full Time",
    desc: "Develop secure APIs and backend services using Node.js, Express, and databases.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    desc: "Design intuitive, user-centered interfaces aligned with business goals.",
  },
  {
    title: "Web Development Intern",
    location: "Remote",
    type: "Internship",
    desc: "Work on real-world projects under senior developer guidance.",
  },
];

const CareerSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="career-hero">
        <div className="overlay" />
        <div className="hero-content animate-down">
          <span className="hero-tag">CAREERS</span>
          <h1>Careers at TechnoSky Solutions</h1>
          <p>
            Join a professional IT environment where innovation, responsibility,
            and growth come together.
          </p>
        </div>
      </section>

      {/* WORK CULTURE */}
      <section className="career-section">
        <h2 className="section-title animate-fade">Our Work Culture</h2>

        <div className="culture-grid">
          <div className="glass-card animate-left">
            <h3>Professional Work Environment</h3>
            <p>
              Structured processes, transparent communication, and accountability
              define how we work.
            </p>
          </div>

          <div className="glass-card animate-up">
            <h3>Learning & Growth</h3>
            <p>
              Continuous skill development through real projects and mentorship.
            </p>
          </div>

          <div className="glass-card animate-right">
            <h3>Flexible Work Model</h3>
            <p>
              Remote-friendly culture with a strong focus on work-life balance.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="career-section bg-dark">
        <h2 className="section-title animate-fade">Benefits & Perks</h2>

        <ul className="benefits-list">
          <li>Remote & Hybrid Work Options</li>
          <li>Flexible Working Hours</li>
          <li>Paid Internship Programs</li>
          <li>Skill Enhancement Support</li>
          <li>Ethical & Transparent Workplace</li>
        </ul>
      </section>

      {/* OPEN POSITIONS */}
      <section className="career-section">
        <div className="jobs-header animate-fade">
          <h2>Open Positions</h2>
          <p>Explore opportunities that match your expertise.</p>
        </div>

        <div className="jobs-wrapper">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job-card animate-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div>
                <h3>{job.title}</h3>
                <p>{job.desc}</p>
                <span>{job.location} • {job.type}</span>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Inter", sans-serif;
        }

        body {
          background: #050b14;
          color: #ffffff;
        }

        /* HERO */
        .career-hero {
          position: relative;
          min-height: 70vh;
          background: url("/photo/career-bg.jpg") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(5,11,20,0.9),
            rgba(5,11,20,0.95)
          );
        }

        .hero-content {
          position: relative;
          max-width: 760px;
          padding: 0 20px;
          opacity: 0;
        }

        .hero-tag {
          font-size: 12px;
          letter-spacing: 2px;
          color: #93c5fd;
          margin-bottom: 16px;
          display: inline-block;
        }

        .career-hero h1 {
          font-size: 46px;
          margin-bottom: 16px;
        }

        .career-hero p {
          color: #c7d2fe;
          line-height: 1.7;
        }

        /* SECTIONS */
        .career-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .bg-dark {
          background: linear-gradient(180deg, #071a2c, #050b14);
          border-radius: 30px;
        }

        .section-title {
          text-align: center;
          font-size: 34px;
          margin-bottom: 60px;
          opacity: 0;
        }

        /* GLASS CARDS */
        .culture-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .glass-card {
          background: rgba(18, 38, 58, 0.65);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 36px;
          border-radius: 18px;
          opacity: 0;
        }

        .glass-card h3 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .glass-card p {
          color: #cbd5f5;
          line-height: 1.6;
        }

        /* BENEFITS */
        .benefits-list {
          max-width: 700px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
          color: #cbd5f5;
        }

        /* JOBS */
        .jobs-header {
          text-align: center;
          margin-bottom: 50px;
          opacity: 0;
        }

        .jobs-wrapper {
          max-width: 900px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .job-card {
          background: rgba(18, 38, 58, 0.75);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 28px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
        }

        .job-card h3 {
          margin-bottom: 6px;
          font-size: 18px;
        }

        .job-card p {
          font-size: 14px;
          color: #cbd5f5;
          margin-bottom: 6px;
        }

        .job-card span {
          font-size: 13px;
          color: #9fb4d9;
        }

        .apply-btn {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        .apply-btn:hover {
          background: #3b82f6;
          color: #fff;
        }

        /* ANIMATIONS */
        .animate-up { animation: slideUp 1s ease forwards; }
        .animate-left { animation: slideLeft 1s ease forwards; }
        .animate-right { animation: slideRight 1s ease forwards; }
        .animate-down { animation: slideDown 1s ease forwards; }
        .animate-fade { animation: fadeIn 1.2s ease forwards; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .culture-grid {
            grid-template-columns: 1fr;
          }

          .job-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
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
