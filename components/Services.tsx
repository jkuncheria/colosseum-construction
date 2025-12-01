import React from 'react';
import { Home, Bath, Utensils, Ruler, ShieldCheck, Sun } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'kitchens',
    title: 'Luxury Kitchens',
    description: 'Chef-inspired designs blending functionality with breathtaking aesthetics. Custom cabinetry, islands, and high-end finishes.',
    icon: <Utensils size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'baths',
    title: 'Spa Bathrooms',
    description: 'Transform your daily routine into a retreat. Walk-in rain showers, soaking tubs, and modern vanity solutions.',
    icon: <Bath size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1552321901-700977455581?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'additions',
    title: 'Home Additions',
    description: 'Expand your living space seamlessly. We match your existing architecture to create spacious new rooms.',
    icon: <Home size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'decks',
    title: 'Decks & Patios',
    description: 'Outdoor living at its finest. Custom decks, pergolas, and hardscaping designed for entertainment.',
    icon: <Sun size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'remodeling',
    title: 'Full Remodeling',
    description: 'Complete gut renovations. We manage everything from demolition to the final coat of paint.',
    icon: <Ruler size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'general',
    title: 'General Contracting',
    description: 'Project management you can trust. Licensed, insured, and committed to on-time delivery.',
    icon: <ShieldCheck size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Expertise</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Crafting Spaces for Life</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full text-orange-500 shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a href="#contact" className="text-sm font-bold text-orange-600 uppercase tracking-wider hover:underline">
                  Learn More
                </a>
              </div>
              
              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
