import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 ">
      {/* Mission */}
      <div className="p-12 lg:p-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-light text-blue-600 mb-4">Mission</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </div>
        <p className="text-gray-700 leading-relaxed text-xl font-light text-center">
          To deliver advanced, AI-powered cybersecurity solutions ensuring proactive protection and
          resilience, aiming to safeguard client assets from evolving threats.
        </p>
      </div>

      {/* Vision */}
      <div className="p-12 lg:p-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
            <Eye className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-light text-blue-600 mb-4">Vision</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </div>
        <p className="text-gray-700 leading-relaxed text-xl font-light text-center">
          To become the global leader in SOC services by seamlessly integrating innovative technology
          with unmatched cybersecurity expertise.
        </p>
      </div>
    </div>
  );
};

export default MissionVisionSection;
