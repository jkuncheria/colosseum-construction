import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Colosseum Construction" 
              className="h-10 md:h-12"
            />
          </div>

          <div className="flex gap-6">
             <a href="https://www.facebook.com/colosseumconstruction/?fref=ts" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
             <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
             <a href="https://x.com/ColosseumConst1" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Colosseum Construction. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
