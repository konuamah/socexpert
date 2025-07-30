import React, { useState } from 'react';
import { Shield, Lightbulb, Award, Users, Eye, Zap, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ContactModal } from '../../components/modal'; // Adjust path as needed

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

  return (
    <>
      <section className="py-24" role="main" aria-labelledby="values-heading">
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

          {/* Mobile: Card Layout */}
          <div className="lg:hidden">
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    {/* Gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.accent}`} />

                    {/* Icon container */}
                    <div className="flex items-center mb-6">
                      <div className={`relative p-3 rounded-xl bg-gradient-to-r ${value.accent} shadow-lg group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 ml-4 group-hover:text-gray-700 transition-colors duration-300" itemProp="name">
                        {value.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base" itemProp="description">
                      {value.description}
                    </p>

                    {/* SEO keywords (hidden) */}
                    <meta itemProp="keywords" content={value.keywords} />

                    {/* Subtle hover effect background */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/0 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </article>
                );
              })}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isLastOddItem = values.length % 2 === 1 && index === values.length - 1;
              
              return (
                <article
                  key={value.title}
                  className={`group relative ${isLastOddItem ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''}`}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full">
                    {/* Gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.accent}`} />

                    {/* Icon container */}
                    <div className="flex items-center mb-6">
                      <div className={`relative p-3 rounded-xl bg-gradient-to-r ${value.accent} shadow-lg group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-gray-700 transition-colors duration-300" itemProp="name">
                        {value.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg" itemProp="description">
                      {value.description}
                    </p>

                    {/* SEO keywords (hidden) */}
                    <meta itemProp="keywords" content={value.keywords} />

                    {/* Subtle hover effect background */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/0 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </article>
              );
            })}
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