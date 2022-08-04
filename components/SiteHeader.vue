<!--|== Template =============================================================================== -->
<template>
  <nav id="nav" class="nav">
    <div class="nav__main">
      <div class="nav__logo">
        <NuxtLink to="/">
          <div class="nav__logo--img"></div>
        </NuxtLink>
      </div>
      <div class="nav__desktop">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/uses">Uses</NuxtLink>
      </div>
    </div>
    <Hamburger ref="hamburger" class="nav__ham" @click.native="toggleMobileNav"/>
    <div ref="mobileNav" class="nav__mobile bokeh" :class="{ active: isActive }">
      <NuxtLink to="/about" @click.native="toggleMobileNav">About</NuxtLink>
      <NuxtLink to="/uses" @click.native="toggleMobileNav">Uses</NuxtLink>
    </div>
  </nav>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const isActive = ref(false);
const hamburger = ref(null);

function toggleMobileNav() {
  isActive.value = !isActive.value
  hamburger.value.toggleHamburger();
};

function windowResized() {
  if (window.innerWidth > 750 && isActive.value === true) {
    toggleMobileNav();
  }
};

onMounted(() => {
  window.addEventListener("resize", windowResized);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.nav {
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  background-color: black(0.7);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__main {
    position: relative;
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    margin: 0 10px;
  }

  &__logo {
    width: 30px;
    height: 30px;
    position: absolute;
    top: -5px;
    left: 0;

    &--img {
      width: 30px;
      height: 30px;
      background-image: url('@/assets/img/logos/square.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      filter: drop-shadow(2px 2px 3px black(0.2));
    }
  }

  &__desktop {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 750px) {
      visibility: hidden;
      display: none;
    }

    a {
      font-family: 'Open Sans Regular';
      color: $white;
      text-transform: uppercase;
      padding: 0 10px;
    }
  }

  &__ham {
    z-index: 100;

    @media (min-width: 750px) {
      visibility: hidden;
    }
  }

  &__mobile {
    display: flex;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black(0.5);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 250ms ease-in-out;
    z-index: 90;

    @media (min-width: 750px) {
      visibility: hidden;
      opacity: 0;
    }
    &.active {
      visibility: visible;
      opacity: 1;

      @media (min-width: 750px) {
        visibility: hidden;
        opacity: 0;
      }
    }

    a {
      color: $white;
      text-transform: uppercase;
      font-size: 2.5rem;
      line-height: 2.5rem;
      font-family: 'Open Sans Bold';
      padding: 5px 0;
    }
  }
}
</style>
