
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  display_order: number;
  created_at: string;
}

export const useTrustBadges = () => {
  return useQuery({
    queryKey: ['trust_badges'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('trust_badges')
        .select('*')
        .order('display_order');

      if (error) throw error;
      return data as TrustBadge[];
    },
  });
};
