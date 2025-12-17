import React from 'react';
import { WHO_WE_ARE, WHY_CHOOSE_US } from '../constants';
import { IconRenderer } from './IconRenderer';
import { Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section: Who We Are (Page 2) */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 font-serif">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-200 z-0"></div>
            
            {WHO_WE_ARE.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                  <IconRenderer iconName={item.icon} size={40} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 text-center max-w-[200px]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Vision & Mission (Page 3) */}
        <div className="mb-24 bg-slate-50 rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-600/30 transform -translate-x-1/2"></div>
            
            {/* Vision */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-6 text-emerald-600">
                <IconRenderer iconName="Target" size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Vision</h3>
              <p className="text-lg text-slate-600 max-w-sm">
                Trusted partner for sustainable infrastructure growth
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-center">
              <div className="mb-6 text-emerald-600">
                <IconRenderer iconName="TrendingUp" size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Mission</h3>
              <ul className="text-left space-y-3 text-lg text-slate-600">
                {[
                  "High-accuracy services",
                  "Integrated GIS solutions",
                  "Modern tools & practices",
                  "Long-term partnerships"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Why Choose Echelon? (Page 9) */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 font-serif">Why Choose Echelon?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 text-emerald-600 p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <IconRenderer iconName={item.icon} size={40} />
                </div>
                <h3 className="text-lg font-medium text-slate-700">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;