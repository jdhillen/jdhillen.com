<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="data" v-html="data[0].body_rendered"/>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute()
const { apiBase } = useRuntimeConfig()
const { data } = await useFetch(`${apiBase}/pages/?slug=${route.name}`);
const meta = {
  name: 'Home',
  desc: data.value?.[0].description,
  img: data.value?.[0].image
}
const metaData = getMetaData(meta);
useHead(metaData);

// onMounted(() => {
//   hljs.highlightAll();
// });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {}
</style>