<!--|== Template =============================================================================== -->
<template>
  <section class="page loading">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
// No props or logic needed for this component
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.loading {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(var(--myBlur)); /* For GSAP transitions */
  opacity: 1;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  
  h1 {
    text-align: center;
    animation: pulse 1.5s infinite ease-in-out;
  }
}

@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
</style>