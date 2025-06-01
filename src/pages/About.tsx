
import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Manificos</h1>
          <p className="text-xl text-slate-600">
            Leading the future of aerial technology with premium drones for professionals and enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2020, Manificos has been at the forefront of drone technology innovation. 
              We started with a simple mission: to make professional-grade drones accessible to everyone, 
              from industry professionals to weekend enthusiasts.
            </p>
            <p className="text-slate-600">
              Today, we're proud to serve thousands of customers worldwide with our carefully curated 
              selection of premium drones and exceptional customer service.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-slate-600 mb-4">
              To empower creators, professionals, and adventurers with cutting-edge aerial technology 
              that pushes the boundaries of what's possible from above.
            </p>
            <p className="text-slate-600">
              We believe that everyone should have access to the tools that enable them to capture 
              unique perspectives and achieve their creative and professional goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trusted Quality</h3>
              <p className="text-sm text-slate-600">Only premium brands and rigorously tested products</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-slate-600">Dedicated support from drone specialists</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-slate-600">Join thousands of satisfied customers</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-slate-600">Quick shipping to get you flying faster</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600">
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p>support@manificos.com</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p>+12088081919</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hours</h3>
              <p>Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
