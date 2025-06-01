import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGuest, setIsGuest] = useState(true);
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const shippingCost = state.total >= 500 ? 0 : 49;
  const finalTotal = state.total + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        {/* Checkout Form */}
        <Card>
          <CardHeader>
            <CardTitle>Delivery Details</CardTitle>
            <div className="flex gap-4 text-sm">
              <button
                type="button"
                onClick={() => setIsGuest(true)}
                className={`px-3 py-1 rounded ${isGuest ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Guest Checkout
              </button>
              <button
                type="button"
                onClick={() => setIsGuest(false)}
                className={`px-3 py-1 rounded ${!isGuest ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Create Account
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main Street"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="New York"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    placeholder="10001"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {!isGuest && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create password"
                      required={!isGuest}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      required={!isGuest}
                    />
                  </div>
                </div>
              )}

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">💳 Express Payment</h3>
                  <p className="text-blue-700 text-sm">
                    {isGuest ? 'Quick guest checkout' : 'Secure account creation'} • 
                    {shippingCost === 0 ? ' Free shipping' : ` $${shippingCost} shipping`}
                  </p>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Complete Order - $${finalTotal.toLocaleString()}`}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Order Summary */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Order Summary ({state.items.length} items)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                    <p className="font-semibold text-blue-600">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span>${state.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={shippingCost === 0 ? "text-green-600" : "text-slate-600"}>
                    Shipping
                  </span>
                  <span className={shippingCost === 0 ? "text-green-600" : "text-slate-600"}>
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost}`}
                  </span>
                </div>
                {shippingCost === 0 && (
                  <div className="text-xs text-green-600">
                    🎉 You saved $49 on shipping!
                  </div>
                )}
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Estimated delivery</span>
                  <span>3-5 business days</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-2">
                  <span>Total</span>
                  <span className="text-blue-600">${finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
