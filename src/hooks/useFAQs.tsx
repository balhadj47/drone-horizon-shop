
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  created_at: string;
}

export const useFAQs = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('faqs')
        .select('*')
        .order('display_order');

      if (error) throw error;
      return data as FAQ[];
    },
  });
};
