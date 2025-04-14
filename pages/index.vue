<!--|== Template =============================================================================== -->
<template>
  <section
    class="page home"
    v-if="data"
  >
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <MDC
            :value="data.body"
            tag="article"
          />
        </div>
      </div>
    </div>
  </section>
  <LoadingState v-else />
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const { data } = usePageSetup();
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .home {
  }
</style>
