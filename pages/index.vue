<!--|== Template =============================================================================== -->
<template>
  <div v-if="data">
    <MDC
      :value="data.body"
      tag="article"
    />
  </div>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  definePageMeta({
    layout: 'default-page'
  });

  const { data } = usePageSetup();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .index {
  }
</style>
