
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductFeaturesProps {
  features: string[] | null;
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  if (!features || features.length === 0) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="space-y-2 text-slate-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProductFeatures;
