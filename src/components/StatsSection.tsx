
import React from 'react';

interface StatsSectionProps {
  productsCount: number;
}

const StatsSection = ({ productsCount }: StatsSectionProps) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-700">
      <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-3xl font-bold text-cyan-300">10,000+</div>
        <div className="text-blue-200">Happy Customers</div>
      </div>
      <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-3xl font-bold text-cyan-300">{productsCount}+</div>
        <div className="text-blue-200">Drone Models</div>
      </div>
      <div className="text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-3xl font-bold text-cyan-300">24/7</div>
        <div className="text-blue-200">Expert Support</div>
      </div>
    </div>
  );
};

export default StatsSection;
