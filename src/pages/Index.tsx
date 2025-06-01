
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '../data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-700">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-300">10,000+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-blue-200">Drone Models</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-300">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Premium Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Professional-grade drones with cutting-edge technology and superior build quality for unmatched performance.
              </p>
            </div>
            
            <div className="text-center group animate-fade-in delay-300 transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Warranty Protection</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive warranty coverage and expert support for complete peace of mind with every purchase.
              </p>
            </div>
            
            <div className="text-center group animate-fade-in delay-400 transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Fast Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Quick and secure shipping worldwide to get your drone in the air as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-xs text-green-600 font-medium">In Stock</span>
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
                      ${product.price.toLocaleString()}
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

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Take Flight?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Manificos for their aerial adventures.
            </p>
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link to="/products">
                Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
