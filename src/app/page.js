"use client";
import Head from "next/head";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AIPoweredDefense from "./components/ai-powered-defense";
import About from "./components/about";
import ServicesPreview from "./components/service";
import CybersecurityComparison from "./components/comparison";
import WhyChooseUs from "./components/why-choose-us";
import ClientsAndTestimonials from "./components/testimonial";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Slamm SOC Experts — Advanced Cybersecurity & SOC Services</title>
        <meta
          name="description"
          content="Specializing in AI-driven Security Operations Center services, Slamm SOC Experts offers industry-leading threat detection, response, and resilience."
        />
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://slammsoc.com" />
      </Head>

      <div className="min-h-screen bg-[#f9f9f9] text-black flex flex-col">
        <main className="flex-1">
          <Navbar />
          <Hero
     title="Slamm SOC"
        highlight="Experts"
      subtitle="Your trusted partner in cybersecurity, offering 24/7 threat monitoring and tailored protection strategies."
               videoSrc="/intro.mp4"
          />
          <AIPoweredDefense />
          <CybersecurityComparison />
          <WhyChooseUs />
          <ServicesPreview />
          <ClientsAndTestimonials />
          <div className="px-4 md:px-8 py-6">
            <About />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
