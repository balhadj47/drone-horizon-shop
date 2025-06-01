
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '../contexts/CartContext';
import { useProduct } from '../hooks/useProducts';
import { toast } from '@/hooks/use-toast';
import ReviewsSection from '../components/ReviewsSection';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
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

  // Convert database product to legacy format for cart compatibility
  const legacyProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category?.name || 'Unknown',
    image: product.image_url || '/placeholder.svg',
    inStock: product.in_stock,
    specs: {
      flightTime: product.specifications?.max_flight_time || 'N/A',
      range: product.specifications?.range || 'N/A',
      camera: product.specifications?.camera_resolution || 'N/A',
      weight: product.specifications?.weight || 'N/A'
    }
  };

  const handleAddToCart = () => {
    addToCart(legacyProduct);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addToCart(legacyProduct);
    navigate('/checkout');
  };

  // Determine warranty period based on category
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link to="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
          <img 
            src={product.image_url || '/placeholder.svg'} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                {product.name}
              </h1>
              {product.category && (
                <Badge variant="secondary">{product.category.name}</Badge>
              )}
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-4">
              £{product.price.toLocaleString()}
            </p>
            <p className="text-lg text-slate-600">
              {product.description}
            </p>
          </div>

          {/* Stock Status & Warranty Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {product.in_stock ? (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-medium">In Stock - Free Shipping</span>
                </>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            {/* Warranty & Guarantee Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Warranty & Guarantee</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700">{getWarrantyPeriod(product.category?.name || '')} manufacturer warranty</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button 
                size="lg" 
                onClick={handleAddToCart}
                disabled={!product.in_stock}
                variant="outline"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button 
                size="lg" 
                onClick={handleBuyNow}
                disabled={!product.in_stock}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Zap className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            </div>
          </div>

          {/* Specifications */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="space-y-3">
                {product.specifications?.max_flight_time && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Flight Time:</span>
                    <span className="font-medium">{product.specifications.max_flight_time}</span>
                  </div>
                )}
                {product.specifications?.range && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Range:</span>
                    <span className="font-medium">{product.specifications.range}</span>
                  </div>
                )}
                {product.specifications?.camera_resolution && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Camera:</span>
                    <span className="font-medium">{product.specifications.camera_resolution}</span>
                  </div>
                )}
                {product.specifications?.weight && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Weight:</span>
                    <span className="font-medium">{product.specifications.weight}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-slate-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection productId={product.id} />
    </div>
  );
};

export default ProductDetail;
