<!--|== Template =============================================================================== -->
<template>
  <div v-if="data">
    <h1>{{ data.name }}</h1>
    <MDC
      :value="data.body"
      tag="article"
    />
    <div class="talks">
      <TalkCard
        v-for="talk in talks"
        :slug="talk.slug"
        :name="talk.name"
        :description="talk.description"
        :thumbnail="talk.thumbnail"
      />
    </div>
  </div>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  definePageMeta({
    layout: 'default-page'
  });

  const { data, list: talks } = usePageSetup({
    fetchList: true,
    listEndpoint: 'talks'
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .talks {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    grid-gap: 2rem;

    @include breakpoint('sm') {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
