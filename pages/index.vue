<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {

  name: "index-page",

  props: {},

  components: {},

  head() {
    return {
      title: 'J.D. Hillen - Home',
      meta: [
        { name: 'description', content: 'This is the description for the Home page' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://jdhillen.com' },
        { name: 'og:title', content: 'J.D. Hillen - Interactive Developer' },
        { name: 'og:description', content: 'This is the description for the Home page' },
        { name: 'og:image', content: 'https://via.placeholder.com/1500x780' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://jdhillen.com' },
        { name: 'twitter:title', content: 'J.D. Hillen - Interactive Developer' },
        { name: 'twitter:description', content: 'This is the description for the Home page' },
        { name: 'twitter:image', content: 'https://via.placeholder.com/1500x780' }
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