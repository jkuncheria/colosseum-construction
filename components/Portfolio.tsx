import React from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Modern Kitchen Renovation', category: 'Kitchen', imageUrl: '/porfolio/kitchen.jpg' },
  { id: '2', title: 'Luxury Master Bathroom', category: 'Bathroom', imageUrl: '/porfolio/bathroom.jpg' },
  { id: '3', title: 'Elegant Bathroom Sinks', category: 'Bathroom', imageUrl: '/porfolio/bathroomsinks.jpg' },
  { id: '4', title: 'Spa-Style Bathtub', category: 'Bathroom', imageUrl: '/porfolio/bathtub.jpg' },
  { id: '5', title: 'New Home Construction', category: 'New Home', imageUrl: '/porfolio/newhome4.jpg' },
  { id: '6', title: 'Professional Roofing', category: 'Roofing', imageUrl: '/porfolio/roofing.jpg' },
  { id: '7', title: 'Premium Siding Installation', category: 'Siding', imageUrl: '/porfolio/siding.jpg' },
  { id: '8', title: 'Energy-Efficient Windows', category: 'Windows', imageUrl: '/porfolio/windows.jpg' },
  { id: '9', title: 'Custom Window Installation', category: 'Windows', imageUrl: '/porfolio/windows2.jpg' },
];

const Portfolio: React.FC = () => {

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Work</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Featured Projects</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-sm font-bold uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <h4 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
