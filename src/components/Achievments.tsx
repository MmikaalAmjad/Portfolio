const achievements = [
  {
    title: "Shining Star",
    description: "Recognized for my performance in the first quarter since I joined DEVSINC.",
    image: "/shining star.jpg",
  },
  
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-[#0A1628] text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase font-inter">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-blue-300/80 text-lg max-w-2xl mx-auto font-inter">
            Some highlights from my journey in technology and innovation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/50 transition-all duration-500"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-half object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0A1628]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-semibold text-blue-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-blue-300 text-sm font-inter">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
