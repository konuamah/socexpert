import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Target,
  Brain,
  Clock,
  Scale,
  AlertTriangle,
} from "lucide-react";

export default function CybersecurityComparison() {
  const [activeTab, setActiveTab] = useState("traditional");

  // Custom CSS for smooth scrolling
  const scrollbarHideStyle = {
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE and Edge
    WebkitScrollbar: 'none' // Chrome, Safari, Opera
  };

  const features = [
    {
      title: "Proactive Defense",
      description:
        "AI detects threats before damage occurs, unlike reactive traditional systems that respond after breaches.",
      icon: ShieldCheck,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Infinite Scalability",
      description:
        "Handles vast data volumes across unlimited endpoints without increasing operational overhead.",
      icon: Scale,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Lightning Speed",
      description:
        "Real-time detection and automated response drastically reduce incident resolution time.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Continuous Learning",
      description:
        "Evolves from every attack pattern, continuously improving without manual intervention.",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Precision Targeting",
      description:
        "Behavioral analysis minimizes false positives, focusing resources on genuine threats.",
      icon: Target,
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "24/7 Vigilance",
      description:
        "Never sleeps, never tires. Constant monitoring and protection around the clock.",
      icon: Clock,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const traditionalContent = (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-md border border-red-200 rounded-2xl p-8 hover:border-red-400 shadow transition-all duration-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Traditional
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          Built on static rule sets, manual threat hunting, and
          signature-based detection. These systems are fundamentally
          reactive, requiring constant human oversight.
        </p>
        <ul className="space-y-4">
          {[
            "Struggles with unknown, zero-day attacks",
            "High false positive rates cause alert fatigue",
            "Delayed response times due to manual processes",
            "Limited scalability across large networks",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-600">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const aiPoweredContent = (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-8 hover:border-blue-400 shadow transition-all duration-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              AI-Powered
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          Leverages machine learning and behavioral analysis for
          real-time anomaly detection. AI adapts autonomously, reducing
          human error and enabling intelligent threat prioritization.
        </p>
        <ul className="space-y-4">
          {[
            "Proactive detection of zero-day threats",
            "Intelligent filtering reduces false positives",
            "Autonomous real-time incident response",
            "Unlimited scalability across endpoints",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-600">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-cyan-600 bg-clip-text text-transparent tracking-tight mb-4">
            Cybersecurity Evolution
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how AI-powered cybersecurity transforms traditional defense
            mechanisms into intelligent, adaptive protection systems.
          </p>
        </div>

        {/* Mobile Toggle Tabs - Hidden on lg screens and above */}
        <div className="lg:hidden mb-8">
          <div className="relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-2 shadow-md">
            <div className="flex relative">
              {/* Background slider */}
              <div
                className={`absolute top-2 bottom-2 w-1/2 bg-gradient-to-r ${
                  activeTab === "traditional"
                    ? "from-red-500 to-orange-500"
                    : "from-blue-500 to-cyan-500"
                } rounded-xl transition-all duration-300 ease-in-out ${
                  activeTab === "traditional" ? "left-2" : "left-1/2 ml-2"
                }`}
              />
              
              {/* Tab buttons */}
              <button
                onClick={() => setActiveTab("traditional")}
                className={`relative z-10 flex-1 py-4 px-6 text-center font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === "traditional"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Traditional
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab("ai")}
                className={`relative z-10 flex-1 py-4 px-6 text-center font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === "ai"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI-Powered
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Content - Hidden on lg screens and above */}
        <div className="lg:hidden mb-24">
          <div className="transition-all duration-500 ease-in-out">
            {activeTab === "traditional" ? traditionalContent : aiPoweredContent}
          </div>
        </div>

        {/* Desktop Side-by-Side Comparison - Hidden below lg screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 mb-24">
          {traditionalContent}
          {aiPoweredContent}
        </div>

        {/* Advantages Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-6 md:p-10 shadow-md overflow-hidden">
            <div className="text-center mb-12 md:mb-16">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Why AI Integration Dominates Traditional Methods
              </h4>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(({ icon: Icon, title, description, gradient }, i) => (
                <div key={i} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500`}
                  />
                  <div className="relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-6 h-full hover:border-slate-300 shadow transition-all duration-500">
                    <div
                      className={`inline-flex p-3 bg-gradient-to-r ${gradient} rounded-lg mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">
                      {title}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div 
                className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory smooth-scroll"
                style={scrollbarHideStyle}
              >
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {features.map(({ icon: Icon, title, description, gradient }, i) => (
                    <div key={i} className="group relative flex-shrink-0 w-72 snap-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500`}
                      />
                      <div className="relative bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-6 h-full hover:border-slate-300 shadow-lg transition-all duration-500 hover:shadow-xl">
                        <div
                          className={`inline-flex p-3 bg-gradient-to-r ${gradient} rounded-lg mb-4 shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h5 className="text-xl font-semibold text-gray-900 mb-2">
                          {title}
                        </h5>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex justify-center items-center mt-6 gap-3">
                <div className="flex gap-2">
                  {features.map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60" />
                  ))}
                </div>
                <div className="text-slate-500 text-xs font-medium">← Swipe to explore →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-20">
          <p className="text-slate-500 text-sm">
            <a
              href="https://www.ibm.com/topics/artificial-intelligence-cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 underline decoration-blue-400/40 hover:decoration-blue-500 transition"
            >
              IBM – Artificial Intelligence in Cybersecurity
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}