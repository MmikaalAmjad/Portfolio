import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-background px-6 md:px-12">
      {/* Floating subtle shapes for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 animate-fade-in-up">
        
        {/* Left Side – Text Section */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
            Software Engineer | Data & Cloud Solutions Developer | Python Specialist
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground font-grotesk leading-tight">
            Muhammad Mikaal Amjad
          </h1>

          <p className="text-lg md:text-xl text-muted font-inter leading-relaxed">
            Building scalable applications with cutting-edge technologies. 
            Specializing in full-stack development, cloud solutions, and data engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button 
              onClick={scrollToSkills}
              className="px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 transition-all duration-300 text-white font-medium shadow-soft hover:shadow-glow flex items-center gap-2"
            >
              View My Skills
              <ArrowDown className="h-5 w-5" />
            </button>

            <button 
              className="px-8 py-3 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 font-medium transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side – Image Section */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-glow">
          <img
            src="/Picture.jpg" // replace with your actual image path
            alt="Muhammad Mikaal Amjad"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted" />
      </div>
    </section>
  );
};

export default Hero;
