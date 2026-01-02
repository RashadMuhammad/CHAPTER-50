
import React from 'react';
import { VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-blue-900 text-sm font-bold uppercase tracking-[0.2em] mb-4">About Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Dubai's Trusted Partner in Aviation & Logistics
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Chapter50 Aviation Services combines a fresh perspective with proven expertise. We specialize in delivering dependable, high-quality services supported by practical operational knowledge and strong management capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                   Our Vision
                </h4>
                <p className="text-sm text-slate-700">Enhancing customer satisfaction by delivering practical, efficient, and dependable aviation solutions.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Our Mission
                </h4>
                <p className="text-sm text-slate-700">To uphold highest ethical standards, exceed client expectations, and pursue continuous improvement in every operation.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1570610155223-66279ba48541?auto=format&fit=crop&q=80&w=1000" alt="Dubai Cargo Hub" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-3xl -z-10 flex flex-col items-center justify-center p-6 text-white text-center shadow-xl">
               <span className="text-4xl font-bold">25+</span>
               <span className="text-xs uppercase tracking-widest mt-2 font-semibold">Years of Experience</span>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-900 rounded-full -z-10 opacity-10"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all bg-white text-center group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={value.icon}></path>
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
