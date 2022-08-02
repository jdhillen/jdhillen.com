<!--|== Template =============================================================================== -->
<template>
  <main class="app">
    <SiteHeader/>
    <NuxtPage />
    <SiteFooter/>
  </main>
</template>

<!--|== Scripts ================================================================================ -->
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>