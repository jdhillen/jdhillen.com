<!--|== Template =============================================================================== -->
<template>
  <section class="page">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page" v-html="page.body_rendered" />
      </div>
      <div class="row">
        <div class="tweleve columns talk">
          <template v-if="talks" v-for="talk in talks">
            <NuxtLink :to="'/talks/' + talk.slug" class="talk__link">
              <div class="talk__container">
                <img class="talk__image" :src="talk.thumbnail" :alt="talk.name">
                <h5 class="talk__headline">{{ talk.name }}</h5>
                <p class="talk__description">{{ talk.description }}</p>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute();
const { apiBase } = useRuntimeConfig();
const [{ data }, { data: talks }] = await Promise.all([
  useFetch(`${apiBase}/pages/?slug=${route.name}`),
  useFetch(`${apiBase}/talks/talk/`)
]);

if (!data.value || data.value == []) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

const page = data.value[0];

const meta = {
  title: page.meta_title,
  desc: page.meta_description,
  img: page.meta_image
};
const metaData = useMetaData(route, meta);
useHead(metaData);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.talk {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__link {
    @extend .box-shadow;
    color: #222;
    background-color: $white;
    padding: 1.5rem;
  }

  &__container {

  }

  &__image {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  &__headline {

  }

  &__description {
    font-style: italic;
    margin-bottom: 0;
  }
}
</style>
