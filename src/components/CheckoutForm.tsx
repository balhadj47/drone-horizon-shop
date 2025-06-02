
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { useAddressParser } from '../hooks/useAddressParser';
import PaymentInfo from './PaymentInfo';
import PersonalInfoSection from './checkout/PersonalInfoSection';
import AddressSection from './checkout/AddressSection';
import AccountCreationSection from './checkout/AccountCreationSection';
import CheckoutToggle from './checkout/CheckoutToggle';

interface CheckoutFormProps {
  isProcessing: boolean;
  onSubmit: (formData: any) => void;
  shippingCost: number;
  finalTotal: number;
}

const CheckoutForm = ({ isProcessing, onSubmit, shippingCost, finalTotal }: CheckoutFormProps) => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const { parseAddress } = useAddressParser();
  const [isGuest, setIsGuest] = useState(!user);
  
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
  }, [profile, parseAddress]);

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Details</CardTitle>
        {!user && (
          <CheckoutToggle isGuest={isGuest} onToggle={setIsGuest} />
        )}
        {hasCompleteProfile && (
          <p className="text-sm text-green-600">✓ Using your saved profile information</p>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <PersonalInfoSection
            formData={formData}
            onInputChange={handleInputChange}
            isReadOnly={!!hasCompleteProfile}
          />

          <AddressSection
            formData={formData}
            onInputChange={handleInputChange}
            onCountryChange={handleCountryChange}
            isReadOnly={!!hasCompleteProfile}
          />

          <AccountCreationSection showAccountCreation={!user && !isGuest} />

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
