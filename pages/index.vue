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
 const { data } = await usePageSetup();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {}
</style>