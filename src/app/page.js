"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

const AIPoweredDefense = dynamic(() => import("./components/ai-powered-defense"));
const About = dynamic(() => import("./components/about"));
const ServicesPreview = dynamic(() => import("./components/service"));
const CybersecurityComparison = dynamic(() => import("./components/comparison"));
const WhyChooseUs = dynamic(() => import("./components/why-choose-us"));

export default function Home() {
  return (
    <>
   <Head>
  <title>Slamm SOC Experts — Advanced Cybersecurity & SOC Services</title>
  <meta
    name="description"
    content="Specializing in AI-driven Security Operations Center services, Slamm SOC Experts offers industry-leading threat detection, response, and resilience."
  />

  {/* Open Graph Meta Tags for Social Sharing */}
  <meta
    property="og:title"
    content="Slamm SOC Experts — Advanced Cybersecurity & SOC Services"
  />
  <meta
    property="og:description"
    content="Specializing in AI-driven Security Operations Center services, Slamm SOC Experts offers industry-leading threat detection, response, and resilience."
  />
  <meta property="og:image" content="https://slammsoc.com/logo.jpg" />
  <meta property="og:url" content="https://slammsoc.com" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Slamm SOC Experts — Advanced Cybersecurity & SOC Services" />
  <meta name="twitter:description" content="Industry-leading SOC services powered by AI, offering 24/7 monitoring, threat detection, and cyber resilience." />
  <meta name="twitter:image" content="https://slammsoc.com/logo.jpg" />

  {/* SEO Meta */}
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://slammsoc.com" />

  {/* Structured Data (JSON-LD) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Slamm SOC Experts",
        url: "https://slammsoc.com",
        logo: "https://slammsoc.com/logo.jpg",
        description:
          "AI-driven Security Operations Center services offering leading threat detection, response, and resilience.",
        sameAs: [
          "https://linkedin.com/company/slamm-soc-experts",
          "https://twitter.com/slammsoc",
        ],
      }),
    }}
  />
</Head>


      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero
          title="Slamm SOC"
          highlight="Experts"
          subtitle="Your trusted partner in cybersecurity, offering 24/7 threat monitoring and tailored protection strategies."
          videoSrc="/intro.mp4"
      posterImage="/hero-bg.png" // ✅ This is the key part


        />

        <AIPoweredDefense />
        <CybersecurityComparison />
        <WhyChooseUs />
        <ServicesPreview />
     

        <div className="px-4 md:px-8 py-6">
          <About />
        </div>

        <Footer />
      </div>
    </>
  );
}
