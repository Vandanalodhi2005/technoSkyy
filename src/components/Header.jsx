import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = ({ bgTransparent = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg =
    bgTransparent && !scrolled
      ? "bg-transparent"
      : "bg-gradient-to-r from-[#05070d] via-[#0a0f1f] to-[#0b1224] backdrop-blur";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo/Techno-Sky-Logo.png"
              alt="Techno Sky Logo"
              className="logo-img"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12 text-[15px] font-medium">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>

            {/* SERVICES */}
            <div className="relative group">
              <NavLink to="/services" className="nav-link flex items-center gap-1">
                Services <FiChevronDown size={16} />
              </NavLink>

              <div className="dropdown">
                <NavLink to="/services/web-design-development" className="dropdown-item">
                  Website Design & Development
                </NavLink>
                <NavLink to="/services/digital-marketing" className="dropdown-item">
                  Digital Marketing Services
                </NavLink>
                <NavLink to="/services/software-development" className="dropdown-item">
                  Software Development Services
                </NavLink>
                <NavLink to="/services/it-support" className="dropdown-item">
                  IT Support for Businesses
                </NavLink>
                <NavLink to="/services/expert-tech-support" className="dropdown-item">
                  Expert Tech Support
                </NavLink>
              </div>
            </div>

            <NavLink to="/solutions" className="nav-link">Solutions</NavLink>
            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/careers" className="nav-link">Careers</NavLink>
          </nav>

          {/* CTA */}
          <Link to="/inquire" className="cta-btn hidden md:inline-block">
            Inquire
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0b1224] px-6 py-6 space-y-4">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/solutions", label: "Solutions" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/blog", label: "Blog" },
              { path: "/careers", label: "Careers" },
            ].map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className="mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/inquire"
              onClick={() => setMobileOpen(false)}
              className="cta-btn block text-center mt-4"
            >
              Inquire
            </Link>
          </div>
        )}
      </header>

      {/* STYLES */}
      <style>{`
        .logo-img {
          height: 100px;
          width: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 46px;
          }
        }

        .nav-link {
          color: white;
          transition: color 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2d6cff;
        }

        .cta-btn {
          background: #2d6cff;
          padding: 12px 26px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: white;
          transition: background 0.3s;
        }

        .cta-btn:hover {
          background: #1f5eff;
        }

        .dropdown {
          position: absolute;
          top: 110%;
          width: 320px;
          background: linear-gradient(180deg, #141e3c, #0a1224);
          border-radius: 14px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(14px);
          transition: 0.35s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .group:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          padding: 14px 22px;
          display: block;
          color: #e5e7eb;
        }

        .dropdown-item:hover,
        .dropdown-item.active {
          background: rgba(45,108,255,0.18);
          color: white;
        }

        .mobile-link {
          display: block;
          font-size: 16px;
          color: white;
        }

        .mobile-link.active {
          color: #2d6cff;
        }
      `}</style>
    </>
  );
};

export default Header;
