<template>
  <div class="container m-auto ">
    <AppHeader />
    <main>
      <nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/shared/AppHeader';
import AppFooter from '@/components/shared/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="stylus">
body {
  @apply antialiased font-sans font-normal text-base text-black leading-normal relative

  main {
    @apply relative
    min-height 80vh
  }
}

h1 {
  @apply font-bold text-3xl text-center
}
</style>
