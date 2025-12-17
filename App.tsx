import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SERVICES } from './constants';
import { Loader2 } from 'lucide-react';
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full py-24 bg-slate-50/50">
    <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
    <span className="sr-only">Loading section...</span>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Services services={SERVICES} />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;