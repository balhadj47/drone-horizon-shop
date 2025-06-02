
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy for Manificos Ltd</CardTitle>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Company Information</h2>
            <p>
              This privacy policy applies to Manificos Ltd, a company registered in England and Wales.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Company Name:</strong> Manificos Ltd</li>
              <li><strong>Registration Number:</strong> 15909085</li>
              <li><strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</li>
              <li><strong>Contact Email:</strong> contact@manificos.com</li>
              <li><strong>Phone:</strong> +1 (208) 808-1919</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through Stripe, Wise, and Banky)</li>
              <li>Order history and preferences</li>
              <li>Communication records with our customer service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
            <p>We do not sell or rent your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors (Stripe, Wise, Banky) to process transactions</li>
              <li>Shipping companies to deliver your orders</li>
              <li>Service providers who assist with our business operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. All payment information is processed securely through our certified 
              payment partners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
            <p>Under GDPR and UK data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at contact@manificos.com 
              or call +1 (208) 808-1919. Our support is available 24/7.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
