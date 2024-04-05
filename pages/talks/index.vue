<!--|== Template =============================================================================== -->
<template>
  <section class="page">
    <div class="container">
      <div class="row">
        <div class="twelve columns" v-if="page">
          <h1>{{ page.name }}</h1>
          <MDC :value="page.body" tag="article" />
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
const client = useSupabaseClient();
const route = useRoute();
const page = await usePageSetup(route.name);

useHead(() => {
  const meta = {
    title: page.value.meta_title,
    desc: page.value.meta_description,
    img: page.value.meta_image
  };
  return useMetaData(route, meta);
});

const { data: talks } = await useAsyncData('talks', async () => {
  const { data } = await client.from('talks')
    .select('*')
    .eq('enabled', 'TRUE')
    .order('id', { ascending: true })
  return data;
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.talks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @include breakpoint('sm') {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
