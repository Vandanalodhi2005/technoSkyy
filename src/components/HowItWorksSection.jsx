import React, { useEffect, useRef } from "react";

const steps = [
  {
    step: "1",
    title: "Understand Your Business",
    desc: "We analyze your business goals, challenges, and technical requirements to build the right solution.",
    active: false,
    animation: "from-left",
  },
  {
    step: "2",
    title: "Free Consultation",
    desc: "Our experts provide a detailed consultation and roadmap tailored to your business needs.",
    active: true,
    animation: "from-bottom",
  },
  {
    step: "3",
    title: "Design & Development",
    desc: "We design intuitive interfaces and develop scalable, secure, and high-performance solutions.",
    active: false,
    animation: "from-top",
  },
  {
    step: "4",
    title: "Launch & Ongoing Support",
    desc: "We deploy your project and provide continuous monitoring, updates, and expert support.",
    active: true,
    animation: "from-right",
  },
];

const radiusByIndex = (index) => {
  switch (index) {
    case 0:
      return "md:rounded-tl-xl md:rounded-bl-xl md:rounded-br-xl";
    case 1:
      return "md:rounded-tl-xl md:rounded-tr-xl";
    case 2:
      return "md:rounded-bl-xl md:rounded-br-xl";
    case 3:
      return "md:rounded-tr-xl md:rounded-br-xl md:rounded-tl-xl";
    default:
      return "";
  }
};

const HowItWorksSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b w-full from-[#0b1224] to-[#0a0f1f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            How We Work
          </h2>
          <p className="mt-4 text-[#9aa4bf] text-sm leading-relaxed">
            A simple, transparent, and efficient process to deliver reliable
            technology solutions for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-0">

            {steps.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`
                    work-card
                    ${item.animation}
                    w-full md:w-[260px]
                    p-8
                    text-white
                    rounded-xl
                    md:rounded-none
                    ${radiusByIndex(index)}
                    ${
                      item.active
                        ? "bg-gradient-to-b from-[#2d6cff] to-[#1f5eff]"
                        : "bg-[#1b2b3d]"
                    }
                    md:transform
                    ${isEven ? "md:-translate-y-12" : "md:translate-y-12"}
                  `}
                >
                  {/* Step badge */}
                  <div
                    className={`
                      w-9 h-9
                      mb-6
                      rounded-md
                      flex items-center justify-center
                      font-semibold text-sm
                      ${
                        item.active
                          ? "bg-white text-[#2d6cff]"
                          : "bg-[#0b1224] text-[#2ea0ff]"
                      }
                    `}
                  >
                    {item.step}
                  </div>

                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      item.active ? "text-white/90" : "text-[#9aa4bf]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .work-card {
          opacity: 0;
          transition: all 1.2s ease;
        }

        .work-card.animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }

        .from-left {
          transform: translateX(-80px);
        }

        .from-right {
          transform: translateX(80px);
        }

        .from-top {
          transform: translateY(-80px);
        }

        .from-bottom {
          transform: translateY(80px);
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
