<!--|== Template =============================================================================== -->
<template>
  <a
    href="#main"
    class="skip-to-main-content-link"
    >Skip to main content</a
  >
</template>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
  .skip-to-main-content-link {
    position: absolute;
    left: -9999px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 15px;
    color: $white;
    background-color: $black;
    opacity: 0;

    &:focus {
      top: 0;
      left: 50px;
      opacity: 1;
    }
  }
</style>
