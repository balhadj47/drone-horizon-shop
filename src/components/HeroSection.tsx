
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsSection from './StatsSection';

interface HeroSectionProps {
  productsCount: number;
}

const HeroSection = ({ productsCount }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              Elevate Your Perspective
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Discover our premium collection of drones designed for professionals, enthusiasts, and beginners alike. Experience the sky like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 text-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Link to="/shipping-returns">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          <StatsSection productsCount={productsCount} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
