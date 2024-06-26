import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);

  const { slug } = getQuery(event);

  if (slug) {
    const { data } = await client.from('blog')
      .select('*')
      .eq('slug', slug)
      .single();
    return data;
  } else {
    const { data } = await client.from('blog')
      .select('*')
      .eq('enabled', 'TRUE')
      .order('created_at', { ascending: true });
    return data;
  }
});