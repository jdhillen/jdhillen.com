<!--|== Template =============================================================================== -->
<template>
  <section class="page work">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Work</h1>
        </div>
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

const pageName = 'Work';
const data = {
  body_rendered: 'Test',
}
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.work {
}
</style>
