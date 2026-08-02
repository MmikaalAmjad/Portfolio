import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0A1628] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase font-inter">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-blue-300/80 text-lg max-w-2xl mx-auto font-inter">
            Let's connect! Whether you have a project idea, an opportunity, or just want to say hi — I'd love to hear from you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left: Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:mikaal10802@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5">
                <Mail className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-blue-100 group-hover:text-blue-300 transition-colors duration-200">
                mikaal10802@gmail.com
              </span>
            </a>

            <a
              href="tel:+923284822228"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5">
                <Phone className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-blue-100 group-hover:text-blue-300 transition-colors duration-200">
                +92 328 4822228
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-mikaal-amjad-678a91286"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5">
                <Linkedin className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-blue-100 group-hover:text-blue-300 transition-colors duration-200">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/MmikaalAmjad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5">
                <Github className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-blue-100 group-hover:text-blue-300 transition-colors duration-200">
                GitHub
              </span>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5">
                <MapPin className="h-5 w-5 text-blue-300" />
              </div>
              <span className="text-blue-100">Lahore, Pakistan</span>
            </div>
          </div>

          {/* Right: Message */}
          <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-white/0">
            <div className="text-blue-300/90 font-inter text-lg leading-relaxed bg-[#0D1A30]/90 backdrop-blur-sm p-8 rounded-xl h-full">
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                Whether you're looking for a developer to bring your vision to life or just want to network,
                feel free to reach out — I'd love to connect!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
