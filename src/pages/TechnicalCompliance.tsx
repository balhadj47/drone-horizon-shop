
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Database, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechnicalCompliance = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Technical Compliance</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-green-600" />
              Security & Encryption
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">SSL/TLS Certification</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>SSL Certificate:</strong> TLS 1.3 encryption</li>
                <li><strong>Certificate Authority:</strong> Let's Encrypt/DigiCert</li>
                <li><strong>Cipher Suites:</strong> AES-256 encryption</li>
                <li><strong>HSTS:</strong> HTTP Strict Transport Security enabled</li>
                <li><strong>Certificate Transparency:</strong> Logged and monitored</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Payment Security</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>PCI DSS:</strong> Level 1 compliance maintained</li>
                <li><strong>Tokenization:</strong> No card data stored locally</li>
                <li><strong>Fraud Prevention:</strong> 3D Secure authentication</li>
                <li><strong>Payment Partners:</strong> Stripe, Wise, Banky (all PCI compliant)</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Security Monitoring</h4>
              <p className="text-green-700 text-sm">
                24/7 security monitoring with automated threat detection and 
                immediate response protocols for any security incidents.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5 text-blue-600" />
              Data Protection Technical Measures
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Data Encryption</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>At Rest:</strong> AES-256 database encryption</li>
                <li><strong>In Transit:</strong> TLS 1.3 for all communications</li>
                <li><strong>Backup Encryption:</strong> Military-grade protection</li>
                <li><strong>Key Management:</strong> Hardware Security Modules (HSM)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Access Controls</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Multi-factor authentication for admin access</li>
                <li>Role-based access control (RBAC)</li>
                <li>Regular access reviews and audits</li>
                <li>Automated session timeout mechanisms</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Data Retention</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Automated data deletion schedules</li>
                <li>Customer data portability tools</li>
                <li>Right to erasure implementation</li>
                <li>Audit logs maintained for compliance</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wifi className="mr-2 h-5 w-5 text-purple-600" />
            Third-Party Services & Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Integrated Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Payment Processors</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Stripe:</strong> PCI Level 1 certified</li>
                    <li><strong>Wise:</strong> FCA regulated payment services</li>
                    <li><strong>Banky:</strong> Banking-grade security</li>
                    <li>All processors maintain independent compliance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Analytics & Tracking</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Google Analytics:</strong> Privacy-focused implementation</li>
                    <li><strong>Cookie Consent:</strong> GDPR compliant management</li>
                    <li><strong>Heat Mapping:</strong> Anonymized user interaction data</li>
                    <li>Opt-out mechanisms for all tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Privacy-First Analytics</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>IP address anonymization enabled</li>
                <li>Data retention periods minimized</li>
                <li>No cross-site tracking implemented</li>
                <li>User consent required for non-essential cookies</li>
                <li>Regular data processing impact assessments</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Technical Support</h4>
              <p className="text-purple-700 text-sm">
                For technical compliance questions or security concerns, contact our 
                technical team at security@manificos.com or call +12088081919.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Compliance Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Security Standards</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>ISO 27001 Information Security</li>
                <li>SOC 2 Type II compliance</li>
                <li>OWASP security guidelines</li>
                <li>Regular penetration testing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Privacy Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>GDPR Article 25 - Privacy by Design</li>
                <li>UK GDPR implementation</li>
                <li>CCPA compliance for California residents</li>
                <li>Privacy impact assessments conducted</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Accessibility Standards</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>WCAG 2.1 Level AA compliance</li>
                <li>Section 508 accessibility</li>
                <li>ADA compliance measures</li>
                <li>Regular accessibility audits</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalCompliance;
