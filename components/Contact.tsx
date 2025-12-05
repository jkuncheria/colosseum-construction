import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Upload } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    let uploadedImageUrls: string[] = [];

    try {
      if (files && files.length > 0) {
        const uploadForm = new FormData();
        Array.from(files).forEach(file => uploadForm.append('files', file));

        const uploadRes = await fetch('https://www.renolens.com/api/contact-form/upload', {
          method: 'POST',
          body: uploadForm,
        });

        if (!uploadRes.ok) {
          throw new Error('File upload failed');
        }

        const uploadData = await uploadRes.json();
        uploadedImageUrls = uploadData.urls || uploadData.images || [];
      }

      const payload = {
        ...formData,
        clientId: 'RL-JDJEDGHN',
        images: uploadedImageUrls,
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
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFiles(null);
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
                <label className="block text-sm font-semibold mb-2">Attachments (images, optional)</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-md cursor-pointer hover:bg-slate-200 transition-colors">
                    <Upload size={16} />
                    <span>Upload Images</span>
                    <input 
                      type="file" 
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {files && files.length > 0 && (
                    <span className="text-sm text-slate-600">{files.length} file(s) selected</span>
                  )}
                </div>
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
