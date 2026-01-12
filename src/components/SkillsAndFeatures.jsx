import React from "react";

const SkillsAndFeatures = () => {
  const skills = [
    { name: "DESIGN GRAPHICS & 3D DESIGN", value: 87 },
    { name: "MARKETING", value: 64 },
    { name: "ANIMATIONS", value: 72 },
    { name: "PROGRAMING", value: 91 },
  ];

  const cards = [
    {
      title: "Creative Team",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      color: "#3aa9ff",
      icon: "✱",
      animation: "slide-top",
    },
    {
      title: "Smart Solutions",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      color: "#26c281",
      icon: "💡",
      animation: "slide-right",
    },
    {
      title: "Work smart & Reliable",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      color: "#7a6ff0",
      icon: "🔋",
      animation: "slide-left",
    },
    {
      title: "Focus on target",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      color: "#445b6e",
      icon: "👑",
      animation: "slide-bottom",
    },
  ];

  return (
    <>
      <section className="skills-section">
        <div className="skills-wrapper">
          {/* LEFT CONTENT */}
          <div className="skills-left animate-left">
            <h2>Express everything and feel everything.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CARDS */}
          <div className="skills-right">
            {cards.map((card, i) => (
              <div
                className={`feature-card ${card.animation}`}
                key={i}
                style={{ background: card.color }}
              >
                <span className="icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
      <style>{`
        .skills-section {
          background: radial-gradient(circle at top right, #0b3a77, #04070e);
          padding: 100px 0;
          overflow: hidden;
        }

        .skills-wrapper {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        /* LEFT */
        .skills-left {
          background: #162538;
          padding: 50px;
          border-radius: 25px;
        }

        .skills-left h2 {
          color: #fff;
          font-size: 42px;
          margin-bottom: 20px;
        }

        .skills-left p {
          color: #b7c7e0;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .skill {
          margin-bottom: 25px;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: 14px;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .progress {
          background: #fff;
          height: 16px;
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3aa9ff, #4fc3ff);
          border-radius: 20px;
          animation: grow 1.5s ease;
        }

        @keyframes grow {
          from { width: 0; }
        }

        /* RIGHT */
        .skills-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .feature-card {
          padding: 35px;
          border-radius: 25px;
          color: #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          transition: 0.4s;
        }

        .feature-card .icon {
          font-size: 28px;
          margin-bottom: 15px;
          display: inline-block;
        }

        .feature-card h3 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .feature-card p {
          font-size: 15px;
          line-height: 1.7;
        }

        /* ANIMATIONS */
        .animate-left {
          animation: slideLeft 1.2s ease forwards;
        }

        .slide-top {
          animation: slideTop 1s ease forwards;
        }

        .slide-right {
          animation: slideRight 1s ease forwards;
        }

        .slide-left {
          animation: slideLeftCard 1s ease forwards;
        }

        .slide-bottom {
          animation: slideBottom 1s ease forwards;
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideTop {
          from { opacity: 0; transform: translateY(-80px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideLeftCard {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideBottom {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @media (max-width: 992px) {
          .skills-wrapper {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .skills-left {
            padding: 30px;
          }

          .skills-left h2 {
            font-size: 32px;
          }

          .skills-right {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default SkillsAndFeatures;
