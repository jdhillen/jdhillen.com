import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);

  const { data } = await client.from('profiles')
    .select('*')
    .eq('id', 'ef85c3cf-b659-458e-a900-301fc4fa26a0')
    .single();
  return data;
});