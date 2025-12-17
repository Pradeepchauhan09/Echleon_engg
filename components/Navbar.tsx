import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Robust smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract ID from href
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Height of the sticky navbar (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Custom SVG Logo based on PDF Screenshot */}
            <div className="flex-shrink-0">
              <svg viewBox="0 0 100 100" className="h-12 w-12 text-[#1e4b55]" fill="none" xmlns="http://www.w3.org/2000/svg">
                 {/* Concentric Arcs/Circles */}
                 <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                 <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                 
                 {/* 4-Point Star / Compass Needle */}
                 {/* Main dark fill */}
                 <path d="M50 2 L62 40 L98 50 L62 60 L50 98 L38 60 L2 50 L38 40 L50 2 Z" fill="currentColor" />
                 
                 {/* Center cross lines for detail */}
                 <path d="M50 2 L50 98" stroke="white" strokeWidth="1" />
                 <path d="M2 50 L98 50" stroke="white" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-[#1e4b55] text-2xl leading-none tracking-wide">ECHELON</h1>
              <p className="text-[9px] sm:text-[10px] text-[#1e4b55] font-medium tracking-widest uppercase mt-1 leading-tight">
                Engg Consultants and Solutions
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;