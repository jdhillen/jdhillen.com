<!--|== Template =============================================================================== -->
<template>
  <section class="page talk">
    <div class="container" v-if="data">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ data.name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <NuxtImg
            preload
            class="talk__image"
            :src="data.thumbnail"
            :alt="data.name"
          />
          <MDC :value="data.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
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
