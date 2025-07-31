// components/CybersecurityApproach/ApproachAccordion.client.jsx
"use client";

import { useState } from 'react';
import { ChevronDown, Shield, Cpu, FileCheck, Settings } from 'lucide-react';

// Dynamic icon mapping (avoids client-side errors)
const iconComponents = {
  Shield,
  Cpu,
  FileCheck,
  Settings
};

export default function ApproachAccordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        const IconComponent = iconComponents[section.icon];
        const isOpen = openIndex === index;
        
        return (
          <div
            key={index}
            className={`bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 ${
              isOpen ? 'shadow-xl border-blue-200' : 'hover:shadow-md hover:border-gray-200'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-8 text-left transition-all duration-200 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-6">
                <div className={`p-4 rounded-2xl transition-colors duration-200 ${
                  isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <IconComponent size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-gray-500 text-base">
                    {section.subtitle}
                  </p>
                </div>
              </div>
              <ChevronDown
                size={24}
                className={`text-gray-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                <div className="border-t border-gray-100 pt-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {section.content.intro}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {section.content.features.map((feature, i) => (
                      <div key={i} className="bg-gray-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                    <p className="text-gray-700 leading-relaxed italic">
                      {section.content.conclusion}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}