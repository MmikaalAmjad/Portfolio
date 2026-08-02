import {  Code2, Cloud } from "lucide-react";

const experiences = [
{
    role: "Software Engineer",
    company: "DEVSINC",
    duration: "Apr 2025 - Present",
    description:
      "Building production systems for US-based enterprise clients across backend services, data engineering, and frontend development — geospatial data pipelines, AI-integrated platforms, and graph database architectures. Working with FastAPI, Django REST Framework, Apache Airflow, Neo4j, MSSQL, PostgreSQL, and Azure services (Blob Storage, Data Factory, Communication Services, Entra ID, DevOps Pipelines).",
    icon: Cloud,
  },
  {
    role: "Free Lance Web Developer",
    company: "Zoom Autos",
    duration: "Sep 2024 – Feb 2025",
    description:
      "Developed complete website",
    icon: Code2,
  },
  
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0A1628] text-white relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase font-inter">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-blue-300/80 text-lg max-w-2xl mx-auto font-inter">
            A journey through my hands-on experience and technical growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-900/50 pl-8 ml-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="mb-12 relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[1.65rem] top-2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 border-2 border-blue-300 shadow-glow group-hover:scale-125 transition-transform duration-300"></div>

                {/* Card */}
                <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-white/0 group-hover:from-blue-400/40 group-hover:to-blue-600/10 transition-all duration-500">
                  <div className="bg-[#0D1A30]/90 backdrop-blur-sm rounded-xl p-6 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-950/50 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5">
                        <Icon className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-100">{exp.role}</h3>
                        <p className="text-sm text-blue-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-blue-300/80 mb-2">{exp.duration}</p>
                    <p className="text-blue-200/90 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Faint Gradient Line (for style) */}
      <div className="absolute top-0 left-5 w-1 h-full bg-gradient-to-b from-blue-800/70 via-blue-500/40 to-transparent"></div>
    </section>
  );
};

export default Experience;
