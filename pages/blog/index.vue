<!--|== Template =============================================================================== -->
<template>
  <section class="page blog">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="data">
          <h1>{{ data.name }}</h1>
          <MDC :value="data.body" tag="article" />
        </div>
      </div>
      <div class="row" v-if="blogs" v-for="blog in blogs">
        <NuxtLink :to="'/blog/' + blog.slug" class="post">
          <div class="twelve columns">
            <h3>{{ blog.title }}</h3>
            <div class="post__subhead">
              <div class="post__date">{{ usePostDate(blog.created_at) }}</div>
              <div class="post__time">
                {{ calcReadingTime(blog.body) }} minute read
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
import transitionConfig from '../helpers/transitionConfig';

const route = useRoute();
const { data } = await useFetch(`/api/pages?slug=${route.name}`);
const { data: blogs } = await useFetch('/api/blogs');

useHead(() => {
  return useMetaData(route, data.value);
});

definePageMeta({
  pageTransition: transitionConfig,
});
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
