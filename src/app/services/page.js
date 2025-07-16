// pages/services.js
import Hero from "../components/hero";
import Footer from "../components/footer";
import FirstFrameHeader from "../components/navbar";
import WhatWeDo from "./components/what-we-do";
import { HowItWorks } from "./components/how-it-works";
import ContactCTA from "./components/contact";
export default function Services() {
  return (
   
      <div className=" text-black min-h-screen flex flex-col">
        <main className="flex-1">
          <FirstFrameHeader />
          <Hero
            highlight="24/7 Proactive Cybersecurity. Real-time Detection. Rapid Response." 

            videoSrc="/services-hero.mp4"
          />

          
          <WhatWeDo/>
          <HowItWorks/>
          <ContactCTA/>
        </main>

       
        <Footer />
      </div>
  );
}

