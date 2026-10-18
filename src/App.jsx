import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import Hero from "./components/sections/Hero";
import Metrics from "./components/sections/Metrics";
import Problems from "./components/sections/Problems";
import Projects from "./components/sections/Projects";
import Benefits from "./components/sections/Benefits";
import MissionVision from "./components/sections/MissionVision";
import HowItWorks from "./components/sections/HowItWorks";
import UseCases from "./components/sections/UseCases";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <Projects />
        <Benefits />
        <MissionVision />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
