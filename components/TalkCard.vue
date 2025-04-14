<!--|== Template =============================================================================== -->
<template>
  <NuxtLink
    :to="'/talks/' + props.slug"
    class="talk"
  >
    <NuxtImg
      preload
      class="talk__image"
      :src="props.thumbnail"
      :alt="props.name"
    />
    <h5 class="talk__headline">{{ props.name }}</h5>
    <p class="talk__description">{{ props.description }}</p>
  </NuxtLink>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  const props = defineProps({
    slug: {
      type: String,
      default: '',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: '',
      required: true
    },
    thumbnail: {
      type: String,
      default: '',
      required: true
    }
  });
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .talk {
    @extend .box-shadow;
    padding: 1.5rem;
    color: #222;
    text-decoration: none;
    background-color: $white;

    &__image {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }

    &__headline {
    }

    &__description {
      margin-bottom: 0;
      font-style: italic;
    }
  }
</style>
