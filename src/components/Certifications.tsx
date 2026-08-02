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
    <section id="certifications" className="py-24 px-6 bg-[#0A1628] text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-blue-100">
            Certifications
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto font-inter">
            Verified achievements showcasing my expertise in Power BI, data analytics, and Python programming.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group border border-blue-900/40 bg-[#101C34] rounded-xl p-6 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-900/40 rounded-lg">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue-400">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-blue-300 mb-4">{cert.date}</p>

              <button
                onClick={() => window.open(cert.link, "_blank")}
                className="mt-auto px-5 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-blue-100 text-sm font-medium transition-all duration-300"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
