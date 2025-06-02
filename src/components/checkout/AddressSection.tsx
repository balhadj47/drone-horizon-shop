
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AddressSectionProps {
  formData: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCountryChange: (value: string) => void;
  isReadOnly: boolean;
}

const AddressSection = ({ formData, onInputChange, onCountryChange, isReadOnly }: AddressSectionProps) => {
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
          onChange={onInputChange}
          readOnly={isReadOnly}
          className={isReadOnly ? 'bg-gray-50' : ''}
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
            onChange={onInputChange}
            readOnly={isReadOnly}
            className={isReadOnly ? 'bg-gray-50' : ''}
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
            onChange={onInputChange}
            readOnly={isReadOnly}
            className={isReadOnly ? 'bg-gray-50' : ''}
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
            onChange={onInputChange}
            readOnly={isReadOnly}
            className={isReadOnly ? 'bg-gray-50' : ''}
          />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          {isReadOnly ? (
            <Input
              id="country"
              name="country"
              value={formData.country}
              readOnly
              className="bg-gray-50"
            />
          ) : (
            <Select value={formData.country} onValueChange={onCountryChange}>
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
  );
};

export default AddressSection;
