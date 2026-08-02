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
    <section id="projects" className="py-24 px-6 bg-[#0A1628] text-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-100 font-grotesk">
            Projects
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto font-inter">
            A showcase of real-world applications that demonstrate creativity,
            innovation, and technical depth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-blue-900/30 bg-[#101C34] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-2xl font-semibold font-grotesk text-blue-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-blue-300 text-sm leading-relaxed mb-4 font-inter">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-950/40 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
