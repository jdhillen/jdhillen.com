<!--|== Template =============================================================================== -->
<template>
  <section
    class="page"
    v-if="data && talks"
  >
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ data.name }}</h1>
          <MDC
            :value="data.body"
            tag="article"
          />
        </div>
      </div>
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
  </section>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
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
