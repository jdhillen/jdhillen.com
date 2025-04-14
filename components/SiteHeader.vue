<!--|== Template =============================================================================== -->
<template>
  <nav
    id="nav"
    class="nav"
  >
    <div class="nav__main">
      <div class="nav__logo">
        <NuxtLink
          to="/"
          tabindex="0"
          class="nav__logo--link"
          aria-label="Home"
        >
          <img
            class="nav__logo--img"
            src="@/assets/img/logos/square.svg"
            alt="Home"
          />
        </NuxtLink>
      </div>
      <div class="nav__desktop">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/talks">Talks</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/uses">Uses</NuxtLink>
      </div>
    </div>
    <Hamburger
      ref="hamburger"
      class="nav__ham"
      @click.native="toggleMobileNav"
    />
    <div
      ref="mobileNav"
      class="nav__mobile bokeh"
      :class="{ active: isActive }"
    >
      <NuxtLink
        to="/about"
        @click.native="toggleMobileNav"
        >About</NuxtLink
      >
      <NuxtLink
        to="/talks"
        @click.native="toggleMobileNav"
        >Talks</NuxtLink
      >
      <NuxtLink
        to="/blog"
        @click.native="toggleMobileNav"
        >Blog</NuxtLink
      >
      <NuxtLink
        to="/uses"
        @click.native="toggleMobileNav"
        >Uses</NuxtLink
      >
    </div>
  </nav>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const isActive = ref(false);
  const hamburger = ref(null);

  function toggleMobileNav() {
    isActive.value = !isActive.value;
    hamburger.value.toggleHamburger();
  }

  function windowResized() {
    if (window.innerWidth > 750 && isActive.value === true) {
      toggleMobileNav();
    }
  }

  onMounted(() => {
    window.addEventListener('resize', windowResized);
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    background-color: rgb(0 0 0 / 70%);

    &__main {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 0 10px;
    }

    &__logo {
      &--link {
        display: block;
        width: 30px;
        height: 30px;
      }

      &--img {
        width: 30px;
        height: 30px;
      }
    }

    &__desktop {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      @media (width <= 750px) {
        display: none;
        visibility: hidden;
      }

      a {
        padding: 0 1.5rem;
        font-family: 'Open Sans Regular', sans-serif;
        color: $white;
        text-transform: uppercase;
        text-decoration: none;
      }
    }

    &__ham {
      z-index: 100;

      @include breakpoint('sm') {
        display: none;
        visibility: hidden;
      }
    }

    &__mobile {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 90;
      display: flex;
      visibility: hidden;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgb(0 0 0 / 50%);
      opacity: 0;
      transition: all 250ms ease-in-out;

      @include breakpoint('sm') {
        visibility: hidden;
        opacity: 0;
      }

      &.active {
        visibility: visible;
        opacity: 1;

        @include breakpoint('sm') {
          visibility: hidden;
          opacity: 0;
        }
      }

      a {
        padding: 5px 0;
        font-family: 'Open Sans Bold', sans-serif;
        font-size: 2.5rem;
        line-height: 2.5rem;
        color: $white;
        text-transform: uppercase;
        text-decoration: none;
        filter: drop-shadow(1px 2px 5px rgb(0 0 0 / 100%));
      }
    }
  }
</style>
