import {
  ShieldCheck,
  Zap,
  Target,
  Brain,
  Clock,
  Scale,
  AlertTriangle,
} from "lucide-react";
// Optional: Uncomment if using Framer Motion
// import { motion } from "framer-motion";

export default function CybersecurityComparison() {
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

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {/* Traditional */}
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

          {/* AI-Powered */}
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
        </div>

        {/* Advantages Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-md">
            <div className="text-center mb-16">
              <h4 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Why AI Integration Dominates Traditional Methods
              </h4>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
