import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0f1f33] pt-20 w-full">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
           <Link to="/" className="flex items-center">
                       <img
                         src="/logo/Techno-Sky-Logo.png"
                         alt="Techno Sky Logo"
                         className="logo-img"
                       />
                     </Link>
          </div>

          <p className="text-sm text-[#cfd6ea] leading-relaxed max-w-sm">
            Mollis duis conubia phasellus iaculis hendrerit taciti.
            Ligula morbi velit facilisis imperdiet si suscipit tristique netus cursus.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[
              { icon: FiFacebook, link: "/" },
              { icon: FiTwitter, link: "/" },
              { icon: FiInstagram, link: "/" },
              { icon: FiYoutube, link: "/" },
            ].map(({ icon: Icon, link }, i) => (
              <Link
                key={i}
                to={link}
                className="
                  w-9 h-9 flex items-center justify-center
                  rounded-md
                  bg-[#1a2f4a]
                  text-white
                  hover:bg-[#2ea0ff]
                  transition
                "
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-[#cfd6ea]">
            {[
              "Cyber Security",
              "Database",
              "Cloud Service",
              "Mobile App",
              "Web Design",
              "Online Marketing",
            ].map((item, i) => (
              <li key={i}>
                <Link to="/" className="hover:text-[#2ea0ff] transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-5">Support</h4>
          <ul className="space-y-3 text-sm text-[#cfd6ea]">
            {["Help Center", "Ticket Support", "FAQ", "Contact Us"].map(
              (item, i) => (
                <li key={i}>
                  <Link to="/" className="hover:text-[#2ea0ff] transition">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-[#cfd6ea]">
            {[
              "About Us",
              "Leadership",
              "Careers",
              "Article & News",
              "Legal Notice",
            ].map((item, i) => (
              <li key={i}>
                <Link to="/" className="hover:text-[#2ea0ff] transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-[#cfd6ea]">
          <p>
            © 2026 technoSky. All rights reserved. Powered by MoxCreative.
          </p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <Link to="/" className="hover:text-[#2ea0ff] transition">
              Term of use
            </Link>
            <Link to="/" className="hover:text-[#2ea0ff] transition">
              Cookie Policy
            </Link>
            <Link to="/" className="hover:text-[#2ea0ff] transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
