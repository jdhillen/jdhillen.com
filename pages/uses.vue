<!--|== Template =============================================================================== -->
<template>
  <section class="page uses">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="data">
          <h1>{{ data[0].name }}</h1>
          <article v-html="data[0].body_rendered"/>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import transitionConfig from '../helpers/transitionConfig';

const { data } = await usePageSetup();

definePageMeta({
  pageTransition: transitionConfig,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.uses {}
</style>
