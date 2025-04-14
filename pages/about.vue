<!--|== Template =============================================================================== -->
<template>
  <section
    class="page about"
    v-if="data"
  >
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ data.name }}</h1>
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
  .about {
  }
</style>
