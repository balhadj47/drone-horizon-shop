
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WarrantyInfoProps {
  category: string;
}

const WarrantyInfo = ({ category }: WarrantyInfoProps) => {
  const getWarrantyPeriod = (category: string) => {
    switch (category.toLowerCase()) {
      case 'racing':
        return '12 months';
      case 'professional':
      case 'consumer':
      default:
        return '24 months';
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-5 w-5 text-blue-600" />
        <span className="font-semibold text-blue-900">Warranty & Guarantee</span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-blue-600" />
          <span className="text-blue-700">{getWarrantyPeriod(category)} manufacturer warranty</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-blue-600" />
          <span className="text-blue-700">30-day money-back guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-blue-600" />
          <span className="text-blue-700">Free repairs for manufacturing defects</span>
        </div>
      </div>
      <Button asChild variant="link" className="text-blue-600 p-0 mt-2 h-auto">
        <Link to="/warranty">View full warranty details →</Link>
      </Button>
    </div>
  );
};

export default WarrantyInfo;
