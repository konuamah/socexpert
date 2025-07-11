import React from 'react';
import { Target, Eye, Trophy, CheckCircle } from 'lucide-react';
import NavBar from '../components/navbar';

const MissionPage = () => {
  const goals = [
    "Enhance cybersecurity posture for all clients by providing robust and effective solutions.",
    "Integrate AI technologies to deliver predictive security analytics for proactive threat mitigation",
    "Foster continuous innovation and adaptability to stay ahead of cybersecurity threats.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <NavBar />

      {/* Unified background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.1) 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative">
        {/* Header Section */}
        <div className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-extralight text-blue-600 mb-8 tracking-tight">
              Our Purpose
            </h1>
            <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Defining our path forward through clear mission, vision, and strategic goals
            </p>
          </div>
        </div>

        {/* Main Content - Unified Card Layout */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            {/* Mission & Vision Row */}
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {/* Mission Section */}
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

              {/* Vision Section */}
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

            {/* Goals Section - Full Width */}
            <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-slate-50/50 p-12 lg:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-light text-blue-600 mb-4">Strategic Goals</h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="goal-item flex items-start space-x-4 group p-4 rounded-xl hover:bg-white/60 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className={`text-lg font-light leading-relaxed ${
                        index === 1 ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 text-white shadow-2xl">
              <h3 className="text-4xl font-light mb-6">
                <span className="text-blue-600">Ready</span> to make an impact?
              </h3>
              <p className="text-gray-300 text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Join us in our mission to create meaningful change and drive innovation that shapes the future.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
