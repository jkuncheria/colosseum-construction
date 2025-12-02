import React from 'react';
import { Home, Wrench, Paintbrush, Ruler, Shield, CheckCircle, Award, Sparkles } from 'lucide-react';

const HomeRemodeling: React.FC = () => {
  return (
    <section id="home-remodeling" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Home Remodeling</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Transform your existing home into the space you've always dreamed of.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              At Colosseum Construction, we specialize in comprehensive home remodeling services that breathe new life into your living spaces. Whether you're looking to update a single room or undertake a whole-house renovation, our expert team combines innovative design with superior craftsmanship to deliver results that exceed your expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Home size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Kitchen Remodeling</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Create the kitchen of your dreams with custom cabinetry, premium countertops, modern appliances, and innovative storage solutions. From complete gut renovations to cosmetic updates, we handle every detail.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Paintbrush size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Bathroom Remodeling</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform your bathroom into a spa-like retreat with luxury fixtures, custom tile work, walk-in showers, and elegant vanities. We specialize in both master suites and powder rooms.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Ruler size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Whole House Renovations</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Comprehensive whole-house remodels that update every aspect of your home. We coordinate multiple projects simultaneously to minimize disruption and maximize efficiency.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Sparkles size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Interior Design</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our design team works with you to create cohesive, beautiful interiors that reflect your personal style while maximizing functionality and flow throughout your home.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Award size={48} className="text-white" />
              <h4 className="text-2xl font-serif font-bold">Why Choose Colosseum for Your Remodel?</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Experienced professionals who understand the complexities of working in occupied homes</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Minimal disruption to your daily life with careful project planning and scheduling</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Premium materials and finishes that add lasting value to your property</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Transparent pricing with detailed estimates and no surprise costs</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Comprehensive warranty coverage on all workmanship and installations</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Our Remodeling Process</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Consultation & Design</h5>
                  <p className="text-slate-600">We begin with an in-home consultation to understand your goals, preferences, and budget. Our design team creates detailed plans and 3D renderings to help you visualize the transformation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Planning & Permits</h5>
                  <p className="text-slate-600">We handle all necessary permits, coordinate with suppliers, and create a detailed project timeline. You'll receive a comprehensive schedule so you know exactly what to expect.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Demolition & Preparation</h5>
                  <p className="text-slate-600">Our team carefully removes existing materials while protecting the rest of your home. We set up work zones and maintain a clean, safe environment throughout the project.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Construction & Installation</h5>
                  <p className="text-slate-600">Skilled craftsmen install new systems, finishes, and fixtures with precision. We maintain open communication and provide regular updates on progress.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Final Touches & Walkthrough</h5>
                  <p className="text-slate-600">We complete all finishing details, conduct a thorough cleanup, and walk you through your newly remodeled space. We ensure everything meets our high standards before considering the project complete.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Remodeling Projects */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Popular Remodeling Projects</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
                <h5 className="text-lg font-bold text-slate-900 mb-2">Basement Finishing</h5>
                <p className="text-slate-600">Transform unused basement space into functional living areas, home theaters, or guest suites.</p>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
                <h5 className="text-lg font-bold text-slate-900 mb-2">Room Additions</h5>
                <p className="text-slate-600">Add square footage with seamless additions that match your home's existing architecture.</p>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
                <h5 className="text-lg font-bold text-slate-900 mb-2">Exterior Updates</h5>
                <p className="text-slate-600">Refresh your home's curb appeal with new siding, windows, doors, and exterior finishes.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-50 rounded-lg p-8 text-center border-t-4 border-orange-500">
            <div className="flex justify-center mb-4">
              <Wrench size={48} className="text-orange-500" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Ready to Transform Your Home?
            </h4>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Contact Colosseum Construction today to schedule a free consultation. Let's discuss your remodeling goals and create a plan to bring your vision to life. Our team is ready to make your dream home a reality.
            </p>
            <a 
              href="/#contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Start Your Remodel Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRemodeling;

