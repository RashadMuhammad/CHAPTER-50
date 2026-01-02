
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary text-xs font-black uppercase tracking-[0.4em] mb-6">Operations</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">Our Solutions.</h3>
          </div>
          <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed">
            Tailored aviation support designed for efficiency, reliability, and absolute compliance in the world's most demanding cargo hubs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {SERVICES.map((service) => (
          <div key={service.id} className="group cursor-default">
            {/* Aspect ratio placeholder for service image */}
            <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-sm bg-slate-100 border border-slate-200">
              {service.imageUrl ? (
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: 'radial-gradient(#0047AB 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                  <svg className="w-16 h-16 text-slate-300 group-hover:text-brand-primary/20 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.09-.36.14-.57.14s-.41-.05-.57-.14l-7.9-4.44c-.31-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.9-4.44c.16-.09.36-.14.57-.14s.41.05.57.14l7.9 4.44c.31.17.53.5.53.88v9z" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-brand-secondary/5 mix-blend-multiply"></div>
            </div>
            <div className="flex items-start">
              <span className="text-brand-primary font-black text-4xl mr-6 opacity-20">0{SERVICES.indexOf(service) + 1}</span>
              <div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors uppercase tracking-tight">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">{service.description}</p>
                <div className="grid grid-cols-1 gap-2">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest border-l-2 border-brand-primary/20 pl-4 py-1">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
