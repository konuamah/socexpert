import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <div className="grid grid-cols-2"> {/* Changed this line */}
      {/* Mission */}
      <section
        aria-labelledby="mission-heading"
        className="p-6 md:p-12"
      >
        <header className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 md:mb-6 shadow-lg"
            aria-hidden="true"
          >
            <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 id="mission-heading" className="text-2xl md:text-4xl font-light text-blue-600 mb-2 md:mb-4">
            Mission
          </h2>
          <hr className="w-12 md:w-16 mx-auto border-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
        </header>
        <p className="text-gray-700 leading-relaxed text-base md:text-xl font-light text-center">
          To deliver advanced, AI-powered cybersecurity solutions ensuring proactive protection and resilience, aiming to safeguard client assets from evolving threats.
        </p>
      </section>

      {/* Vision */}
      <section
        aria-labelledby="vision-heading"
        className="p-6 md:p-12"
      >
        <header className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 md:mb-6 shadow-lg"
            aria-hidden="true"
          >
            <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 id="vision-heading" className="text-2xl md:text-4xl font-light text-blue-600 mb-2 md:mb-4">
            Vision
          </h2>
          <hr className="w-12 md:w-16 mx-auto border-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600" />
        </header>
        <p className="text-gray-700 leading-relaxed text-base md:text-xl font-light text-center">
          To become the global leader in SOC services by seamlessly integrating innovative technology with unmatched cybersecurity expertise.
        </p>
      </section>
    </div>
  );
};

export default MissionVisionSection;
