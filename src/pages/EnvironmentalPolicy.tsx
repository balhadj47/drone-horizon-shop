
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Recycle, Battery, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EnvironmentalPolicy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Environmental Policy</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-600" />
              Environmental Commitment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Our Mission</h3>
              <p className="text-slate-600 mb-4">
                Manificos Ltd is committed to minimizing our environmental impact while 
                providing cutting-edge drone technology. We believe in sustainable innovation 
                and responsible business practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Carbon Footprint Reduction</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Carbon-neutral shipping options available</li>
                <li>Optimized packaging to reduce waste</li>
                <li>Digital documentation to minimize paper use</li>
                <li>Energy-efficient warehouse operations</li>
                <li>Offset programs for international shipping</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Sustainable Sourcing</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Partner with environmentally responsible manufacturers</li>
                <li>Priority given to suppliers with green certifications</li>
                <li>Lifecycle assessment of products</li>
                <li>Support for renewable energy in supply chain</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Recycle className="mr-2 h-5 w-5 text-blue-600" />
              Waste Management & Recycling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Product Lifecycle</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Extended product warranties to reduce replacements</li>
                <li>Repair services to extend product life</li>
                <li>Trade-in programs for upgraded models</li>
                <li>Refurbishment of returned products when possible</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">WEEE Compliance</h3>
              <p className="text-slate-600 mb-4">
                We comply with Waste Electrical and Electronic Equipment regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>WEEE Registration:</strong> WEE/GB0123456</li>
                <li>Free collection of old electronics</li>
                <li>Proper disposal of hazardous materials</li>
                <li>Recycling rate targets exceeded annually</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <Battery className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="font-semibold text-green-800">Battery Recycling</h4>
                  <p className="text-green-700 text-sm mt-1">
                    Free battery recycling service available. Return used batteries 
                    with any order for proper disposal at no charge.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Truck className="mr-2 h-5 w-5 text-purple-600" />
            Packaging & Shipping
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Eco-Friendly Packaging</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>100% recyclable cardboard packaging</li>
                <li>Biodegradable protective materials</li>
                <li>Minimal packaging design principles</li>
                <li>Reusable packaging options for accessories</li>
                <li>No single-use plastics in packaging</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Green Shipping Options</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Carbon-neutral delivery available</li>
                <li>Consolidated shipping to reduce trips</li>
                <li>Local pickup points to reduce last-mile delivery</li>
                <li>Electric vehicle delivery in select areas</li>
                <li>Offset programs for international shipping</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <h3 className="font-semibold text-blue-800 mb-2">Environmental Reporting</h3>
            <p className="text-blue-700 text-sm">
              We publish annual environmental impact reports and continuously work to improve 
              our sustainability metrics. Contact us at environment@manificos.com for more information.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnvironmentalPolicy;
