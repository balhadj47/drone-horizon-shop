
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { Product } from '../contexts/CartContext';

interface ProductsGridProps {
  products: Product[];
  isLoading: boolean;
  searchQuery: string;
  onQuickView: (product: Product, e: React.MouseEvent) => void;
  onClearFilters: () => void;
}

const ProductsGrid = ({ 
  products, 
  isLoading, 
  searchQuery, 
  onQuickView, 
  onClearFilters 
}: ProductsGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-slate-600">
          {searchQuery ? `No products found for "${searchQuery}"` : 'No products found matching your filters.'}
        </p>
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="mt-4"
        >
          Clear All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
