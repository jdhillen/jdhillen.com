<!--|== Template =============================================================================== -->
<template>
  <main class="app">
    <SiteHeader/>
      <section class="page fourOhFour">
        <div class="container">
          <div class="row">
            <div class="twelve columns">
              <h1>{{ error.statusCode }}</h1>
              <button @click="handleError">Return Home</button>
            </div>
          </div>
        </div>
      </section>
    <SiteFooter />
  </main>
</template>


<!--|== Scripts ================================================================================ -->
<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>


<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>