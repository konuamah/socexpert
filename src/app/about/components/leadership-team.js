

const leaders = [
  {
    name: "Dr. Samuel Boateng",
    title: "Chief Executive Officer",
    image: "/samuel-boateng.png",
    bio: "Dr. Samuel Boateng, CEO of Slamm Technologies, has over 20 years of experience in IT and cybersecurity. A Principal Security Manager, he specializes in AI-driven security solutions, reverse engineering, pen testing, and vulnerability analysis. He’s also an Adjunct Professor at Marymount University, with expertise spanning AI, threat protection, and secure infrastructure. Dr. Boateng holds a Doctorate in Cyber Information Systems, with advanced degrees in management and IT.",
    contribution: "Dr. Boateng leads Slamm Technologies' cybersecurity vision, developing AI-based threat defense strategies, building security infrastructure, and mentoring future professionals through academic leadership.",
  },
  {
    name: "Dr. Francisca Boateng",
    title: "Director of Operations",
    image: "/francisca-boateng.png",
    bio: "Francisca Boateng brings 20 years of financial leadership across firms like Nextel and the U.S. Census Bureau. As co-founder of Slamm Technologies, she leads finance and marketing strategy. With a BSc in Accounting from Strayer and a diploma from Oxford, she combines financial expertise with social impact as co-founder of the Read2Lead Foundation. Her strength lies in strategic growth and community-driven leadership.",
    contribution: "Francisca oversees Slamm Technologies' operational and financial strategies, ensuring growth and sustainability while fostering social impact through education and community initiatives.",
  },
];


export default function LeadershipTeam() {
  return (
    <section className="relative bg-white text-gray-900 px-4 md:px-8 py-24">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-blue-600 mb-16 tracking-tight">
        Meet Our Leaders
      </h2>

      {/* Cards */}
      <div className="space-y-12">
        {leaders.map((leader, index) => (
          <div key={leader.name} className="flex justify-center">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } w-full max-w-5xl rounded-2xl border border-gray-200  hover:border-blue-300  bg-white shadow-md overflow-hidden transition-transform hover:scale-[1.005] duration-300`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-[430px] md:h-auto">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{leader.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{leader.title}</p>
                <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed">
                  {leader.bio}
                </p>
                <p className="italic text-xs text-gray-500">{leader.contribution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
