
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import PaymentInfo from './PaymentInfo';

interface CheckoutFormProps {
  isProcessing: boolean;
  onSubmit: (formData: any) => void;
  shippingCost: number;
  finalTotal: number;
}

const CheckoutForm = ({ isProcessing, onSubmit, shippingCost, finalTotal }: CheckoutFormProps) => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const [isGuest, setIsGuest] = useState(!user);
  
  // Parse address from profile if available
  const parseAddress = (address: string | null) => {
    if (!address) return { street: '', city: '', state: '', postalCode: '', country: '' };
    
    try {
      const parsed = JSON.parse(address);
      return {
        street: parsed.street || '',
        city: parsed.city || '',
        state: parsed.state || '',
        postalCode: parsed.postalCode || '',
        country: parsed.country || ''
      };
    } catch {
      return { street: address, city: '', state: '', postalCode: '', country: '' };
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  // Pre-fill form data when profile loads
  useEffect(() => {
    if (profile) {
      const addressData = parseAddress(profile.address);
      setFormData({
        email: profile.email || '',
        name: profile.full_name || '',
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        postalCode: addressData.postalCode,
        country: addressData.country,
      });
    }
  }, [profile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (value: string) => {
    setFormData({
      ...formData,
      country: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Check if user has complete profile data
  const hasCompleteProfile = user && profile && profile.full_name && profile.email && profile.address;

  const countries = [
    { value: 'Canada', label: 'Canada' },
    { value: 'United States', label: 'United States' },
    { value: 'Austria', label: 'Austria' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Bulgaria', label: 'Bulgaria' },
    { value: 'Croatia', label: 'Croatia' },
    { value: 'Cyprus', label: 'Cyprus' },
    { value: 'Czech Republic', label: 'Czech Republic' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Estonia', label: 'Estonia' },
    { value: 'Finland', label: 'Finland' },
    { value: 'France', label: 'France' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Hungary', label: 'Hungary' },
    { value: 'Ireland', label: 'Ireland' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Latvia', label: 'Latvia' },
    { value: 'Lithuania', label: 'Lithuania' },
    { value: 'Luxembourg', label: 'Luxembourg' },
    { value: 'Malta', label: 'Malta' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Portugal', label: 'Portugal' },
    { value: 'Romania', label: 'Romania' },
    { value: 'Slovakia', label: 'Slovakia' },
    { value: 'Slovenia', label: 'Slovenia' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Sweden', label: 'Sweden' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Details</CardTitle>
        {!user && (
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
        )}
        {hasCompleteProfile && (
          <p className="text-sm text-green-600">✓ Using your saved profile information</p>
        )}
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
              readOnly={hasCompleteProfile}
              className={hasCompleteProfile ? 'bg-gray-50' : ''}
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
              readOnly={hasCompleteProfile}
              className={hasCompleteProfile ? 'bg-gray-50' : ''}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipping Address</h3>
            
            <div>
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                name="street"
                placeholder="123 Main Street"
                required
                value={formData.street}
                onChange={handleInputChange}
                readOnly={hasCompleteProfile}
                className={hasCompleteProfile ? 'bg-gray-50' : ''}
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
                  readOnly={hasCompleteProfile}
                  className={hasCompleteProfile ? 'bg-gray-50' : ''}
                />
              </div>
              <div>
                <Label htmlFor="state">State/Province</Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="England"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  readOnly={hasCompleteProfile}
                  className={hasCompleteProfile ? 'bg-gray-50' : ''}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  placeholder="SW1A 1AA"
                  required
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  readOnly={hasCompleteProfile}
                  className={hasCompleteProfile ? 'bg-gray-50' : ''}
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                {hasCompleteProfile ? (
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    readOnly
                    className="bg-gray-50"
                  />
                ) : (
                  <Select value={formData.country} onValueChange={handleCountryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>

          {!user && !isGuest && (
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
