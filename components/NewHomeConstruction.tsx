import React from 'react';
import { Home, Hammer, Ruler, Shield, CheckCircle, Award, Building2 } from 'lucide-react';

const NewHomeConstruction: React.FC = () => {
  return (
    <section id="new-home-construction" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">New Home Construction</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Building your dream home from the ground up with precision, quality, and craftsmanship.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              At Colosseum Construction, we specialize in creating custom-built homes that reflect your unique vision and lifestyle. From initial design consultation to final walkthrough, our experienced team guides you through every step of the construction process, ensuring your new home meets the highest standards of quality and exceeds your expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Home size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Custom Home Design</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Work with our design team to create a home that perfectly fits your needs, preferences, and budget. We offer comprehensive design services from concept to completion.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Hammer size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Quality Construction</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Built with premium materials and attention to detail, every home we construct is designed to stand the test of time and provide lasting value for your family.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Ruler size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Project Management</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our dedicated project managers oversee every aspect of construction, ensuring timelines are met, budgets are maintained, and quality standards are exceeded.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Building2 size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Energy Efficiency</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We incorporate the latest energy-efficient technologies and building practices to reduce your home's environmental impact and lower your utility costs.
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
                <p className="text-lg">Licensed, bonded, and insured contractors with years of experience in new home construction</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Transparent communication throughout the entire building process</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Comprehensive warranty coverage on all workmanship and materials</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Commitment to meeting deadlines and staying within budget</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Our Construction Process</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Initial Consultation & Design</h5>
                  <p className="text-slate-600">We meet with you to understand your vision, needs, and budget. Our design team creates detailed plans and 3D renderings.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Permits & Approvals</h5>
                  <p className="text-slate-600">We handle all necessary permits, inspections, and regulatory approvals to ensure your project complies with local building codes.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Foundation & Framing</h5>
                  <p className="text-slate-600">Our skilled craftsmen lay a solid foundation and construct the structural framework of your new home with precision.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Systems Installation</h5>
                  <p className="text-slate-600">Electrical, plumbing, HVAC, and other essential systems are installed by licensed professionals following industry best practices.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Finishing & Final Walkthrough</h5>
                  <p className="text-slate-600">Interior finishes, exterior details, and final touches are completed. We conduct a comprehensive walkthrough to ensure everything meets our high standards.</p>
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
              Ready to Build Your Dream Home?
            </h4>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Contact Colosseum Construction today to schedule a consultation and take the first step toward building the home you've always envisioned. Our team is ready to bring your vision to life.
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

export default NewHomeConstruction;

