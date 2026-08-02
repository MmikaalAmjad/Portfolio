import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "GeoSphere",
    description:
      "Geospatial data visualisation platform with multi-source ingestion and interactive mapping.",
    tech: ["Next.js", "Python", "Google Maps API"],
    github: "https://github.com/MmikaalAmjad",
  },
  {
    title: "NCAA Analytics",
    description:
      "Live NCAA football data analytics dashboard with real-time statistics and insights.",
    tech: ["Python", "FastAPI", "Next.js 15", "Docker"],
    github: "https://github.com/mikaalamjad-dev/football-suggestion",
  },
  {
    title: "NutriSuggest",
    description:
      "AI-powered personalised meal planning engine driven by an LLM pipeline.",
    tech: ["FastAPI", "Next.js", "LLM"],
    github: "https://github.com/mikaalamjad-dev/meal-suggestion",
  },
  {
    title: "Multi-Source Ingestion",
    description:
      "Financial data pipeline with automated ETL orchestration across multiple data sources.",
    tech: ["Python", "Apache Airflow", "PostgreSQL"],
    github: "https://github.com/mikaalamjad-dev/multi-source-data-ingestion",
  },
  {
    title: "Zoom Autos",
    description:
      "A responsive car delivery and transport platform featuring a dynamic booking system, customer reviews, and real-time vehicle tracking across the UK.",
    tech: ["Node.js", "MongoDB", "Express", "Cloudinary","react js","firebase"],
    github: "https://github.com/MmikaalAmjad/Zoom-Autos",
    live: "https://zoomautos.co.uk",
  },
  {
    title: "Online MatchMaking System",
    description:
      "A matchmaking platform leveraging data-driven algorithms to connect users intelligently. Includes authentication, real-time chat, and secure cloud integration.",
    tech: ["React Native", "Firebase"],
    github: "https://github.com/MmikaalAmjad/Fyp-front-endfinal",
  },
  {
    title: "PerformX Application for DSM",
    description:
      "An enterprise-grade performance monitoring and analytics application developed for DSM. It optimizes operational efficiency through real-time data visualization, alerting, and intelligent reporting features.",
    tech: ["React", "Azure", "Power BI", "FastAPI"],
    github: "https://github.com/MmikaalAmjad/Performx",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0A1628] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase font-inter">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-blue-300/80 text-lg max-w-2xl mx-auto font-inter">
            A showcase of real-world applications that demonstrate creativity,
            innovation, and technical depth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-white/0 hover:from-blue-400/40 hover:to-blue-600/10 transition-all duration-500"
            >
              <div className="h-full bg-[#0D1A30]/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-between transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-950/50 group-hover:-translate-y-1">
                <div>
                  <h3 className="text-2xl font-semibold font-grotesk text-blue-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-blue-300/90 text-sm leading-relaxed mb-4 font-inter">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/[0.04] border border-white/5 text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
