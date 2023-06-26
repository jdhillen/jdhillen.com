<!--|== Template =============================================================================== -->
<template>
  <a href="#main" class="skip-to-main-content-link">Skip to main content</a>
</template>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.skip-to-main-content-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background-color: $black;
  color: $white;
  opacity: 0;

  &:focus {
    left: 50px;
    top: 0;
    opacity: 1;
  }
}
</style>