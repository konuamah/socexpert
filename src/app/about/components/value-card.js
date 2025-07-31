import React from 'react';

const CyberSecurityServiceCard = ({ 
  title = "SOC Service",
  description = "Comprehensive security operations service description.",
  icon = <div className="w-12 h-12 bg-gray-200 rounded-full" />,
}) => {
  return (
    <div 
      className="group relative flex flex-col w-80 h-96 p-8 
                 bg-white/20 border border-white/30 
                 backdrop-blur-md shadow-lg transition-all duration-300
                 hover:bg-white/30 hover:border-white/50 hover:shadow-xl"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full items-center">
        {/* Icon Container - centered with padding and background */}
        <div className="flex justify-center mb-6 p-4 rounded-full bg-white/40 backdrop-blur-sm group-hover:bg-white/60 transition-colors duration-300">
          <div className="flex items-center justify-center">
            {React.cloneElement(icon, {
              className: `${icon.props.className} group-hover:scale-110 transition-transform duration-300`
            })}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-center text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <div className="flex-1 mb-6 px-2">
          <p className="text-center text-gray-800 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityServiceCard;
