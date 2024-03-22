const usePageSetup = async () => {
  const route = useRoute();
  const client = useSupabaseClient();

  const { data } = await useAsyncData('page', async () => {
    const { data } = await client.from('Pages').select().eq('slug', route.name);

    if (!data || !data[0] ) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }
    
    return data[0];
  });

  return data;
};

export default usePageSetup;