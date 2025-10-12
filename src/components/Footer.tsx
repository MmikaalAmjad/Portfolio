import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-4">
            <a 
              href="mailto:mikaal10802@gmail.com" 
              aria-label="Email"
              className="h-10 w-10 rounded-md border border-input bg-background flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-mikaal-amjad-678a91286" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-md border border-input bg-background flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/MmikaalAmjad" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="h-10 w-10 rounded-md border border-input bg-background flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-xl font-semibold font-['Space_Grotesk']">Muhammad Mikaal Amjad</p>
            <p className="text-muted-foreground font-['Inter']">
              Software Engineer
            </p>
          </div>

          <p className="text-sm text-muted-foreground font-['Inter']">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
