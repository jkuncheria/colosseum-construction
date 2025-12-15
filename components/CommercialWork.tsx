import React from 'react';
import { Building2, Hammer, Layout, Briefcase, Stethoscope, Package, DoorOpen, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Hammer size={28} />,
    title: 'Tenant Improvements',
    description: 'Interior build-outs, space reconfigurations, and upgrades for new or existing tenants.'
  },
  {
    icon: <Layout size={28} />,
    title: 'Office Build-Outs',
    description: 'Modern office environments with collaborative spaces, conference rooms, and executive suites.'
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Retail Remodels',
    description: 'High-impact retail renovations that enhance customer experience and brand presence.'
  },
  {
    icon: <Stethoscope size={28} />,
    title: 'Medical & Dental',
    description: 'Specialized build-outs for clinics and practices with compliance and patient comfort in mind.'
  },
  {
    icon: <Package size={28} />,
    title: 'Warehouse & Light Industrial',
    description: 'Improvements for storage, light manufacturing, and logistics efficiency.'
  },
  {
    icon: <DoorOpen size={28} />,
    title: 'Façade & Entry Upgrades',
    description: 'Exterior enhancements that improve curb appeal and accessibility.'
  },
];

const process = [
  { step: '01', title: 'Discovery & Scope', text: 'We align on goals, budget, and timeline to define a clear scope of work.' },
  { step: '02', title: 'Design & Permitting', text: 'We coordinate plans, permits, and approvals to keep your project compliant.' },
  { step: '03', title: 'Build & Manage', text: 'Our team executes with tight project management to minimize disruption.' },
  { step: '04', title: 'Quality & Closeout', text: 'Final inspections, punch lists, and turnover with warranty documentation.' },
];

const industries = [
  'Office & Corporate',
  'Retail & Restaurants',
  'Medical & Dental',
  'Light Industrial & Warehouse',
  'Hospitality & Mixed-Use',
  'Education & Community Spaces',
];

const CommercialWork: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Commercial Services</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-5">
            Commercial Work & Build-Outs
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From tenant improvements to full-scale build-outs, Colosseum Construction delivers commercial spaces that
            perform, look exceptional, and stay on schedule.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-orange-50 text-orange-600 inline-flex p-3 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Industries & Benefits */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-12 md:p-16 mb-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">Trusted Across Industries</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                We partner with owners, developers, and operators to deliver commercial projects that balance aesthetics,
                performance, and compliance. Our team coordinates permitting, scheduling, and on-site management to keep
                business disruption low.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Why Colosseum Construction?</h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 mt-0.5" /> Dedicated project management and clear communication</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 mt-0.5" /> Schedule-sensitive execution to minimize downtime</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 mt-0.5" /> Permitting and code compliance handled end to end</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 mt-0.5" /> Quality workmanship with warranty-backed deliverables</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Process</h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A clear, proven process to keep your commercial project on track from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="text-orange-600 font-bold text-lg mb-2">{item.step}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-10 md:p-14 text-center border border-slate-100">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Ready to discuss your commercial project?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            From offices to retail and beyond, we deliver commercial spaces that work for your business. Let’s plan your next build-out.
          </p>
          <div className="flex justify-center">
            <a 
              href="/#contact"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommercialWork;

