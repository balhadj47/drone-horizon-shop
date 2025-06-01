
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Plane, MapPin, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RegulatoryCompliance = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Regulatory Compliance</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Drone Registration & Compliance Requirements</CardTitle>
          <p className="text-slate-600">
            Understanding your legal obligations for drone ownership and operation.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Important:</strong> Drone regulations vary by country and are subject to change. 
              Always verify current requirements with your local aviation authority before operating.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plane className="mr-2 h-5 w-5 text-blue-600" />
              United Kingdom (CAA)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Registration Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>250g and above:</strong> Drone must be registered</li>
                <li><strong>Operator ID:</strong> Required for owners (£10.85/year)</li>
                <li><strong>Remote Pilot ID:</strong> Required for pilots (£10.85/year)</li>
                <li><strong>Online Test:</strong> Theory test must be passed</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Flight Restrictions</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Maximum altitude: 120m (400ft)</li>
                <li>Visual line of sight required</li>
                <li>No flying over crowds or congested areas</li>
                <li>150m from residential areas (some categories)</li>
                <li>No flying in controlled airspace without permission</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Useful Links</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>CAA Drone Registration: register-drones.caa.co.uk</li>
                <li>Flight Restriction Maps: nats-uk.ead-it.com</li>
                <li>CAA Guidance: caa.co.uk</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-green-600" />
              European Union (EASA)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">EU Drone Regulation</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Open Category:</strong> Most consumer drones</li>
                <li><strong>Specific Category:</strong> Commercial operations</li>
                <li><strong>Certified Category:</strong> Large commercial drones</li>
                <li><strong>CE Marking:</strong> Required for all drones</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Registration & Training</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Operator registration: 250g+ drones</li>
                <li>Online training required for A1/A3 operations</li>
                <li>Practical training for A2 operations</li>
                <li>Geographic zones marked on maps</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Member State Authorities</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Germany: LBA (luftfahrt-bundesamt.de)</li>
                <li>France: DGAC (ecologie.gouv.fr)</li>
                <li>Netherlands: ILT (ilent.nl)</li>
                <li>Spain: AESA (seguridadaerea.gob.es)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              Canada (Transport Canada)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Registration & Certification</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Basic Operations:</strong> 250g-25kg drones</li>
                <li><strong>Advanced Operations:</strong> Near airports/controlled airspace</li>
                <li><strong>Pilot Certificate:</strong> Required for 250g+ drones</li>
                <li><strong>Drone Registration:</strong> Mandatory marking</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Operating Rules</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Maximum altitude: 122m (400ft)</li>
                <li>Visual line of sight maintained</li>
                <li>Away from airports and heliports</li>
                <li>No flying over emergency scenes</li>
                <li>Respect privacy and property rights</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Transport Canada: tc.canada.ca</li>
                <li>Drone Safety: dronesafety.ca</li>
                <li>Flight Planning: nav.canada.ca</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-purple-600" />
              General Compliance Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Before You Fly</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Check local regulations and restrictions</li>
                <li>Verify registration and certification status</li>
                <li>Plan flight path and check airspace</li>
                <li>Ensure insurance coverage is valid</li>
                <li>Check weather conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Documentation to Carry</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Proof of registration</li>
                <li>Pilot certificate/license</li>
                <li>Insurance certificate</li>
                <li>Flight permissions (if required)</li>
                <li>Emergency contact information</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Stay updated on regulation changes</li>
                <li>Join local drone communities</li>
                <li>Maintain flight logs and records</li>
                <li>Report incidents to authorities</li>
                <li>Respect privacy and environmental concerns</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Need Help with Compliance?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Expert Consultation</h3>
              <p className="text-slate-600 text-sm mb-3">
                Our regulatory experts can help you understand compliance requirements.
              </p>
              <p className="text-sm">
                <strong>Email:</strong> compliance@manificos.com
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Training Resources</h3>
              <p className="text-slate-600 text-sm mb-3">
                We provide links to official training materials and courses.
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> +12088081919
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Updates & Alerts</h3>
              <p className="text-slate-600 text-sm mb-3">
                Subscribe to receive regulatory updates and safety alerts.
              </p>
              <p className="text-sm">
                <strong>Newsletter:</strong> Available on request
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegulatoryCompliance;
