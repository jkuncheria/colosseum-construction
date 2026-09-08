import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="py-24 bg-white px-6 md:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-3 text-sm">Legal</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-500">Last Updated: August 2026</p>
          </div>

          <div className="max-w-none text-slate-700 leading-relaxed">

            <p className="text-xl text-slate-800 mb-8">
              Welcome to Colosseum Construction. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using the Colosseum Construction website or any of our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">2. Services</h2>
            <p className="mb-4">Colosseum Construction provides residential and commercial construction and remodeling services. Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>New home construction</li>
              <li>Home remodeling and additions</li>
              <li>Roofing</li>
              <li>Siding</li>
              <li>Windows and doors</li>
              <li>Commercial construction and build-outs</li>
            </ul>
            <p className="mb-4">Service availability, pricing, and scope may vary. We reserve the right to modify our services at any time.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">3. Consultations and Scheduling</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Booking:</strong> Consultations can be scheduled by phone, email, or through our website contact form.</li>
              <li><strong>Confirmation:</strong> All appointments are subject to confirmation by our team.</li>
              <li><strong>Cancellation:</strong> We request at least 24 hours notice for cancellations or rescheduling.</li>
              <li><strong>Access:</strong> Please ensure the property is accessible at the scheduled appointment time.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">4. Estimates, Pricing, and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Estimates:</strong> All quotes are estimates based on the information available at the time. Final pricing may change based on site conditions, material costs, and any changes to the scope of work.</li>
              <li><strong>Contracts:</strong> Work begins only after a written agreement is signed by both parties.</li>
              <li><strong>Payment:</strong> Payment terms, including any deposit and draw schedule, are set out in your signed agreement.</li>
              <li><strong>Change Orders:</strong> Any change to the agreed scope of work must be documented in writing and may affect the price and timeline.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">5. Permits, Warranties, and Workmanship</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Permits:</strong> We obtain the permits required for the work described in your agreement unless stated otherwise in writing.</li>
              <li><strong>Workmanship:</strong> Our work is warranted as described in your signed agreement. Manufacturer warranties on materials and products are provided by the manufacturer, not by us.</li>
              <li><strong>Pre-existing Conditions:</strong> We are not responsible for pre-existing damage, code violations, or hidden conditions discovered during the course of work. Such conditions may require a change order to address.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">6. Project Timelines</h2>
            <p className="mb-4">Estimated timelines are good-faith projections. Weather, material availability, permitting, inspections, and other factors outside our control may affect the schedule. We will keep you informed of any material changes to your project timeline.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">7. SMS/Text Message Terms</h2>
            <p className="mb-4">By opting in to receive SMS/text messages from Colosseum Construction, you agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Program Description:</strong> You consent to receive automated and non-automated text messages related to your inquiry, including appointment confirmations, reminders, project and service updates, responses to your questions, and account and scheduling information.</li>
              <li><strong>Message Frequency:</strong> Message frequency varies based on your interactions with us and your preferences.</li>
              <li><strong>Message and Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and plan.</li>
              <li><strong>Opt-Out:</strong> You may opt out at any time by replying STOP to any message. You will receive a confirmation message and will no longer receive text messages from us.</li>
              <li><strong>Rejoining:</strong> If you opt out and later want to receive messages again, you may opt back in by submitting the contact form on our website or by contacting us at (317) 300-9813.</li>
              <li><strong>Help:</strong> For help, reply HELP to any message or contact us at (317) 300-9813 or lorne@colosseumconstruction.com.</li>
              <li><strong>Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p className="mb-4">
              For details on how we handle the information you provide, see our{' '}
              <Link to="/privacy-policy" className="text-orange-600 hover:underline font-medium">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">8. Website Use</h2>
            <p className="mb-4">When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Copy, reproduce, or distribute any content without permission</li>
              <li>Submit false or misleading information</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">9. Intellectual Property</h2>
            <p className="mb-4">All content on this website, including text, graphics, logos, images, and software, is the property of Colosseum Construction or its content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by law, Colosseum Construction shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services or website. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">11. Indemnification</h2>
            <p className="mb-4">You agree to indemnify and hold harmless Colosseum Construction, its owners, employees, and agents from any claims, damages, losses, or expenses arising out of your violation of these Terms of Service or your use of our services.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">12. Governing Law</h2>
            <p className="mb-4">These Terms of Service shall be governed by and construed in accordance with the laws of the State of Indiana, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Johnson County, Indiana.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">13. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">14. Severability</h2>
            <p className="mb-4">If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">15. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
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

export default TermsOfService;
