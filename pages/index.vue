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
const route = useRoute()
const config = useRuntimeConfig()
const { data } = await useFetch(() => `pages/?slug=${route.name}`, { baseURL: config.apiBase });
data.value = data.value[0];

const pageName = 'Home';

//setHead(pageName, data);

</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {

}

</style>