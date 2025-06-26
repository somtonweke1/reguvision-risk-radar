
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bitcoin, Leaf, Dna } from "lucide-react";

const SectorModules = () => {
  const sectors = [
    {
      icon: <Bitcoin className="w-12 h-12 text-reguvision-amber" />,
      title: "Crypto & DeFi",
      subtitle: "For Crypto CEOs",
      description: "Launch tokens without waking up to SEC lawsuits",
      features: [
        "SEC/CFTC enforcement prediction",
        "Token classification risk analysis", 
        "DeFi protocol compliance scoring",
        "Cross-border regulatory mapping"
      ],
      riskExample: "82% of crypto penalties target undetected gaps",
      bgGradient: "from-reguvision-amber/10 to-reguvision-amber/5"
    },
    {
      icon: <Leaf className="w-12 h-12 text-reguvision-ai-teal" />,
      title: "Carbon Markets",
      subtitle: "For Carbon Traders", 
      description: "Avoid $200/ton penalty scenarios",
      features: [
        "EU ETS compliance monitoring",
        "Carbon credit registry validation",
        "Offset scheme risk assessment",
        "Green taxonomy alignment"
      ],
      riskExample: "EU carbon registry flaws flagged 6 months early",
      bgGradient: "from-reguvision-ai-teal/10 to-reguvision-ai-teal/5"
    },
    {
      icon: <Dna className="w-12 h-12 text-reguvision-trust-blue" />,
      title: "Biosecurity",
      subtitle: "For Biosecurity VCs",
      description: "Red flag high-risk gene edits pre-approval", 
      features: [
        "FDA/EMA approval pathway analysis",
        "Gene editing safety protocols",
        "Clinical trial compliance scoring",
        "International biosafety tracking"
      ],
      riskExample: "Built with Stanford Regulatory AI Lab",
      bgGradient: "from-reguvision-trust-blue/10 to-reguvision-trust-blue/5"
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space font-bold text-reguvision-deep-blue mb-4">
            Industry-Specific Risk Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each sector has unique regulatory landscapes. Our AI modules are trained 
            on industry-specific data to deliver precision predictions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br ${sector.bgGradient} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                    {sector.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-space text-reguvision-deep-blue">
                      {sector.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 font-medium">{sector.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-reguvision-deep-blue">
                  "{sector.description}"
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {sector.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-reguvision-amber rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/50">
                  <p className="text-sm text-gray-600 font-medium">
                    💡 {sector.riskExample}
                  </p>
                </div>
                
                <Button className="w-full bg-reguvision-deep-blue hover:bg-reguvision-deep-blue/90 text-white font-semibold">
                  Explore {sector.title} Module
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorModules;
