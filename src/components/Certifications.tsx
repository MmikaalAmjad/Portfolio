import { Award } from "lucide-react";

const certifications = [
  // Power BI & Data
  {
    title: "Neo4j & GenerativeAI Fundamentals",
    issuer: "Neo4j",
    date: "Aug 2, 2026",
    link: "/Neo4j & GenerativeAI Fundamentals.pdf",
  },
  {
    title: "Harnessing the Power of Data with Power BI",
    issuer: "Coursera",
    date: "Aug 7, 2024",
    link: "/Harnessing the Power of Data with Power BI.pdf",
  },
  {
    title: "Extract, Transform and Load Data in Power BI",
    issuer: "Coursera",
    date: "Aug 20, 2024",
    link: "/ETL power BI.pdf",
  },
  {
    title: "Data Analysis and Visualization with Power BI",
    issuer: "Coursera",
    date: "Aug 31, 2024",
    link: "/Data Analysis and Visualization with Power BI.pdf",
  },
  {
    title: "Data Modeling in Power BI",
    issuer: "Coursera",
    date: "Mar 18, 2025",
    link: "/Data Modelling in powerbi.pdf",
  },
  {
    title: "Creative Designing in Power BI",
    issuer: "Coursera",
    date: "Feb 18, 2025",
    link: "/Creative Designing in Power BI.pdf",
  },
  {
    title: "Deploy and Maintain Power BI Assets and Capstone Project",
    issuer: "Coursera",
    date: "Mar 25, 2025",
    link: "/Deploy and Maintain Power BI Assets and Capstone.pdf",
  },
  {
    title: "Microsoft PL-300 Exam Preparation and Practice",
    issuer: "Coursera",
    date: "Mar 19, 2025",
    link: "/Microsoft PL-300 Exam Preparation and Practice.pdf",
  },
  {
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Coursera",
    date: "Jul 25, 2024",
    link: "/Coursera  Preparing Data for Analysis with Microsoft Excel.pdf",
  },
  {
    title: "Microsoft Power BI Data Analyst",
    issuer: "Coursera",
    date: "Mar 25, 2025",
    link: "/Coursera Final Certificate POWERBI.pdf",
  },

  // Python (Data Programming)
  {
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "Jul 28, 2024",
    link: "/Intermediate Python Datacamp.pdf",
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Jul 23, 2024",
    link: "/certificate Introduction to Python DataCamp.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#0A1628] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase font-inter">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-blue-300/80 text-lg max-w-2xl mx-auto font-inter">
            Verified achievements showcasing my expertise in Power BI, data analytics, and Python programming.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-white/0 hover:from-blue-400/40 hover:to-blue-600/10 transition-all duration-500"
            >
              <div className="h-full bg-[#0D1A30]/90 backdrop-blur-sm rounded-xl p-6 flex flex-col transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-950/50 group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-900/60 to-blue-800/20 border border-white/5 rounded-lg">
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-100 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-300/70 mb-4">{cert.date}</p>

                <button
                  onClick={() => window.open(cert.link, "_blank")}
                  className="mt-auto px-5 py-2 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-blue-600 hover:border-blue-600 text-blue-100 text-sm font-medium transition-all duration-300 self-start"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
