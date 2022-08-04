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

const metaData = getMetaData('Home', data.value[0]);
console.log(metaData);
// useHead(metaData);

// onMounted(() => {
//   hljs.highlightAll();
// });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {}
</style>