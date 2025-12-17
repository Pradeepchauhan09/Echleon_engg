import React from 'react';
import { IconRenderer } from './IconRenderer';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-emerald-600 font-bold tracking-widest uppercase mb-3">Our Expertise</h2>
          <p className="text-3xl md:text-4xl leading-tight font-extrabold tracking-tight text-slate-900">
            Core Domains of Expertise
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
            Delivering end-to-end solutions by integrating GIS, engineering, and field data for accurate results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 p-8 flex flex-col hover:-translate-y-1 group"
            >
              <div className="h-14 w-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <IconRenderer iconName={service.icon} size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
              
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <ul className="space-y-2.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-500 flex items-start">
                      <span className="mr-2 text-emerald-500 text-lg leading-none">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;