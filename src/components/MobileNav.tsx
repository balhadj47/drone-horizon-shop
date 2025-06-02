
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, LogOut, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MobileNavProps {
  user: any;
  onSignOut: () => void;
  onClose: () => void;
  cartItemsCount: number;
  wishlistItemsCount: number;
}

const MobileNav = ({ user, onSignOut, onClose, cartItemsCount, wishlistItemsCount }: MobileNavProps) => {
  return (
    <div className="md:hidden bg-white border-t">
      <nav className="px-4 py-4 space-y-4">
        <Link 
          to="/" 
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={onClose}
        >
          <span>Home</span>
        </Link>
        
        <Link 
          to="/products" 
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={onClose}
        >
          <span>Products</span>
        </Link>
        
        <Link 
          to="/about" 
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={onClose}
        >
          <span>About</span>
        </Link>

        <Link 
          to="/wishlist" 
          className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
          onClick={onClose}
        >
          <div className="flex items-center space-x-3">
            <Heart className="h-5 w-5" />
            <span>Wishlist</span>
          </div>
          {wishlistItemsCount > 0 && (
            <Badge variant="destructive" className="h-5 w-5 flex items-center justify-center p-0 text-xs">
              {wishlistItemsCount}
            </Badge>
          )}
        </Link>

        <Link 
          to="/cart" 
          className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
          onClick={onClose}
        >
          <div className="flex items-center space-x-3">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </div>
          {cartItemsCount > 0 && (
            <Badge variant="destructive" className="h-5 w-5 flex items-center justify-center p-0 text-xs">
              {cartItemsCount}
            </Badge>
          )}
        </Link>

        {user ? (
          <>
            <Link 
              to="/account" 
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={onClose}
            >
              <Settings className="h-5 w-5" />
              <span>Account Settings</span>
            </Link>
            <button
              onClick={() => {
                onSignOut();
                onClose();
              }}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </>
        ) : (
          <Link 
            to="/auth" 
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={onClose}
          >
            <User className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
