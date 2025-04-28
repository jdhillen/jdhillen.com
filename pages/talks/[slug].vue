<!--|== Template =============================================================================== -->
<template>
  <div v-if="data" class="talk">
    <h1>{{ data.name }}</h1>
    <NuxtImg
      preload
      class="talk__image"
      :src="data.thumbnail"
      :alt="data.name"
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
    apiEndpoint: 'talks',
    useParams: true
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .talk {
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
