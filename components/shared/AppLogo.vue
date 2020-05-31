<template>
  <div class="appLogo">
    <img
      :alt="alt"
      :src="src"
    >
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  data () {
    return {
      alt: 'NUXT',
      src: require('../../assets/img/nuxt-square.svg')
    };
  }
};
</script>

<style lang="stylus">
.appLogo {
  img {
    width: 100px;
  }
}
</style>
