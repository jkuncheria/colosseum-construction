import React from 'react';
import { Home, Shield, CheckCircle, Award, Sun, Building2, Wind, Square } from 'lucide-react';

const Windows: React.FC = () => {
  return (
    <section id="windows" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Window Services</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Upgrade your home with energy-efficient, beautiful windows.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Colosseum Construction offers professional window installation and replacement services. We work with leading window manufacturers to provide you with high-quality, energy-efficient windows that enhance your home's comfort, appearance, and value. Our expert installation ensures proper fit and maximum energy savings.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Sun size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Energy-Efficient Windows</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                High-performance windows with advanced glazing technology to reduce energy costs and improve home comfort year-round.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Building2 size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Custom Window Styles</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Wide selection of window styles including double-hung, casement, sliding, bay, and picture windows to match your home's architecture.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Wind size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Storm Damage Replacement</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Expert replacement of storm-damaged windows. We work with insurance companies to ensure your claims are properly processed and covered.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Square size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Professional Installation</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Precise installation by certified professionals ensuring proper fit, weatherproofing, and optimal performance for maximum energy savings.
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
                <p className="text-lg">Licensed, bonded, and insured contractors with extensive window installation experience</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Energy-efficient windows from leading manufacturers to reduce heating and cooling costs</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Professional installation ensuring proper fit, weatherproofing, and optimal performance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Comprehensive warranty coverage on all workmanship and manufacturer warranties</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Our Window Installation Process</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Free Consultation & Measurement</h5>
                  <p className="text-slate-600">We visit your home to measure existing windows, discuss your preferences, and provide detailed estimates with window options and pricing.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Window Selection</h5>
                  <p className="text-slate-600">Choose from our wide selection of energy-efficient windows in various styles, materials, and finishes that complement your home's design.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Careful Removal</h5>
                  <p className="text-slate-600">Our team carefully removes old windows, inspects the window openings, and prepares the area for new installation while protecting your home's interior.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Professional Installation</h5>
                  <p className="text-slate-600">Expert installers fit your new windows precisely, ensuring proper insulation, weatherproofing, and smooth operation for optimal energy efficiency.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Final Inspection & Cleanup</h5>
                  <p className="text-slate-600">We conduct a thorough quality check, test all windows, complete finishing touches, clean up the work area, and provide warranty documentation.</p>
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
              Ready to Upgrade Your Windows?
            </h4>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Contact Colosseum Construction today to schedule a free consultation and estimate on your window replacement project. Our team is ready to enhance your home's comfort and value.
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

export default Windows;

