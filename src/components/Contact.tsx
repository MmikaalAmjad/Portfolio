import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0A1628] text-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-blue-100">
            Get in Touch
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto font-inter">
            Let’s connect! Whether you have a project idea, an opportunity, or just want to say hi — I’d love to hear from you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-blue-400" />
              <a
                href="mailto:mikaal10802@gmail.com"
                className="text-blue-100 hover:text-blue-300 transition-colors duration-200"
              >
                mikaal10802@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-400" />
              <a
                href="tel:+923284822228"
                className="text-blue-100 hover:text-blue-300 transition-colors duration-200"
              >
                +92 328 4822228
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="h-6 w-6 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/muhammad-mikaal-amjad-678a91286"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-blue-300 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Github className="h-6 w-6 text-blue-400" />
              <a
                href="https://github.com/MmikaalAmjad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-blue-300 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <p className="text-blue-100">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Right: Message */}
          <div className="text-blue-300 font-inter text-lg leading-relaxed bg-[#101C34] p-8 rounded-xl border border-blue-900/40 shadow-md">
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. 
              Whether you're looking for a developer to bring your vision to life or just want to network, 
              feel free to reach out — I’d love to connect!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
