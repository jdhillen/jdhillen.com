<!--|== Template =============================================================================== -->
<template>
  <main class="app">
    <SiteHeader/>
    <Nuxt/>
    <SiteFooter/>
  </main>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
  layout: "default",

  props: {},

  components: { SiteHeader, SiteFooter },

  data() {
    return {};
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},

  computed: {},

  methods: {},

  watch: {}

};


</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>