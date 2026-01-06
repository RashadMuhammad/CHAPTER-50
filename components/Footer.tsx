import React from "react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/Company_logo.png"
                  alt="Plane Icon"
                  className="w-full h-full object-cover scale-115"
                />
              </div>
              <span className="text-2xl font-bold tracking-widest">
                CHAPTER50
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm">
              Providing practical, efficient, and dependable aviation solutions
              for the global cargo industry from our hub in Dubai.
            </p>
          </div>

          <div className="flex space-x-12">
            <div>
              <h5 className="font-bold mb-4 uppercase text-xs tracking-widest text-blue-500">
                Quick Links
              </h5>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">
          <p>
            © {new Date().getFullYear()} Chapter50 Aviation Services FZCO. All
            Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Dubai, UAE</span>
            <span>DWC Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
