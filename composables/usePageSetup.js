const usePageSetup = async () => {
  const route = useRoute();
  const client = useSupabaseClient();

  const { data } = await useAsyncData('page', async () => {
    const { data, error } = await client.from('pages').select().eq('slug', route.name);

    if (error) throw createError({ statusCode: 404, statusMessage: 'Connection to database has been lost.' });

    return data[0];
  });

  return data;
};

export default usePageSetup;