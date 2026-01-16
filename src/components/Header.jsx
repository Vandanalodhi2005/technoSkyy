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
      <header className={`site-header fixed top-0 left-0 w-full z-[9999] ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex">
              <span className="w-3.5 h-3.5 bg-[#1f8cff] rounded-full"></span>
              <span className="w-3.5 h-3.5 bg-[#2ea0ff] rounded-full -ml-1 mt-2"></span>
            </div>
            <span className="text-white text-2xl font-semibold">
              TechnoSky
            </span>
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
            inquire
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
            {["/", "/about", "/services", "/solutions", "/portfolio", "/blog", "/careers"].map(
              (path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  className="mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </NavLink>
              )
            )}

            <Link
              to="/inquire"
              onClick={() => setMobileOpen(false)}
              className="cta-btn block text-center mt-4"
            >
              inquire
            </Link>
          </div>
        )}
      </header>

      {/* CSS */}
      <style>{`
        .nav-link {
          color: white;
          font-size: 15px;
          transition: color 0.3s;
        }
          position: fixed;
          height: 80px;


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
          font-size: 14.5px;
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
