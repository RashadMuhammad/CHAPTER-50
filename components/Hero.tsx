
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-secondary">
      {/* Background with CSS Gradient instead of image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-primary to-slate-900 z-10 opacity-80"></div>
      
      {/* Decorative patterns to "leave space" for the image aesthetic */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
             <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">DUBAI WORLD CENTRAL (DWC) EXPERTS</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            Precision in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Aviation Logistics.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl">
            Founded by industry veterans, Chapter50 provides unmatched airside and cargo operations supervision with over 25 years of local Dubai expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#services" className="px-10 py-5 bg-brand-primary text-white font-bold rounded-full shadow-2xl hover:bg-brand-accent transition-all text-center flex items-center justify-center group">
              View Services
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="#contact" className="px-10 py-5 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-center backdrop-blur-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
