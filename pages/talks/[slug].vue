<!--|== Template =============================================================================== -->
<template>
  <section class="page post">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ post.name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <img
            class="post__image"
            :src="post.thumbnail"
            :alt="post.name"
          />
          <article v-html="post.body_rendered"></article>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import defaultPageTransition from '../../composables/transitions/defaultPageTransition';

definePageMeta({
  pageTransition: defaultPageTransition,
});

const route = useRoute();
const { API_BASE } = useRuntimeConfig().public;
const { data } = await useFetch(
  `${API_BASE}/talks/talk/?slug=${route.params.slug}`
);

if (!data.value || data.value == []) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

const post = data.value[0];

const meta = {
  title: post.meta_title,
  desc: post.meta_description,
  img: post.meta_image
};
const metaData = useMetaData(route, meta);
useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.post {
  &__subhead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__date,
  &__time {
    font-style: italic;
    margin-bottom: 2rem;
  }
  &__image {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    background-color: black(0.8);
  }
}
</style>
