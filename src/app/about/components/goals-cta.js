import React from 'react';
import { Trophy, CheckCircle } from 'lucide-react';

const GoalsAndCTASection = () => {
  const goals = [
    "Enhance cybersecurity posture for all clients by providing robust and effective solutions.",
    "Integrate AI technologies to deliver predictive security analytics for proactive threat mitigation",
    "Foster continuous innovation and adaptability to stay ahead of cybersecurity threats.",
  ];

  return (
    <>
      {/* Strategic Goals */}
      <div className="border-t border-gray-100 p-12 bg-white lg:p-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-light text-blue-600 mb-4">Strategic Goals</h2>
          <div className="w-16 h-0.5  mx-auto"></div>
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


    </>
  );
};

export default GoalsAndCTASection;
