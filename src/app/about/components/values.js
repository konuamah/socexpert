import React, { useState, useEffect, useRef } from 'react';
import CyberSecurityServiceCard from './value-card'; // Adjust path if needed
import { 
  ShieldCheck, 
  Eye, 
  AlertTriangle, 
  Activity, 
  BarChart2, 
  Cloud 
} from 'lucide-react';

const cyberSecurityServices = [
  {
    title: "SOC Implementation & Optimization",
    description: "Design, build, and optimize your Security Operations Center with best-in-class tools, processes, and workflows for maximum threat detection.",
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    link: "#soc-implementation",
  },
  {
    title: "24/7 Threat Monitoring",
    description: "Continuous security monitoring with our expert SOC team to detect, analyze, and respond to threats in real-time.",
    icon: <Eye className="w-12 h-12 text-green-600" />,
    link: "#threat-monitoring",
  },
  {
    title: "Incident Response Services",
    description: "Rapid response to security incidents with our certified incident handlers to contain, eradicate, and recover from breaches.",
    icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
    link: "#incident-response",
  },
  {
    title: "Threat Intelligence Integration",
    description: "Leverage cutting-edge threat intelligence feeds and integrate them into your SOC operations for proactive defense.",
    icon: <Activity className="w-12 h-12 text-purple-600" />,
    link: "#threat-intelligence",
  },
  {
    title: "SIEM Management & Tuning",
    description: "Expert configuration, management, and tuning of your SIEM solutions to reduce false positives and improve detection accuracy.",
    icon: <BarChart2 className="w-12 h-12 text-orange-600" />,
    link: "#siem-management",
  },
  {
    title: "SOC-as-a-Service",
    description: "Outsource your security operations to our expert team and gain enterprise-grade security without the overhead.",
    icon: <Cloud className="w-12 h-12 text-indigo-600" />,
    link: "#soc-as-service",
  },
];

const CARD_WIDTH = 320; // width of each card + margin (adjust if needed)

const CyberSecuritySOCServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const totalCards = cyberSecurityServices.length;

  // Auto advance the carousel every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isPaused, totalCards]);

  // Handlers for manual navigation
  const goToPrevious = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const goToNext = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 relative" aria-label="Cybersecurity SOC Services Carousel">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-700 mb-4 tracking-tight leading-tight">
    Security Operations Center Services
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
        Our SOC experts provide comprehensive security operations services to protect your organization from evolving threats
      </p>

      {/* Carousel viewport wrapper - relative needed for button absolute positioning */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ height: '24rem' }} // match your card height (h-96 = 24rem)
      >
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          aria-label="Previous service"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          aria-label="Next service"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Carousel track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * CARD_WIDTH}px)` }}
        >
          {cyberSecurityServices.map((service, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 mr-4">
              <CyberSecurityServiceCard {...service} />
            </div>
          ))}
          {/* Duplicate cards for seamless looping */}
          {cyberSecurityServices.map((service, idx) => (
            <div key={`dup-${idx}`} className="flex-shrink-0 w-80 mr-4">
              <CyberSecurityServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySOCServices;
