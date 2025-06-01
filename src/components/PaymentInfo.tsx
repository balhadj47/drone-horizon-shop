
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PaymentInfoProps {
  isGuest: boolean;
  shippingCost: number;
}

const PaymentInfo = ({ isGuest, shippingCost }: PaymentInfoProps) => {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="p-4">
        <h3 className="font-semibold text-blue-900 mb-2">💳 Express Payment</h3>
        <p className="text-blue-700 text-sm">
          {isGuest ? 'Quick guest checkout' : 'Secure account creation'} • 
          {shippingCost === 0 ? ' Free shipping' : ` £${shippingCost} shipping`} •
          Powered by Stripe, Wise & Banky
        </p>
      </CardContent>
    </Card>
  );
};

export default PaymentInfo;
