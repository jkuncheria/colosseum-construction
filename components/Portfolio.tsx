import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Modern Farmhouse Kitchen', category: 'Kitchen', imageUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Marble Master Bath', category: 'Bathroom', imageUrl: 'https://images.unsplash.com/photo-1620626012053-93f2685048d6?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Cedar Deck Oasis', category: 'Exterior', imageUrl: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Minimalist Loft Renovation', category: 'Living', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Finished Basement Bar', category: 'Basement', imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Open Concept Dining', category: 'Living', imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57acee?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Kitchen', 'Bathroom', 'Living', 'Exterior', 'Basement'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Work</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">Featured Projects</h3>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
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
