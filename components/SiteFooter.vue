<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <div class="footer__social">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <ul v-if="social">
              <li v-for="item in social">
                <NuxtLink 
                  :to="item.url"
                  target="_blank"
                  :alt="item.name"
                  :aria-label="item.name"
                  class="icon icon__social"
                  :class="['icon__' + item.icon]"
                >
                </NuxtLink>
              </li>
              <li v-if="contact">
                <NuxtLink 
                  :to="'mailto:' + contact.email + '?subject=Hello'"
                  class="icon icon__social icon__email"
                  aria-label="Email Me"
                >
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <div class="footer__copyright--txt">
              Made with
              <NuxtLink
                to="https://nuxtjs.org"
                target="_blank"
                class="icon icon__nuxt"
                aria-label="Nuxt.js"
              >
              </NuxtLink>
              by {{ contact.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const { API_BASE } = useRuntimeConfig().public;
const { data: social } = await useFetch(`${API_BASE}/links/social/`);
const { data: contact } = await useFetch(`${API_BASE}/resume/contact/1/`);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>

.footer {
  width: 100%;
  text-align: center;

  &__social {
    text-align: center;
    padding: 1rem 0;
    background-color: black(0.7);

    ul {
      margin: 0 auto;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      li {
        display: flex;
        margin: 10px;

        a {
          color: white(0.75);
          transition: 300ms color;
          width: 30px;
          height: 30px;

          &:hover {
            color: $white;
          }
        }
      }
    }
  }

  &__copyright {
    text-align: center;
    padding: 25px 0;
    background-color: black(0.8);

    &--txt {
      font-family: 'Open Sans Light';
      font-size: 8px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $white;
    }
  }
}
</style>