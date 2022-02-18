<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">
    <div class="footer__copyright">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <div class="footer__copyright--txt">
              Made with
              <a href="https://vuejs.org/" target="_blank">
                <div class="icon icon__vue"></div>
              </a>
              by J.D. Hillen
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
}
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>

.footer {
  width: 100%;
  text-align: center;

  &__social {
    text-align: center;
    padding: 10px 0;
    background-color: black(0.7);

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        padding: 0 10px;
        display: inline;

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