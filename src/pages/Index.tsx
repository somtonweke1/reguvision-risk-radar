
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SectorModules from "@/components/SectorModules";
import Testimonials from "@/components/Testimonials";
import TrustIndicators from "@/components/TrustIndicators";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <Features />
      <SectorModules />
      <Testimonials />
      <TrustIndicators />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
