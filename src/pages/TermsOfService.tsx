
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Terms of Service for Manificos Ltd</CardTitle>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Company Information</h2>
            <p>
              These terms govern your use of services provided by Manificos Ltd, a company registered in England and Wales.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Company Name:</strong> Manificos Ltd</li>
              <li><strong>Registration Number:</strong> 15909085</li>
              <li><strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</li>
              <li><strong>Contact:</strong> contact@manificos.com | +12088081919</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Acceptance of Terms</h2>
            <p>
              By accessing and using our website and services, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Products and Services</h2>
            <p>
              Manificos Ltd specializes in premium drones and accessories. All products are subject to availability. 
              We reserve the right to modify or discontinue products at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Orders and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are in British Pounds (GBP) unless otherwise stated</li>
              <li>We accept credit cards processed through Stripe, Wise, and Banky</li>
              <li>Orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse or cancel orders</li>
              <li>Payment must be received before order fulfillment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Shipping and Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We ship to the EU, Canada, and UK</li>
              <li>International shipping available for customers who pay shipping costs</li>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss passes to you upon delivery to the carrier</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Returns and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>30-day return policy from date of delivery</li>
              <li>Items must be in original condition and packaging</li>
              <li>Customer responsible for return shipping costs unless item is defective</li>
              <li>Refunds processed within 5-10 business days after receiving returned item</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Warranty</h2>
            <p>
              All products come with manufacturer warranty. Warranty terms vary by product. 
              Please refer to individual product pages for specific warranty information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>
              Manificos Ltd shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from the use of our products or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to 
              the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
            <p>
              For questions about these terms, contact us at contact@manificos.com or +12088081919. 
              Our support is available 24/7.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;
