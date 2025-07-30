import React from 'react';

const CompanyHistory = () => {
const timelineData = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Founded as Slamm Technologies."
  },
  {
    year: "2017",
    title: "West Africa Expansion",
    description: "Expanded operations into West Africa."
  },
  {
    year: "2021",
    title: "Security Operations Division Established",
    description: "Launched dedicated Security Operations Division."
  },
  {
    year: "2022",
    title: "U.S. Cyber Fusion Center Inaugurated",
    description: "Opened U.S. Cyber Fusion Center to enhance threat response capabilities."
  },
  {
    year: "2024",
    title: "(ISC)² Inclusion Impact Award Received",
    description: "Recognized for leadership in inclusion and diversity in cybersecurity."
  }
];



  return (
    <section 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Company History Timeline - Slamm SOC Experts"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-light text-blue-600 mb-6 tracking-tight">
            Our Journey in Cybersecurity
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            From founding Slamm SOC Experts to becoming West Africa’s premier cybersecurity partner protecting enterprises across the continent.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative" role="list" aria-label="Company History Timeline">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <article
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'sm:flex-row-reverse sm:text-right' 
                    : 'sm:flex-row sm:text-left'
                } flex-col text-left`}
                role="listitem"
                aria-labelledby={`history-title-${index}`}
                aria-describedby={`history-desc-${index}`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 hover:scale-125 hover:bg-blue-600"
                  aria-hidden="true"
                ></div>

                {/* Content */}
                <div className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${
                  index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'
                }`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]">
                    <time 
                      dateTime={item.year} 
                      className="text-3xl sm:text-4xl font-light text-blue-600 mb-3 block tracking-wide"
                      aria-label={`Year ${item.year}`}
                    >
                      {item.year}
                    </time>
                    <h2 
                      id={`history-title-${index}`} 
                      className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-tight"
                    >
                      {item.title}
                    </h2>
                    <p 
                      id={`history-desc-${index}`} 
                      className="text-gray-600 leading-relaxed font-light text-lg"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden sm:block w-2/12" aria-hidden="true"></div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <footer className="text-center mt-20 pt-16 border-t border-gray-100">
          <p className="text-2xl font-light text-gray-700 leading-relaxed">
            The journey continues as we shape the future of cybersecurity across Africa and beyond.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CompanyHistory;
