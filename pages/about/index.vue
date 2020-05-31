<template>
  <section class="appAbout">
    <h1 class="mb-5" v-text="$t('about')" />
    <div v-text="$t('aboutContent')" />
  </section>
</template>

<script>
export default {
  name: 'AppAbout',
  head: {
    title: 'About page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'About page description'
      }
    ]
  }
};
</script>

<style lang="stylus">
</style>
