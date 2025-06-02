
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useTestimonials } from '../hooks/useTestimonials';

const TestimonialsSection = () => {
  const { data: testimonials = [], isLoading, error } = useTestimonials();

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from thousands of satisfied customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from thousands of satisfied customers worldwide.
            </p>
          </div>
          <div className="text-center text-red-600">
            Error loading testimonials: {error.message}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from thousands of satisfied customers worldwide.
            </p>
          </div>
          <div className="text-center text-slate-600">
            No testimonials found.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied customers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image_url || '/placeholder.svg'} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 bg-slate-200"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
