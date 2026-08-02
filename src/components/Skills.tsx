import {
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiReact,
  SiReacthookform,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiDocker,
  SiApacheairflow,
  SiScikitlearn,
  SiQgis,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiAmazonwebservices,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

import { Code2, Database, Cloud, BarChart3, Layout } from "lucide-react";
const AzureIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Azure" fill="none">
    <title>Azure</title>
    <path d="M2 21l10-18 10 18H2z" fill="currentColor" opacity="0.06"/>
    <path d="M3.1 20.7L12 4.1 20.9 20.7H3.1z" fill="currentColor"/>
    <path d="M7.6 17.8L12 8.9l4.4 8.9H7.6z" fill="white" opacity="0.06"/>
  </svg>
);

// Example usage:
<AzureIcon className="w-8 h-8 text-blue-400" />
// Inline component (recommended)
const PowerBIIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Power BI" fill="none">
    <title>Power BI</title>
    <rect x="2.5" y="12.5" width="2.5" height="8.5" rx="0.4" fill="currentColor"/>
    <rect x="6.5" y="9.5" width="2.5" height="11.5" rx="0.4" fill="currentColor"/>
    <rect x="10.5" y="6.5" width="2.5" height="14.5" rx="0.4" fill="currentColor"/>
    <rect x="14.5" y="3.5" width="2.5" height="17.5" rx="0.4" fill="currentColor"/>
    <rect x="19" y="4.5" width="2.75" height="3.5" rx="0.35" fill="currentColor"/>
  </svg>
);

// Example usage:

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code2,
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Django REST", icon: <SiDjango /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Celery", icon: <SiCelery /> },
      { name: "Python", icon: <SiPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <DiJava /> },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "Next.js 15", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "React Native", icon: <SiReacthookform /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL Server", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Neo4j", icon: <SiNeo4J /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
  title: "Cloud & DevOps",
  icon: Cloud,
  skills: [
    { name: "Docker", icon: <SiDocker /> },
    { name: "Apache Airflow", icon: <SiApacheairflow /> },
    { name: "Microsoft Azure", icon: <AzureIcon className="w-6 h-6 text-blue-400" /> },
    { name: "AWS", icon: <SiAmazonwebservices /> },
  ],
},

{
  title: "AI / ML & Data",
  icon: BarChart3,
  skills: [
    { name: "Anthropic SDK", icon: <SiAnthropic /> },
    { name: "OpenAI API", icon: <SiOpenai /> },
    { name: "Machine Learning", icon: <SiScikitlearn /> },
    { name: "Power BI", icon: <PowerBIIcon className="w-6 h-6 text-blue-400" /> },
    { name: "Geospatial", icon: <SiQgis /> },
  ],
},

];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0A1628] text-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-blue-100">
            Technical Skills
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto font-inter">
            My toolkit includes modern technologies for building scalable and intelligent systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group border border-blue-900/30 bg-[#101C34] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-blue-900/40">
                    <Icon className="h-6 w-6 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold font-grotesk text-blue-100">
                    {category.title}
                  </h3>
                </div>

                {/* Icons Grid */}
                <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center w-16 h-16 bg-blue-950/30 rounded-lg hover:bg-blue-800/40 transition-all duration-300 hover:scale-110"
                      title={skill.name}
                    >
                      <div className="text-3xl text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                        {skill.icon}
                      </div>
                      <p className="text-xs text-blue-300 mt-1 font-inter">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
