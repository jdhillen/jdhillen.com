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
// import Meta from '@/mixins/Meta';

const { data } = await useFetch(`/pages/?slug=${route.name}`)

const pageName = 'About';
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.about {
}
</style>
