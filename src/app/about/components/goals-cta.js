import React from 'react';
import { Trophy, CheckCircle } from 'lucide-react';

const GoalsAndCTASection = () => {
  const goals = [
    "Enhance cybersecurity posture for all clients by providing robust and effective solutions.",
    "Integrate AI technologies to deliver predictive security analytics for proactive threat mitigation.",
    "Foster continuous innovation and adaptability to stay ahead of cybersecurity threats.",
  ];

  return (
    <section aria-labelledby="strategic-goals-heading" className="p-12 lg:p-16">
      <header className="text-center mb-12">
        <div
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg"
          aria-hidden="true"
        >
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h2 id="strategic-goals-heading" className="text-4xl font-light text-blue-600 mb-4">
          Strategic Goals
        </h2>
        {/* Decorative divider - optional */}
        <hr className="border-t border-blue-300 w-16 mx-auto" />
      </header>

      <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto list-disc list-inside">
        {goals.map((goal, index) => (
          <li
            key={index}
            className="goal-item flex items-start space-x-4 group p-4 rounded-xl hover:bg-white/60 transition-all duration-200"
          >
            <div
              className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1"
              aria-hidden="true"
            >
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <p
              className={`text-lg font-light leading-relaxed ${
                index === 1 ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {goal}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GoalsAndCTASection;
