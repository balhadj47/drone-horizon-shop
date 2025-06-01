
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome aboard! 🎉",
      description: "Check your email for your 10% discount code!",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Gift className="h-12 w-12 text-yellow-300 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get 10% Off Your First Order
            </h2>
          </div>
          
          <p className="text-xl text-blue-100 mb-8">
            Join our newsletter for exclusive deals, flying tips, and the latest drone technology updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white text-slate-900"
                required
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Get Discount'}
            </Button>
          </form>
          
          <p className="text-sm text-blue-200 mt-4">
            No spam, just amazing drone deals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
