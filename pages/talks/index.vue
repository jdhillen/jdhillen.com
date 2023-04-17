<!--|== Template =============================================================================== -->
<template>
  <section class="page">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page">
          <h1>{{ page.name }}</h1>
          <article v-html="page.body_rendered"/>
        </div>
      </div>
      <div class="talks">
        <TalkCard
          v-if="talks"
          v-for="talk in talks"
          :slug="talk.slug"
          :name="talk.name"
          :description="talk.description"
          :thumbnail="talk.thumbnail"
        />
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const route = useRoute();
const { API_BASE } = useRuntimeConfig().public;
const [{ data }, { data: talks }] = await Promise.all([
  useFetch(`${API_BASE}/pages/?slug=${route.name}`),
  useFetch(`${API_BASE}/talks/talk/`)
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
.talks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
