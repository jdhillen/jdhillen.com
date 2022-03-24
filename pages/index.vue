<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-html="data.body_rendered">
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {

  async asyncData({ $axios }) {
    let response = await $axios.$get('https://www.jdhillen.io/api/pages/?slug=home');
    let data = response[0];
    return { data };
  },

  name: "index-page",

  props: {},

  components: {},

  head() {
    return {
      title: `J.D. Hillen - ${this.data.name}`,
      meta: [
        { name: 'description', content: this.data.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://jdhillen.com' },
        { name: 'og:title', content: `J.D. Hillen - ${this.data.name}` },
        { name: 'og:description', content: this.data.description },
        { name: 'og:image', content: this.data.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://jdhillen.com' },
        { name: 'twitter:title', content: `J.D. Hillen - ${this.data.name}` },
        { name: 'twitter:description', content: this.data.description },
        { name: 'twitter:image', content: this.data.image }
      ]
    }
  },

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
.home {

}

</style>