
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Globe, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExportControl = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Export Control Notice</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-red-700">
            <AlertTriangle className="mr-2 h-6 w-6" />
            Important Export Restrictions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-medium">
              Drone technology is subject to strict export control regulations. Violation of export 
              control laws may result in severe civil and criminal penalties.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-blue-600" />
              International Regulations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">UK Export Control</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Export Control Act 2002 compliance required</li>
                <li>Dual-use items subject to licensing</li>
                <li>Strategic Export Licensing (SPIRE) system</li>
                <li>End-user certificates may be required</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">EU Dual-Use Regulation</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Regulation (EU) 2021/821 compliance</li>
                <li>Export authorization requirements</li>
                <li>Catch-all provisions applicable</li>
                <li>Technology transfer restrictions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">US Export Administration Regulations (EAR)</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>ECCN classifications applicable</li>
                <li>Re-export restrictions to certain countries</li>
                <li>Entity List screening required</li>
                <li>Technical data sharing limitations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Wassenaar Arrangement</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Multilateral export control regime</li>
                <li>Dual-use goods and technologies</li>
                <li>Regular updates to control lists</li>
                <li>Information sharing between countries</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-green-600" />
              Restricted Countries & Entities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Prohibited Destinations</h3>
              <p className="text-slate-600 mb-4">
                We cannot ship drone technology to countries under embargo or with specific restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Countries under UN, EU, UK, or US sanctions</li>
                <li>Territories with active arms embargoes</li>
                <li>Regions with ongoing conflicts</li>
                <li>Areas designated as high-risk by authorities</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Entity Screening</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Denied Persons List (US BIS)</li>
                <li>Entity List (US Department of Commerce)</li>
                <li>UK Sanctions List (HM Treasury)</li>
                <li>EU Consolidated List</li>
                <li>UN Security Council Sanctions List</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Customer Obligations</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Accurate end-user information required</li>
                <li>No re-export without proper authorization</li>
                <li>Report any suspicious requests</li>
                <li>Maintain records of drone usage</li>
                <li>Comply with local import regulations</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Due Diligence Required</h4>
              <p className="text-amber-700 text-sm">
                We conduct thorough screening of all international orders and may request 
                additional documentation to ensure compliance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Product Classifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none">
            <h3>Controlled Technology Features</h3>
            <p>The following drone capabilities may be subject to export control:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="font-semibold">Technical Specifications</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Range exceeding certain thresholds</li>
                  <li>Payload capacity limitations</li>
                  <li>Speed and endurance capabilities</li>
                  <li>Altitude performance specifications</li>
                  <li>Guidance and navigation systems</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Advanced Features</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Autonomous flight capabilities</li>
                  <li>Advanced imaging systems</li>
                  <li>Encrypted communication links</li>
                  <li>Anti-jamming technologies</li>
                  <li>Swarm coordination capabilities</li>
                </ul>
              </div>
            </div>

            <h3>Compliance Procedures</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Order Screening:</strong> All orders undergo automated and manual screening</li>
              <li><strong>Documentation:</strong> Export licenses obtained when required</li>
              <li><strong>Shipping:</strong> Only through approved carriers and routes</li>
              <li><strong>Monitoring:</strong> Post-delivery compliance verification</li>
              <li><strong>Reporting:</strong> Suspicious activity reported to authorities</li>
            </ol>

            <h3>Contact Export Compliance</h3>
            <p>
              For questions about export restrictions or licensing requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Email:</strong> export@manificos.com</li>
              <li><strong>Phone:</strong> +12088081919</li>
              <li><strong>Emergency:</strong> Available 24/7 for urgent compliance matters</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExportControl;
