import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when component mounts or hash changes
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the # symbol
      const scrollToHash = (attempts = 0) => {
        const element = document.getElementById(hash);
        if (element) {
          // Small delay to ensure smooth scroll
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else if (attempts < 20) {
          // Try again after a short delay (up to 20 attempts = 1 second)
          setTimeout(() => scrollToHash(attempts + 1), 50);
        }
      };
      scrollToHash();
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;

