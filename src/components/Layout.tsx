
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Zap, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { state } = useCart();
  const { state: wishlistState } = useWishlist();
  const location = useLocation();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistState.items.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
                Manificos
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`text-slate-600 hover:text-blue-600 transition-colors ${
                  location.pathname === '/' ? 'text-blue-600 font-medium' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`text-slate-600 hover:text-blue-600 transition-colors ${
                  location.pathname === '/products' ? 'text-blue-600 font-medium' : ''
                }`}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className={`text-slate-600 hover:text-blue-600 transition-colors ${
                  location.pathname === '/about' ? 'text-blue-600 font-medium' : ''
                }`}
              >
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/wishlist" className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-800 text-white mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold">Manificos</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Premium drones and accessories for professionals and enthusiasts worldwide.
              </p>
              <p className="text-slate-400 text-xs">
                Manificos Ltd | Company No. 15909085<br />
                71-75 Shelton Street, Covent Garden<br />
                London, WC2H 9JQ, United Kingdom
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
                <li><Link to="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/shipping-returns" className="hover:text-white transition-colors">Returns Policy</Link></li>
                <li><Link to="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@manificos.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+12088081919</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Manificos Ltd. All rights reserved. | Payment powered by Stripe, Wise & Banky</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
