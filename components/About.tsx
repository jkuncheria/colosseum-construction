import React from 'react';
import { Shield, CheckCircle, Award, Home, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">About Us</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Greenwood Home Improvement Company</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              We give you peace of mind during your home's exterior renovation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              We work together with homeowners and insurance companies to replace exterior materials that have been damaged by weather events. High winds, ice, hail, and other weather events can damage your home's exterior, and Colosseum Construction specialists are trained to identify these specific types of damage. If your property is damaged, it can be a complicated process to inform your insurance company of the specific damage and ensure that its replacement is fully funded. Colosseum Construction can make the home improvement process very easy.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
              <p className="text-lg text-slate-700 leading-relaxed font-semibold mb-2">
                Partner Company: Indiana Best Flooring
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Colosseum Construction is proud to be a partner company with <strong>Indiana Best Flooring</strong>. Together, our two companies work side by side to help people improve their homes, offering comprehensive solutions from construction and remodeling to flooring installation. This partnership allows us to provide seamless, integrated home improvement services that cover every aspect of your renovation needs.
              </p>
            </div>
          </div>

          {/* Track Record Section */}
          <div className="bg-slate-50 rounded-lg p-8 mb-12 border-l-4 border-orange-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-full text-white">
                <Award size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  Greenwood Home Improvement Company With a Good Track Record
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                  <span className="text-2xl font-bold text-slate-900">
                    90% of the properties we represent have their insurance claims approved.
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              We will replace your storm-damaged roof, siding, and/or gutters with premium-grade materials using the most cutting-edge standards for home protection. We strongly believe in the quality of our workmanship and material guarantees.
            </p>
          </div>

          {/* Trust Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-full text-white">
                <Shield size={32} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">
                When severe weather hits… turn to a company you can trust.
              </h4>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Colosseum Construction is an Owens Corning preferred Contractor in the Central Indiana Area.
            </p>
          </div>

          {/* Remodels Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-full text-white">
                <Home size={32} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">
                Our Greenwood Home Improvement remodels speak for themselves!
              </h4>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Whether your home improvement is a bathroom or kitchen remodel, Colosseum Construction will provide you with superior craftsmanship and professionalism. From Granite countertops to superior built cabinets to bubble walls, Colosseum Construction can provide each customer with an innovative and modern theme that will enhance any home or business.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <Wrench size={48} className="text-white" />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-4">
              Contact Our Greenwood Home Improvement Today!
            </h4>
            <p className="text-lg mb-6 leading-relaxed">
              Browse our gallery of completed remodels to get ideas and see the quality of our work. We stand ready to make your dream kitchen, bathroom, or commercial remodel a reality. Contact our Greenwood Home Improvement company for any questions today.
            </p>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-orange-500 font-bold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

