
import React from 'react';
import { Shield, Truck, Award, HeartHandshake, CreditCard, Lock, CheckCircle, Globe } from 'lucide-react';
import { useTrustBadges } from '../hooks/useTrustBadges';

const iconMap = {
  Shield,
  Truck,
  Award,
  HeartHandshake,
  CreditCard,
  Lock,
  CheckCircle,
  Globe
};

// Static trust badges as fallback when database is empty
const staticTrustBadges = [
  {
    id: '1',
    title: 'DJI Authorized',
    description: 'Official DJI Partner',
    icon: 'Award',
    display_order: 1
  },
  {
    id: '2',
    title: 'Free Shipping',
    description: 'Orders over £500',
    icon: 'Truck',
    display_order: 2
  },
  {
    id: '3',
    title: 'Secure Payment',
    description: 'SSL Protected',
    icon: 'Lock',
    display_order: 3
  },
  {
    id: '4',
    title: 'UK & EU Delivery',
    description: '2-5 Business Days',
    icon: 'Globe',
    display_order: 4
  },
  {
    id: '5',
    title: 'Expert Support',
    description: '24/7 Technical Help',
    icon: 'HeartHandshake',
    display_order: 5
  },
  {
    id: '6',
    title: 'Quality Guarantee',
    description: '2 Year Warranty',
    icon: 'CheckCircle',
    display_order: 6
  }
];

const TrustBadgesSection = () => {
  const { data: badges = [], isLoading } = useTrustBadges();
  
  // Use database badges if available, otherwise use static badges
  const displayBadges = badges.length > 0 ? badges : staticTrustBadges;

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
          {displayBadges.map((badge, index) => {
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

        {/* Partnership/Brand Logos Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              Authorized Partners
            </h4>
            <p className="text-sm text-slate-600">
              Official retailers for leading drone manufacturers
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-slate-700">DJI</div>
            <div className="text-xl font-semibold text-slate-700">AUTEL</div>
            <div className="text-xl font-semibold text-slate-700">PARROT</div>
            <div className="text-xl font-semibold text-slate-700">SKYDIO</div>
            <div className="text-xl font-semibold text-slate-700">YUNEEC</div>
          </div>
        </div>

        {/* Shipping Information Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6" />
              <span className="font-semibold">Free Shipping on orders over £500</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span className="font-semibold">UK & EU Delivery: 2-5 Business Days</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">Insured & Tracked Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
