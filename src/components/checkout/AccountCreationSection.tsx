
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface AccountCreationSectionProps {
  showAccountCreation: boolean;
}

const AccountCreationSection = ({ showAccountCreation }: AccountCreationSectionProps) => {
  if (!showAccountCreation) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Create password"
          required
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          required
        />
      </div>
    </div>
  );
};

export default AccountCreationSection;
