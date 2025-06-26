
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, AlertTriangle, Globe, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-reguvision-ai-teal" />,
      title: "Gap Radar™ AI",
      description: "Scans 500+ regulatory databases for unseen vulnerabilities in crypto asset listings, carbon credit schemes, and bio-research protocols",
      highlight: "Patent-pending technology"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-reguvision-amber" />,
      title: "Failure Forecast Engine",
      description: "Predicts high-risk regulatory interventions with 92% accuracy using advanced machine learning models",
      highlight: "92% accuracy rate"
    },
    {
      icon: <Globe className="w-8 h-8 text-reguvision-trust-blue" />,
      title: "Sector-Specific Modules",
      description: "Custom risk models for DeFi protocols, carbon offset registries, and biosecurity frameworks",
      highlight: "Industry-specific AI"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-reguvision-ai-teal" />,
      title: "Impact Simulation",
      description: "Projects financial and reputational damage of potential regulatory actions before they occur",
      highlight: "Quantified risk assessment"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space font-bold text-reguvision-deep-blue mb-4">
            AI-Powered Regulatory Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop reacting to regulatory changes. Start predicting them. 
            Our enterprise-grade AI platform transforms compliance from cost center to competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-space text-reguvision-deep-blue mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-reguvision-amber/10 text-reguvision-amber text-sm font-medium rounded-full">
                  {feature.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border">
            <span className="text-sm text-gray-600 mr-3">Trusted by top exchanges:</span>
            <div className="flex items-center space-x-4 text-sm font-medium text-reguvision-trust-blue">
              <span>Coinbase</span>
              <span>•</span>
              <span>Binance</span>
              <span>•</span>
              <span>FTX Recovery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
