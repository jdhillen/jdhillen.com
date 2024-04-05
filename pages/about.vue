<!--|== Template =============================================================================== -->
<template>
  <section class="page about">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page">
          <h1>{{ page.name }}</h1>
          <MDC :value="page.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute();
// const page = await usePageSetup('about');

const client = useSupabaseClient();
const { data:page } = await useAsyncData('page', async () => {
  const { data, error } = await client.from('pages').select('*').eq('slug', 'about').single();
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
.about {}
</style>
