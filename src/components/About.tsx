
const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#0A1628] text-white overflow-hidden"
    >
      {/* Subtle background glow elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div
          className="absolute bottom-20 right-16 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/Picture.jpg"
            alt="Muhammad Mikaal Amjad"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border border-blue-800/30 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* About Text */}
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-blue-100">
            About Me
          </h2>

          <p className="text-lg text-blue-200 leading-relaxed font-inter">
            Full-stack <span className="text-blue-400 font-semibold">Software Engineer at Devsinc</span>,
            building production systems across backend services, data engineering, and frontend
            development. I've shipped geospatial data pipelines, AI-integrated platforms, graph
            database architectures, and end-to-end web applications for US-based enterprise clients.
          </p>

          <p className="text-lg text-blue-200 leading-relaxed font-inter">
            I care about clean architecture, systems that don't break at scale, and code that
            future-me doesn't have to apologise for. My approach combines analytical thinking,
            clean design, and collaborative teamwork to deliver efficient, reliable software.
          </p>

          <p className="text-lg text-blue-200 leading-relaxed font-inter">
            Beyond development, I’m constantly exploring emerging technologies — 
            from cloud engineering to modern DevOps pipelines — aiming to grow into a
            well-rounded engineer who can design, build, and deploy high-quality systems end-to-end.
          </p>

          <div className="pt-4">
            <a
              href="/Muhammad Mikaal Amjad Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white font-medium rounded-lg shadow-soft transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
