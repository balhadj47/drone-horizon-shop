
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, RotateCcw, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ShippingReturns = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Shipping & Returns</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-blue-600" />
              Shipping Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Shipping Regions</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>United Kingdom (UK)</li>
                <li>European Union (EU)</li>
                <li>Canada (CA)</li>
                <li>International shipping available (customer pays shipping costs)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Shipping Costs</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Free shipping on orders over £500</li>
                <li>Standard shipping: £49 for orders under £500</li>
                <li>International shipping rates calculated at checkout</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Delivery Times</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>UK: 2-3 business days</li>
                <li>EU: 3-5 business days</li>
                <li>Canada: 5-7 business days</li>
                <li>International: 7-14 business days</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                <Clock className="inline mr-2 h-4 w-4" />
                Orders placed before 2 PM (GMT) are processed the same day.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RotateCcw className="mr-2 h-5 w-5 text-green-600" />
              Returns Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">30-Day Return Policy</h3>
              <p className="text-slate-600 mb-4">
                We offer a 30-day return policy from the date of delivery. Items must be returned 
                in their original condition and packaging.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Return Process</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our support team at contact@manificos.com</li>
                <li>Receive return authorization and shipping label</li>
                <li>Package item securely in original packaging</li>
                <li>Send item back using provided shipping label</li>
                <li>Receive refund within 5-10 business days</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Return Conditions</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Items must be unused and in original condition</li>
                <li>Original packaging and accessories included</li>
                <li>No damage from misuse or normal wear</li>
                <li>Return shipping paid by customer (unless defective)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 text-sm">
                <Shield className="inline mr-2 h-4 w-4" />
                Defective items: We cover return shipping and provide immediate replacement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <ul className="space-y-2">
                <li><strong>Email:</strong> contact@manificos.com</li>
                <li><strong>Phone:</strong> +12088081919</li>
                <li><strong>Hours:</strong> 24/7 Support Available</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Return Address</h3>
              <address className="not-italic">
                Manificos Ltd<br />
                71-75 Shelton Street<br />
                Covent Garden<br />
                London, WC2H 9JQ<br />
                United Kingdom
              </address>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShippingReturns;
