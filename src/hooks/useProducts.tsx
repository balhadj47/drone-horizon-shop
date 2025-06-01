
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_url: string;
  in_stock: boolean;
  stock_quantity: number;
  features: string[];
  specifications: Record<string, any>;
  created_at: string;
  updated_at: string;
  category?: {
    name: string;
  };
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Use type assertion to bypass TypeScript errors until types are regenerated
      const { data, error } = await (supabase as any)
        .from('products')
        .select(`
          *,
          category:categories(name)
        `)
        .order('name');

      if (error) throw error;
      return data as Product[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      // Use type assertion to bypass TypeScript errors until types are regenerated
      const { data, error } = await (supabase as any)
        .from('products')
        .select(`
          *,
          category:categories(name)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as Product;
    },
    enabled: !!id,
  });
};
