<!--|== Template =============================================================================== -->
<template>
  <section class="page home">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <ContentRenderer :value="parsedMarkdown" v-bind="$attrs" />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import markdownParser from '@nuxt/content/transformers/markdown'
import defaultPageTransition from '../composables/transitions/defaultPageTransition';

const route = useRoute();
const client = useSupabaseClient();

const { data } = await useAsyncData('Pages', async () => {
  const { data } = await client.from('Pages').select().eq('slug', 'index');
  return data;
});

const { body, meta_title, meta_description, meta_image } = data.value[0];

let parsedMarkdown = await markdownParser.parse(null, body);

const meta = {
  title: meta_title,
  desc: meta_description,
  img: meta_image
}

const metaData = useMetaData(route, meta);
useHead(metaData);

definePageMeta({
  pageTransition: defaultPageTransition,
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {
}
</style>
