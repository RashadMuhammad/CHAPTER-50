
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary text-xs font-black uppercase tracking-[0.5em] mb-6">Services</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter uppercase">Solutions.</h3>
          </div>
          <div className="max-w-md border-l-4 border-brand-primary pl-8 py-2">
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We provide critical logistical support designed for reliability and efficiency in the world's most demanding aviation environments.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-32">
        {SERVICES.map((service, index) => (
          <div key={service.id} className="group cursor-default">
            {/* Service Image Preview */}
            <div className="relative aspect-[21/9] mb-10 overflow-hidden bg-slate-100 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-transparent transition-colors duration-700"></div>
              
              <div className="absolute bottom-6 left-6 px-4 py-1 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                DWC Operational Data
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-brand-primary/10 font-black text-8xl mr-8 -mt-6 leading-none select-none">0{index + 1}</span>
              <div className="flex-1">
                <h4 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-brand-primary transition-colors uppercase tracking-tight leading-none">{service.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-4 py-1 group-hover:border-brand-primary transition-colors">
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
