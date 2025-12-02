import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const OTHER_SERVICES_MENU = [
  { label: 'Roofing', href: '/roofing' },
  { label: 'Siding', href: '/siding' },
  { label: 'Windows', href: '/windows' },
];

const NAV_ITEMS = [
  { label: 'New Home Construction', href: '/new-home-construction', isHash: false },
  { label: 'Home Remodeling', href: '/home-remodeling', isHash: false },
  { label: 'Portfolio', href: '/#portfolio', isHash: true },
  { label: 'Testimonials', href: '/#testimonials', isHash: true },
  { label: 'About Us', href: '/about', isHash: false },
  { label: 'Contact', href: '/#contact', isHash: true },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string, isHash: boolean) => {
    setIsMenuOpen(false);
    if (isHash && location.pathname !== '/') {
      // If we're not on home page, navigate to home first, then scroll
      window.location.href = href;
    } else if (isHash) {
      // If we're on home page, just scroll
      const hash = href.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full flex flex-col font-sans z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-center items-center border-b border-gray-200">
        <div className="text-center text-slate-900 font-semibold">
          <span className="mr-2">🏠 WE OFFER FLEXIBLE FINANCING OPTIONS!</span>
          <Link to="/#contact" onClick={() => handleNavClick('/#contact', true)} className="underline hover:text-orange-500">Learn More</Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-white py-4 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Colosseum Construction" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <div className="flex items-center gap-2 md:hidden">
              <Link 
                to="/#contact"
                onClick={() => handleNavClick('/#contact', true)}
                className="p-2 border-2 border-orange-500 text-orange-500 rounded-lg"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+15551234567"
                className="p-2 bg-orange-500 text-white rounded-lg"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button 
                className="p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Call & Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/#contact"
              onClick={() => handleNavClick('/#contact', true)}
              className="flex items-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Link>
            <a 
              href="tel:+15551234567"
              className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-orange-500 text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 text-sm font-extrabold py-4 md:py-0">
            {/* Other Navigation Items */}
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="border-b border-orange-600 md:border-none last:border-none"
              >
                {item.isHash ? (
                  <a 
                    href={item.href} 
                    className="block py-3 md:py-4 hover:text-slate-900 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, true);
                    }}
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : (
                  <Link 
                    to={item.href}
                    className="block py-3 md:py-4 hover:text-slate-900 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}

            {/* Other Services Dropdown */}
            <li className="border-b border-orange-600 md:border-none relative group">
              <button
                className="w-full md:w-auto flex items-center justify-between md:justify-center gap-2 py-3 md:py-4 hover:text-slate-900 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>OTHER SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Dropdown Menu */}
              <ul 
                className={`${isServicesOpen ? 'block' : 'hidden'} md:absolute md:top-full md:left-0 md:mt-0 bg-white text-slate-900 shadow-lg rounded-b-lg md:rounded-lg overflow-hidden min-w-[250px] z-50`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {OTHER_SERVICES_MENU.map((service) => (
                  <li key={service.href} className="border-b border-slate-100 last:border-none">
                    <Link
                      to={service.href}
                      className="block px-6 py-3 hover:bg-orange-500 hover:text-white transition-colors text-sm font-semibold"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                        scrollToTop();
                      }}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
