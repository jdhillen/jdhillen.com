<!--|== Template =============================================================================== -->
<template>
  <section class="page blog">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page" v-html="page[0].body_rendered"/>
      </div>
      <div class="row" v-if="blogs" v-for="blog in blogs.results">
        <NuxtLink :to="'/blog/' + blog.slug" class="post">
          <div class="twelve columns">
            <h3>{{ blog.name }}</h3>
            <p>{{ blog.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const route = useRoute();
  const { apiBase } = useRuntimeConfig();
  const [{ data: page }, { data: blogs }] = await Promise.all([
      useFetch(`${apiBase}/pages/?slug=${route.name}`),
      useFetch(`${apiBase}/blog`)
  ]);
  if (!page.value || page.value == []) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
  const meta = {
    title: page.value?.[0].meta_title,
    desc: page.value?.[0].meta_description,
    img: page.value?.[0].meta_image
  }
  const metaData = useMetaData(route, meta);
  useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.blog {}

.post {
  color: #222;
  
  h3 {}
  
  p {
    font-style: italic;
  }
}
</style>