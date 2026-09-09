import React, { useState } from 'react';
import { Link } from 'react-router';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactProps {
  /** Render the section heading as the page h1 and drop the anchor id.
   *  The homepage embeds this below its own h1, so it stays an h2 there. */
  standalone?: boolean;
}

const Contact: React.FC<ContactProps> = ({ standalone = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', smsOptIn: false });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const payload = {
        ...formData,
        clientId: 'RL-JDJEDGHN',
        images: [],
      };

      const res = await fetch('https://www.renolens.com/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      setStatusMessage({ type: 'success', text: 'Thank you! Your request has been sent. We will be in touch shortly.' });
      setFormData({ name: '', email: '', phone: '', message: '', smsOptIn: false });
    } catch (error) {
      console.error(error);
      setStatusMessage({ type: 'error', text: 'Sorry, something went wrong. Please try again or call us at (317) 300-9813.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <span className="block text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Contact Us</span>
            {standalone ? (
              <h1 className="text-4xl font-serif font-bold text-white mb-8">Ready to Build Your Legacy?</h1>
            ) : (
              <h2 className="text-4xl font-serif font-bold text-white mb-8">Ready to Build Your Legacy?</h2>
            )}
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
                  <p className="text-slate-400">(317) 300-9813</p>
                  <p className="text-slate-500 text-sm">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-slate-900 p-4 rounded-lg text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-slate-400">lorne@colosseumconstruction.com</p>
                  <p className="text-slate-500 text-sm">Online support 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-slate-900 p-4 rounded-lg text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Office</h4>
                  <p className="text-slate-400">500 North Meridian Street<br/>Greenwood, Indiana 46143</p>
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

              {/* SMS Opt-in Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsOptIn"
                    checked={formData.smsOptIn}
                    onChange={(e) => setFormData(prev => ({ ...prev, smsOptIn: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded border border-slate-300 text-orange-500 focus:ring-orange-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    I agree to receive SMS/text messages from Colosseum Construction for appointment confirmations, reminders, and service updates. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe. View our{' '}
                    <Link to="/privacy-policy" className="text-orange-600 hover:underline font-medium">Privacy Policy</Link>
                    {' '}and{' '}
                    <Link to="/terms-of-service" className="text-orange-600 hover:underline font-medium">Terms of Service</Link>.
                  </span>
                </label>
              </div>

              <button
                type="submit" 
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-slate-900 font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Send size={18} className="animate-pulse" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Request
                    <Send size={18} />
                  </>
                )}
              </button>

              {statusMessage && (
                <div
                  className={`p-4 rounded-md text-sm ${
                    statusMessage.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
