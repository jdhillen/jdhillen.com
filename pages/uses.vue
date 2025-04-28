<!--|== Template =============================================================================== -->
<template>
  <div v-if="data" class="uses">
    <h1>{{ data.name }}</h1>
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
  .uses {
  }
</style>