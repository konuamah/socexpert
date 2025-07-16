"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Search, Shield, RefreshCw } from 'lucide-react';

export const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      title: "Assess & Plan",
      subtitle: "Evaluate your needs and design a strategy",
      description: "We analyze your current situation and create a comprehensive plan tailored to your specific requirements.",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Monitor & Protect",
      subtitle: "Implement safeguards and continuous oversight",
      description: "Deploy robust protection measures with real-time monitoring to ensure everything runs smoothly.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Respond & Improve",
      subtitle: "Adapt quickly and optimize continuously",
      description: "React swiftly to changes and continuously enhance performance based on real-world feedback.",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center"
      aria-labelledby="how-it-works-title"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="how-it-works-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get the best results through three carefully designed phases
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Step Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden border border-gray-100">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.id}
                  </div>
                </div>

                {/* Icon */}
                <div className={`flex items-center justify-center mb-6 text-gray-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${step.color} group-hover:bg-clip-text transition-all duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Connection Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-y-2 border-y-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
