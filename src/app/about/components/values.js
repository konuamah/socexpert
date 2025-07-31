import React, { useState, useEffect } from 'react';
import { Shield, Lightbulb, Award, Users, Eye, Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

// Mock ContactModal component for demonstration
const ContactModal = ({ isOpen, onClose, contactInfo, title, subtitle }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Phone Numbers:</h4>
            {contactInfo.phones.map((phone, index) => (
              <p key={index} className="text-gray-600">{phone}</p>
            ))}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Email:</h4>
            <p className="text-gray-600">{contactInfo.email}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Social Media:</h4>
            <div className="flex space-x-4">
              {contactInfo.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <Icon className="w-5 h-5" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    icon: Shield,
    title: "Proactive Cybersecurity Defense",
    description: "We believe in anticipating cyber threats before they cause harm. Our SOC is built to detect early signals, respond swiftly, and stay ahead of adversaries with advanced threat detection.",
    accent: "from-blue-500 to-indigo-600",
    keywords: "proactive cybersecurity, threat detection, SOC services"
  },
  {
    icon: Eye,
    title: "24/7 Security Monitoring & Vigilance", 
    description: "Cyber threats don't sleep, and neither do we. Our commitment to round-the-clock security monitoring ensures your digital assets are always protected from cyber attacks.",
    accent: "from-purple-500 to-pink-600",
    keywords: "24/7 monitoring, security operations center, continuous protection"
  },
  {
    icon: Award,
    title: "Cybersecurity Integrity & Accountability",
    description: "We operate with transparency, accuracy, and ethical responsibility. Every security incident, alert, and action is handled with diligence and honesty in our security operations.",
    accent: "from-amber-500 to-orange-600",
    keywords: "cybersecurity ethics, incident response, security accountability"
  },
  {
    icon: Shield,
    title: "Data Confidentiality & Trust",
    description: "We treat your data as sacred. We follow strict confidentiality protocols and industry best practices to ensure your trust is never compromised in our cybersecurity services.",
    accent: "from-green-500 to-emerald-600",
    keywords: "data protection, confidentiality protocols, cybersecurity trust"
  },
  {
    icon: Users,
    title: "Security Collaboration & Communication",
    description: "A SOC isn't just a technical service; it's a partnership. We work together with clients, IT teams, and stakeholders to build cyber resilience together.",
    accent: "from-cyan-500 to-blue-600",
    keywords: "security partnership, IT collaboration, cyber resilience"
  },
  {
    icon: Zap,
    title: "Continuous Security Improvement",
    description: "Cyber threats evolve, and so do we. Through regular training, red teaming, and threat hunting, we ensure our cybersecurity defenses are always one step ahead.",
    accent: "from-red-500 to-pink-600",
    keywords: "threat hunting, red teaming, cybersecurity training"
  },
  {
    icon: Lightbulb,
    title: "Threat Intelligence Driven Security",
    description: "We base our cybersecurity actions on real-world, up-to-date threat intelligence to ensure our defenses are rooted in relevance and context for maximum protection.",
    accent: "from-indigo-500 to-purple-600",
    keywords: "threat intelligence, cyber threat analysis, security context"
  },
  {
    icon: Users,
    title: "Client-Centric Cybersecurity Protection",
    description: "We align our security operations with your business needs. Your uptime, reputation, and compliance are always our top priorities in cybersecurity defense.",
    accent: "from-teal-500 to-green-600",
    keywords: "business security, compliance protection, cybersecurity uptime"
  },
  {
    icon: Award,
    title: "Cybersecurity Innovation with Purpose",
    description: "We embrace automation, AI, and new security tools, not for the buzz, but to improve threat detection speed, reduce false positives, and optimize incident response.",
    accent: "from-orange-500 to-red-600",
    keywords: "AI cybersecurity, automated threat detection, security innovation"
  }
];

const Values = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Contact information
  const customContactInfo = {
    phones: ["+233 (0) 552280177", "+233 (0) 546875600"],
    email: "info@slammghana.com",
    social: [
      { name: "Twitter", url: "https://twitter.com/slammgh", icon: Twitter },
      { name: "LinkedIn", url: "https://gh.linkedin.com/company/slammghana", icon: Linkedin },
      { name: "Instagram", url: "https://www.instagram.com/slammgh/", icon: Instagram }
    ]
  };

  // Create duplicated array for seamless looping
  const duplicatedValues = [...values, ...values];

  return (
    <>
      <section className="py-24 overflow-hidden" role="main" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* SEO-optimized header */}
          <header className="text-center mb-20">
            <h1 id="values-heading" className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6 tracking-tight">
              Cybersecurity SOC Services - Our Core Values
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our cybersecurity principles that guide everything we do—from threat detection to incident response. 
              These core values form the foundation of our Security Operations Center (SOC) services and client protection.
            </p>
          </header>

          {/* Auto-scrolling Carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel container */}
            <div className="overflow-hidden">
              <div 
                className={`flex transition-transform ease-linear ${
                  isPaused ? 'pause-animation' : ''
                }`}
                style={{
                  width: `${duplicatedValues.length * 400}px`,
                  animation: isPaused ? 'none' : 'scroll 60s linear infinite'
                }}
              >
                {duplicatedValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <article
                      key={`${value.title}-${index}`}
                      className="group relative flex-shrink-0 w-96 mx-4"
                      itemScope
                      itemType="https://schema.org/Service"
                    >
                      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 h-80 flex flex-col">
                        {/* Gradient accent line */}
                        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.accent}`} />

                        {/* Icon container */}
                        <div className="flex items-center mb-6">
                          <div className={`relative p-3 rounded-xl bg-gradient-to-r ${value.accent} shadow-lg group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2" itemProp="name">
                          {value.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm flex-grow line-clamp-6" itemProp="description">
                          {value.description}
                        </p>

                        {/* SEO keywords (hidden) */}
                        <meta itemProp="keywords" content={value.keywords} />

                        {/* Subtle hover effect background */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/0 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-r ${value.accent}`} />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
          </div>

          {/* Pause indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              {isPaused ? 'Carousel paused - move cursor away to resume' : 'Hover over cards to pause scrolling'}
            </p>
          </div>

          {/* Bottom CTA */}
          <footer className="text-center mt-20">
            <div className="inline-block">
              <p className="text-lg text-gray-600 mb-6">
                Ready to experience the difference our cybersecurity values make?
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Contact us about our cybersecurity services"
              >
                Discuss Our Values
              </button>
            </div>
          </footer>
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${values.length * 400}px);
            }
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-6 {
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .pause-animation {
            animation-play-state: paused !important;
          }
        `}</style>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contactInfo={customContactInfo}
        title="Let's Talk Cybersecurity"
        subtitle="Ready to see our values in action? Get in touch with our SOC experts."
      />
    </>
  );
};

export default Values;