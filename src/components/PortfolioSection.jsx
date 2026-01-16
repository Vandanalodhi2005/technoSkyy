// import React from "react";

// const portfolio = [
//   {
//     category: "DIGITAL BRANDING",
//     title: "Loka Perfume & Co",
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
//   },
//   {
//     category: "WEBSITE",
//     title: "Furneta Store",
//     image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
//   },
//   {
//     category: "WEBSITE",
//     title: "Jacko Classical Textile",
//     image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
//   },
//   {
//     category: "DIGITAL MARKETING",
//     title: "Ludwig Smartwatch",
//     image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
//   },
//   {
//     category: "DIGITAL BRANDING",
//     title: "Zeus Smartwatch",
//     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//   },
//   {
//     category: "GRAPHICS DESIGN",
//     title: "Monica Coffee",
//     image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//   },
// ];

// const PortfolioSection = () => {
//   return (
//     <section className="bg-gradient-to-b w-full from-[#0b1224] to-[#0a0f1f] py-28">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="flex flex-col lg:flex-row justify-between mb-20">
//           <div className="max-w-xl">
//             <span className="text-[#2ea0ff] text-xs font-semibold uppercase tracking-widest">
//               Portfolio
//             </span>
//             <h2 className="mt-4 text-white text-3xl lg:text-4xl font-bold">
//               Innovation is the core of everything we do.
//             </h2>
//           </div>

//           <div className="max-w-md mt-6 lg:mt-0">
//             <p className="text-[#9aa4bf] text-sm leading-relaxed">
//               Sociisque senectus facilisis fermentum aliquam velit sapien.
//               Dictum conubia eget curae massa nunc.
//             </p>
//             <button className="mt-4 bg-[#2d6cff] px-6 py-3 text-sm text-white rounded-md">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

//             {portfolio.map((item, index) => {
//               const column = index % 3;

//               const offset =
//                 column === 0
//                   ? "-translate-y-12"
//                   : column === 1
//                   ? "translate-y-12"
//                   : "-translate-y-12";

//               return (
//                 <div key={index} className={`transform ${offset}`}>
//                   <div className="group w-full h-[420px] rounded-2xl overflow-hidden relative bg-[#1b2b3d]">

//                     {/* Image */}
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="
//                         absolute inset-0
//                         w-full h-full
//                         object-cover
//                         transition-transform duration-500 ease-out
//                         group-hover:scale-110
//                       "
//                     />

//                     {/* Overlay */}
//                     <div
//                       className="
//                         absolute inset-0
//                         bg-black/40
//                         transition-all duration-500 ease-out
//                         group-hover:bg-black/60
//                       "
//                     />

//                     {/* Content */}
//                     <div className="relative z-10 p-6 flex flex-col h-full justify-start">
//                       <div>
//                         <span className="text-[#2ea0ff] text-xs font-semibold">
//                           {item.category}
//                         </span>
//                         <h3 className="mt-2 text-white font-semibold text-lg">
//                           {item.title}
//                         </h3>
//                       </div>

//                       <button className="bg-[#2d6cff] w-fit mt-4 px-4 py-2 text-xs text-white rounded-md">
//                         View detail
//                       </button>
//                     </div>

//                   </div>
//                 </div>
//               );
//             })}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;





import React from "react";

const PortfolioSection = () => {
  return (
    <>
      <section className="portfolio-wrapper">
        {/* IMAGE */}
        <div className="portfolio-image">
          <img src="/photo/full-screen.jpg" alt="Company Portfolio" />
        </div>

        {/* OVERLAY CONTENT */}
        <div className="portfolio-overlay">
          <span className="portfolio-tag">OUR WORK</span>
          <h1>Crafting Digital Experiences</h1>
          <p>
            We build high-impact websites, scalable software, and digital
            solutions that help brands grow globally.
          </p>

          <button className="portfolio-btn">View More Projects</button>
        </div>
      </section>

      {/* ===== STYLES ===== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .portfolio-wrapper {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        /* IMAGE */
        .portfolio-image {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: transform 1.2s ease;
        }

        /* ZOOM EFFECT */
        .portfolio-wrapper:hover img {
          transform: scale(1.15);
        }

        /* DARK GRADIENT OVERLAY */
        .portfolio-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.8)
          );
          z-index: 1;
        }

        /* CONTENT */
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 20px;
          animation: fadeUp 1.4s ease forwards;
        }

        .portfolio-tag {
          letter-spacing: 3px;
          font-size: 13px;
          padding: 6px 18px;
          border-radius: 20px;
          background: rgba(45, 156, 255, 0.2);
          color: #4da6ff;
          margin-bottom: 20px;
          animation: slideDown 1s ease forwards;
        }

        .portfolio-overlay h1 {
          font-size: 56px;
          max-width: 900px;
          margin-bottom: 18px;
          animation: slideUp 1.2s ease forwards;
        }

        .portfolio-overlay p {
          max-width: 650px;
          font-size: 16px;
          line-height: 1.7;
          color: #dbe7ff;
          margin-bottom: 40px;
          animation: fadeIn 1.5s ease forwards;
        }

        /* BUTTON */
        .portfolio-btn {
          background: linear-gradient(135deg, #2d9cff, #1d6cff);
          border: none;
          padding: 14px 38px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          transition: 0.4s;
        }

        .portfolio-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 40px rgba(45, 156, 255, 0.6);
        }

        /* ANIMATIONS */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .portfolio-overlay h1 {
            font-size: 36px;
          }

          .portfolio-overlay p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioSection;
