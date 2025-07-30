import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col lg:flex-row items-stretch bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden min-h-[400px] md:min-h-[500px]">

        {/* Left: Team Image */}
        <div className="w-full lg:w-1/2 h-72 sm:h-80 lg:h-auto min-h-[300px] lg:min-h-[500px] relative">
          <Image
            src="/team.jpg"
            alt="Slamm SOC Experts"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            About <span className="text-blue-600">Slamm SOC Experts</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 flex-grow">
            We specialize in building world-class Security Operations Centers (SOCs) that combine expert human oversight with AI-driven threat detection. Our team is trusted by companies that demand 24/7 protection, rapid incident response, and complete visibility across their systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base"
              title="Learn more about Slamm SOC's mission and team"
            >
              Learn more about Slamm SOC
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}