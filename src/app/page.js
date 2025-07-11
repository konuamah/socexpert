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
    <div className="min-h-screen bg-[#f9f9f9] text-black flex flex-col">
      {/* Header + Content */}
      <main className="flex-1">
        <Navbar />
     <Hero
      title="Unleash Next-Gen"
      highlight="AI Defense"
      subtitle="Merging cybersecurity and artificial intelligence to protect systems with intelligent automation and real-time threat detection."
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
        {/* CTA if needed */}
        
      </main>
      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}