import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);

  const { slug } = getQuery(event);

  if (slug) {
    const { data } = await client.from('talks')
      .select('*, videos:talks_videos(title, date, url)')
      .eq('slug', slug)
      .order('date', { referencedTable: 'talks_videos', ascending: true })
      .single();
    return data;
  } else {
    const { data } = await client.from('talks')
      .select('*');
    return data;
  }
});