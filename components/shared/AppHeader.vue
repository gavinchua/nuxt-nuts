<template>
  <header class="flex items-center appHeader">
    <Logo />
    <nav class="ml-auto">
      <nuxt-link :to="localePath('index')">
        {{ $t('home') }}
      </nuxt-link>
      <nuxt-link :to="localePath('about')">
        {{ $t('about') }}
      </nuxt-link>
      <nuxt-link
        v-for="(locale, i) in showLocales"
        :key="i"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
import Logo from './AppLogo.vue';

export default {
  name: 'AppHeader',
  components: {
    Logo
  },
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale);
    }
  }
};
</script>

<style lang="stylus">
header {
  nav {
    > a {
      @apply ml-4
    }
  }
}
</style>
