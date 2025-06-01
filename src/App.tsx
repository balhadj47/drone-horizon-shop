
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Warranty from "./pages/Warranty";
import Wishlist from "./pages/Wishlist";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingReturns from "./pages/ShippingReturns";
import RefundPolicy from "./pages/RefundPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DataProtection from "./pages/DataProtection";
import AgeVerification from "./pages/AgeVerification";
import ExportControl from "./pages/ExportControl";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import RightOfWithdrawal from "./pages/RightOfWithdrawal";
import DisputeResolution from "./pages/DisputeResolution";
import ProductLiability from "./pages/ProductLiability";
import FinancialCompliance from "./pages/FinancialCompliance";
import EnvironmentalPolicy from "./pages/EnvironmentalPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import TechnicalCompliance from "./pages/TechnicalCompliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/warranty" element={<Warranty />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/shipping-returns" element={<ShippingReturns />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/data-protection" element={<DataProtection />} />
                  <Route path="/age-verification" element={<AgeVerification />} />
                  <Route path="/export-control" element={<ExportControl />} />
                  <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
                  <Route path="/right-of-withdrawal" element={<RightOfWithdrawal />} />
                  <Route path="/dispute-resolution" element={<DisputeResolution />} />
                  <Route path="/product-liability" element={<ProductLiability />} />
                  <Route path="/financial-compliance" element={<FinancialCompliance />} />
                  <Route path="/environmental-policy" element={<EnvironmentalPolicy />} />
                  <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
                  <Route path="/technical-compliance" element={<TechnicalCompliance />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
