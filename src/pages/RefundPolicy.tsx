
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Refund Policy</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Refund Policy for Manificos Ltd</CardTitle>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Company Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Company Name:</strong> Manificos Ltd</li>
              <li><strong>Registration Number:</strong> 15909085</li>
              <li><strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</li>
              <li><strong>Contact Email:</strong> contact@manificos.com</li>
              <li><strong>Phone:</strong> +12088081919</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Refund Eligibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Eligible for Refund
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Items returned within 30 days</li>
                    <li>• Products in original condition</li>
                    <li>• Original packaging included</li>
                    <li>• Manufacturing defects</li>
                    <li>• Incorrect items shipped</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Not Eligible for Refund
                  </h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Items damaged by misuse</li>
                    <li>• Products over 30 days old</li>
                    <li>• Missing original packaging</li>
                    <li>• Custom or modified items</li>
                    <li>• Normal wear and tear</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Refund Process</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <div>
                  <h4 className="font-semibold">Contact Our Support Team</h4>
                  <p className="text-slate-600">Email contact@manificos.com or call +12088081919 to initiate a return request.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <div>
                  <h4 className="font-semibold">Receive Return Authorization</h4>
                  <p className="text-slate-600">We'll provide a Return Merchandise Authorization (RMA) number and return instructions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <div>
                  <h4 className="font-semibold">Ship the Item</h4>
                  <p className="text-slate-600">Package the item securely and ship it back using the provided instructions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                <div>
                  <h4 className="font-semibold">Inspection & Processing</h4>
                  <p className="text-slate-600">We'll inspect the returned item and process your refund within 5-10 business days.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Refund Methods & Timeframes</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Credit Card Refunds</span>
                </div>
                <Badge variant="outline">3-5 Business Days</Badge>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Stripe/Wise/Banky Payments</span>
                </div>
                <Badge variant="outline">5-10 Business Days</Badge>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="font-medium">Processing Time</span>
                </div>
                <Badge variant="outline">1-2 Business Days</Badge>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Refund Amounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full product price will be refunded for eligible returns</li>
              <li>Original shipping costs are non-refundable (unless item was defective)</li>
              <li>Return shipping costs are the customer's responsibility</li>
              <li>Restocking fees may apply to opened items (10% for electronics)</li>
              <li>International shipping duties/taxes are non-refundable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Special Circumstances</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Defective Items</h4>
                <p className="text-blue-700 text-sm">
                  For manufacturing defects, we cover return shipping and provide full refunds including original shipping costs.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Wrong Item Shipped</h4>
                <p className="text-green-700 text-sm">
                  If we shipped the wrong item, we'll cover all return costs and provide a full refund or replacement.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Refund Support Team</h4>
              <ul className="space-y-2">
                <li><strong>Email:</strong> contact@manificos.com</li>
                <li><strong>Phone:</strong> +12088081919</li>
                <li><strong>Hours:</strong> 24/7 Support Available</li>
                <li><strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
              </ul>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default RefundPolicy;
