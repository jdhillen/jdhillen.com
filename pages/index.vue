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
<script setup>
// import Meta from '@/mixins/Meta';

// async asyncData({ route, $axios }) {
//   let response = await $axios.$get(`/pages/?slug=${route.name}`);
//   let data = response[0];
//   return { data };
// },

const pageName = 'Home';
const data = {
  body_rendered: 'Home',
}
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {

}

</style>