import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import TechStack from './components/TechStack';
import About from './components/About';
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
    '@type': 'WebSite',
    name: 'By Cain',
    url: 'https://www.bycain.com',
    description: 'Premium web templates, UI kits, and digital products for developers and entrepreneurs.'
  };

  return (
    <>
      <SEO
        title="Premium Developer Templates & Digital Products"
        description="Premium templates, UI kits, and digital products for developers and founders. Instant downloads and modern stacks."
        path="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Shop />
      <TechStack />
      <About />
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
