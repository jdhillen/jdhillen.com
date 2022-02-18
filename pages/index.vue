<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Home Page</h1>
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
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is the description for the Home page'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'jdhillen.com - Home'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'This is the description for the Home page'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://via.placeholder.com/1500x780'
        }
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