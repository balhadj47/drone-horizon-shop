
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DisputeResolution = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Alternative Dispute Resolution</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-blue-600" />
              Internal Complaint Handling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Step 1: Direct Contact</h3>
              <p className="text-slate-600 mb-4">
                We encourage you to contact us directly first to resolve any issues:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Email:</strong> contact@manificos.com</li>
                <li><strong>Phone:</strong> +12088081919 (24/7 support)</li>
                <li><strong>Response Time:</strong> Within 24 hours</li>
                <li><strong>Resolution Target:</strong> 5-10 business days</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Step 2: Escalation Process</h3>
              <p className="text-slate-600 mb-4">
                If your issue isn't resolved to your satisfaction:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Request escalation to our Customer Service Manager</li>
                <li>Provide all relevant documentation and correspondence</li>
                <li>We will review your case within 7 business days</li>
                <li>You will receive a written response with our final decision</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Complaint Requirements</h4>
              <p className="text-blue-700 text-sm">
                Please include your order number, contact details, description of the issue, 
                and any supporting evidence when making a complaint.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="mr-2 h-5 w-5 text-purple-600" />
              External Dispute Resolution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Consumer Ombudsman Services</h3>
              <p className="text-slate-600 mb-4">
                If we cannot resolve your dispute internally, you may contact:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">UK Consumers</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Citizens Advice Consumer Service:</strong> 0808 223 1133</li>
                    <li><strong>Financial Ombudsman Service:</strong> 0800 023 4567</li>
                    <li><strong>Online:</strong> gov.uk/consumer-advice</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">EU Consumers</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>European Consumer Centre:</strong> Your national ECC</li>
                    <li><strong>ODR Platform:</strong> ec.europa.eu/consumers/odr/</li>
                    <li><strong>Online Dispute Resolution</strong> for online purchases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Canadian Consumers</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Competition Bureau:</strong> 1-800-348-5358</li>
                    <li><strong>Provincial Consumer Protection:</strong> Contact your province</li>
                    <li><strong>Better Business Bureau:</strong> bbb.org</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Mediation and Arbitration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Mediation Services</h3>
                <p className="text-slate-600 mb-4">
                  We are willing to participate in mediation through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Centre for Effective Dispute Resolution (CEDR)</li>
                  <li>Retail Ombudsman (for retail disputes)</li>
                  <li>Local Trading Standards mediation services</li>
                  <li>Consumer dispute resolution providers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Arbitration</h3>
                <p className="text-slate-600 mb-4">
                  For disputes over £5,000, arbitration may be available through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Chartered Institute of Arbitrators</li>
                  <li>London Court of International Arbitration</li>
                  <li>Commercial arbitration services</li>
                  <li>Sector-specific arbitration schemes</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-green-800 mb-2">Cost Information</h3>
              <p className="text-green-700 text-sm">
                Most consumer ombudsman services are free to consumers. Mediation costs are typically 
                shared between parties. We will inform you of any costs before proceeding with formal dispute resolution.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-amber-800 mb-2">Your Rights</h3>
              <p className="text-amber-700 text-sm">
                Using alternative dispute resolution does not affect your right to take legal action. 
                However, you should be aware that court proceedings may be expensive and time-consuming.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisputeResolution;
