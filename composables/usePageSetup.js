export default function usePageSetup() {

  // const client = useSupabaseClient();

  // const { data } = useAsyncData('Pages', async () => {
  //   return client.from('Pages').select().eq('slug', 'index')
  // });

  // console.log('data', data);



  const route = useRoute();
  const { API_BASE } = useRuntimeConfig().public;
  const res = useFetch(`${API_BASE}/pages/?slug=${route.name}`)

  res.then((res) => {
    if (!res.data.value || !res.data.value[0]) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }
    return res;
  });

  useHead(() => {
    const value = res.data.value?.[0];
    if (res.error.value || !value) { return {} }
    const meta = {
      title: value.meta_title,
      desc: value.meta_description,
      img: value.meta_image
    }
    return useMetaData(route, meta);
  });

  return res
};