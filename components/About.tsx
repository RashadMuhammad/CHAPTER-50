import React from "react";
import { VALUES } from "../constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight uppercase">
              Dubai's Trusted Partner in{" "}
              <span className="text-brand-primary">Aviation.</span>
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">
              Chapter50 Aviation Services combines a fresh perspective with
              proven expertise. We specialize in delivering dependable,
              high-quality services supported by practical operational knowledge
              and strong management capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                  Our Vision
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Enhancing customer satisfaction by delivering practical,
                  efficient, and dependable aviation solutions.
                </p>
              </div>
              <div className="p-8 bg-slate-50 border-l-4 border-slate-300 rounded-r-2xl shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs text-slate-500">
                  Our Mission
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  To uphold highest ethical standards, exceed client
                  expectations, and pursue continuous improvement in every
                  operation.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1200"
                alt="Dubai Logistics Hub"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-brand-secondary/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-primary rounded-sm -z-10 flex flex-col items-center justify-center p-6 text-white text-center shadow-xl">
              <span className="text-5xl font-black italic">25+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] mt-3 font-bold leading-tight">
                Years Hub Experience
              </span>
            </div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-slate-100 rounded-sm -z-10 opacity-40 border border-slate-200"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-10">
          <div className="text-center mb-20">
            <h3 className="text-brand-primary text-xs font-black uppercase tracking-[0.5em] mb-4">
              Values
            </h3>
            <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Foundation of Excellence.
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="p-10 border border-slate-100 rounded-sm hover:shadow-2xl transition-all bg-white group text-center"
              >
                <div className="w-16 h-16 bg-slate-50 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d={value.icon}
                    ></path>
                  </svg>
                </div>
                <h4 className="font-black text-slate-900 mb-4 uppercase tracking-tighter text-lg">
                  {value.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-widest">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="text-center mb-20">
            <h3 className="text-brand-primary text-xs font-black uppercase tracking-[0.5em] mb-4">
              SPECIALITIES
            </h3>
            <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Skills Refined, Solutions Delivered
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                GROUND HANDLING AND CARGO FLIGHT SUPERVISION
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We coordinate all ground-side operations to ensure smooth
                aircraft turnaround and cargo movement. Our team supervises ramp
                handling, loading, unloading, and compliance with safety
                standards. This ensures timely departures and operational
                efficiency.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                LANDING PERMITS, TURNAROUND AND OVERFLY PERMITS
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We manage all regulatory approvals required for domestic and
                international flight operations. This includes landing, overfly,
                and turnaround permits from aviation authorities. Our expertise
                minimizes delays and ensures full regulatory compliance.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                COMPLETE SUPERVISION OF CARGO ACCEPTANCE UNTIL FLIGHT LOADING
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We oversee the cargo journey from acceptance at the terminal to
                final aircraft loading. This includes documentation checks,
                weight verification, security screening, and coordination with
                handlers. Ensures cargo integrity and compliance throughout the
                process.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                FLIGHT PLANNING AND GROUND SUPPORT
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Our flight planning services optimize routes, fuel requirements,
                and operational efficiency. Ground support coordination ensures
                availability of equipment, crew, and services. This results in
                cost-effective and punctual flight operations.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                FLIGHT BUILD-UP AND MONITORING
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We supervise cargo build-up in accordance with aircraft
                specifications and load plans. Continuous monitoring ensures
                proper weight distribution and safety compliance. This reduces
                risks and enhances operational reliability.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                SPECIALIZED CARE & SUPERVISION FOR VALUABLE CARGO
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                High-value cargo receives dedicated supervision, enhanced
                security, and controlled handling procedures. We ensure strict
                monitoring at every stage of transit. This guarantees maximum
                safety and protection for sensitive shipments.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                AIR FREIGHT
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We provide comprehensive air freight solutions tailored to
                time-critical and specialized cargo. Our services include
                coordination, documentation, and carrier liaison. Ensures fast,
                secure, and reliable cargo movement worldwide.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                FLIGHT SUPPORT
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Our flight support services cover operational planning,
                coordination, and real-time assistance. We ensure smooth
                communication between crews, ground handlers, and authorities.
                This enhances efficiency and operational control.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-4 border-brand-primary rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs">
                EXPORT IMPORT DOCUMENTATION
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We handle complete export and import documentation in compliance
                with international trade regulations. This includes customs
                paperwork, permits, and cargo declarations. Ensures hassle-free
                clearance and smooth cargo movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
