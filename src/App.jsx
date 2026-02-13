import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Shop />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
