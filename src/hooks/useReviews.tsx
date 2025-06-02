
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Review {
  id: string;
  product_id: string;
  user_name: string;
  rating: number;
  comment: string;
  verified: boolean;
  created_at: string;
}

export const useReviews = (productId?: string) => {
  return useQuery({
    queryKey: ['reviews', productId],
    queryFn: async () => {
      let query = (supabase as any).from('reviews').select('*');
      
      if (productId) {
        query = query.eq('product_id', productId);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      return data as Review[];
    },
  });
};

export const useProductRating = (productId: string) => {
  return useQuery({
    queryKey: ['product_rating', productId],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('reviews')
        .select('rating')
        .eq('product_id', productId);

      if (error) throw error;
      
      if (!data || data.length === 0) {
        return { average: 0, count: 0 };
      }

      const ratings = data.map((review: any) => review.rating);
      const average = ratings.reduce((sum: number, rating: number) => sum + rating, 0) / ratings.length;
      
      return {
        average: Math.round(average * 10) / 10,
        count: ratings.length
      };
    },
  });
};
