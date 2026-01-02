
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-blue-900 text-sm font-bold uppercase tracking-[0.2em] mb-4">Contact</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Get in Touch with Our Aviation Experts</h3>
            
            <div className="space-y-10 mt-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Anytime</h4>
                  <p className="text-slate-600 text-sm">{CONTACT_INFO.phone.join(' / ')}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
               <div className="relative z-10">
                 <h4 className="text-xl font-bold mb-4">Looking for a tailored solution?</h4>
                 <p className="text-slate-400 mb-6 text-sm">No matter the size or complexity of your cargo, our team works diligently to provide the best solution and guarantee timely delivery.</p>
                 <button className="px-6 py-3 bg-blue-600 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">Request a Quote</button>
               </div>
               <svg className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 group-hover:text-white/10 transition-all duration-500 transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M10 50 L40 50 L45 35 L55 35 L60 50 L90 50 L90 55 L60 55 L55 70 L45 70 L40 55 L10 55 Z" /></svg>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none bg-white">
                  <option>Ground Handling</option>
                  <option>Cargo Supervision</option>
                  <option>Flight Planning</option>
                  <option>Air Freight</option>
                  <option>Documentation</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea rows={5} placeholder="Tell us about your cargo needs..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transform hover:-translate-y-1 transition-all active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
