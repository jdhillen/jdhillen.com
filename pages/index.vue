<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="content" v-html="content.body_rendered"/>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute()
const { apiBase } = useRuntimeConfig()
const { data } = await useFetch(`${apiBase}/pages/?slug=${route.name}`);
const content = data.value[0];
const meta = {
  name: 'Home',
  desc: content.description,
  img: content.image
}
const metaData = getMetaData(meta);
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