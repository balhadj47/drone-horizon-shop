
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ProductFiltersProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  inStockOnly: boolean;
  onInStockChange: (inStock: boolean) => void;
  onClearFilters: () => void;
  categories: string[];
}

const ProductFilters = ({
  priceRange,
  onPriceRangeChange,
  selectedCategories,
  onCategoryChange,
  inStockOnly,
  onInStockChange,
  onClearFilters,
  categories
}: ProductFiltersProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">Filters</CardTitle>
        <Button variant="ghost" size="sm" onClick={onClearFilters}>
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Price Range: £{priceRange[0].toLocaleString()} - £{priceRange[1].toLocaleString()}
          </Label>
          <Slider
            value={priceRange}
            onValueChange={(value) => onPriceRangeChange(value as [number, number])}
            max={15000}
            min={0}
            step={100}
            className="w-full"
          />
        </div>

        {/* Categories */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Categories</Label>
          <div className="space-y-2">
            {categories.filter(cat => cat !== 'all').map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryChange(category)}
                />
                <Label htmlFor={category} className="text-sm cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Status */}
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={inStockOnly}
              onCheckedChange={onInStockChange}
            />
            <Label htmlFor="inStock" className="text-sm cursor-pointer">
              In Stock Only
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
