<!--|== Template =============================================================================== -->
<template>
  <button
    ref="ham"
    type="button"
    class="ham"
    aria-label="Navigation Menu"
    :class="{active: isActive}"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const isActive = ref(false);

function toggleHamburger() {
  isActive.value = !isActive.value;
};

defineExpose({ toggleHamburger });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.ham {
  position: relative;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border: none;
  margin: 0;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 2px;
    transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -webkit-transition: all 250ms ease-in-out;
    background: $white;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 70%;
    }
  }

  &.active {
    span:nth-child(1) {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
