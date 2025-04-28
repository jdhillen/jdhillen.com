<!--|== Template =============================================================================== -->
<template>
  <div v-if="data" class="post">
    <h1>{{ data.title }}</h1>
    <div class="post__subhead">
      <div class="post__date">{{ usePostDate(data.created_at) }}</div>
      <div class="post__time">{{ calcReadingTime(data.body) }} minute read</div>
    </div>
    <NuxtImg
      preload
      class="post__image"
      :src="data.meta_image"
      :alt="data.meta_title"
    />
    <MDC
      :value="data.body"
      tag="article"
    />
  </div>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  definePageMeta({
    layout: 'default-page'
  });

  const { data } = usePageSetup({
    apiEndpoint: 'blogs',
    useParams: true
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
      margin-bottom: 2rem;
      font-style: italic;
    }

    &__image {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
      background-color: rgb(0 0 0 / 80%);
    }
  }
</style>
