<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SkipToMain/>
    <SiteHeader/>
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter/>
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
  flex: 1;
  height: auto !important;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>