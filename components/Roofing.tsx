import React from 'react';
import { Home, Shield, CheckCircle, Award, Wrench, Droplets, Wind, Sun } from 'lucide-react';

const Roofing: React.FC = () => {
  return (
    <section id="roofing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Services</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Roofing Services</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6">Looking for a Greenwood Roofing Company?</h4>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              When you need to protect the most valuable investment you own, a good roof that doesn't leak makes all the difference in the world. Your roof can provide energy conservation, or be a drain on your pocketbook. It can make your home look old and haggard, or bright and shiny. It can dress up your home, or be a source of headaches.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Colosseum Construction is a reputable roofing company serving the Indianapolis area and surrounding counties. Whether you need asphalt shingles, slate, cedar, metal, or flat roofing, Colosseum Construction roofing services can do it all. Our crews are friendly, and do their job quickly and efficiently. You'll like doing business with us. We are licensed and bonded contractor with the City of Indianapolis and are a Preferred Contractor with Owens Corning.
            </p>
          </div>

          {/* Roofing Materials Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">Greenwood Roofing Company Services</h4>
            
            {/* Asphalt Shingles */}
            <div className="bg-slate-50 rounded-lg p-8 mb-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Home size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Asphalt Shingles</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Colosseum Construction has a wide range of asphalt shingle products, which look like slate, cedar shakes, classic dimensional shingles, as well as the traditional popular strip shingles. All shingles include warranties that range from 20 years to lifetime.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Asphalt manufacturers estimate that 80% of homes in America have asphalt shingles. A roof covers approximately 40% of the average home's exterior. Appearance, resilience and durability are key factors to consider when choosing an Asphalt. Asphalt with fiberglass also increases fire and wind resistance with insulating benefits. These shingles are economical, weigh less, are simple to install and maintain.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Colosseum has a relationship with Owens Corning and GAF, as well as other manufacturers. We are an Owens Corning preferred contractor in Indiana.
              </p>
            </div>

            {/* Slate */}
            <div className="bg-slate-50 rounded-lg p-8 mb-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Shield size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Slate</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Slate is a traditional roof found in some homes in Indiana. It is more prevalent in older neighborhoods in Indianapolis. Slate is rock that has been quarried out of the ground, and in many cases will last longer than your house. Natural roofing slate has been around for more than a thousand years and is still a choice for many magnificent buildings built today.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                When it comes to roofing, nothing approaches the magnificence of natural slate. Created by the forces of nature over 500 million years ago, slate exudes tradition, majesty, and character. Natural slate is at the top of the list of leading architectural design firms around the country.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Slate has a beautiful, natural appearance and is considered by many as one of the finest choices you can make. The lifetime of a slate roof makes it one of the most economical roofs, because you can divide your costs over a longer time frame.
              </p>
            </div>

            {/* Cedar Shakes */}
            <div className="bg-slate-50 rounded-lg p-8 mb-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Sun size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Cedar Shakes</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Cedar shakes are one of the more traditional roof shingles available and, aesthetically one of the most beautiful. They are a natural product with high insulation value. They remain cool so they don't heat up your house.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Wood is the only naturally produced, renewable structural material. It requires the least amount of energy to manufacture and has the lowest impact on air and water quality. It is a roofing material of choice by many leading architectural firms.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Colosseum Construction holds to high standards to ensure proper cedar shake roof installations.
              </p>
            </div>

            {/* Metal */}
            <div className="bg-slate-50 rounded-lg p-8 mb-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full text-white">
                  <Wind size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Metal</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Metal roofs are growing in popularity and a whole new array of metal roofing materials have recently become available. Metal roofs are a little more expensive than others, but they last a very long time. People like the looks of metal.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Many metal roofs are considered "Cool" roofing products, since they don't absorb heat like other roofing products. They mainly absorb at a lower rate. They have a very long life span. Metal roofs are a great choice for residential homeowners and commercial building owners alike.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Their primary benefit is their aesthetic beauty and long life. They are a high tech answer to the need for durable, fire-resistant, lightweight roofing that looks at home on a house, while effectively reflecting heat from the sun. Colosseum Construction has experience with metal.
              </p>
            </div>
          </div>

          {/* Owens Corning Section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 mb-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Award size={48} className="text-white" />
              <h4 className="text-2xl font-serif font-bold">Owens Corning Preferred Contractor</h4>
            </div>
            <p className="text-lg mb-4 leading-relaxed">
              Colosseum Construction is proud to be an Owens Corning Preferred Contractor in the Central Indiana Area. This designation means:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Certified installation of Owens Corning premium roofing products</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Extended warranty coverage on materials and workmanship</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Access to the latest roofing technologies and innovations</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Ongoing training and certification in best roofing practices</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Why Choose Colosseum for Your Roofing Needs?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Licensed & Insured</h5>
                  <p className="text-slate-600">Fully licensed, bonded, and insured contractors with comprehensive coverage for your protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Insurance Expertise</h5>
                  <p className="text-slate-600">We work directly with insurance companies to ensure claims are properly filed and fully covered.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sun className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Quality Materials</h5>
                  <p className="text-slate-600">We use only premium-grade roofing materials from trusted manufacturers like Owens Corning.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Expert Craftsmanship</h5>
                  <p className="text-slate-600">Skilled roofers with years of experience ensuring proper installation and lasting results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Our Roofing Process</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Free Inspection & Estimate</h5>
                  <p className="text-slate-600">Our certified inspectors thoroughly examine your roof, identify any issues, and provide a detailed written estimate with no obligation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Insurance Coordination</h5>
                  <p className="text-slate-600">If storm damage is involved, we work with your insurance company to document damage, file claims, and ensure proper coverage.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Material Selection</h5>
                  <p className="text-slate-600">We help you choose the right roofing materials based on your home's style, climate, and budget. Premium options available.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Professional Installation</h5>
                  <p className="text-slate-600">Our experienced crew installs your new roof following manufacturer specifications and industry best practices for optimal performance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Final Inspection & Warranty</h5>
                  <p className="text-slate-600">We conduct a thorough final inspection, clean up the work site, and provide warranty documentation for your peace of mind.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-50 rounded-lg p-8 text-center border-t-4 border-orange-500">
            <div className="flex justify-center mb-4">
              <Home size={48} className="text-orange-500" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Contact Our Greenwood Roofing Company Today!
            </h4>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Please browse our portfolio of pictures for some of our metal roof installations. Colosseum Construction can install almost any type of metal roof you might want. Contact our Greenwood Roofing Company today for any questions you may have.
            </p>
            <a 
              href="/#contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roofing;

