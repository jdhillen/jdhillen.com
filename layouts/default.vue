<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SiteHeader/>
    <main>
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
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>