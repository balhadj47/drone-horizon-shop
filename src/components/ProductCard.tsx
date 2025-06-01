
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
  const { addToCart } = useCart();
  const { state, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // Add defensive check for state
  const isProductInWishlist = state?.items ? isInWishlist(product.id) : false;
  const { average, count } = getProductRating(product.id);

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
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              onClick={handleWishlistToggle}
              className="h-8 w-8 bg-white/90 hover:bg-white"
            >
              <Heart className={`h-4 w-4 ${isProductInWishlist ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={(e) => onQuickView(product, e)}
              className="h-8 w-8 bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4 text-slate-600" />
            </Button>
          </div>

          {/* Stock Badge */}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-3 left-3">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            {count > 0 && (
              <div className="flex items-center gap-1">
                <StarRating rating={average} size="sm" />
                <span className="text-xs text-gray-500">({count})</span>
              </div>
            )}
          </div>
          
          <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-slate-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">
              ${product.price.toLocaleString()}
            </span>
            
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
