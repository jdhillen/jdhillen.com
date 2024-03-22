<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <MDC :value="data.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import defaultPageTransition from '../composables/transitions/defaultPageTransition';

const route = useRoute();
const data = await usePageSetup();

useHead(() => {
  const meta = {
    title: data.value.meta_title,
    desc: data.value.meta_description,
    img: data.value.meta_image
  };
  return useMetaData(route, meta);
});

definePageMeta({
  pageTransition: defaultPageTransition,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {
}
</style>
