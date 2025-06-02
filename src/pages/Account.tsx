
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft, User, Shield, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { useOrders } from '../hooks/useOrders';
import ProfileForm from '../components/ProfileForm';
import PasswordForm from '../components/PasswordForm';
import OrderHistory from '../components/OrderHistory';

const Account = () => {
  const { user, loading: authLoading } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useProfile();
  const { orders, loading: ordersLoading } = useOrders();

  if (authLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6 w-48"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and view your order history</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            {profileLoading ? (
              <div className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            ) : profile ? (
              <ProfileForm profile={profile} onUpdate={updateProfile} />
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Unable to load profile information</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <PasswordForm />
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <OrderHistory orders={orders} loading={ordersLoading} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
