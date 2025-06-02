
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { AuthProvider } from '@/hooks/useAuth';
import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Wishlist from '@/pages/Wishlist';
import Checkout from '@/pages/Checkout';
import Success from '@/pages/Success';
import Auth from '@/pages/Auth';
import Account from '@/pages/Account';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Index /></Layout>,
  },
  {
    path: "/products",
    element: <Layout><Products /></Layout>,
  },
  {
    path: "/products/:id",
    element: <Layout><ProductDetail /></Layout>,
  },
  {
    path: "/cart",
    element: <Layout><Cart /></Layout>,
  },
  {
    path: "/wishlist",
    element: <Layout><Wishlist /></Layout>,
  },
  {
    path: "/checkout",
    element: <Layout><Checkout /></Layout>,
  },
  {
    path: "/success",
    element: <Layout><Success /></Layout>,
  },
  {
    path: "/auth",
    element: <Layout><Auth /></Layout>,
  },
  {
    path: "/account",
    element: <Layout><Account /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <RouterProvider router={router} />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
