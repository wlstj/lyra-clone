import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import MeetingSpaces from "./components/sections/MeetingSpaces";
import AITeammate from "./components/sections/AITeammate";
import Knowledge from "./components/sections/Knowledge";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <NavBar />
      <Hero />
      <MeetingSpaces />
      <AITeammate />
      <Knowledge />
      <Integrations />
      <Footer />
    </main>
  );
}
