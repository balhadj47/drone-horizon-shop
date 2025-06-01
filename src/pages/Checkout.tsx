
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCost = state.total >= 500 ? 0 : 49;
  const finalTotal = state.total + shippingCost;

  const handleSubmit = async (formData: any) => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Order placed successfully!",
      description: "You will receive a confirmation email shortly.",
    });

    clearCart();
    navigate('/success');
  };

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        <Button asChild variant="outline">
          <Link to="/cart">Back to Cart</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CheckoutForm
          isProcessing={isProcessing}
          onSubmit={handleSubmit}
          shippingCost={shippingCost}
          finalTotal={finalTotal}
        />
        
        <OrderSummary
          items={state.items}
          total={state.total}
          shippingCost={shippingCost}
          finalTotal={finalTotal}
        />
      </div>
    </div>
  );
};

export default Checkout;
