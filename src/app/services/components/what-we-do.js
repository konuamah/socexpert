import React from 'react';
import { ShieldCheck, Cpu, FileCheck2, SlidersHorizontal } from 'lucide-react';

export default function CombinedDeploymentWorkflow() {
  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col lg:flex-row font-sans p-4 sm:p-6 lg:p-8"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Left Side: What We Do */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-16 bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl lg:rounded-l-3xl lg:rounded-r-none shadow-lg flex flex-col justify-center">
        <div className="max-w-md mx-auto lg:mx-0">
          <div className="text-blue-600 text-sm font-semibold mb-4 tracking-wide">What We Do</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 lg:mb-8 leading-tight">Core Capabilities</h1>
          <div className="space-y-6 lg:space-y-10">
            <div className="flex items-start gap-4 lg:gap-5">
              <div className="w-10 h-10 bg-blue-100 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg lg:text-xl">SOC Operations</h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Continuous monitoring, incident response, threat hunting.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <div className="w-10 h-10 bg-purple-100 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <Cpu className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg lg:text-xl">Advanced Tech</h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Automation, analytics, SOAR integration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <div className="w-10 h-10 bg-pink-100 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <FileCheck2 className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg lg:text-xl">Compliance & Risk</h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Audits, compliance support, risk advisory.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <div className="w-10 h-10 bg-yellow-100 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <SlidersHorizontal className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg lg:text-xl">Custom Solutions</h3>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Tailored reporting and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Just Image */}
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Cybersecurity Operations Dashboard"
          className="object-cover w-full h-64 sm:h-80 lg:h-full rounded-3xl lg:rounded-r-3xl lg:rounded-l-none shadow-xl"
        />
      </div>
    </div>
  );
}