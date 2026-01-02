
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0000FF]/40 z-10"></div>
      
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=1920" 
        alt="Aviation Background"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite]"
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
             <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">25+ Years of Excellence in Dubai</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Expert Aviation Solutions for <span className="text-blue-300">Global Cargo</span> Operations
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-xl">
            Founded by aviation professionals, Chapter50 combines decades of practical operational knowledge with strong management capabilities in airside and cargo operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-xl hover:bg-blue-50 transition-all text-center">
              Explore Our Services
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center backdrop-blur-sm">
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}} />
    </section>
  );
};

export default Hero;
