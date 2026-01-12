import React from "react";

const CTASection = () => {
    return (
        <section
            className="relative w-full min-h-[420px] flex items-center justify-center text-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://new.creativemox.com/techbiz/wp-content/uploads/sites/12/2025/07/innovative-business-technology-2-1.jpg)",
                    backgroundPosition: 'top'
                }}
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#0b2a6f]/80" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl px-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                    Delivering IT solutions that enable
                    <br />
                    you to work smarter.
                </h2>

                <p className="mt-6 text-[#cfd6ea] text-sm md:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <button
                    className="
            mt-8
            bg-[#2d6cff]
            hover:bg-[#1f5eff]
            px-8
            py-3
            rounded-md
            text-white
            text-sm
            font-semibold
            transition
          "
                >
                    Discover more
                </button>
            </div>
        </section>
    );
};

export default CTASection;
