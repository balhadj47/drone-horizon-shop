
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import PaymentInfo from './PaymentInfo';

interface CheckoutFormProps {
  isProcessing: boolean;
  onSubmit: (formData: any) => void;
  shippingCost: number;
  finalTotal: number;
}

const CheckoutForm = ({ isProcessing, onSubmit, shippingCost, finalTotal }: CheckoutFormProps) => {
  const [isGuest, setIsGuest] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Details</CardTitle>
        <div className="flex gap-4 text-sm">
          <button
            type="button"
            onClick={() => setIsGuest(true)}
            className={`px-3 py-1 rounded ${isGuest ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Guest Checkout
          </button>
          <button
            type="button"
            onClick={() => setIsGuest(false)}
            className={`px-3 py-1 rounded ${!isGuest ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Create Account
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="123 Main Street"
              required
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="London"
                required
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="zipCode">Postcode</Label>
              <Input
                id="zipCode"
                name="zipCode"
                placeholder="SW1A 1AA"
                required
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {!isGuest && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create password"
                  required={!isGuest}
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required={!isGuest}
                />
              </div>
            </div>
          )}

          <PaymentInfo isGuest={isGuest} shippingCost={shippingCost} />

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Complete Order - £${finalTotal.toLocaleString()}`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
