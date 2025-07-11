

const leaders = [
  {
    name: "Kwame Owusu",
    title: "Chief Technology Officer",
    image: "/executive1.jpg",
    bio: "With 15+ years in network security, Kwame is a CISSP-certified expert known for architecting scalable SOC infrastructures.",
    contribution: "Spearheaded a threat detection engine used by 10+ West African banks.",
  },
  {
    name: "Akosua Mensah",
    title: "Director of Cyber Operations",
    image: "/executive2.jpg",
    bio: "Akosua brings military-grade cybersecurity discipline and is a GIAC-certified intrusion analyst.",
    contribution: "Led red team operations for 3 national financial audits.",
  },
  {
    name: "Yaw Asare",
    title: "Chief Information Security Officer",
    image: "/executive3.jpg",
    bio: "Yaw blends legal acumen with cyber strategy, holding both CISSP and CISM certifications.",
    contribution: "Drafted compliance policies adopted by 5 telecom companies.",
  },
  {
    name: "Esi Boateng",
    title: "VP of Engineering",
    image: "/executive4.jpg",
    bio: "With deep DevSecOps knowledge, Esi drives innovation in cloud-native security platforms.",
    contribution: "Built automation pipelines for 24/7 threat monitoring.",
  },
  {
    name: "Kojo Addai",
    title: "Head of Threat Intelligence",
    image: "/executive5.jpg",
    bio: "Kojo leads with foresight, blending OSINT skills with machine learning analytics.",
    contribution: "Presented AI-based malware profiling at RSA Conference 2024.",
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
              <div className="w-full md:w-1/2 h-[260px] md:h-auto">
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
