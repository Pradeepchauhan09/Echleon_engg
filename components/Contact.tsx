import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">ECHELON ENGG</h2>
            <p className="text-slate-400 max-w-sm mb-6">
              Integrated Engineering, Geospatial & Infrastructure Consultancy. Delivering accuracy and sustainable solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="h-10 w-10 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors cursor-pointer flex items-center justify-center">
                 <span className="font-bold text-sm">in</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors cursor-pointer flex items-center justify-center">
                 <span className="font-bold text-sm">tw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">Address To be updated</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-slate-400">Phone To be updated</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-slate-400">Email To be updated</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Echelon Engg Consultants. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;