
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product, e: React.MouseEvent) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleQuickAddToCart = (product: Product, quantity: number = 1, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add multiple quantities at once
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleWishlistToggle = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8"
            onClick={(e) => onQuickView(product, e)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className={`h-8 w-8 ${isInWishlist(product.id) ? 'text-red-600' : ''}`}
            onClick={(e) => handleWishlistToggle(product, e)}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
        <p className="text-slate-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="space-y-2 mb-4 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Flight Time:</span>
            <span>{product.specs.flightTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Range:</span>
            <span>{product.specs.range}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            {/* Quantity Selector with Add to Cart */}
            <div className="flex items-center border rounded-md">
              <Button 
                size="sm"
                variant="ghost"
                className="px-2 h-8"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const qtyInput = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
                  if (qtyInput && parseInt(qtyInput.value) > 1) {
                    qtyInput.value = (parseInt(qtyInput.value) - 1).toString();
                  }
                }}
                disabled={!product.inStock}
              >
                -
              </Button>
              <input 
                type="number" 
                min="1" 
                max="10" 
                defaultValue="1"
                className="w-12 text-center border-0 focus:ring-0 h-8 text-sm"
                onClick={(e) => e.stopPropagation()}
                disabled={!product.inStock}
              />
              <Button 
                size="sm"
                variant="ghost"
                className="px-2 h-8"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const qtyInput = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
                  if (qtyInput && parseInt(qtyInput.value) < 10) {
                    qtyInput.value = (parseInt(qtyInput.value) + 1).toString();
                  }
                }}
                disabled={!product.inStock}
              >
                +
              </Button>
            </div>
            <Button 
              size="sm"
              onClick={(e) => {
                const qtyInput = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
                const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
                handleQuickAddToCart(product, quantity, e);
              }}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
            <Button asChild size="sm" variant="outline" disabled={!product.inStock}>
              <Link to={`/products/${product.id}`}>
                Details
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
