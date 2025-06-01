
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AgeVerification = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Age Verification & Restrictions</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5 text-blue-600" />
              Age Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 mr-2" />
                <div>
                  <h3 className="font-semibold text-amber-800">Important Age Restrictions</h3>
                  <p className="text-amber-700 text-sm mt-1">
                    Drone purchases and operation are subject to age restrictions that vary by country and drone type.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">United Kingdom</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Minimum Age to Purchase:</strong> 18 years old</li>
                <li><strong>Minimum Age to Operate:</strong> 14+ with adult supervision</li>
                <li><strong>Registration Required:</strong> For drones 250g and above</li>
                <li><strong>Operator ID Required:</strong> 16+ years old</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">European Union</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Minimum Age to Purchase:</strong> 18 years old</li>
                <li><strong>Open Category Operations:</strong> 16+ years old</li>
                <li><strong>Drone Registration:</strong> Required for 250g+ drones</li>
                <li><strong>Online Training:</strong> Required for certain categories</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Canada</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Minimum Age to Purchase:</strong> 18 years old</li>
                <li><strong>Basic Operations:</strong> 14+ years old</li>
                <li><strong>Pilot Certificate:</strong> Required for 250g+ drones</li>
                <li><strong>Registration:</strong> Mandatory for commercial use</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-green-600" />
              Compliance & Verification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Purchase Verification</h3>
              <p className="text-slate-600 mb-4">
                By making a purchase, you confirm that you are at least 18 years old and legally 
                able to purchase drone equipment in your jurisdiction.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Credit card verification confirms adult status</li>
                <li>ID verification may be required for high-value purchases</li>
                <li>Parental consent required for underage operators</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Operator Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Understand local aviation regulations</li>
                <li>Obtain necessary permits and registrations</li>
                <li>Maintain appropriate insurance coverage</li>
                <li>Follow manufacturer safety guidelines</li>
                <li>Report accidents or incidents as required</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Educational Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Online training courses available</li>
                <li>Safety briefings included with purchases</li>
                <li>Local flying club recommendations</li>
                <li>Regulatory updates and notifications</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
              <p className="text-blue-700 text-sm">
                Contact our compliance team for guidance on age requirements and local regulations 
                at compliance@manificos.com or +12088081919.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Parental Consent and Supervision</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none">
            <h3>For Purchases by Legal Guardians</h3>
            <p>
              Parents or legal guardians purchasing drones for minors must ensure:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appropriate supervision during operation</li>
              <li>Understanding of local regulations and restrictions</li>
              <li>Proper training before independent operation</li>
              <li>Insurance coverage for potential damage or injury</li>
              <li>Compliance with educational institution policies if applicable</li>
            </ul>

            <h3>Liability and Insurance</h3>
            <p>
              Drone operators and their guardians are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any damage caused by drone operation</li>
              <li>Compliance with privacy laws when recording</li>
              <li>Respect for private property and no-fly zones</li>
              <li>Obtaining appropriate insurance coverage</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeVerification;
