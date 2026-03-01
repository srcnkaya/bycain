import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Terms of Service"
        description="ByCain terms covering custom website services, store purchases, payments, licensing, and support."
        path="/terms"
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

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Terms of Service</h1>

          <div className="space-y-8 text-luxury-platinum/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">1. Acceptance of Terms</h2>
              <p>
                By using the ByCain website, contacting us for services, or purchasing from our store, you agree to
                these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">2. Services and Products</h2>
              <p className="mb-3">ByCain provides:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom website design and development services</li>
                <li>Ready-made digital products sold through our store</li>
                <li>Optional maintenance and support services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">3. Custom Project Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project scope, deliverables, timeline, and pricing are defined in a separate proposal or agreement.</li>
                <li>Client delays in content, assets, or feedback may affect delivery timelines.</li>
                <li>Revisions are handled based on the package or agreement terms.</li>
                <li>Final files, access, or launch handoff occurs after agreed payments are completed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">4. Store Purchases and License</h2>
              <p className="mb-3">For digital products purchased from our store:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You receive a non-exclusive, non-transferable license to use the product in permitted projects.</li>
                <li>You may edit and customize products for your own or client projects.</li>
                <li>You may not resell, redistribute, or repackage products in original or modified form.</li>
                <li>You may not claim ownership of the original product assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">5. Payments</h2>
              <p>
                Payments are processed through Lemon Squeezy or as otherwise agreed in project proposals. Prices may be
                updated at any time. You are responsible for providing accurate billing information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">6. Refunds</h2>
              <p className="mb-3">
                Due to the digital nature of store products, purchases are generally non-refundable unless required by
                law or approved at our discretion.
              </p>
              <p>
                For custom projects, refund terms are defined by the signed proposal/agreement and project stage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">7. Intellectual Property</h2>
              <p>
                All website content, branding, and original assets remain the property of ByCain unless explicitly
                transferred in writing. Client-owned materials remain the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">8. Prohibited Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our site or products for unlawful purposes</li>
                <li>Attempt unauthorized access to systems, services, or accounts</li>
                <li>Resell or distribute store products in violation of license terms</li>
                <li>Engage in fraudulent or abusive conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">9. Warranty Disclaimer</h2>
              <p>
                Services and digital products are provided on an &quot;as is&quot; and &quot;as available&quot; basis unless explicitly stated
                otherwise in writing. We do not guarantee uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, ByCain is not liable for indirect, incidental, or consequential
                damages arising from use of our services, products, or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the site or services after updates means
                you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-slate mb-4">12. Contact</h2>
              <p>
                For questions about these Terms, contact{' '}
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

export default Terms;
