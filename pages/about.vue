<!--|== Template =============================================================================== -->
<template>
  <section class="page about">
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
  name: 'About',
  desc: data.value?.[0].description,
  img: data.value?.[0].image
}
const metaData = getMetaData(meta);
useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.about {}
</style>
