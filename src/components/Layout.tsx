
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Drone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { state } = useCart();
  const location = useLocation();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Drone className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                SkyTech Drones
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
            </nav>

            <Link to="/cart" className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-800 text-white mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Drone className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">SkyTech Drones</span>
            </div>
            <p className="text-slate-400">
              Premium drones and accessories for professionals and enthusiasts
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
