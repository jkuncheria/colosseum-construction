import React from 'react';
import GoogleReviewsFeed from './GoogleReviewsFeed';
import reviewsData from '../data/reviews.json';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Testimonials</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">See What Our Clients Say</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <GoogleReviewsFeed data={reviewsData} accent="#f97316" />
      </div>
    </section>
  );
};

export default Testimonials;
