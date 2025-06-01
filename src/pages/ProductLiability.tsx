
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProductLiability = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Product Liability & Insurance</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-blue-600" />
              Our Liability Coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Product Liability Insurance</h3>
              <p className="text-slate-600 mb-4">
                Manificos Ltd maintains comprehensive product liability insurance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Coverage Amount:</strong> £2,000,000 per incident</li>
                <li><strong>Annual Aggregate:</strong> £5,000,000</li>
                <li><strong>Insurer:</strong> Lloyd's of London Syndicate</li>
                <li><strong>Policy Number:</strong> Available upon request</li>
                <li><strong>Coverage Territory:</strong> Worldwide</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">What's Covered</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Manufacturing defects in sold products</li>
                <li>Design defects causing injury or damage</li>
                <li>Failure to warn of known risks</li>
                <li>Breach of express warranties</li>
                <li>Legal defense costs and settlements</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Professional Indemnity</h4>
              <p className="text-blue-700 text-sm">
                We also carry £1,000,000 professional indemnity insurance covering advice 
                and consultation services related to drone selection and operation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
              Customer Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">User Liability</h3>
              <p className="text-slate-600 mb-4">
                Customers are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Proper operation according to manufacturer instructions</li>
                <li>Compliance with local aviation regulations</li>
                <li>Obtaining necessary permits and registrations</li>
                <li>Maintaining appropriate insurance coverage</li>
                <li>Regular maintenance and safety checks</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Recommended Insurance</h3>
              <p className="text-slate-600 mb-4">
                We strongly recommend drone operators obtain:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Public Liability:</strong> Minimum £1,000,000</li>
                <li><strong>Hull Insurance:</strong> For drone replacement</li>
                <li><strong>Personal Accident:</strong> For pilot protection</li>
                <li><strong>Privacy Liability:</strong> For filming/photography</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Insurance Providers</h4>
              <p className="text-amber-700 text-sm">
                Contact these specialist drone insurers: Moonrock Insurance, 
                Coverdrone, or Flock Cover for comprehensive policies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5 text-green-600" />
            Claims Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Reporting a Claim</h3>
                <p className="text-slate-600 mb-4">
                  If you believe a product defect has caused injury or damage:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>Immediately cease use of the product</li>
                  <li>Secure the scene and preserve evidence</li>
                  <li>Seek medical attention if injuries occurred</li>
                  <li>Contact us within 24 hours: contact@manificos.com</li>
                  <li>Provide detailed incident report</li>
                  <li>Retain the product for inspection</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Information Required</h3>
                <p className="text-slate-600 mb-4">
                  Please provide the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Product model and serial number</li>
                  <li>Date and place of purchase</li>
                  <li>Detailed description of the incident</li>
                  <li>Photos of damage/injury</li>
                  <li>Witness contact information</li>
                  <li>Police report number (if applicable)</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-red-800 mb-2">Emergency Contact</h3>
              <p className="text-red-700 text-sm">
                For urgent product safety issues or serious incidents, contact our 24/7 emergency line: 
                +12088081919 (press 1 for emergency product claims)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 border rounded-lg">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold">24/7 Claims</h4>
                <p className="text-sm text-slate-600">+12088081919</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold">Claims Email</h4>
                <p className="text-sm text-slate-600">claims@manificos.com</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold">Response Time</h4>
                <p className="text-sm text-slate-600">Within 4 hours</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductLiability;
