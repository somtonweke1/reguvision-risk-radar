
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-reguvision-deep-blue to-reguvision-trust-blue text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-reguvision-amber/5 rounded-full animate-pulse-ring"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-reguvision-ai-teal/5 rounded-full animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
          Stop Gambling with Regulatory Risk
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 500+ financial innovators who've eliminated compliance surprises. 
          Get your free regulatory risk assessment in 60 seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-reguvision-amber hover:bg-reguvision-amber/90 text-black font-bold px-10 py-4 text-lg"
          >
            Start Free Risk Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg"
          >
            Book Enterprise Demo
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-reguvision-ai-teal flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Free Risk Scan</p>
              <p className="text-sm text-gray-300">Identify your top 3 regulatory blind spots instantly</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-reguvision-ai-teal flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">No Credit Card</p>
              <p className="text-sm text-gray-300">Full assessment with personalized recommendations</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-reguvision-ai-teal flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Enterprise Ready</p>
              <p className="text-sm text-gray-300">SOC 2 certified with 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
