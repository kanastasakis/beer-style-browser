<template>
  <router-view v-bind:beerData="beerData"></router-view>
</template>

<script>
export default {
  name: 'app',
  props: {
    beerData: {
      type: Array,
      default: []
    }
  },
  mounted: function () {
    this.$router.push('browse')
  }
}
</script>

<style>
</style>
