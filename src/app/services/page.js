"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

// Keep critical above-the-fold components as regular imports
import Hero from "../components/hero";
import Footer from "../components/footer";
import FirstFrameHeader from "../components/navbar";

// Use dynamic imports for below-the-fold content sections
const WhatWeDo = dynamic(() => import("./components/what-we-do"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-64"></div>
});

const HowItWorks = dynamic(() => import("./components/how-it-works").then(mod => ({ default: mod.HowItWorks })), {
  loading: () => <div className="animate-pulse bg-gray-100 h-64"></div>
});

const ContactCTA = dynamic(() => import("./components/contact"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-32"></div>
});

export default function Services() {
  return (
    <>
      <Head>
        <title>Cybersecurity Services | Slamm SOC Experts</title>
        <meta
          name="description"
          content="Explore Slamm SOC Experts' AI-driven cybersecurity services, including 24/7 threat detection, SOC operations, and rapid incident response."
        />
        <meta
          property="og:title"
          content="Cybersecurity Services | Slamm SOC Experts"
        />
        <meta
          property="og:description"
          content="Explore Slamm SOC Experts' AI-driven cybersecurity services, including 24/7 threat detection, SOC operations, and rapid incident response."
        />
        <meta property="og:image" content="https://slammsoc.com/logo.jpg" />
        <meta property="og:url" content="https://slammsoc.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://slammsoc.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Cybersecurity & SOC Services",
              provider: {
                "@type": "Organization",
                name: "Slamm SOC Experts",
                url: "https://slammsoc.com",
                logo: "https://slammsoc.com/logo.jpg",
              },
              description:
                "Slamm SOC Experts provides 24/7 cybersecurity services, AI-powered SOC operations, and incident response solutions.",
              areaServed: {
                "@type": "Place",
                name: "Global",
              },
            }),
          }}
        />
      </Head>

      <div className="text-black min-h-screen flex flex-col">
        <header>
          <FirstFrameHeader />
        </header>

        <main className="flex-1">
          <section>
           <Hero
                      title="Slamm SOC Experts"
                      highlight="Services"
                      subtitle="AI-driven excellence in cybersecurity and SOC services"
                      videoSrc="/services-hero.mov"
                    />
          </section>

          <section>
            <WhatWeDo />
          </section>

          <section>
            <HowItWorks />
          </section>

          <section>
            <ContactCTA />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}