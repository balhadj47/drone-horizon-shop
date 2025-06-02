
import React from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';
import { Product } from '../contexts/CartContext';
import StarRating from './StarRating';
import { getProductRating } from '../data/reviews';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product, e: React.MouseEvent) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  console.log('ProductCard rendering for product:', product.id);
  
  const { addToCart } = useCart();
  const { state, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  console.log('Wishlist state:', state);
  
  // Add defensive check for state and isInWishlist function
  const isProductInWishlist = state?.items && isInWishlist ? isInWishlist(product.id) : false;
  
  // Add defensive check for getProductRating
  let average = 0;
  let count = 0;
  
  try {
    const rating = getProductRating(product.id);
    average = rating.average;
    count = rating.count;
  } catch (error) {
    console.error('Error getting product rating:', error);
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!addToWishlist || !removeFromWishlist) {
      console.error('Wishlist functions not available');
      return;
    }
    
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              onClick={handleWishlistToggle}
              className="h-9 w-9 bg-white/95 hover:bg-white shadow-md backdrop-blur-sm"
            >
              <Heart className={`h-4 w-4 ${isProductInWishlist ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={(e) => onQuickView(product, e)}
              className="h-9 w-9 bg-white/95 hover:bg-white shadow-md backdrop-blur-sm"
            >
              <Eye className="h-4 w-4 text-slate-600" />
            </Button>
          </div>

          {/* Stock Badge */}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-4 left-4 shadow-sm">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category and Rating */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="text-xs font-medium bg-blue-50 text-blue-700 border-blue-200">
              {product.category}
            </Badge>
            {count > 0 && (
              <div className="flex items-center gap-1">
                <StarRating rating={average} size="sm" />
                <span className="text-xs text-slate-500 font-medium">({count})</span>
              </div>
            )}
          </div>
          
          {/* Product Name */}
          <h3 className="font-semibold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed flex-1">
            {product.description}
          </p>
          
          {/* Price and Add to Cart */}
          <div className="space-y-4 mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">
                £{product.price.toLocaleString()}
              </span>
            </div>
            
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none"
              size="lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
