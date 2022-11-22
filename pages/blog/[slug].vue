<!--|== Template =============================================================================== -->
<template>
  <section class="page post">
    <div class="container">
      <div class="row">
        <h2 class="twelve columns" v-if="post" v-html="post.name"/>
        <div class="post__date">{{ usePostDate(post.created) }}</div>
      </div>
      <div class="row">
        <div class="twelve columns" v-if="post" v-html="post.body_rendered"/>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const route = useRoute();
  const { apiBase } = useRuntimeConfig();
  const { data } = await useFetch(`${apiBase}/blog/?slug=${route.params.slug}`);
  
  if (!data.value.results || data.value.results == []) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }

  const post = data.value.results[0];

  const meta = {
    title: post.meta_title,
    desc: post.meta_description,
    img: post.meta_image
  }
  const metaData = useMetaData(route, meta);
  useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.post {

  &__date {
    font-style: italic;
    margin-bottom: 2rem;
  }

}
</style>