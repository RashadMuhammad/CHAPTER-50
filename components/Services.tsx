import React from "react";
import { SERVICES } from "../constants";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary text-xs font-black uppercase tracking-[0.5em] mb-6">
              Services
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter uppercase">
              Solutions.
            </h3>
          </div>
          <div className="max-w-md border-l-4 border-brand-primary pl-8 py-2">
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We provide critical logistical support designed for reliability
              and efficiency in the world's most demanding aviation
              environments.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16 lg:gap-y-32">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="group cursor-default overflow-hidden"
          >
            {/* Service Image Preview */}
            <div className="relative aspect-[21/9] mb-8 sm:mb-10 overflow-hidden bg-slate-100 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-transparent transition-colors duration-700"></div>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3 py-1 bg-brand-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                DWC Operational Data
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col sm:flex-row items-start">
              {/* Index */}
              <span
                className="text-brand-primary/10 font-black 
          text-5xl sm:text-7xl lg:text-8xl 
          mb-4 sm:mb-0 sm:mr-6 lg:mr-8 
          leading-none select-none shrink-0"
              >
                0{index + 1}
              </span>

              <div className="flex-1 min-w-0">
                {/* Heading */}
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-4 sm:mb-6 group-hover:text-brand-primary transition-colors uppercase tracking-tight leading-tight break-words">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-light break-words">
                  {service.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {service.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-4 py-1 group-hover:border-brand-primary transition-colors break-words"
                    >
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
