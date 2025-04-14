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
                />
              </li>
              <li v-if="contact">
                <NuxtLink
                  :to="'mailto:' + contact.email + '?subject=Hello'"
                  class="icon icon__social icon__email"
                  aria-label="Email Me"
                />
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
              />
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
  const { data: social } = await useFetch('/api/socials');
  const { data: contact } = await useFetch('/api/profiles');
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .footer {
    width: 100%;
    text-align: center;

    &__social {
      padding: 1rem 0;
      text-align: center;
      background-color: rgb(0 0 0 / 70%);

      ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0 auto;
        list-style-type: none;

        li {
          display: flex;
          margin: 10px;

          a {
            width: 30px;
            height: 30px;
            color: rgb(255 255 255 / 75%);
            transition: 300ms color;

            &:hover {
              color: $white;
            }
          }
        }
      }
    }

    &__copyright {
      padding: 25px 0;
      text-align: center;
      background-color: rgb(0 0 0 / 80%);

      &--txt {
        font-family: 'Open Sans Light', sans-serif;
        font-size: 8px;
        color: $white;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
  }
</style>
