
export default function WhyChooseUs() {
  const items = [
    {
      title: "AI-Driven Security",
      parts: [
        "We utilize advanced ",
        <span key="ai" className="font-semibold text-blue-600">machine learning</span>,
        " models to identify and neutralize threats before they emerge.",
      ],
    },
    {
      title: "Human Expertise",
      parts: [
        "Our team of ",
        <span key="experts" className="font-semibold text-blue-600">dedicated cybersecurity specialists</span>,
        " ensures you're always protected by real people.",
      ],
    },
    {
      title: "Rapid Response",
      parts: [
        "With our ",
        <span key="monitoring" className="font-semibold text-blue-600">24/7 monitoring</span>,
        ", threats are addressed in real-time to minimize disruption.",
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-10 overflow-hidden">
      {/* Soft grid background */}
      <div className="absolute inset-0  opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-700 mb-4 tracking-tight leading-tight">
          Why Choose Us
        </h2>
      

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 backdrop-blur-md border border-gray-200 hover:border-blue-300 transition-all duration-300 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {item.parts.map((part, index) => (
                  <span key={index}>{part}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
