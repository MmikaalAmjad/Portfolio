import { Briefcase, Code2, Database, Cloud } from "lucide-react";

const experiences = [
{
    role: "Associate Software Engineer",
    company: "DEVSINC",
    duration: "Apr 2025- Present",
    description:
      "Worked on geospacial data, python backend, fastapi, Azure services (Email, Blob storage, Devops, Data Factory), MSSQL, Apache Airflow, Neo4j",
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
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-blue-100">
            Experience
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto font-inter">
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
                <div className="absolute -left-[1.2rem] top-2 w-5 h-5 rounded-full bg-blue-800 border-2 border-blue-400 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Card */}
                <div className="bg-[#101C34] border border-blue-900/30 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-blue-900/40">
                      <Icon className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-100">{exp.role}</h3>
                      <p className="text-sm text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-300 mb-2">{exp.duration}</p>
                  <p className="text-blue-200 text-sm leading-relaxed">{exp.description}</p>
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
