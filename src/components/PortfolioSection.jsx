import React from "react";

const portfolio = [
  {
    category: "DIGITAL BRANDING",
    title: "Loka Perfume & Co",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    category: "WEBSITE",
    title: "Furneta Store",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },
  {
    category: "WEBSITE",
    title: "Jacko Classical Textile",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  {
    category: "DIGITAL MARKETING",
    title: "Ludwig Smartwatch",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    category: "DIGITAL BRANDING",
    title: "Zeus Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    category: "GRAPHICS DESIGN",
    title: "Monica Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gradient-to-b w-full from-[#0b1224] to-[#0a0f1f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between mb-20">
          <div className="max-w-xl">
            <span className="text-[#2ea0ff] text-xs font-semibold uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="mt-4 text-white text-3xl lg:text-4xl font-bold">
              Innovation is the core of everything we do.
            </h2>
          </div>

          <div className="max-w-md mt-6 lg:mt-0">
            <p className="text-[#9aa4bf] text-sm leading-relaxed">
              Sociisque senectus facilisis fermentum aliquam velit sapien.
              Dictum conubia eget curae massa nunc.
            </p>
            <button className="mt-4 bg-[#2d6cff] px-6 py-3 text-sm text-white rounded-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

            {portfolio.map((item, index) => {
              const column = index % 3;

              const offset =
                column === 0
                  ? "-translate-y-12"
                  : column === 1
                  ? "translate-y-12"
                  : "-translate-y-12";

              return (
                <div key={index} className={`transform ${offset}`}>
                  <div className="group w-full h-[420px] rounded-2xl overflow-hidden relative bg-[#1b2b3d]">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute inset-0
                        bg-black/40
                        transition-all duration-500 ease-out
                        group-hover:bg-black/60
                      "
                    />

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-full justify-start">
                      <div>
                        <span className="text-[#2ea0ff] text-xs font-semibold">
                          {item.category}
                        </span>
                        <h3 className="mt-2 text-white font-semibold text-lg">
                          {item.title}
                        </h3>
                      </div>

                      <button className="bg-[#2d6cff] w-fit mt-4 px-4 py-2 text-xs text-white rounded-md">
                        View detail
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
