
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-reguvision-deep-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-reguvision-trust-blue to-reguvision-ai-teal rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-space font-semibold">ReguVision AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Predict regulatory crashes before markets collapse. 
              AI-powered compliance for the future of finance.
            </p>
            <p className="text-xs text-gray-500">
              © 2024 ReguVision AI. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Gap Radar™ AI</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Failure Forecast</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Impact Simulation</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">API Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Crypto & DeFi</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Carbon Markets</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Biosecurity</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Fintech</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-reguvision-ai-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
            <a href="#" className="hover:text-reguvision-ai-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-reguvision-ai-teal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-reguvision-ai-teal transition-colors">Security</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-500">SOC 2 Type II Certified</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="text-xs text-gray-500">YC S25</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
