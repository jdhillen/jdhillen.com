import { getSupabaseClient } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  const supabase = getSupabaseClient();
  const { slug } = getQuery(event);

  try {
    if (slug) {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('enabled', 'TRUE')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});