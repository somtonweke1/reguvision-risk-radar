
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import DemoModal from "./DemoModal";

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-reguvision-deep-blue via-reguvision-trust-blue to-reguvision-ai-teal/20 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-reguvision-amber/10 rounded-full animate-pulse-ring"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-reguvision-ai-teal/10 rounded-full animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-reguvision-amber/10 rounded-full animate-pulse-ring" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-reguvision-amber/20 rounded-full text-reguvision-amber text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-reguvision-amber rounded-full mr-2 animate-pulse"></span>
              Backed by YCombinator S25
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-space font-bold leading-tight mb-6">
              Predict Regulatory 
              <span className="text-reguvision-amber"> Crashes</span> Before 
              Markets Collapse
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Financial innovators lose millions daily from regulatory blind spots. 
              Our AI scans 500+ databases to predict failures with 92% accuracy—before they happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-reguvision-amber hover:bg-reguvision-amber/90 text-black font-semibold px-8 py-4 text-lg"
              >
                Scan Your Regulatory Blind Spots
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => setShowDemo(true)}
              >
                <Play className="mr-2 w-5 h-5" />
                See Failure Predictions in Action
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-reguvision-amber font-bold text-lg mr-1">92%</span>
                prediction accuracy
              </div>
              <div className="flex items-center">
                <span className="text-reguvision-amber font-bold text-lg mr-1">500+</span>
                regulatory databases
              </div>
              <div className="flex items-center">
                <span className="text-reguvision-amber font-bold text-lg mr-1">$47M</span>
                fines prevented
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-reguvision-amber/20 rounded-lg">
                  <span className="text-white">SEC Token Regulation Risk</span>
                  <span className="text-reguvision-amber font-bold">HIGH</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-reguvision-ai-teal/20 rounded-lg">
                  <span className="text-white">EU Carbon Registry Status</span>
                  <span className="text-reguvision-ai-teal font-bold">STABLE</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-500/20 rounded-lg">
                  <span className="text-white">FDA Bio-Research Alert</span>
                  <span className="text-red-400 font-bold">CRITICAL</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-reguvision-amber/10 to-reguvision-ai-teal/10 rounded-lg border border-reguvision-amber/30">
                <p className="text-reguvision-amber text-sm font-medium mb-2">⚠️ Predicted Intervention</p>
                <p className="text-white text-sm">
                  New DeFi classification rules expected within 14 days. 
                  Potential impact: $3.2M compliance costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
};

export default Hero;
