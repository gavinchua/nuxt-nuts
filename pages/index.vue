<template>
  <section class="appHome">
    <h1 class="mb-5" v-text="$t('home')" />
    <div v-text="$t('homeContent')" />
  </section>
</template>

<script>
export default {
  name: 'AppHome',
  mounted () {
    console.log(this.$i18n.t('home'));
  },
  head: {
    title: 'home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'description'
      }
    ]
  }
};
</script>

<style lang="stylus">
</style>
