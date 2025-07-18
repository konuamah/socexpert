
import React from 'react';

const CompanyHistory = () => {
  const timelineData = [
    {
      year: "2018",
      title: "Established",
      description: "Founded Slamm SOC Experts with a vision to provide world-class cybersecurity services to African enterprises."
    },
    {
      year: "2019",
      title: "First Major Contract",
      description: "Secured our first enterprise client, delivering 24/7 security operations center services for a leading financial institution."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our expert team to 15+ certified security professionals and expanded our service offerings to include threat hunting."
    },
    {
      year: "2021",
      title: "Client Milestone",
      description: "Secured 20+ enterprise clients across West Africa, establishing ourselves as a trusted cybersecurity partner."
    },
    {
      year: "2022",
      title: "Innovation Hub",
      description: "Launched our proprietary threat intelligence platform and opened a second operations center in Lagos."
    },
    {
      year: "2023",
      title: "Regional Leadership",
      description: "Became the leading SOC provider in West Africa with 50+ enterprise clients and ISO 27001 certification."
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Received international cybersecurity excellence award and expanded services to include AI-powered threat detection."
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl  mx-auto">
        {/* Section Header */}
        <div className="text-center  mb-20">
          <h1 className="text-5xl sm:text-6xl font-light text-blue-600 mb-6 tracking-tight">
            Our Journey
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            From a vision to protect African enterprises to becoming the region's leading cybersecurity partner
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

          {/* Timeline Items */}
          <div className="space-y-16 ">
            {timelineData.map((item, index) => (
              <article
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'sm:flex-row-reverse sm:text-right' 
                    : 'sm:flex-row sm:text-left'
                } flex-col text-left`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 hover:scale-125 hover:bg-blue-600"></div>

                {/* Content */}
                <div className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${
                  index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'
                }`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg  hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]">
                    <time className="text-3xl sm:text-4xl font-light text-blue-600 mb-3 block tracking-wide">
                      {item.year}
                    </time>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden sm:block w-2/12"></div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-100">
          <p className="text-2xl font-light text-gray-700 leading-relaxed">
            The journey continues as we shape the future of cybersecurity in Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
