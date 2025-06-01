
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Cookie Policy</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cookie Policy for Manificos Ltd</CardTitle>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience and analyze how our website is used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Session cookies for maintaining your shopping cart</li>
                  <li>Authentication cookies for logged-in users</li>
                  <li>Security cookies for protecting against fraud</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">Analytics Cookies</h3>
                <p>We use these to understand how visitors interact with our website:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Analytics for website performance analysis</li>
                  <li>Heat mapping tools to improve user experience</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Marketing Cookies</h3>
                <p>These help us deliver relevant advertisements:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Retargeting pixels for advertising platforms</li>
                  <li>Social media tracking pixels</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Managing Your Cookie Preferences</h2>
            <p>You can control cookies through your browser settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Block all cookies (may affect website functionality)</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
              <li>Be notified when cookies are set</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p>Our website may contain cookies from third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment Processors:</strong> Stripe, Wise, Banky for secure transactions</li>
              <li><strong>Analytics:</strong> Google Analytics for website insights</li>
              <li><strong>Customer Support:</strong> Live chat and support tools</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy, contact us at contact@manificos.com 
              or call +12088081919.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiePolicy;
