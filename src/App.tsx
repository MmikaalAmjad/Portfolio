import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievments";
import Contact from "./components/Contact";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <Hero />
      <About/>

      <Skills />
      <Projects/>
      <Experience/>
      <Certifications/>
      <Achievements/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Index;
