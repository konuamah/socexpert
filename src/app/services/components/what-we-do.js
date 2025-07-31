import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, FileCheck2, SlidersHorizontal } from "lucide-react";

export default function CombinedDeploymentWorkflow() {
  return (
    <section
      className="min-h-screen bg-gray-50 flex flex-col lg:flex-row font-sans p-4 sm:p-6 lg:p-8"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
      aria-label="Core Capabilities of Slamm Cybersecurity Services"
    >
      {/* Left Side: What We Do */}
      <aside
        className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-16 bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl lg:rounded-l-3xl lg:rounded-r-none shadow-lg flex flex-col justify-center"
        aria-labelledby="core-capabilities-title"
        role="complementary"
      >
        <div className="max-w-md mx-auto lg:mx-0">
          <p className="text-blue-600 text-sm font-semibold mb-4 tracking-wide uppercase">
            What We Do
          </p>

          {/* Use h1 only once per page, but here it’s ok if this is main section */}
          <h1
            id="core-capabilities-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 lg:mb-8 leading-tight"
          >
            Core Capabilities
          </h1>

          <div className="space-y-6 lg:space-y-10">
            {[
              {
                Icon: ShieldCheck,
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "SOC Operations",
                description:
                  "Continuous monitoring, incident response, threat hunting.",
              },
              {
                Icon: Cpu,
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600",
                title: "Advanced Tech",
                description: "Automation, analytics, SOAR integration.",
              },
              {
                Icon: FileCheck2,
                bgColor: "bg-pink-100",
                iconColor: "text-pink-600",
                title: "Compliance & Risk",
                description: "Audits, compliance support, risk advisory.",
              },
              {
                Icon: SlidersHorizontal,
                bgColor: "bg-yellow-100",
                iconColor: "text-yellow-600",
                title: "Custom Solutions",
                description: "Tailored reporting and strategic planning.",
              },
            ].map(({ Icon, bgColor, iconColor, title, description }) => (
              <article
                key={title}
                className="flex items-start gap-4 lg:gap-5"
                aria-label={title}
                role="region"
              >
                <div
                  className={`${bgColor} w-10 h-10 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner`}
                  aria-hidden="true"
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <div>
                  {/* Use h2 here because h1 is above */}
                  <h2 className="font-semibold text-gray-900 mb-2 text-lg lg:text-xl">
                    {title}
                  </h2>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>

      {/* Right Side: Image */}
      <div
        className="w-full lg:w-1/2 mt-4 lg:mt-0 relative h-64 sm:h-80 lg:h-auto min-h-[400px]"
        role="img"
        aria-label="Cybersecurity Operations Dashboard"
      >
        <Image
          src="/dashboard.jpg"
          alt="Dashboard displaying cybersecurity operations and monitoring"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl lg:rounded-r-3xl lg:rounded-l-none shadow-xl"
          priority={true}
          loading="eager" // Explicit eager loading for LCP optimization
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
