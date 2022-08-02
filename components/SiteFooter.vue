<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <div class="footer__social">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <ul v-if="social">
              <li v-for="item in social">
                <a :href="item.url" target="_blank" :alt="item.name" class="icon icon__social" :class="['icon__' + item.icon]"></a>
              </li>
              <li v-if="contact">
                <a :href="'mailto:' + contact.email + '?subject=Hello'" class="icon icon__social icon__email"></a>
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
              <a href="https://nuxtjs.org" target="_blank" class="icon icon__nuxt"></a>
              by J.D. Hillen
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const { social } = await useFetch('https://www.jdhillen.io/api/links/social/');
console.log(social);
const { contact } = await useFetch('https://www.jdhillen.io/api/resume/contact/1/');
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>

.footer {
  width: 100%;
  text-align: center;

  &__social {
    text-align: center;
    padding: 25px 0;
    background-color: black(0.7);

    ul {
      max-width: 500px;
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

        @media screen and (max-width: 400px) {
          margin: 10px 20px;
        }

        a {
          color: white(0.75);
          transition: 300ms color;

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