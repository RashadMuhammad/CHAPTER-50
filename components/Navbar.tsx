
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}>
             {/* Simple representation of the logo plane */}
             <svg viewBox="0 0 100 100" className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-blue-600'}`}>
                <path fill="currentColor" d="M10 50 L40 50 L45 35 L55 35 L60 50 L90 50 L90 55 L60 55 L55 70 L45 70 L40 55 L10 55 Z" />
             </svg>
          </div>
          <span className={`text-xl font-bold tracking-wider ${isScrolled ? 'text-blue-900' : 'text-white'}`}>CHAPTER50</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white opacity-90 hover:opacity-100'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
            <button className={`${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
