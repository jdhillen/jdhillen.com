<!--|== Template =============================================================================== -->
<template>
  <section class="page blog">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page">
          <h1>{{ page.name }}</h1>
          <article v-html="page.body_rendered"/>
        </div>
      </div>
      <div class="row" v-if="blogs" v-for="blog in blogs.results">
        <NuxtLink :to="'/blog/' + blog.slug" class="post">
          <div class="twelve columns">
            <h3>{{ blog.name }}</h3>
            <div class="post__subhead">
              <div class="post__date">{{ usePostDate(blog.created) }}</div>
              <div class="post__time">
                {{ calcReadingTime(blog.body_rendered) }} minute read
              </div>
            </div>
            <p>{{ blog.description }}</p>
            <hr />
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
const [{ data }, { data: blogs }] = await Promise.all([
  useFetch(`${apiBase}/pages/?slug=${route.name}`),
  useFetch(`${apiBase}/blog/posts/`)
]);

if (!data.value || data.value == []) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

const page = data.value[0];

const meta = {
  title: page.meta_title,
  desc: page.meta_description,
  img: page.meta_image
};
const metaData = useMetaData(route, meta);
useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.blog {
}

.post {
  color: #222;

  &__subhead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__date,
  &__time {
    font-style: italic;
  }

  p {
    font-style: italic;
  }
}
</style>
