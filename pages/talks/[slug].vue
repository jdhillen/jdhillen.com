<!--|== Template =============================================================================== -->
<template>
  <section class="page talk">
    <div class="container" v-if="talk">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ talk.name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <img
            class="talk__image"
            :src="talk.thumbnail"
            :alt="talk.name"
          />
          <MDC :value="talk.body" tag="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import defaultPageTransition from '../../composables/transitions/defaultPageTransition';

const route = useRoute();
const client = useSupabaseClient();

const { data: talk } = await useAsyncData('talk', async () => {
  const { data } = await client.from('talks')
    .select('*, videos:talks_videos(title, date, url)')
    .eq('slug', route.params.slug)
    .order('date', { referencedTable: 'talks_videos', ascending: true });
  return data[0];
});

useHead(() => {
  const meta = {
    title: talk.value.meta_title,
    desc: talk.value.meta_description,
    img: talk.value.meta_image
  };
  return useMetaData(route, meta);
});

definePageMeta({
  pageTransition: defaultPageTransition,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.talk {
  &__subhead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__date,
  &__time {
    font-style: italic;
    margin-bottom: 2rem;
  }
  &__image {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    background-color: black(0.8);
  }
}
</style>
