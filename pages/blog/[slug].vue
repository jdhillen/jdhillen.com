<!--|== Template =============================================================================== -->
<template>
  <section
    class="page post"
    v-if="data"
  >
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ data.title }}</h1>
          <div class="post__subhead">
            <div class="post__date">{{ usePostDate(data.created_at) }}</div>
            <div class="post__time">{{ calcReadingTime(data.body) }} minute read</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
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
      </div>
    </div>
  </section>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
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
