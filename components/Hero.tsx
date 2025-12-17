import React from 'react';
import { TAGLINE } from '../constants';
import { ChevronRight, Scan, Compass, Share2, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative bg-slate-900 pt-20 pb-24 md:pt-32 md:pb-48 overflow-hidden">
      {/* Survey Instrument representation */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 opacity-20 text-emerald-500 animate-pulse hidden sm:block">
        <Scan size={40} strokeWidth={1.5} />
      </div>
      {/* Compass */}
      <div className="absolute top-6 right-6 md:top-12 md:right-12 opacity-20 text-emerald-500 animate-pulse delay-700 hidden sm:block">
        <Compass size={40} strokeWidth={1.5} />
      </div>
       {/* Nodes */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 opacity-20 text-emerald-500 animate-pulse delay-1000 hidden sm:block">
        <Share2 size={40} strokeWidth={1.5} />
      </div>
       {/* Globe */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 opacity-20 text-emerald-500 animate-pulse delay-500 hidden sm:block">
        <Globe size={40} strokeWidth={1.5} />
      </div>
      
      {/* Mobile only icon to satisfy 'logo in left top side' if Navbar logo isn't enough */}
      <div className="absolute top-4 left-4 sm:hidden opacity-30 text-emerald-500">
         <Scan size={24} />
      </div>

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#059669" />
           <path d="M0 0 C 50 100 80 100 100 0 Z" fill="none" stroke="#059669" strokeWidth="0.5" />
         </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-tight font-serif">
          ECHELON ENGG <br />
          CONSULTANTS AND <br />
          SOLUTIONS PVT. LTD.
        </h1>

        <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-emerald-400 font-light tracking-wide">
          {TAGLINE}
        </p>

        <div className="mt-8 md:mt-12 flex flex-row justify-center gap-3 md:gap-6">
          <a
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm md:px-8 md:py-4 md:text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Our Services
            <ChevronRight className="ml-1.5 md:ml-2 h-3.5 w-3.5 md:h-5 md:w-5" />
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm md:px-8 md:py-4 md:text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Who We Are
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;