import React, { useEffect } from 'react';

const Testimonials: React.FC = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Testimonials</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">See What Our Clients Say</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-c0c33225-e3a7-4f7a-a741-3873e51558e6" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Testimonials;
