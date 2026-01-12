import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "HATTIE VANCE",
    role: "Store Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Mi suscipit magna facilisis class placerat. Hendrerit maecenas leo consectetuer neque nascetur.",
  },
  {
    name: "DANIEL WALKER",
    role: "Founder Makko",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Mi suscipit magna facilisis class placerat. Hendrerit maecenas leo consectetuer neque nascetur.",
  },
  {
    name: "BROOKE HAWKINS",
    role: "Business Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "Mi suscipit magna facilisis class placerat. Hendrerit maecenas leo consectetuer neque nascetur.",
  },
  {
    name: "JAMES MILLER",
    role: "CEO Startup",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text:
      "Mi suscipit magna facilisis class placerat. Hendrerit maecenas leo consectetuer neque nascetur.",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  /* 🔥 Detect screen size */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 🔥 Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const translatePercent = 100 / itemsPerView;

  return (
    <section className="bg-gradient-to-b w-full from-[#1b2b3d] to-[#152233] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <span className="text-[#2ea0ff] text-xs font-semibold tracking-[0.3em] uppercase">
          Testimonial
        </span>

        <h2 className="mt-4 text-white text-3xl lg:text-4xl font-bold">
          What they say about us
        </h2>

        <p className="mt-4 text-[#9aa4bf] max-w-2xl mx-auto text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="w-10 h-[2px] bg-[#2ea0ff] mx-auto mt-6" />

        {/* Slider */}
        <div className="relative mt-20 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * translatePercent}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="px-4 flex justify-center"
                style={{ minWidth: `${translatePercent}%` }}
              >
                <div className="bg-[#4a627c] rounded-xl p-8 text-white max-w-md w-full">
                  <div className="flex justify-center -mt-6 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full border-4 border-[#1b2b3d]"
                    />
                  </div>

                  <p className="text-sm leading-relaxed opacity-90">
                    “{item.text}”
                  </p>

                  <h4 className="mt-6 text-[#2ea0ff] font-semibold tracking-wide">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#cfd6ea]">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-[#2ea0ff]" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
