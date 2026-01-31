import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import RecruiterSection from "./components/RecruiterSection";
import CandidateSection from "./components/CandidateSection";
import WhyFoxkrit from "./components/WhyFoxkrit";
import SpecializedDomains from "./components/SpecializedDomains";
import HowWeWork from "./components/HowWeWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Light rays background */}
      {/* <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.5}
        lightSpread={0.3}
        rayLength={2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
        className="absolute inset-0 z-0 pointer-events-none"
      /> */}

      <Navbar />

      {/* Content */}
      <div className="relative z-10 w-full">
        <HeroSection />
        <RecruiterSection />
        <CandidateSection />
        <WhyFoxkrit />
        <SpecializedDomains />
        <HowWeWork />
        <Footer />
      </div>
    </div>
  );
}

export default App;
