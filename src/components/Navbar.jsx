import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

/** Nav link helper: accepts extra className */
const NavLinkItem = ({ to, children, className = "" }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      (isActive
        ? "text-pcs-sky font-semibold "
        : "text-gray-700 hover:text-pcs-sky transition ") + className
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [aboutOpen, setAboutOpen] = useState(false); // desktop dropdown open state
  const dropdownRef = useRef(null);
  const chevronRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function onDocClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        chevronRef.current &&
        !chevronRef.current.contains(e.target)
      ) {
        setAboutOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === "Escape") setAboutOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-alt.png" alt="PCS Logo" className="h-10 w-auto" />
          <span className="hidden md:inline-block text-lg font-bold text-pcs-sky">
            Premier Career Services
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinkItem to="/">Home</NavLinkItem>

          {/* ABOUT + CLICK-TO-OPEN DROPDOWN */}
          <div className="relative inline-block flex items-center">
            <NavLinkItem to="/about" className="flex items-center gap-1">
              About
            </NavLinkItem>

            <button
              ref={chevronRef}
              type="button"
              aria-expanded={aboutOpen}
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen((v) => !v);
              }}
              className="ml-1 p-1 rounded hover:bg-gray-100"
            >
              <ChevronDown
                size={16}
                className={`text-gray-700 transition ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>

            {aboutOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-44 z-50"
              >
                <Link
                  to="/about"
                  onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pcs-sky transition"
                >
                  About Us
                </Link>

                <Link
                  to="/staff"
                  onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pcs-sky transition"
                >
                  Our Staff
                </Link>
              </div>
            )}
          </div>

          <NavLinkItem to="/assessments">Assessments</NavLinkItem>

          {/* ✅ NEW TESTIMONIALS LINK */}
          <NavLinkItem to="/testimonials">Testimonials</NavLinkItem>

          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <Link
            to="/assessments"
            className="bg-pcs-sky text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Get Assessment
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLinkItem to="/">Home</NavLinkItem>

            <MobileAboutBlock />

            <NavLinkItem to="/assessments">Assessments</NavLinkItem>

            {/* ✅ MOBILE TESTIMONIALS */}
            <NavLinkItem to="/testimonials">Testimonials</NavLinkItem>

            <NavLinkItem to="/contact">Contact</NavLinkItem>

            <Link
              to="/assessments"
              className="mt-2 block text-center bg-pcs-sky text-white py-2 rounded-lg"
            >
              Get Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* Small mobile About block component */
function MobileAboutBlock() {
  const [aboutOpenMobile, setAboutOpenMobile] = useState(false);
  return (
    <>
      <button
        className="flex items-center justify-between text-gray-700 font-medium w-full"
        onClick={() => setAboutOpenMobile((v) => !v)}
      >
        <span>About</span>
        <ChevronDown
          size={16}
          className={`transition ${aboutOpenMobile ? "rotate-180" : ""}`}
        />
      </button>

      {aboutOpenMobile && (
        <div className="ml-4 flex flex-col gap-2">
          <NavLink to="/about" className="text-gray-700 hover:text-pcs-sky transition">
            Overview
          </NavLink>
          <NavLink to="/staff" className="text-gray-700 hover:text-pcs-sky transition">
            Staff
          </NavLink>
        </div>
      )}
    </>
  );
}
