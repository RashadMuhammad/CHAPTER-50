import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ${
              isScrolled ? "bg-white" : "bg-white"
            }`}
          >
            <img
              src="/Company_logo.png"
              alt="Chapter50 Logo"
              className="w-full h-full object-cover scale-140"
            />
          </div>

          <span
            className={`text-xl font-bold tracking-wider ${
              isScrolled ? "text-blue-900" : "text-white"
            }`}
          >
            CHAPTER50
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-blue-500 transition-colors ${
                isScrolled
                  ? "text-slate-700"
                  : "text-white opacity-90 hover:opacity-100"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${isScrolled ? "text-slate-700" : "text-white"}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-6 ${
            isScrolled ? "bg-white" : "bg-blue-900/95"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setMenuOpen(false); 
                }}
                className={`text-left text-sm font-semibold uppercase tracking-widest ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
