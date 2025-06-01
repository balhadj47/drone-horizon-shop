
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductsMainFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  categories: string[];
}

const ProductsMainFilters = ({ 
  selectedCategory, 
  onCategoryChange, 
  sortBy, 
  onSortChange, 
  categories 
}: ProductsMainFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductsMainFilters;
