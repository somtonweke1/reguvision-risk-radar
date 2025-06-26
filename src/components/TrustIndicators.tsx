
import { Shield, Award, Users, Lock } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <Shield className="w-6 h-6 text-reguvision-trust-blue" />,
      title: "SOC 2 Type II",
      subtitle: "Certified"
    },
    {
      icon: <Award className="w-6 h-6 text-reguvision-amber" />,
      title: "YCombinator",
      subtitle: "S25 Backed"
    },
    {
      icon: <Users className="w-6 h-6 text-reguvision-ai-teal" />,
      title: "Ex-SEC/FCA",
      subtitle: "Advisors"
    },
    {
      icon: <Lock className="w-6 h-6 text-reguvision-trust-blue" />,
      title: "Enterprise",
      subtitle: "Security"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 font-medium mb-4">TRUSTED BY FINANCIAL LEADERS WORLDWIDE</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                {indicator.icon}
              </div>
              <div>
                <p className="font-semibold text-reguvision-deep-blue">{indicator.title}</p>
                <p className="text-sm text-gray-500">{indicator.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Top 3 carbon exchanges use ReguVision daily • Built with Stanford Regulatory AI Lab
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
