import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import AIPlanner from '../components/AIPlanner';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <AIPlanner />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;

