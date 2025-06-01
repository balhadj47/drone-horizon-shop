
import React from 'react';
import { Shield, Clock, CheckCircle, Phone, Mail, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Warranty = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Warranty & Guarantee</h1>
          <p className="text-xl text-slate-600">
            Your peace of mind is our priority. Learn about our comprehensive warranty coverage.
          </p>
        </div>

        {/* Warranty Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">2-Year Warranty</h3>
              <p className="text-sm text-slate-600">Comprehensive coverage on all drone models</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">30-Day Returns</h3>
              <p className="text-sm text-slate-600">No questions asked return policy</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Free Repairs</h3>
              <p className="text-sm text-slate-600">Manufacturing defects covered at no cost</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Warranty Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Warranty Coverage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What's Covered:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Manufacturing defects in materials and workmanship
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Electronic component failures under normal use
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Camera and gimbal malfunctions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Flight control system issues
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Battery performance degradation (beyond normal wear)
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">What's Not Covered:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Physical damage from crashes or accidents</li>
                  <li>• Water damage (unless specified as waterproof)</li>
                  <li>• Normal wear and tear</li>
                  <li>• Damage from modifications or repairs by unauthorized parties</li>
                  <li>• Loss or theft</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Warranty Periods by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Professional Drones</span>
                    <Badge variant="outline">24 Months</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Consumer Drones</span>
                    <Badge variant="outline">24 Months</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Racing Drones</span>
                    <Badge variant="outline">12 Months</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Batteries</span>
                    <Badge variant="outline">12 Months</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Accessories</span>
                    <Badge variant="outline">6 Months</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Software/Firmware</span>
                    <Badge variant="outline">Lifetime</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                How to Make a Warranty Claim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                    <h4 className="font-semibold mb-1">Contact Support</h4>
                    <p className="text-sm text-slate-600">Reach out to our warranty team with your issue</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                    <h4 className="font-semibold mb-1">Provide Details</h4>
                    <p className="text-sm text-slate-600">Share purchase info and describe the problem</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                    <h4 className="font-semibold mb-1">Get Resolution</h4>
                    <p className="text-sm text-slate-600">Receive repair, replacement, or refund</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold mb-2">Required Information:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Order number or receipt</li>
                    <li>• Product serial number</li>
                    <li>• Detailed description of the issue</li>
                    <li>• Photos or videos of the problem (if applicable)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Warranty Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-slate-600">contact@manificos.com</p>
                    <p className="text-sm text-slate-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Phone Support</h4>
                    <p className="text-slate-600">+12088081919</p>
                    <p className="text-sm text-slate-500">24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Extended Warranty Available</h3>
            <p className="text-blue-700 mb-4">
              Extend your coverage up to 3 additional years with our premium warranty plans.
            </p>
            <p className="text-sm text-blue-600">Contact us to learn more about extended warranty options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
