
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-blue-900 text-sm font-bold uppercase tracking-[0.2em] mb-4">Expertise</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-6">Our Premium Services</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
          At Chapter50, we are committed to finding the most effective solutions tailored to our customers’ cargo needs across Dubai World Central and beyond.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 relative overflow-hidden">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                 <span className="text-white text-sm font-semibold">Specialized Operational Support</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-10 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 font-medium italic">{service.description}</p>
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-blue-600 font-bold flex items-center hover:text-blue-800 transition-colors uppercase text-xs tracking-widest">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-20">
        <div className="bg-blue-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24"></div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Quality and Commitment</h3>
          <p className="text-blue-100 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed relative z-10 mb-10">
            We are dedicated to exceeding customer expectations through accuracy, transparency, efficiency, and punctuality. Every service we provide reflects our commitment to quality and our promise to deliver superior results.
          </p>
          <div className="flex flex-wrap justify-center gap-12 relative z-10">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-blue-300 text-sm uppercase tracking-widest mt-1">Accuracy</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-blue-300 text-sm uppercase tracking-widest mt-1">Support</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">Global</span>
                <span className="text-blue-300 text-sm uppercase tracking-widest mt-1">Network</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
