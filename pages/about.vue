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
const route = useRoute();
const { data } = await useFetch(`api/pages?slug=${route.name}`);

useHead(() => {
  const meta = {
    title: data.value.meta_title,
    desc: data.value.meta_description,
    img: data.value.meta_image
  };
  return useMetaData(route, meta);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.about {}
</style>
