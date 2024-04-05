import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);

  const { slug } = getQuery(event);

	const { data } = await client.from('pages').select('*').eq('slug', slug).single();

	return data;
});