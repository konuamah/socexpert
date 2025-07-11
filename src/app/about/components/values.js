"use client";
import { useEffect, useRef, useState } from 'react';
import { Shield, Lightbulb, Award, Users, Eye, Zap } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in doing what's right—always. Our clients trust us because we're transparent, consistent, and fiercely protective of their digital world.",
    accent: "from-blue-500 to-indigo-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We challenge conventions to build smarter, faster, and more intuitive defenses. Every solution we deliver is shaped by a relentless drive to rethink what's possible.",
    accent: "from-purple-500 to-pink-600"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We sweat the details—because security doesn't forgive sloppiness. From strategy to execution, we demand the best of ourselves and deliver nothing less.",
    accent: "from-amber-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our mission. We work alongside you as trusted advisors, ensuring every solution fits seamlessly into your world.",
    accent: "from-green-500 to-emerald-600"
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden agendas, no confusing jargon. We communicate clearly, act with accountability, and keep you informed every step of the way.",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Agility",
    description: "In a world where threats evolve daily, we stay ahead. Our adaptive approach ensures rapid response and continuous improvement.",
    accent: "from-red-500 to-pink-600"
  }
];

const Values = () => {
  const [visibleItems, setVisibleItems] = useState(new Array(values.length).fill(false));
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30  to-white">
      <div className="max-w-7xl  mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do—from how we build solutions to how we serve our clients. 
            They're not just words on a wall; they're the foundation of who we are.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`group relative transform transition-all duration-700 ease-out ${
                  visibleItems[index]
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white  rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl  hover:border-blue-300  transition-all duration-300 h-full">
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.accent}`} />

                  {/* Icon container */}
                  <div className="flex items-center mb-6">
                    <div className={`relative p-3 rounded-xl bg-gradient-to-r ${value.accent} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-gray-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {value.description}
                  </p>

                  {/* Subtle hover effect background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/0 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block">
            <p className="text-lg text-gray-600 mb-6">
              Ready to experience the difference our values make?
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
