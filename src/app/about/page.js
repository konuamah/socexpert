

import Hero from "../components/hero";
import Collage from "./components/collage";
import FirstFrameHeader from "../components/navbar";
import CompanyHistory from "./components/companyhistory";
import Values from "./components/values";
import LeadershipTeam from "./components/leadership-team";
import Footer from "../components/footer";
export default function AboutPage() {
  return (
    <div className="bg-[#f9f9f9] text-black ßmin-h-screen flex flex-col">
      <main className="flex-1">
        <FirstFrameHeader />
        <Hero
          title="About"
          highlight="Slamm SOC Experts"
          subtitle="A concise and powerful mission statement"
          videoSrc="/soc-team.mp4"
        />
      </main>

      <Collage />
      <CompanyHistory />
      <Values />
      <LeadershipTeam />
      <Footer />

      {/* Footer always at bottom */}


    </div>
  );
}
