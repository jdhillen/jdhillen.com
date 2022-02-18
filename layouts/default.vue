<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SiteHeader/>
    <Nuxt/>
    <SiteFooter/>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
export default {
    components: { SiteHeader, SiteFooter },
    layout: "default"
}
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>