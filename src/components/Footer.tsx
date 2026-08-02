import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-4">
            <a
              href="mailto:mikaal10802@gmail.com"
              aria-label="Email"
              className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-mikaal-amjad-678a91286"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/MmikaalAmjad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl font-semibold font-grotesk bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">Muhammad Mikaal Amjad</p>
            <p className="text-muted-foreground font-inter">
              Software Engineer
            </p>
          </div>

          <p className="text-sm text-muted-foreground font-inter">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
