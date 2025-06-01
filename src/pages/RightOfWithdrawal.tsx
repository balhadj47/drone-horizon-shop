
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RightOfWithdrawal = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Right of Withdrawal</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-600" />
              14-Day Cooling-Off Period
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
                <div>
                  <h3 className="font-semibold text-blue-800">Your Consumer Rights</h3>
                  <p className="text-blue-700 text-sm mt-1">
                    Under EU and UK consumer protection laws, you have the right to withdraw from this contract within 14 days without giving any reason.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Withdrawal Period</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>The withdrawal period expires 14 days after the day you acquire physical possession of the goods</li>
                <li>For multiple items ordered together but delivered separately, the period begins when you receive the last item</li>
                <li>For contracts for regular delivery of goods over a defined period, the period begins when you receive the first delivery</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">How to Exercise Your Right</h3>
              <p className="text-slate-600 mb-4">
                To exercise your right of withdrawal, you must inform us of your decision by an unequivocal statement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Email:</strong> contact@manificos.com</li>
                <li><strong>Phone:</strong> +12088081919</li>
                <li><strong>Post:</strong> Manificos Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
                <li>Use our online withdrawal form (available upon request)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Information Required</h3>
              <p className="text-slate-600 mb-2">Your withdrawal notice should include:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Your name and contact details</li>
                <li>Order number and date of purchase</li>
                <li>Description of the goods</li>
                <li>Date of delivery</li>
                <li>Clear statement of your decision to withdraw</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-green-600" />
              Withdrawal Procedures
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Timeline for Withdrawal</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>You may send your withdrawal notice before the 14-day period expires</li>
                <li>It is sufficient to send the notice before the withdrawal period expires</li>
                <li>We will acknowledge receipt of your withdrawal notice promptly</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Return of Goods</h3>
              <p className="text-slate-600 mb-4">
                You must return the goods within 14 days of informing us of your withdrawal:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Goods must be returned in original condition and packaging</li>
                <li>You bear the direct cost of returning the goods</li>
                <li>We will provide return instructions upon withdrawal notice</li>
                <li>Goods should be sent to our designated return address</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Refund Process</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>We will refund all payments received from you, including delivery costs</li>
                <li>Refund will be made within 14 days of receiving your withdrawal notice</li>
                <li>We may withhold refund until goods are returned or you provide proof of return</li>
                <li>Refund will be made using the same payment method used for the original transaction</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Liability for Goods</h4>
              <p className="text-amber-700 text-sm">
                You are liable for any diminished value of goods resulting from handling beyond what is necessary to establish the nature, characteristics, and functioning of the goods.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Exceptions to Right of Withdrawal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">
              The right of withdrawal does not apply to contracts for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Goods that are made to your specifications or clearly personalized</li>
              <li>Goods that are liable to deteriorate or expire rapidly</li>
              <li>Sealed goods that are not suitable for return due to health protection or hygiene reasons if unsealed after delivery</li>
              <li>Goods that have been mixed inseparably with other items after delivery</li>
              <li>Digital content if performance has begun with your prior express consent and acknowledgment that you lose your right of withdrawal</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-red-800 mb-2">Important Note</h3>
              <p className="text-red-700 text-sm">
                Certain drone products may be subject to additional restrictions due to safety regulations. 
                Drones that have been flown or activated may not be eligible for return under certain circumstances. 
                Please contact us before attempting to return any drone that has been used.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightOfWithdrawal;
