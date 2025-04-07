import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contacts";
import GISTools from "./components/GISTools";
import Footer from "./components/footer";
import StarsCanvas from "./components/starBg";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>

        <StarsCanvas />
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <GISTools />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>

      
    </div>
  );
}
