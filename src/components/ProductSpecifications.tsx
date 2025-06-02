
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductSpecificationsProps {
  specifications: {
    max_flight_time?: string;
    range?: string;
    camera_resolution?: string;
    weight?: string;
  } | null;
}

const ProductSpecifications = ({ specifications }: ProductSpecificationsProps) => {
  if (!specifications) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Specifications</h3>
        <div className="space-y-3">
          {specifications.max_flight_time && (
            <div className="flex justify-between">
              <span className="text-slate-600">Flight Time:</span>
              <span className="font-medium">{specifications.max_flight_time}</span>
            </div>
          )}
          {specifications.range && (
            <div className="flex justify-between">
              <span className="text-slate-600">Range:</span>
              <span className="font-medium">{specifications.range}</span>
            </div>
          )}
          {specifications.camera_resolution && (
            <div className="flex justify-between">
              <span className="text-slate-600">Camera:</span>
              <span className="font-medium">{specifications.camera_resolution}</span>
            </div>
          )}
          {specifications.weight && (
            <div className="flex justify-between">
              <span className="text-slate-600">Weight:</span>
              <span className="font-medium">{specifications.weight}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSpecifications;
