<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page">
          <MDC :value="page.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute();
// const page = await usePageSetup('index');

const client = useSupabaseClient();
const { data:page } = await useAsyncData('page', async () => {
  const { data, error } = await client.from('pages').select('*').eq('slug', 'index').single();
  if (error) throw createError({ statusCode: 404, statusMessage: 'Connection to database has been lost.' });
  return data;
});

useHead(() => {
  const meta = {
    title: page.value.meta_title,
    desc: page.value.meta_description,
    img: page.value.meta_image
  };
  return useMetaData(route, meta);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {
}
</style>
