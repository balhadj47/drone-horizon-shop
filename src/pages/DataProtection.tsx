
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DataProtection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Data Protection & GDPR</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Data Rights Under GDPR</CardTitle>
          <p className="text-slate-600">We are committed to protecting your personal data and respecting your privacy rights.</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Eye className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Right to Access</h3>
                <p className="text-sm text-slate-600">Request a copy of all personal data we hold about you</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Right to Rectification</h3>
                <p className="text-sm text-slate-600">Correct any inaccurate or incomplete data</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Trash2 className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold">Right to Erasure</h3>
                <p className="text-sm text-slate-600">Request deletion of your personal data</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold">Right to Portability</h3>
                <p className="text-sm text-slate-600">Receive your data in a machine-readable format</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Protection Compliance</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contract:</strong> To fulfill orders and provide services</li>
              <li><strong>Legal Obligation:</strong> Tax, accounting, and regulatory compliance</li>
              <li><strong>Legitimate Interest:</strong> Fraud prevention and customer service</li>
              <li><strong>Consent:</strong> Marketing communications (withdrawable at any time)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Data We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (securely processed by third parties)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">Technical Data</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address, browser type, device information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookie preferences and tracking data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Order Data:</strong> 7 years (UK tax law requirement)</li>
              <li><strong>Marketing Data:</strong> Until consent is withdrawn</li>
              <li><strong>Website Analytics:</strong> 26 months maximum</li>
              <li><strong>Support Records:</strong> 3 years after last contact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. International Transfers</h2>
            <p>
              We may transfer your data outside the UK/EU to trusted partners with appropriate safeguards:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors with EU adequacy decisions</li>
              <li>Cloud services with Standard Contractual Clauses</li>
              <li>Support tools with binding corporate rules</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p>We implement robust security measures:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and staff training</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. How to Exercise Your Rights</h2>
            <p>To exercise any of your data protection rights:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Email us at privacy@manificos.com with your request</li>
              <li>Provide proof of identity for security</li>
              <li>We will respond within 30 days</li>
              <li>No fee unless request is manifestly unfounded or excessive</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Complaints</h2>
            <p>
              You have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
              if you believe we have not handled your personal data appropriately.
            </p>
            <p>ICO Website: ico.org.uk | ICO Helpline: 0303 123 1113</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Contact Our Data Protection Officer</h2>
            <p>
              <strong>Email:</strong> privacy@manificos.com<br />
              <strong>Phone:</strong> +12088081919<br />
              <strong>Address:</strong> Manificos Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataProtection;
