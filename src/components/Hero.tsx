import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-4 sm:px-8 md:px-12 py-16">
      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 90%)",
        }}
      ></div>

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
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm text-primary rounded-full text-xs sm:text-sm font-medium border border-white/10 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Software Engineer @ Devsinc
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-grotesk">
            <span className="bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent">
              Muhammad Mikaal
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Amjad
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted font-inter leading-relaxed">
            Building things that scale. Shipping things that matter.
            Full-stack engineering across backend services, cloud infrastructure, and data pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              onClick={scrollToSkills}
              className="group px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:brightness-110 transition-all duration-300 text-white font-medium shadow-soft hover:shadow-glow flex items-center justify-center gap-2"
            >
              View My Skills
              <ArrowDown className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>

            <button
              className="px-6 sm:px-8 py-3 rounded-lg border border-white/15 text-foreground hover:border-secondary hover:text-secondary hover:bg-secondary/5 font-medium transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side – Image */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-70 blur-md animate-pulse-slow"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-glow">
            <img
              src="/Picture.jpg"
              alt="Muhammad Mikaal Amjad"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
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
