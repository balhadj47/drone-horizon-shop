
import React from 'react';
import { Shield, Truck, Award, HeartHandshake, CreditCard, Lock } from 'lucide-react';
import { useTrustBadges } from '../hooks/useTrustBadges';

const iconMap = {
  Shield,
  Truck,
  Award,
  HeartHandshake,
  CreditCard,
  Lock
};

const TrustBadgesSection = () => {
  const { data: badges = [], isLoading } = useTrustBadges();

  if (isLoading) {
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
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-12 w-12 rounded-xl mx-auto mb-3"></div>
                <div className="bg-gray-200 h-4 rounded mb-1"></div>
                <div className="bg-gray-200 h-3 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {badges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Shield;
            
            return (
              <div key={badge.id} className="text-center group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 mb-3">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-sm text-slate-900 mb-1">{badge.title}</h4>
                <p className="text-xs text-slate-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
