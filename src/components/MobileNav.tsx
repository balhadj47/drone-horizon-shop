
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, Heart, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface MobileNavProps {
  user: SupabaseUser | null;
  onSignOut: () => Promise<void>;
  onClose: () => void;
  cartItemsCount: number;
  wishlistItemsCount: number;
}

const MobileNav = ({ user, onSignOut, onClose, cartItemsCount, wishlistItemsCount }: MobileNavProps) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/about', label: 'About', icon: Home },
  ];

  const handleSignOut = async () => {
    await onSignOut();
    onClose();
  };

  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-4 py-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        
        <div className="border-t pt-2 mt-2">
          <Link
            to="/wishlist"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 relative"
          >
            <Heart className="h-5 w-5" />
            <span>Wishlist</span>
            {wishlistItemsCount > 0 && (
              <Badge variant="destructive" className="ml-auto">
                {wishlistItemsCount}
              </Badge>
            )}
          </Link>
          
          <Link
            to="/cart"
            onClick={onClose}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 relative"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            {cartItemsCount > 0 && (
              <Badge variant="destructive" className="ml-auto">
                {cartItemsCount}
              </Badge>
            )}
          </Link>
        </div>

        <div className="border-t pt-2 mt-2">
          {user ? (
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="w-full justify-start p-3 text-gray-700 hover:bg-gray-50"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          ) : (
            <Link
              to="/auth"
              onClick={onClose}
              className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
