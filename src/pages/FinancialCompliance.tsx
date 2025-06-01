
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Banknote, Shield, AlertTriangle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FinancialCompliance = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Financial Compliance</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Banknote className="mr-2 h-5 w-5 text-green-600" />
              Anti-Money Laundering (AML)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">AML Policy Statement</h3>
              <p className="text-slate-600 mb-4">
                Manificos Ltd is committed to preventing money laundering and terrorist financing 
                in accordance with UK regulations and international standards.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Customer Due Diligence (CDD) procedures</li>
                <li>Enhanced monitoring for high-value transactions</li>
                <li>Suspicious Activity Reporting (SAR) protocols</li>
                <li>Regular staff training on AML compliance</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Transaction Monitoring</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>High-Value Threshold:</strong> Transactions over £10,000</li>
                <li><strong>Multiple Transaction Alert:</strong> £15,000+ in 24 hours</li>
                <li><strong>Unusual Pattern Detection:</strong> Automated monitoring</li>
                <li><strong>Cash Equivalent Limits:</strong> Cryptocurrency restrictions</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="font-semibold text-red-800">Compliance Notice</h4>
                  <p className="text-red-700 text-sm mt-1">
                    We reserve the right to request additional documentation for verification 
                    and may suspend transactions pending compliance review.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-blue-600" />
              Financial Regulations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Tax Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>VAT Registration:</strong> GB123456789 (if applicable)</li>
                <li><strong>Corporation Tax:</strong> Filed annually with HMRC</li>
                <li><strong>International Sales:</strong> VAT handled per destination</li>
                <li><strong>Digital Services Tax:</strong> Applicable rates applied</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Currency Exchange</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Prices displayed in local currency when possible</li>
                <li>Exchange rates updated daily at market close</li>
                <li>Currency conversion fees clearly disclosed</li>
                <li>Refunds processed in original transaction currency</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Payment Processing</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>PCI DSS Compliance:</strong> Level 1 certified</li>
                <li><strong>Secure Payment Partners:</strong> Stripe, Wise, Banky</li>
                <li><strong>Fraud Prevention:</strong> Real-time monitoring</li>
                <li><strong>Data Encryption:</strong> End-to-end protection</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>International Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">United Kingdom</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Financial Conduct Authority (FCA)</li>
                <li>HMRC tax obligations</li>
                <li>Companies House reporting</li>
                <li>ICO data protection registration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">European Union</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>GDPR compliance maintained</li>
                <li>VAT MOSS registration</li>
                <li>CE marking requirements</li>
                <li>Distance selling regulations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">International</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>FATCA compliance (US customers)</li>
                <li>Common Reporting Standard (CRS)</li>
                <li>Sanctions screening (OFAC, UN)</li>
                <li>Export control compliance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialCompliance;
