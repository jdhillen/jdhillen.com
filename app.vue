<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SkipToMain />
    <SiteHeader />
    <main id="main">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <SiteFooter />
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  // All transition logic is now in plugins/transitions.js
  // No need to import or initialize transitions here
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
  .app {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: auto !important;
    min-height: 100%;
  }
</style>
