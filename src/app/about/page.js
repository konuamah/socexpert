import Head from "next/head";
import Hero from "../components/hero";
import Collage from "./components/collage";
import FirstFrameHeader from "../components/navbar";
import CompanyHistory from "./components/companyhistory";
import Values from "./components/values";
import LeadershipTeam from "./components/leadership-team";
import Footer from "../components/footer";
import GoalsAndCTASection from "./components/goals-cta";
import MissionVisionSection from "./components/mission-vision";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Slamm SOC Experts</title>
        <meta
          name="description"
          content="Learn about Slamm SOC Experts, our mission, values, and the team behind our cybersecurity excellence."
        />
        <meta property="og:title" content="About Us | Slamm SOC Experts" />
        <meta
          property="og:description"
          content="Discover the story, mission, and leadership of Slamm SOC Experts."
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className=" text-black min-h-screen flex flex-col">
        <main className="flex-1">
          <FirstFrameHeader />
          <Hero
            title="About"
            highlight="Slamm SOC Experts"
            subtitle="A concise and powerful mission statement"
            videoSrc="/soc-team.mp4"
          />
        </main>

        <section><Collage /></section>
        <section><CompanyHistory /></section>
        <section><Values /></section>
        <section><MissionVisionSection/></section>
     <section><GoalsAndCTASection/></section>
        <section><LeadershipTeam /></section>

        <Footer />
      </div>
    </>
  );
}
