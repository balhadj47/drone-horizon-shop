
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Success = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-xl text-slate-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-sm text-slate-600">
                    A confirmation email has been sent to your email address with order details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium">Shipping Updates</p>
                  <p className="text-sm text-slate-600">
                    You'll receive tracking information once your order ships.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button asChild size="lg">
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <div>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
