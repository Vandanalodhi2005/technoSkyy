import React from "react";

const StartBusinessSection = () => {
    return (
        <section
            className="
        bg-gradient-to-b
        from-[#05070d]
        via-[#0a0f1f]
        to-[#0b1224]
        py-24
      "
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="text-[#2ea0ff] text-sm font-semibold tracking-widest uppercase">
                            Start your digital business
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
                            We make IT simple,
                            <br />
                            faster, and less
                            <br />
                            expensive.
                        </h2>

                        <p className="text-[#9aa4bf] mt-6 max-w-xl leading-relaxed">
                            Vivamus mollis nisi lectus, vitae sodales ipsum senectus vitae
                            pulvinar rhoncus.
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <button
                                className="
                  bg-[#2d6cff]
                  hover:bg-[#1f5eff]
                  px-6 py-3
                  rounded-md
                  text-white
                  text-sm
                  font-semibold
                  transition
                "
                            >
                                Get Started
                            </button>

                            <button
                                className="
                  border border-white/20
                  px-6 py-3
                  rounded-md
                  text-white
                  text-sm
                  font-semibold
                  hover:border-[#2ea0ff]
                  hover:text-[#2ea0ff]
                  transition
                "
                            >
                                Learn More →
                            </button>
                        </div>
                    </div>

                    {/* Right Dummy Image */}
                    <div className="relative">
                        <div
                            className="
                w-full h-[360px]
                rounded-xl
                bg-gradient-to-br
                from-[#2d6cff]
                via-[#2ea0ff]
                to-[#1f5eff]
                flex items-center justify-center
                shadow-2xl
                shadow-blue-500/30
              "
                        >
                            <span className="text-white text-lg font-semibold opacity-80">
                                Dummy Illustration
                            </span>
                        </div>
                    </div>
                </div>

                {/* CLIENT LOGOS */}
                <div
                    className="
            bg-[#11162a]
            rounded-xl
            mt-20
            px-10
            py-10
          "
                >
                    <h3 className="text-center text-white text-xl font-semibold mb-8">
                        Join our <span className="text-[#2ea0ff]">30,000+</span> happy customers
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center text-[#9aa4bf] text-sm font-semibold">
                        {[
                            "Decyber",
                            "Clicknbuy",
                            "Conztrukta",
                            "Eduversita",
                            "Cleanie",
                            "Ceramiza",
                            "Busima",
                        ].map((brand, i) => (
                            <div
                                key={i}
                                className="
                  flex items-center justify-center
                  h-12
                  bg-[#0b1224]
                  rounded-md
                  hover:text-[#2ea0ff]
                  transition
                "
                            >
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>

                {/* WHAT WE DO */}
                <div className="mt-28 text-center">
                    <span className="text-[#2ea0ff] text-sm font-semibold uppercase tracking-widest">
                        What we do
                    </span>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mt-4">
                        Let us change the way you think
                        <br />
                        about technology.
                    </h3>
                </div>

                {/* SERVICES CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                    {/* Card 1 */}
                    <div className="bg-[#11162a] rounded-xl p-6">
                        <div className="h-44 bg-[#0b1224] rounded-lg mb-6 flex items-center justify-center text-[#9aa4bf]">
                            Dummy Image
                        </div>
                        <h4 className="text-white font-semibold text-lg mb-3">
                            Mobile Application Development
                        </h4>
                        <p className="text-[#9aa4bf] text-sm leading-relaxed">
                            Incubate effective ideas across market driven technology.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#11162a] rounded-xl p-6">
                        <div className="h-44 bg-[#0b1224] rounded-lg mb-6 flex items-center justify-center text-[#9aa4bf]">
                            Dummy Image
                        </div>
                        <h4 className="text-white font-semibold text-lg mb-3">
                            Desktop Application Development & Website
                        </h4>
                        <p className="text-[#9aa4bf] text-sm leading-relaxed">
                            Incubate effective ideas across market driven technology.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#11162a] rounded-xl p-6 relative overflow-hidden">
                        <div
                            className="
                absolute inset-0
                bg-gradient-to-br
                from-[#2d6cff]/20
                to-[#2ea0ff]/10
              "
                        />
                        <div className="relative z-10 h-44 rounded-lg mb-6 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-[#2ea0ff] flex items-center justify-center text-white text-xl">
                                ▶
                            </div>
                        </div>
                        <h4 className="relative z-10 text-white font-semibold text-lg mb-3">
                            Digital Marketing & Branding
                        </h4>
                        <p className="relative z-10 text-[#9aa4bf] text-sm leading-relaxed">
                            Incubate effective ideas across market driven technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartBusinessSection;
