import React, { useState } from "react";

const faqData = [
  {
    question: "Sem dolor ac facilisi semper efficitur nascetur vulputate?",
    answer:
      "Tristique nisl conubia elementum tempor erat montes. Odio sapien adipiscing ex lacinia taciti quisque. Odio ultrices nullam vulputate primis semper quisque rhoncus.",
  },
  {
    question: "Parturient sit risus letius vel scelerisque metus venenatis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    question: "Aenean letius quam euismod felis volutpat ligula?",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
  },
  {
    question: "Per nisl sem dui feugiat mattis magna?",
    answer:
      "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
  {
    question: "Vitae iaculis fames ante nam lorem ornare?",
    answer:
      "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="faq-section">
        <div className="faq-container">
          {/* LEFT CONTENT */}
          <div className="faq-left slide-left">
            <span className="faq-tag">FAQ</span>
            <h2>
              Frequently Ask <br /> Questions.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="faq-right slide-right">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="faq-question"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="icon">
                    {activeIndex === index ? "⌃" : "⌄"}
                  </span>
                </div>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
      <style>{`
/* SECTION */
.faq-section {
  background: radial-gradient(circle at top, #0b1f33, #050b14);
  padding: 120px 0;
  color: #fff;
}

/* CONTAINER */
.faq-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
  align-items: center;
}

/* LEFT CONTENT */
.faq-tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(30, 144, 255, 0.15);
  color: #1e90ff;
  font-size: 13px;
  letter-spacing: 1.5px;
  margin-bottom: 18px;
}

.faq-left h2 {
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 22px;
  line-height: 1.2;
}

.faq-left p {
  color: #b9c9e4;
  max-width: 440px;
  line-height: 1.8;
  font-size: 15px;
}

/* RIGHT ACCORDION */
.faq-item {
  background: rgba(18, 38, 58, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  margin-bottom: 22px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.faq-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.4);
}

.faq-item.active {
  background: linear-gradient(135deg, #2c6cff, #1e90ff);
  box-shadow: 0 20px 50px rgba(30, 144, 255, 0.4);
}

/* QUESTION */
.faq-question {
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.3px;
}

.faq-question span:first-child {
  max-width: 85%;
}

/* ICON */
.faq-question .icon {
  font-size: 18px;
  transition: transform 0.4s ease;
}

.faq-item.active .icon {
  transform: rotate(180deg);
}

/* ANSWER */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  background: rgba(10, 25, 40, 0.85);
  transition: max-height 0.6s ease, padding 0.6s ease;
}

.faq-item.active .faq-answer {
  max-height: 220px;
  padding: 22px 28px;
}

.faq-answer p {
  color: #e2ebff;
  line-height: 1.8;
  font-size: 14.5px;
}

/* ANIMATIONS */
.slide-left {
  opacity: 0;
  transform: translateX(-80px);
  animation: slideLeft 1s ease forwards;
}

.slide-right {
  opacity: 0;
  transform: translateX(80px);
  animation: slideRight 1s ease forwards;
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .faq-left {
    text-align: center;
  }

  .faq-left p {
    margin: auto;
  }

  .faq-left h2 {
    font-size: 36px;
  }
}
`}</style>

    </>
  );
};

export default FAQSection;
