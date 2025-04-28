<!--|== Template =============================================================================== -->
<template>
  <div :class="['page', $route.name]">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.page {
  flex: auto;
  padding: 3rem 0;
  filter: blur(var(--my-blur));
}
</style>