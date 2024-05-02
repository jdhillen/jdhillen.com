import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);

  const { data } = await client.from('socials')
    .select('*')
    .eq('enabled', true)
    .order('order', { ascending: true });
  return data;
});