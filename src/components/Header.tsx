
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-reguvision-trust-blue to-reguvision-ai-teal rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-space font-semibold text-reguvision-deep-blue">
              ReguVision AI
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-reguvision-trust-blue transition-colors">
              Features
            </a>
            <a href="#sectors" className="text-gray-600 hover:text-reguvision-trust-blue transition-colors">
              Sectors
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-reguvision-trust-blue transition-colors">
              Proof
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-reguvision-trust-blue transition-colors">
              Pricing
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-reguvision-trust-blue">
              Sign In
            </Button>
            <Button className="bg-reguvision-trust-blue hover:bg-reguvision-trust-blue/90 text-white px-6">
              Start Free Scan
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
