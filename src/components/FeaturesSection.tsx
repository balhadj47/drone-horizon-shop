
import React from 'react';
import { Star, Shield, Truck } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Manificos?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're committed to delivering excellence in every aspect of your drone experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group animate-fade-in delay-200 transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mb-6 group-hover:shadow-xl group-hover:shadow-blue-200/50 transition-all duration-300">
              <Star className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Premium Quality</h3>
            <p className="text-slate-600 leading-relaxed">
              Professional-grade drones with cutting-edge technology and superior build quality for unmatched performance.
            </p>
          </div>
          
          <div className="text-center group animate-fade-in delay-300 transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl mb-6 group-hover:shadow-xl group-hover:shadow-green-200/50 transition-all duration-300">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Warranty Protection</h3>
            <p className="text-slate-600 leading-relaxed">
              Comprehensive warranty coverage and expert support for complete peace of mind with every purchase.
            </p>
          </div>
          
          <div className="text-center group animate-fade-in delay-400 transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl mb-6 group-hover:shadow-xl group-hover:shadow-orange-200/50 transition-all duration-300">
              <Truck className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">Fast Delivery</h3>
            <p className="text-slate-600 leading-relaxed">
              Quick and secure shipping to UK, EU & Canada. Free shipping on orders over £500.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
