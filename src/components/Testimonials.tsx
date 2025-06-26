
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Prevented $47M potential fines for CoinFlow's token launch",
      author: "Sarah Chen",
      role: "CRO, Blockchain Fintech",
      company: "CoinFlow",
      rating: 5,
      impact: "$47M saved"
    },
    {
      quote: "Flagged EU carbon registry flaws 6 months before market freeze",
      author: "Marcus Rodriguez",
      role: "Director, ClimateTech Fund",
      company: "GreenVest Capital",
      rating: 5,
      impact: "6 months early warning"
    },
    {
      quote: "ReguVision spotted FDA pathway issues that saved our biotech IPO",
      author: "Dr. Emily Watson",
      role: "Head of Regulatory",
      company: "GeneTech Innovations",
      rating: 5,
      impact: "IPO saved"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-reguvision-deep-blue to-reguvision-trust-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space font-bold mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading financial innovators trust ReguVision AI to protect their investments 
            and accelerate growth through predictive compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-reguvision-amber fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 text-gray-100">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                    <p className="text-sm text-reguvision-ai-teal font-medium">{testimonial.company}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-reguvision-amber/20 text-reguvision-amber text-sm font-bold rounded-full">
                      {testimonial.impact}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-reguvision-amber">92%</div>
              <div className="text-sm text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-reguvision-ai-teal">$250M+</div>
              <div className="text-sm text-gray-300">Fines Prevented</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Data Sources</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
