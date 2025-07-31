import React from 'react';
import Image from 'next/image';

export default function AIPoweredDefense() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 sm:gap-8 md:gap-16 items-center">
        {/* LEFT: TEXT */}
        <div className="pr-2 sm:pr-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-900 mb-3 sm:mb-4 md:mb-6">
            <span className="text-blue-600 font-mono font-bold tracking-wide block sm:inline">AI-Powered</span>{' '}
            <span className="text-gray-800">Cybersecurity</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3 md:mt-4">
            Leverage cutting-edge AI models to enhance your security stack. From real-time threat detection
            to log analysis and autonomous response — it's cybersecurity, redefined by intelligence.
          </p>
        </div>
        
        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[480px]">
          <Image
            src="/technician.jpg"
            alt="Technician monitoring AI-enhanced threat dashboards"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-2xl border"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}