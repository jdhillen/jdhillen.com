<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-html="data.body_rendered"/>
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

  name: "index-page",

  props: {},

  components: {},

  mixins: [Meta],

  data() {
    return {
      pageName: 'Home',
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
.home {

}

</style>