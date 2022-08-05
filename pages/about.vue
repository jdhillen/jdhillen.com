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
import { createError } from 'h3';
const route = useRoute()
const { apiBase } = useRuntimeConfig()
const { data } = await useFetch(`${apiBase}/pages/?slug=${route.name}`);
if (!data.value || data.value.length <= 0) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
} else {
  const meta = {
    name: 'About',
    desc: data.value?.[0].description,
    img: data.value?.[0].image
  }
  const metaData = getMetaData(meta);
  useHead(metaData);
}
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.about {}
</style>
