import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = ({ bgTransparent = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
      <header className={`fixed top-0 left-0 w-full z-[9999] ${headerBg}`}>
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
          <nav className="hidden md:flex items-center gap-12 font-medium">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>

            {/* SERVICES DESKTOP */}
            <div className="relative group">
              <span className="nav-link flex items-center gap-1 cursor-pointer">
                Services <FiChevronDown size={16} />
              </span>

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

            <NavLink to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>About</NavLink>

            {/* SERVICES MOBILE */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="mobile-link flex justify-between items-center w-full"
              >
                Services
                <FiChevronDown
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink to="/services/web-design-development" className="sub-link" onClick={() => setMobileOpen(false)}>
                    Website Design & Development
                  </NavLink>
                  <NavLink to="/services/digital-marketing" className="sub-link" onClick={() => setMobileOpen(false)}>
                    Digital Marketing Services
                  </NavLink>
                  <NavLink to="/services/software-development" className="sub-link" onClick={() => setMobileOpen(false)}>
                    Software Development Services
                  </NavLink>
                  <NavLink to="/services/it-support" className="sub-link" onClick={() => setMobileOpen(false)}>
                    IT Support for Businesses
                  </NavLink>
                  <NavLink to="/services/expert-tech-support" className="sub-link" onClick={() => setMobileOpen(false)}>
                    Expert Tech Support
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/solutions" className="mobile-link" onClick={() => setMobileOpen(false)}>Solutions</NavLink>
            <NavLink to="/portfolio" className="mobile-link" onClick={() => setMobileOpen(false)}>Portfolio</NavLink>
            <NavLink to="/blog" className="mobile-link" onClick={() => setMobileOpen(false)}>Blog</NavLink>
            <NavLink to="/careers" className="mobile-link" onClick={() => setMobileOpen(false)}>Careers</NavLink>

            <Link to="/inquire" className="cta-btn block text-center mt-4" onClick={() => setMobileOpen(false)}>
              Inquire
            </Link>
          </div>
        )}
      </header>

      {/* STYLES */}
      <style>{`
        .logo-img {
          height: 100px;
        }

        .nav-link {
          color: white;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #2d6cff;
        }

        .cta-btn {
          background: #2d6cff;
          padding: 12px 26px;
          border-radius: 8px;
          font-weight: 600;
          color: white;
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
          transition: 0.3s;
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

        .dropdown-item:hover {
          background: rgba(45,108,255,0.18);
          color: white;
        }

        .mobile-link {
          display: block;
          font-size: 16px;
          color: white;
          padding: 6px 0;
        }

        .sub-link {
          display: block;
          font-size: 14px;
          color: #c7d2fe;
          padding: 4px 0;
        }
      `}</style>
    </>
  );
};

export default Header;
