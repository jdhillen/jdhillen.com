<!--|== Template =============================================================================== -->
<template>
  <section class="page post">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ blog.title }}</h1>
          <div class="post__subhead">
            <div class="post__date">{{ usePostDate(blog.created_at) }}</div>
            <div class="post__time">
              {{ calcReadingTime(blog.body) }} minute read
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <img
            class="post__image"
            :src="blog.meta_image"
            :alt="blog.meta_title"
          />
          <MDC :value="blog.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import transitionConfig from '../helpers/transitionConfig';

const client = useSupabaseClient();
const route = useRoute();

const { data: blog } = await useAsyncData('blog', async () => {
  const { data } = await client.from('blog').select().eq('slug', route.params.slug);
  return data[0];
});

useHead(() => {
  const meta = {
    title: blog.value.meta_title,
    desc: blog.value.meta_description,
    img: blog.value.meta_image
  };
  return useMetaData(route, meta);
});

definePageMeta({
  pageTransition: transitionConfig,
});
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
