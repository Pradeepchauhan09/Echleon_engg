import React, { useState } from 'react';
import { Lock, ShieldCheck, Loader2, Server, UserCheck } from 'lucide-react';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate Secure Handshake and Role Determination
    setTimeout(() => {
      setIsLoading(false);
      // specific logic: admin@... gets ADMIN role, others get USER
      const role: UserRole = email.toLowerCase().startsWith('admin') ? 'ADMIN' : 'USER';
      onLogin(role);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        {/* Decorative top bar */}
        <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 w-full" />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
             {/* Custom SVG Logo */}
             <svg viewBox="0 0 100 100" className="h-14 w-14 text-[#1e4b55]" fill="none" xmlns="http://www.w3.org/2000/svg">
                 {/* Concentric Arcs/Circles */}
                 <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                 <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                 
                 {/* 4-Point Star / Compass Needle */}
                 <path d="M50 2 L62 40 L98 50 L62 60 L50 98 L38 60 L2 50 L38 40 L50 2 Z" fill="currentColor" />
                 
                 {/* Center cross lines for detail */}
                 <path d="M50 2 L50 98" stroke="white" strokeWidth="1" />
                 <path d="M2 50 L98 50" stroke="white" strokeWidth="1" />
              </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Echelon Portal</h2>
          <p className="text-slate-500 text-sm mt-2">Enterprise Resource Planning System</p>
        </div>

        {/* Form */}
        <div className="px-8 pb-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Corporate ID / Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900"
                  placeholder="admin@echelon.com or user@echelon.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded text-xs text-slate-500 border border-slate-100">
               <p><strong>Demo Hint:</strong> Use <code className="text-emerald-600">admin@echelon.com</code> for Edit Access.</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 disabled:opacity-70 disabled:cursor-wait mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  <span className="text-sm">Authenticating...</span>
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Secure Sign In
                </>
              )}
            </button>
          </form>

          {/* Security Badges */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <Server className="h-4 w-4" />
              <span className="text-[10px] font-semibold">RBAC ENABLED</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-[10px] font-semibold">E2E ENCRYPTED</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-6 text-slate-500 text-xs text-center px-4">
        <p>Restricted Access. Unauthorized access is prohibited.</p>
        <p className="mt-1 opacity-50">&copy; {new Date().getFullYear()} Echelon Engg Consultants</p>
      </div>
    </div>
  );
};

export default Login;