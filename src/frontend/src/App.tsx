import Layout from "./components/Layout";
import CtaSection from "./pages/CtaSection";
import HeroSection from "./pages/HeroSection";
import HowItWorksSection from "./pages/HowItWorksSection";
import ImpactSection from "./pages/ImpactSection";
import ProblemSection from "./pages/ProblemSection";
import SolutionSection from "./pages/SolutionSection";
import TeamSection from "./pages/TeamSection";
import UspSection from "./pages/UspSection";
import VisionSection from "./pages/VisionSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <UspSection />
      <HowItWorksSection />
      <ImpactSection />
      <VisionSection />
      <TeamSection />
      <CtaSection />
    </Layout>
  );
}
