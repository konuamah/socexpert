import React, { useState, useEffect, useRef } from 'react';
import CyberSecurityServiceCard from './value-card'; // Adjust path if needed
import { 
  Shield, 
  Lightbulb, 
  Award, 
  Users, 
  Zap, 
  Heart 
} from 'lucide-react';

const companyValues = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in all interactions. Trust is the foundation of cybersecurity, and we earn it by doing what's right – every time.",
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    link: "#integrity",
  },
  {
    title: "Innovation",
    description: "We foster continuous innovation, leveraging advanced technologies and creative approaches to stay ahead of emerging cyber threats. Curiosity and improvement drive us to develop new solutions that keep our clients secure.",
    icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
    link: "#innovation",
  },
  {
    title: "Excellence",
    description: "We commit to exceptional quality in service delivery, consistently exceeding expectations and delivering measurable value. Our goal is to not just meet requirements, but to wow our clients with superior outcomes.",
    icon: <Award className="w-12 h-12 text-purple-600" />,
    link: "#excellence",
  },
  {
    title: "Collaboration",
    description: "We believe in strong partnerships – both internally within our team and externally with clients and the community. By prioritizing open communication and teamwork, we achieve collective success and create solutions that truly fit our clients' needs.",
    icon: <Users className="w-12 h-12 text-green-600" />,
    link: "#collaboration",
  },
  {
    title: "Resilience",
    description: "Cybersecurity is about preparation and endurance. We build resilient systems and practices that help organizations withstand and quickly recover from adversity. This includes a client-centric approach where we adapt to evolving challenges with agility and determination.",
    icon: <Zap className="w-12 h-12 text-orange-600" />,
    link: "#resilience",
  },
  {
    title: "Social Responsibility",
    description: "We are committed to giving back and advancing cybersecurity awareness globally. Through initiatives like our \"One Million Campaign\" – a global program to provide cybersecurity training to one million individuals – we aim to democratize security knowledge and bridge the cyber skills gap.",
    icon: <Heart className="w-12 h-12 text-red-600" />,
    link: "#social-responsibility",
  },
];

const CARD_WIDTH = 320; // width of each card + margin (adjust if needed)

const CompanyValuesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const totalCards = companyValues.length;

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
    <section className="py-12 max-w-7xl mx-auto px-4 relative" aria-label="Company Values Carousel">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-700 mb-4 tracking-tight leading-tight">
        Our Core Values
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
        These fundamental principles guide everything we do and shape the way we serve our clients and community
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
          aria-label="Previous value"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          aria-label="Next value"
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
          {companyValues.map((value, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 mr-4">
              <CyberSecurityServiceCard {...value} />
            </div>
          ))}
          {/* Duplicate cards for seamless looping */}
          {companyValues.map((value, idx) => (
            <div key={`dup-${idx}`} className="flex-shrink-0 w-80 mr-4">
              <CyberSecurityServiceCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValuesCarousel;