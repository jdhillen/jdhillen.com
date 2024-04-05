const usePageSetup = async (routeName) => {
  const client = useSupabaseClient();
  const { data } = await useAsyncData('page', async () => {
    const { data, error } = await client.from('pages').select('*').eq('slug', routeName).single();
    if (error) throw createError({ statusCode: 404, statusMessage: 'Connection to database has been lost.' });
    return data;
  });

  return data;
};

export default usePageSetup;
