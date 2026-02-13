import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Story } from "@/sections/Story";
import { Portfolio } from "@/sections/Portfolio";
import { Skills } from "@/sections/Skills";
import { Services } from "@/sections/Services";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Story />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
