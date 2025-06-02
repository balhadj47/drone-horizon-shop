
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import WarrantyInfo from './WarrantyInfo';
import { Product } from '../hooks/useProducts';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

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

  return (
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

        <WarrantyInfo category={product.category?.name || ''} />

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
    </div>
  );
};

export default ProductInfo;
