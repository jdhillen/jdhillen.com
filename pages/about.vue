<!--|== Template =============================================================================== -->
<template>
  <section class="page about">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="data">
          <h1>{{ data.name }}</h1>
          <MDC :value="data.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import transitionConfig from '../helpers/transitionConfig';

const route = useRoute();
const data = await usePageSetup(route.name);

useHead(() => {
  return useMetaData(route, data.value);
});

definePageMeta({
  pageTransition: transitionConfig,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.about {}
</style>
