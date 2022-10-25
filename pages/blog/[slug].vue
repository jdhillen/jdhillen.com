<!--|== Template =============================================================================== -->
<template>
  <section class="page post">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="post" v-html="post.results[0].body_rendered"/>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const route = useRoute();
  const { apiBase } = useRuntimeConfig();
  const { data: post } = await useFetch(`${apiBase}/blog/?slug=${route.params.slug}`);
  if (!post.value.results || post.value.results == []) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
  const meta = {
    title: post.value?.results[0].meta_title,
    desc: post.value?.results[0].meta_description,
    img: post.value?.results[0].meta_image
  }
  const metaData = getMetaData(meta);
  useHead(metaData);

  onMounted(() => {
    hljs.highlightAll();
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.post {}
</style>