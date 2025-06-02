
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface PersonalInfoSectionProps {
  formData: {
    email: string;
    name: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isReadOnly: boolean;
}

const PersonalInfoSection = ({ formData, onInputChange, isReadOnly }: PersonalInfoSectionProps) => {
  return (
    <>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={onInputChange}
          readOnly={isReadOnly}
          className={isReadOnly ? 'bg-gray-50' : ''}
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
          onChange={onInputChange}
          readOnly={isReadOnly}
          className={isReadOnly ? 'bg-gray-50' : ''}
        />
      </div>
    </>
  );
};

export default PersonalInfoSection;
