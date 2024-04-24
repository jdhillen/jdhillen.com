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
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.app {
  flex: 1;
  height: auto !important;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>