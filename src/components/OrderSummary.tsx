
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CartItem } from '../contexts/CartContext';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
  shippingCost: number;
  finalTotal: number;
}

const OrderSummary = ({ items, total, shippingCost, finalTotal }: OrderSummaryProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Order Summary ({items.length} items)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                <p className="font-semibold text-blue-600">
                  £{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>£{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={shippingCost === 0 ? "text-green-600" : "text-slate-600"}>
                Shipping
              </span>
              <span className={shippingCost === 0 ? "text-green-600" : "text-slate-600"}>
                {shippingCost === 0 ? 'FREE' : `£${shippingCost}`}
              </span>
            </div>
            {shippingCost === 0 && (
              <div className="text-xs text-green-600">
                🎉 You saved £49 on shipping!
              </div>
            )}
            <div className="flex justify-between text-sm text-slate-600">
              <span>Estimated delivery</span>
              <span>3-5 business days</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-2">
              <span>Total</span>
              <span className="text-blue-600">£{finalTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
