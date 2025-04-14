import { getSupabaseClient } from '../utils/supabase';

export default defineEventHandler(async (_event) => {
  const supabase = getSupabaseClient();
  const PROFILE_ID = 'ef85c3cf-b659-458e-a900-301fc4fa26a0';

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', PROFILE_ID)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});
