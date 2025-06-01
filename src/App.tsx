
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { AuthProvider } from "./hooks/useAuth";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Success = lazy(() => import("./pages/Success"));
const About = lazy(() => import("./pages/About"));
const Auth = lazy(() => import("./pages/Auth"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ShippingReturns = lazy(() => import("./pages/ShippingReturns"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const DataProtection = lazy(() => import("./pages/DataProtection"));
const AgeVerification = lazy(() => import("./pages/AgeVerification"));
const ExportControl = lazy(() => import("./pages/ExportControl"));
const RegulatoryCompliance = lazy(() => import("./pages/RegulatoryCompliance"));
const RightOfWithdrawal = lazy(() => import("./pages/RightOfWithdrawal"));
const DisputeResolution = lazy(() => import("./pages/DisputeResolution"));
const ProductLiability = lazy(() => import("./pages/ProductLiability"));
const FinancialCompliance = lazy(() => import("./pages/FinancialCompliance"));
const EnvironmentalPolicy = lazy(() => import("./pages/EnvironmentalPolicy"));
const AccessibilityStatement = lazy(() => import("./pages/AccessibilityStatement"));
const TechnicalCompliance = lazy(() => import("./pages/TechnicalCompliance"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ErrorBoundary>
                <Layout>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/success" element={<Success />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/auth" element={<Auth />} />
                      
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
                  </Suspense>
                </Layout>
              </ErrorBoundary>
            </BrowserRouter>
          </TooltipProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
