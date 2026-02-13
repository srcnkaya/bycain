import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
          Terms of Service
        </h1>

        <div className="space-y-8 text-luxury-platinum/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using ByCain ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">2. Digital Products</h2>
            <p className="mb-3">
              We offer digital products including templates, UI kits, and other digital assets ("Products"). By purchasing our Products, you acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All sales are final and non-refundable unless otherwise stated</li>
              <li>Products are delivered digitally via download or email</li>
              <li>You will receive a license to use the Product as specified in the license agreement</li>
              <li>Products are provided "as is" without warranties of any kind</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">3. License and Usage Rights</h2>
            <p className="mb-3">Upon purchase, you are granted a non-exclusive, non-transferable license to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Product for personal or commercial projects</li>
              <li>Modify and customize the Product for your needs</li>
              <li>Create end products for yourself or clients</li>
            </ul>
            <p className="mt-3 mb-3">You may NOT:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Resell, redistribute, or share the Product in its original or modified form</li>
              <li>Claim ownership or authorship of the Product</li>
              <li>Use the Product to create competing products or services</li>
              <li>Share your account credentials with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">4. Payment and Pricing</h2>
            <p>
              All payments are processed securely through Lemon Squeezy. Prices are listed in USD and may be subject to change without notice. You agree to provide current, complete, and accurate payment information for all purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">5. Refund Policy</h2>
            <p>
              Due to the nature of digital products, all sales are final. Refunds may be issued at our sole discretion in cases of:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Technical issues preventing product download or access</li>
              <li>Product significantly different from description</li>
              <li>Duplicate purchases made in error</li>
            </ul>
            <p className="mt-3">
              Refund requests must be submitted within 14 days of purchase and include a valid reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">6. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed on this site are the property of ByCain or their respective owners. Unauthorized use of any materials may violate copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">7. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">8. Prohibited Activities</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Engage in any fraudulent or deceptive practices</li>
              <li>Reverse engineer or decompile any Products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">9. Disclaimer of Warranties</h2>
            <p>
              The Service and Products are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">10. Limitation of Liability</h2>
            <p>
              In no event shall ByCain be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service or Products, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">11. Updates and Support</h2>
            <p>
              We may provide updates to Products at our discretion. Support is provided on a best-effort basis and is not guaranteed. We reserve the right to discontinue Products or support at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">12. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Service at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ByCain operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-luxury-slate mb-4">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through the contact information provided on our website.
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

export default Terms;
