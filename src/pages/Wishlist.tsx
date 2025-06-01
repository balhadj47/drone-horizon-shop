
import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import StarRating from '../components/StarRating';
import { getProductRating } from '../data/reviews';

const Wishlist = () => {
  const { state, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeFromWishlist(productId);
    toast({
      title: "Removed from wishlist",
      description: `${productName} has been removed from your wishlist.`,
    });
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">
            Save your favorite drones to your wishlist and keep track of items you want to purchase later.
          </p>
          <Link to="/products">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">
          {state.items.length} item{state.items.length !== 1 ? 's' : ''} saved for later
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.items.map((product) => {
          const { average, count } = getProductRating(product.id);
          
          return (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <Link to={`/products/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                {/* Remove Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                  className="absolute top-3 right-3 h-8 w-8 bg-white/90 hover:bg-white"
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>

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
                
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    £{product.price.toLocaleString()}
                  </span>
                  
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
