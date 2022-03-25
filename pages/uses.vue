<!--|== Template =============================================================================== -->
<template>
  <section class="page work">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Uses</h1>
          <p>
            I get asked by friends and colleagues what applications do you use. So here it is! A breakdown
            of all the software and gear that I use to manage the work that I do.
          </p>
          <p>Shout out to Wes Bos for the inspiration. <a href="https://wesbos.com/uses" target="_blank" rel="noopener noreferrer">I stole your idea.</a> Sue me.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import Meta from '@/mixins/Meta';

export default {
  async asyncData({ route, $axios }) {
    let response = await $axios.$get(`/pages/?slug=${route.name}`);
    let data = response[0];
    return { data };
  },

  name: "uses-page",

  props: {},

  components: {},

  mixins: [Meta],

  data() {
    return {
      pageName: 'Uses',
    };
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
.uses {
}
</style>
