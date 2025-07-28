import React from 'react';
import Image from 'next/image';

export default function AIPoweredDefense() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: TEXT */}
        <div>
          <h2 className="text-5xl font-semibold leading-tight text-gray-900 mb-6">
            <span className="text-blue-600 font-mono font-bold tracking-wide">AI-Powered</span>{' '}
            <span className="text-gray-800">Cybersecurity</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-prose">
            Leverage cutting-edge AI models to enhance your security stack. From real-time threat detection
            to log analysis and autonomous response — it's cybersecurity, redefined by intelligence.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[400px] md:h-[480px]">
          <Image
            src="/technician.jpg"
            alt="Technician monitoring AI-enhanced threat dashboards"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-2xl border "
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
