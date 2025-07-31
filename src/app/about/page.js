"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

import Hero from "../components/hero";
import FirstFrameHeader from "../components/navbar";
import Footer from "../components/footer";

const CompanyHistory = dynamic(() => import("./components/companyhistory"));
const Values = dynamic(() => import("./components/values"));
const MissionVisionSection = dynamic(() => import("./components/mission-vision"));
const GoalsAndCTASection = dynamic(() => import("./components/goals-cta"));
export default function AboutPage() {
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://slammsoc.com" />
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

      <div className="text-black min-h-screen flex flex-col">
        <header>
          <FirstFrameHeader />
        </header>

        <main className="flex-1">
          <section>
            <Hero
              title="Slamm SOC Experts"
              highlight="About Us"
              subtitle="AI-driven excellence in cybersecurity and SOC services"
              videoSrc="/soc-team.mov"
              posterImage="/hero-bg.jpg" // ✅ This is the key part

            />
          </section>

          <section>
   
          </section>

          <section>
            <article>
              <CompanyHistory />
            </article>
          </section>

          <section>
            <article>
              <Values />
            </article>
          </section>

          <section>
            <article>
              <MissionVisionSection />
            </article>
          </section>

          <section>
            <article>
              <GoalsAndCTASection />
            </article>
          </section>

        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
