import React from "react";

const steps = [
  {
    step: "1",
    title: "Discover the product",
    desc: "Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis",
    active: false,
  },
  {
    step: "2",
    title: "Free Consultations",
    desc: "Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis",
    active: true,
  },
  {
    step: "3",
    title: "Wireframe & Production",
    desc: "Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis",
    active: false,
  },
  {
    step: "4",
    title: "Prototype Application",
    desc: "Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis",
    active: true,
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
  return (
    <section className="bg-gradient-to-b w-full from-[#0b1224] to-[#0a0f1f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            How it works
          </h2>
          <p className="mt-4 text-[#9aa4bf] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
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
                  className={`
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
    </section>
  );
};

export default HowItWorksSection;
