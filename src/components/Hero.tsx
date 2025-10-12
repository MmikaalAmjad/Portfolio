import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-4 sm:px-8 md:px-12 py-16">
      {/* Floating subtle shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-16 right-4 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 animate-fade-in-up w-full max-w-6xl mx-auto">
        {/* Left Side – Text */}
        <div className="text-center md:text-left max-w-lg space-y-6 px-2 sm:px-0">
          <span className="px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20">
            Software Engineer 
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-grotesk leading-tight">
            Muhammad Mikaal Amjad
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted font-inter leading-relaxed">
            Building scalable applications with cutting-edge technologies.
            Specializing in full-stack development, cloud solutions, and data engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              onClick={scrollToSkills}
              className="px-6 sm:px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 transition-all duration-300 text-white font-medium shadow-soft hover:shadow-glow flex items-center justify-center gap-2"
            >
              View My Skills
              <ArrowDown className="h-5 w-5" />
            </button>

            <button
              className="px-6 sm:px-8 py-3 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 font-medium transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side – Image */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-glow">
          <img
            src="/Picture.jpg"
            alt="Muhammad Mikaal Amjad"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted" />
      </div>
    </section>
  );
};

export default Hero;
