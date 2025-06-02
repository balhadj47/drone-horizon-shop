
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProduct } from '../hooks/useProducts';
import ReviewsSection from '../components/ReviewsSection';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';
import ProductSpecifications from '../components/ProductSpecifications';
import ProductFeatures from '../components/ProductFeatures';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: product, isLoading, error } = useProduct(id || '');

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link to="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <ProductImage imageUrl={product.image_url} name={product.name} />
        
        <div className="space-y-6">
          <ProductInfo product={product} />
          <ProductSpecifications specifications={product.specifications} />
          <ProductFeatures features={product.features} />
        </div>
      </div>

      <ReviewsSection productId={product.id} />
    </div>
  );
};

export default ProductDetail;
