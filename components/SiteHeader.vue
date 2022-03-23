<!--|== Template =============================================================================== -->
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

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
        <NuxtLink to="/work">Work</NuxtLink>
      </div>
    </div>
    <Hamburger ref="hamburger" class="nav__ham" @click.native="toggleNav()" />
    <div ref="mobileNav" class="nav__mobile bokeh">
      <NuxtLink to="/about" @click.native="toggleNav()">About</NuxtLink>
      <NuxtLink to="/uses" @click.native="toggleNav()">Uses</NuxtLink>
      <NuxtLink to="/work" @click.native="toggleNav()">Work</NuxtLink>
    </div>
  </nav>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import Hamburger from '@/components/Hamburger.vue';

export default {
  name: 'site-header',

  props: {},

  components: {
    Hamburger
  },

  data() {
    return {
      toggle: false
    };
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {},

  methods: {
    toggleNav() {
      this.$refs.mobileNav.classList.toggle('active');
      this.$refs.hamburger.toggle();
    }
  },

  watch: {}
};
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
      background-image: url('./assets/img/logos/square.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      filter: drop-shadow(2px 2px 3px black(0.2));
    }
  }

  &__desktop {
    flex: 1;
    text-align: right;

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
