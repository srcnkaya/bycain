import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-luxury-slate hover:text-luxury-platinum transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-luxury-platinum/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">1. Introduction</h2>
            <p>
              Welcome to ByCain ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our digital products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">2. Information We Collect</h2>
            <p className="mb-3">We collect information that you provide directly to us when you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Create an account or make a purchase</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Contact us with inquiries or feedback</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="mt-3">
              This information may include your name, email address, payment information, and any other details you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send you transactional emails and order confirmations</li>
              <li>Improve our products and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Detect and prevent fraud or unauthorized activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">4. Payment Processing</h2>
            <p>
              All payment transactions are processed securely through Lemon Squeezy, our trusted payment processor. We do not store your credit card information on our servers. Please refer to Lemon Squeezy's privacy policy for information about how they handle your payment data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">5. Data Sharing and Disclosure</h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service providers who assist us in operating our business</li>
              <li>Payment processors to complete transactions</li>
              <li>Law enforcement or regulatory agencies when required by law</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Object to processing of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">8. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us through the contact information provided on our website.
            </p>
          </section>

          <p className="text-sm text-luxury-platinum/50 pt-8 border-t border-luxury-gray">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
