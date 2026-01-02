
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-secondary">
      {/* High-end Gradient and Pattern background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary via-brand-primary to-blue-900 z-10 opacity-90"></div>
      
      {/* Moving Technical Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-10">
             <span className="flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             <span className="text-white text-[10px] font-black uppercase tracking-[0.5em]">Dubai Aviation Hub • DWC</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
            Operational <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Excellence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-light max-w-2xl border-l-2 border-white/20 pl-8">
            Superior cargo handling and airside supervision in Dubai. Over 25 years of field-proven expertise at your service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#services" className="px-12 py-5 bg-white text-brand-secondary font-black rounded-sm shadow-2xl hover:bg-blue-50 transition-all text-center flex items-center justify-center group uppercase tracking-widest text-xs">
              Our Services
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="#contact" className="px-12 py-5 bg-transparent border border-white/30 text-white font-black rounded-sm hover:bg-white/10 transition-all text-center backdrop-blur-sm uppercase tracking-widest text-xs">
              Contact Experts
            </a>
          </div>
        </div>
      </div>

      {/* Decorative accent element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/10 blur-[120px] rounded-full -mb-32 -mr-32"></div>
    </section>
  );
};

export default Hero;
