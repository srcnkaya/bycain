import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import StoreCTA from './components/StoreCTA';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import SEO from './components/SEO';

function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ByCain',
    url: 'https://www.bycain.com',
    description: 'Custom website design and development services for businesses that want a premium, high-converting online presence.',
    areaServed: 'Canada',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressCountry: 'CA'
    }
  };

  return (
    <>
      <SEO
        title="Custom Business Websites | ByCain"
        description="We design and build custom websites, landing pages, and redesigns for businesses that want a premium look and better conversions."
        path="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Work />
      <Services />
      <StoreCTA />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Always scroll to top on page load/refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
