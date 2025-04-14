import { getSupabaseClient } from '../utils/supabase';

export default defineEventHandler(async (_event) => {
  const supabase = getSupabaseClient();

  try {
    const { data, error } = await supabase
      .from('socials')
      .select('*')
      .eq('enabled', true)
      .order('order', { ascending: true });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching socials:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});
