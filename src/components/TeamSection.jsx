import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

// ===== Team Members Data =====
const teamMembers = [
  {
    name: "Mohammad Shelton",
    role: "Founder",
    image: "/assets/team/team1.jpg",
  },
  {
    name: "Kayden Richards",
    role: "Co-Founder",
    image: "/assets/team/team2.jpg",
  },
  {
    name: "Olivia Rogers",
    role: "Graphics Designer",
    image: "/assets/team/team3.jpg",
  },
  {
    name: "Maisy Holland",
    role: "3D Designer",
    image: "/assets/team/team4.jpg",
  },
];

// ===== Team Section Component =====
const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#05070d] to-[#0b1224] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <div
          className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up"
          style={{ animation: "fadeUp 0.8s forwards" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awesome people behind us.
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* ===== Team Grid ===== */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-[#101b2f] rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(45,108,255,0.25)] opacity-0"
              style={{
                animation: `fadeUp 0.8s forwards`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center relative">
                {/* Social Icons */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  <IconButton icon={<FaFacebookF />} />
                  <IconButton icon={<FaLinkedinIn />} />
                  <IconButton icon={<FaEnvelope />} />
                </div>

                <h4 className="text-lg font-semibold mt-6">{member.name}</h4>
                <p className="text-sm tracking-widest text-[#2d6cff] mt-1 uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Inline CSS Animations ===== */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s forwards;
        }
      `}</style>
    </section>
  );
};

// ===== Icon Button Component =====
const IconButton = ({ icon }) => (
  <span className="w-9 h-9 flex items-center justify-center bg-[#2d6cff] text-white rounded-md hover:bg-[#1f5eff] transition cursor-pointer">
    {icon}
  </span>
);

export default TeamSection;
