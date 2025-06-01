import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Zap } from 'lucide-react';
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Manificos</span>
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
