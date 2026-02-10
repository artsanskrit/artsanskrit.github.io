import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Portfolio } from './sections/Portfolio';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Portfolio />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
