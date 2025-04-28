<!--|== Template =============================================================================== -->
<template>
  <div v-if="data">
    <h1>{{ data.name }}</h1>
    <MDC
      :value="data.body"
      tag="article"
    />
    <div
      class="row"
      v-for="blog in blogs"
    >
      <NuxtLink
        :to="'/blog/' + blog.slug"
        class="post"
      >
        <div class="twelve columns">
          <h3>{{ blog.title }}</h3>
          <div class="post__subhead">
            <div class="post__date">{{ usePostDate(blog.created_at) }}</div>
            <div class="post__time">{{ calcReadingTime(blog.body) }} minute read</div>
          </div>
          <p>{{ blog.description }}</p>
          <hr />
        </div>
      </NuxtLink>
    </div>
  </div>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  definePageMeta({
    layout: 'default-page'
  });

  const { data, list: blogs } = usePageSetup({
    fetchList: true,
    listEndpoint: 'blogs'
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
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
