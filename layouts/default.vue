<template>
  <div>
    <AppHeader />
    <nuxt />
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

<style lang="scss">

</style>
