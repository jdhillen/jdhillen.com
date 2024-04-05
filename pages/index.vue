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
import defaultPageTransition from '../composables/transitions/defaultPageTransition';

const client = useSupabaseClient();
const route = useRoute();

const { data:page } = await useAsyncData('page', async () => {
  const { data, error } = await client.from('pages').select().eq('slug', route.name);
  if (error) throw createError({ statusCode: 404, statusMessage: 'Connection to database has been lost.' });
  return data[0];
});

useHead(() => {
  const meta = {
    title: page.value.meta_title,
    desc: page.value.meta_description,
    img: page.value.meta_image
  };
  return useMetaData(route, meta);
});

definePageMeta({
  pageTransition: defaultPageTransition,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {
}
</style>
