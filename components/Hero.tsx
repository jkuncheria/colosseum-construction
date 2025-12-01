import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-start justify-center overflow-hidden pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Modern Kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left pt-8">
        <div className="max-w-3xl fade-in-up">
          <div className="inline-block px-3 py-1 mb-6 border border-orange-500/50 rounded-full bg-slate-950/30 backdrop-blur-sm">
            <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">
              Premier Construction Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Indiana's Premier <span className="text-orange-500 italic">Home Improvement</span> Company
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            From luxury kitchen remodels to custom additions, Colosseum Construction combines 
            classic craftsmanship with modern design to transform your house into a dream home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-slate-900 font-bold rounded-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 border border-white/30 hover:border-white text-white font-semibold rounded-sm backdrop-blur-sm transition-all hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
