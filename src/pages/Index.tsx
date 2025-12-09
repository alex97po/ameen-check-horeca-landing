import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ValuePropsSection from "@/components/landing/ValuePropsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import RegionalSection from "@/components/landing/RegionalSection";
import ScenariosSection from "@/components/landing/ScenariosSection";
import WaitlistSection from "@/components/landing/WaitlistSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ValuePropsSection />
      <AudienceSection />
      <RegionalSection />
      <ScenariosSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
