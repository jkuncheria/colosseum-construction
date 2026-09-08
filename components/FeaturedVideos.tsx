import React from 'react';
import { Play } from 'lucide-react';

const FeaturedVideos: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Media</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-5">
            Featured Videos
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Watch our team in action as we transform homes and bring construction projects to life.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/coloseeumvid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/colosseumvid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/colosseumvid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/colosseumvid4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="bg-orange-100 text-orange-600 inline-flex p-4 rounded-full mb-4">
              <Play size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Expert Craftsmanship</h4>
            <p className="text-slate-600 text-sm">
              Watch our skilled team demonstrate precision and expertise in every project.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="bg-orange-100 text-orange-600 inline-flex p-4 rounded-full mb-4">
              <Play size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Quality Materials</h4>
            <p className="text-slate-600 text-sm">
              See the premium materials and products we use to ensure lasting results.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="bg-orange-100 text-orange-600 inline-flex p-4 rounded-full mb-4">
              <Play size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Process</h4>
            <p className="text-slate-600 text-sm">
              Learn about our systematic approach to delivering exceptional results.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-10 md:p-14 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Let us bring the same level of quality and professionalism to your home improvement project.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/#contact"
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+13173009813"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl transition-all hover:bg-white hover:text-orange-600"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;

