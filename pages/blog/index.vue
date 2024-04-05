<!--|== Template =============================================================================== -->
<template>
  <section class="page blog">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page">
          <h1>{{ page.name }}</h1>
          <MDC :value="page.body" tag="article" />
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
import defaultPageTransition from '../../composables/transitions/defaultPageTransition';

const route = useRoute();
const client = useSupabaseClient();

const page = await usePageSetup();

useHead(() => {
  const meta = {
    title: page.value.meta_title,
    desc: page.value.meta_description,
    img: page.value.meta_image
  };
  return useMetaData(route, meta);
});

const { data: blogs } = await useAsyncData('blogs', async () => {
  const { data } = await client.from('blog').select('*').order('id', { ascending: false })
  return data;
});

definePageMeta({
  pageTransition: defaultPageTransition,
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
