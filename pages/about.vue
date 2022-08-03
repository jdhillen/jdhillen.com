<!--|== Template =============================================================================== -->
<template>
  <section class="page about">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-html="data.body_rendered"/>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const { data } = await useFetch(() => `pages/?slug=${route.name}`, { baseURL: config.apiBase });
data.value = data.value[0];

const metaData = getMetaData('Home', data.value);
useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.about {
}
</style>
