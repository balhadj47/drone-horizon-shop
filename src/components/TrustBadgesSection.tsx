
import React from 'react';
import { Shield, Truck, Award, HeartHandshake, CreditCard, Lock } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      title: "2-Year Warranty",
      description: "Full coverage included"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Orders over £500"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "CAA approved drones"
    },
    {
      icon: HeartHandshake,
      title: "Expert Support",
      description: "24/7 assistance"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Stripe & Wise protected"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "GDPR compliant"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Your Trust is Our Priority
          </h3>
          <p className="text-slate-600">
            Industry-leading guarantees and certifications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 mb-3">
                <badge.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-sm text-slate-900 mb-1">{badge.title}</h4>
              <p className="text-xs text-slate-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
