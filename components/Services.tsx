import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Wind, Square, Sun } from 'lucide-react';

const services = [
  {
    id: 'new-home-construction',
    title: 'New Home Construction',
    description: 'Build your dream home from the ground up with custom design and superior craftsmanship.',
    icon: <Home size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    link: '/new-home-construction'
  },
  {
    id: 'home-remodeling',
    title: 'Home Remodeling',
    description: 'Transform your existing home with comprehensive remodeling services for kitchens, bathrooms, and more.',
    icon: <Wrench size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    link: '/home-remodeling'
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'Expert roofing services including replacement, repairs, and storm damage restoration.',
    icon: <Wind size={32} />,
    imageUrl: '/porfolio/roofing.jpg',
    link: '/roofing'
  },
  {
    id: 'siding',
    title: 'Siding',
    description: 'Protect and beautify your home with professional siding installation and replacement.',
    icon: <Square size={32} />,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    link: '/siding'
  },
  {
    id: 'windows',
    title: 'Windows',
    description: 'Upgrade to energy-efficient windows that enhance comfort, appearance, and value.',
    icon: <Sun size={32} />,
    imageUrl: '/porfolio/windows2.jpg',
    link: '/windows'
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
            <Link
              key={service.id} 
              to={service.link}
              className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 bg-white block"
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
                <span className="text-sm font-bold text-orange-600 uppercase tracking-wider group-hover:underline">
                  Learn More
                </span>
              </div>
              
              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
