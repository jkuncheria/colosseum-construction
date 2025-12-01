import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will be in touch shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Contact Us</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-8">Ready to Build Your Legacy?</h3>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Whether you have a complete blueprint or just a napkin sketch, we are ready to listen. 
              Contact us today for a free consultation and estimate.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-4 rounded-lg text-orange-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Phone</h4>
                  <p className="text-slate-400">(555) 123-4567</p>
                  <p className="text-slate-500 text-sm">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-slate-900 p-4 rounded-lg text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-slate-400">info@colosseumconstruction.com</p>
                  <p className="text-slate-500 text-sm">Online support 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-slate-900 p-4 rounded-lg text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Office</h4>
                  <p className="text-slate-400">123 Builder's Way, Suite 100<br/>Metropolis, NY 10012</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-8 md:p-10 text-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-slate-900 font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                Send Request
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
