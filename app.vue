<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SkipToMain/>
    <SiteHeader/>
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.app {
  flex: 1;
  height: auto !important;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>