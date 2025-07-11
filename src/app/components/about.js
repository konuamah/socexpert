import AIPoweredDefense from "./ai-powered-defense";

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-gray-200 rounded-3xl shadow-lg p-8 md:p-12">
        
        {/* Left: Team Image */}
        <div className="w-full md:w-1/2 h-72 md:h-96 overflow-hidden rounded-2xl">
          <img
            src="/team.jpg"
            alt="Slamm SOC Experts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            About <span className="text-blue-600">Slamm SOC Experts</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            We specialize in building world-class Security Operations Centers (SOCs) that combine expert human oversight with AI-driven threat detection. Our team is trusted by companies that demand 24/7 protection, rapid incident response, and complete visibility across their systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="text-blue-600 hover:underline font-medium text-base leading-none"
            >
              Talk to Security Advisor →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}