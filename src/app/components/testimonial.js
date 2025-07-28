import React from "react";

const logos = [
  { name: "Tuple", icon: <div className="w-6 h-6 bg-black rounded-sm" /> },
  { name: "Reform", icon: <div className="w-6 h-6 bg-black text-white rounded-sm flex items-center justify-center text-xs font-bold">Re</div> },
  { name: "SavvyCal", icon: <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">S</div> },
  { name: "Laravel", icon: <div className="w-6 h-6 border border-gray-400 rounded-sm flex items-center justify-center"><svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg></div> },
  { name: "Statamic", icon: <div className="w-6 h-6 bg-black text-white rounded-sm flex items-center justify-center text-xs font-bold">S</div> },
  { name: "Linear", icon: <div className="w-6 h-6 bg-purple-600 rounded-full" /> },
  { name: "Basecamp", icon: <div className="w-6 h-6 bg-green-500 rounded-sm" /> },
  { name: "Slack", icon: <div className="w-6 h-6 bg-pink-500 rounded-full" /> },
  { name: "Zapier", icon: <div className="w-6 h-6 bg-orange-500 rounded-sm" /> },
  { name: "Notion", icon: <div className="w-6 h-6 bg-white border border-black" /> },
  { name: "Trello", icon: <div className="w-6 h-6 bg-blue-500" /> },
  { name: "Asana", icon: <div className="w-6 h-6 bg-rose-400" /> },
];

const groupLogos = (logos, size) => {
  const result = [];
  for (let i = 0; i < logos.length; i += size) {
    result.push(logos.slice(i, i + size));
  }
  return result;
};

export default function TrustedTeamsSection() {
  const groups = groupLogos(logos, 6);

  return (
    <section className="py-24 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Trusted by the most innovative teams
          </h2>
          <p className="text-lg text-gray-600">
            We partner with teams who challenge the status quo and deliver real change with smart tech.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Create account
            </button>
            <button className="text-gray-700 hover:text-gray-900 px-6 py-3 font-medium flex items-center gap-2">
              Contact us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Logo Grid - Static for SEO */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100"
              style={{
                animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s both`
              }}
            >
              {logo.icon}
              <span className="text-base font-medium text-gray-800">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }} />
    </section>
  );
}