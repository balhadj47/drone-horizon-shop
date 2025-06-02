
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '../data/products';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustBadgesSection from '../components/TrustBadgesSection';
import FAQSection from '../components/FAQSection';
import DroneFinderQuiz from '../components/DroneFinderQuiz';
import NewsletterSection from '../components/NewsletterSection';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CallToActionSection from '../components/CallToActionSection';

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="overflow-hidden">
      <HeroSection productsCount={products.length} />

      <TrustBadgesSection />

      <FeaturesSection />

      <DroneFinderQuiz />

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our most popular drones, trusted by professionals and loved by enthusiasts worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in bg-white" style={{animationDelay: `${(index + 1) * 200}ms`}}>
                <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs font-medium bg-blue-100 text-blue-800">
                      {product.category}
                    </Badge>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-xs text-green-600 font-medium">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      £{product.price.toLocaleString()}
                    </span>
                    
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                      <Link to={`/products/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in delay-600">
            <Button size="lg" asChild variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <NewsletterSection />

      <FAQSection />

      <CallToActionSection />
    </div>
  );
};

export default Index;
