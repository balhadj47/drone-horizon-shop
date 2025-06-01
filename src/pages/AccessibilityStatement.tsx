
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Ear, Hand, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AccessibilityStatement = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Accessibility Statement</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Website Accessibility Commitment</CardTitle>
          <p className="text-slate-600">
            Manificos Ltd is committed to ensuring digital accessibility for people with disabilities.
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Conformance Status</h2>
            <p className="text-slate-600 mb-4">
              This website aims to conform to WCAG 2.1 Level AA standards. We are continuously 
              working to improve the accessibility of our site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-blue-600" />
                Visual Accessibility
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>High contrast color schemes</li>
                <li>Scalable fonts and text sizing</li>
                <li>Alternative text for all images</li>
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>Focus indicators for interactive elements</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <Monitor className="mr-2 h-5 w-5 text-green-600" />
                Technical Features
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Semantic HTML structure</li>
                <li>ARIA labels and landmarks</li>
                <li>Consistent navigation patterns</li>
                <li>Form validation and error messaging</li>
                <li>Skip navigation links</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Supported Assistive Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Screen Readers</h3>
                <ul className="text-sm space-y-1">
                  <li>NVDA (Windows)</li>
                  <li>JAWS (Windows)</li>
                  <li>VoiceOver (macOS/iOS)</li>
                  <li>TalkBack (Android)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Browsers</h3>
                <ul className="text-sm space-y-1">
                  <li>Chrome (latest)</li>
                  <li>Firefox (latest)</li>
                  <li>Safari (latest)</li>
                  <li>Edge (latest)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Input Methods</h3>
                <ul className="text-sm space-y-1">
                  <li>Keyboard navigation</li>
                  <li>Voice control</li>
                  <li>Switch navigation</li>
                  <li>Touch screen</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Known Limitations</h2>
            <p className="text-slate-600 mb-4">
              We are aware of the following accessibility limitations and are working to address them:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Some third-party payment widgets may have limited accessibility</li>
              <li>Product videos may not have captions (we're adding them progressively)</li>
              <li>Complex product configurators are being enhanced for better screen reader support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Feedback and Contact</h2>
            <p className="text-slate-600 mb-4">
              We welcome feedback on the accessibility of our website. If you encounter 
              accessibility barriers, please contact us:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Email:</strong> accessibility@manificos.com</li>
              <li><strong>Phone:</strong> +12088081919</li>
              <li><strong>Response Time:</strong> We aim to respond within 2 business days</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Assessment Information</h3>
            <p className="text-blue-700 text-sm">
              This accessibility statement was last reviewed on {new Date().toLocaleDateString()}.
              We conduct regular accessibility audits and testing with users with disabilities.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessibilityStatement;
