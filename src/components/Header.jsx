import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = ({ bgTransparent = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!bgTransparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [bgTransparent]);

  const headerBg =
    bgTransparent && !scrolled
      ? "bg-transparent"
      : "bg-gradient-to-r from-[#05070d] via-[#0a0f1f] to-[#0b1224] backdrop-blur";

  return (
    <>
      <header className={`site-header fixed top-0 left-0 w-full z-50 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex">
              <span className="w-3 h-3 bg-[#1f8cff] rounded-full"></span>
              <span className="w-3 h-3 bg-[#2ea0ff] rounded-full -ml-1 mt-2"></span>
            </div>
            <span className="text-white text-xl font-semibold">TechnoSky</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1">
                Services <FiChevronDown size={14} />
              </button>

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
          </div>

          {/* CTA BUTTON */}
          <Link
            to="/helpcenter"
            className="hidden md:inline-block bg-[#2d6cff] hover:bg-[#1f5eff] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition"
          >
            Help Center
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
            <NavLink to="/services" className="mobile-link" onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/solutions" className="mobile-link" onClick={() => setMobileOpen(false)}>Solutions</NavLink>
            <NavLink to="/portfolio" className="mobile-link" onClick={() => setMobileOpen(false)}>Portfolio</NavLink>
            <NavLink to="/blog" className="mobile-link" onClick={() => setMobileOpen(false)}>Blog</NavLink>
            <NavLink to="/careers" className="mobile-link" onClick={() => setMobileOpen(false)}>Careers</NavLink>

            <Link
              to="/contact"
              className="inline-block mt-4 bg-[#2d6cff] text-white px-6 py-3 rounded-md text-sm font-semibold"
            >
              Help Center
            </Link>
          </div>
        )}
      </header>

      {/* ===== CSS IN SAME FILE ===== */}
      <style>{`
        .site-header a {
          color: white;
        }

        .nav-link {
          color: #ffffff;
          position: relative;
          padding: 6px 0;
          transition: color 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2d6cff;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 280px;
          background: #1b2b3d;
          border-radius: 12px;
          padding: 12px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .group:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 10px 20px;
          color: #e5e7eb;
          font-size: 14px;
          transition: background 0.3s, color 0.3s;
        }

        .dropdown-item:hover,
        .dropdown-item.active {
          background: rgba(45,108,255,0.15);
          color: #2d6cff;
        }

        .mobile-link {
          display: block;
          color: white;
          font-size: 16px;
        }

        .mobile-link.active {
          color: #2d6cff;
        }
          /* ===== DROPDOWN CONTAINER ===== */
.dropdown {
  position: absolute;
  top: 110%;
  left: 0;
  width: 300px;
  background: linear-gradient(
    180deg,
    rgba(20, 30, 60, 0.95),
    rgba(10, 18, 36, 0.98)
  );
  border-radius: 14px;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(16px) scale(0.98);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  z-index: 50;
}

/* SHOW ON HOVER */
.group:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

/* ===== DROPDOWN ITEM ===== */
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 14px 22px;
  font-size: 14.5px;
  font-weight: 500;
  color: #e5e7eb;
  letter-spacing: 0.2px;
  transition: all 0.3s ease;
  position: relative;
}

/* LEFT HIGHLIGHT BAR */
.dropdown-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 0;
  background: linear-gradient(180deg, #2d6cff, #5da9ff);
  border-radius: 3px;
  transform: translateY(-50%);
  transition: height 0.3s ease;
}

/* HOVER EFFECT */
.dropdown-item:hover {
  background: linear-gradient(
    90deg,
    rgba(45, 108, 255, 0.16),
    rgba(45, 108, 255, 0.05)
  );
  color: #ffffff;
  padding-left: 28px;
}

/* LEFT BAR ANIMATION */
.dropdown-item:hover::before {
  height: 70%;
}

/* ACTIVE LINK */
.dropdown-item.active {
  background: linear-gradient(
    90deg,
    rgba(45, 108, 255, 0.25),
    rgba(45, 108, 255, 0.08)
  );
  color: #ffffff;
}

/* SEPARATOR (OPTIONAL) */
.dropdown-item + .dropdown-item {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

      `}</style>
    </>
  );
};

export default Header;
