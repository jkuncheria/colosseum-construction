import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="py-24 bg-white px-6 md:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Legal</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last Updated: August 2026</p>
          </div>

          <div className="max-w-none text-slate-700 leading-relaxed">

            <p className="text-xl text-slate-800 mb-8">
              Colosseum Construction ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Personal Information</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Fill out our contact form</li>
              <li>Request a free consultation, quote, or estimate</li>
              <li>Apply for or inquire about financing</li>
              <li>Contact us via phone, email, or text message</li>
            </ul>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address and project details</li>
              <li>Photos or plans you choose to share with us</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Schedule and confirm consultations and appointments</li>
              <li>Send appointment reminders and project updates</li>
              <li>Prepare estimates, contracts, and invoices</li>
              <li>Send promotional offers and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">3. SMS/Text Message Communications</h2>

            <div className="bg-slate-50 border-l-4 border-orange-500 rounded-r-lg p-6 mb-6">
              <p className="font-semibold text-slate-900 mb-3">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
              </p>
              <p className="mb-3">
                Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p>
                Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services.
              </p>
            </div>

            <p className="mb-4">If you opt in to receive SMS/text messages from us, you agree to receive text messages regarding:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Appointment confirmations and reminders</li>
              <li>Service updates and notifications</li>
              <li>Responses to your inquiries</li>
              <li>Account and scheduling information</li>
            </ul>
            <p className="mb-4"><strong>Message Frequency:</strong> Message frequency varies based on your interactions with us and your preferences.</p>
            <p className="mb-4"><strong>Message and Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and plan.</p>
            <p className="mb-4"><strong>Opt-Out:</strong> You may opt out of receiving text messages at any time by replying STOP to any message. After opting out, you will receive a confirmation message and will no longer receive text messages from us unless you opt in again.</p>
            <p className="mb-4"><strong>Help:</strong> For help, reply HELP to any message or contact us at (317) 300-9813 or lorne@colosseumconstruction.com.</p>
            <p className="mb-4">We will not share your phone number with third parties for their marketing purposes without your explicit consent.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., payment processors, CRM systems, email services)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">5. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">6. Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Opt out of SMS/text messages by replying STOP</li>
            </ul>
            <p className="mb-4">To exercise these rights, please contact us using the information provided below.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">8. Third-Party Links</h2>
            <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="bg-slate-50 rounded-xl p-6 mt-4 mb-8">
              <p className="font-bold text-slate-900 mb-2">Colosseum Construction</p>
              <p>500 North Meridian Street</p>
              <p>Greenwood, Indiana 46143</p>
              <p className="mt-2">
                <strong>Phone:</strong> <a href="tel:3173009813" className="text-orange-600 hover:underline">(317) 300-9813</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:lorne@colosseumconstruction.com" className="text-orange-600 hover:underline">lorne@colosseumconstruction.com</a>
              </p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              to="/"
              className="inline-flex items-center text-orange-600 hover:underline font-medium"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
