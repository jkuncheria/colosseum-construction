import React from 'react';
import { Home, Shield, CheckCircle, Award, Square, Building2, Droplets } from 'lucide-react';

const Siding: React.FC = () => {
  return (
    <section id="siding" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Siding Services</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Enhance your home's exterior with professional siding installation and replacement.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Colosseum Construction provides expert siding services to protect and beautify your home. We offer a wide variety of siding materials including vinyl, fiber cement, wood, and more. Our experienced team ensures proper installation for maximum durability and curb appeal.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Square size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Vinyl Siding</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Low-maintenance, durable vinyl siding in a variety of colors and styles. Perfect for homeowners seeking affordability and long-lasting protection.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Building2 size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Fiber Cement</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Premium fiber cement siding that resists rot, fire, and pests. Offers the look of wood with superior durability and minimal maintenance.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Home size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Wood Siding</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Classic wood siding options including cedar and engineered wood. Natural beauty with proper treatment for lasting protection.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Droplets size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Storm Damage Repair</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Expert repair and replacement of storm-damaged siding. We work with insurance companies to ensure your claims are properly covered.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Award size={48} className="text-white" />
              <h4 className="text-2xl font-serif font-bold">Why Choose Colosseum Construction?</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Licensed, bonded, and insured contractors with years of siding installation experience</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Expert installation by certified professionals ensuring proper fit and weatherproofing</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Wide selection of premium siding materials from leading manufacturers</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Comprehensive warranty coverage on all workmanship and materials</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Our Siding Installation Process</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Free Consultation & Estimate</h5>
                  <p className="text-slate-600">We inspect your home's exterior, discuss your preferences, and provide a detailed estimate with material options and pricing.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Material Selection</h5>
                  <p className="text-slate-600">Choose from our wide selection of siding materials, colors, and styles that best match your home's architecture and your budget.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Preparation & Removal</h5>
                  <p className="text-slate-600">We carefully remove old siding, inspect the underlying structure, and make any necessary repairs to ensure a solid foundation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Professional Installation</h5>
                  <p className="text-slate-600">Our skilled installers apply your new siding following manufacturer specifications and industry best practices for optimal performance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Final Inspection & Cleanup</h5>
                  <p className="text-slate-600">We conduct a thorough quality check, complete all finishing touches, clean up the work site, and provide warranty documentation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-50 rounded-lg p-8 text-center border-t-4 border-orange-500">
            <div className="flex justify-center mb-4">
              <Shield size={48} className="text-orange-500" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Ready to Update Your Home's Exterior?
            </h4>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Contact Colosseum Construction today to schedule a free consultation and estimate on your siding project. Our team is ready to transform your home's exterior.
            </p>
            <a 
              href="/#contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Siding;

