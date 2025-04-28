<!--|== Template =============================================================================== -->
<template>
  <div class="loading">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  </div>
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
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(255 255 255 / 80%); /* Semi-transparent background */
    opacity: 1;
    filter: blur(var(--my-blur)); /* For GSAP transitions */

    h1 {
      text-align: center;
      animation: pulse 1.5s infinite ease-in-out;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0.5;
    }
  }
</style>
