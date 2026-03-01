import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How ByCain collects, uses, and protects personal information for website services and store purchases."
        path="/privacy"
      />
      <div className="min-h-screen bg-luxury-black text-luxury-white pt-40 pb-20 px-4 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-luxury-slate hover:text-luxury-platinum transition-colors mb-8 mt-6 relative z-0"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </a>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-luxury-platinum/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">1. Overview</h2>
              <p>
                This Privacy Policy explains how ByCain (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects
                personal information when you visit our website, contact us for custom website services, or purchase
                ready-made products through our store.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact details (name, email, business information)</li>
                <li>Project details you share for proposals and service inquiries</li>
                <li>Purchase and transaction data from store orders</li>
                <li>Technical data such as browser type, pages visited, and analytics events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">3. How We Use Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to inquiries and prepare custom project proposals</li>
                <li>Deliver purchased digital products and transaction confirmations</li>
                <li>Improve website performance, user experience, and service quality</li>
                <li>Protect against abuse, fraud, and unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">4. Payments and Store Orders</h2>
              <p>
                Payments are processed by Lemon Squeezy. We do not store full payment card details on our servers.
                Please review Lemon Squeezy&apos;s policy for details about their data handling and security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">5. Analytics and Cookies</h2>
              <p>
                We use analytics and cookies to understand site usage (for example, CTA clicks and page interactions)
                and to improve conversion performance. You can adjust cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">6. Data Sharing</h2>
              <p className="mb-3">We may share information with trusted providers that help us run the business, such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processors</li>
                <li>Hosting and analytics providers</li>
                <li>Legal or regulatory authorities when required by law</li>
              </ul>
              <p className="mt-3">We do not sell your personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">7. Data Retention and Security</h2>
              <p>
                We keep information only as long as needed for business, legal, and operational purposes. We use
                reasonable technical and organizational safeguards, but no online system can be guaranteed 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">8. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have rights to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion</li>
                <li>Object to or limit certain processing</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">9. Third-Party Links</h2>
              <p>
                Our site may contain links to third-party websites or platforms. We are not responsible for their
                privacy practices and recommend reviewing their policies directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">10. Policy Updates</h2>
              <p>
                We may update this policy from time to time. Updated versions will be posted on this page with a
                revised date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">11. Contact</h2>
              <p>
                For privacy requests or questions, contact us at{' '}
                <a href="mailto:info@bycain.com" className="text-luxury-slate hover:text-luxury-platinum underline">
                  info@bycain.com
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-luxury-platinum/50 pt-8 border-t border-luxury-gray">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
