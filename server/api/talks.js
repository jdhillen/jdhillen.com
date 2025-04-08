import { getSupabaseClient } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  const supabase = getSupabaseClient();
  const { slug } = getQuery(event);

  try {
    if (slug) {
      const { data, error } = await supabase
        .from('talks')
        .select('*, videos:talks_videos(title, date, url)')
        .eq('slug', slug)
        .order('id', { referencedTable: 'talks_videos', ascending: true })
        .single();
      
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('talks')
        .select('*')
        .eq('enabled', 'TRUE')
        .order('id', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  } catch (error) {
    console.error('Error fetching talks:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});