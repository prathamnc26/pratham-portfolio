import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="relative min-h-screen text-white bg-gradient-to-br from-[#050505] via-[#0b0b1f] to-black">

      {/* 🌈 Global ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-40%] right-[-20%] w-[50vw] h-[50vw] bg-blue-500/10 blur-[160px] rounded-full" />
      </div>

      {/* App content */}
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;