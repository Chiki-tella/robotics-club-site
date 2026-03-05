import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";
import { Blog } from "./components/Blog";
import { JoinCTA } from "./components/JoinCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Team />
        <Events />
        <Gallery />
        <Blog />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}
