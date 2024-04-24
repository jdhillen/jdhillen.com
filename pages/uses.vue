<!--|== Template =============================================================================== -->
<template>
  <section class="page uses">
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
import defaultPageTransition from '../composables/transitions/composable';

const route = useRoute();
const data = await usePageSetup(route.name);

useHead(() => {
  return useMetaData(route, data.value);
});

definePageMeta({
  pageTransition: defaultPageTransition,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.uses {}
</style>
