<!--|== Template =============================================================================== -->
<template>
  <section class="page uses">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="data" v-html="data[0].body_rendered"/>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const route = useRoute();
  const { apiBase } = useRuntimeConfig();
  const { data } = await useFetch(`${apiBase}/pages/?slug=${route.name}`);
  if (!data.value || data.value == []) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
  const meta = {
    title: data.value?.[0].meta_title,
    desc: data.value?.[0].meta_description,
    img: data.value?.[0].meta_image
  }
  const metaData = getMetaData(meta);
  useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.uses {}
</style>
