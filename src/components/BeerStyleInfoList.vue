<template>
  <div>
    <beer-style-info-box 
      :key="obj.beerstyle" v-for="obj in beerStyleList" 
      v-bind:specs="obj.spec"
      v-bind:description="obj.desc"
      v-bind:category="obj.cat" 
      v-bind:type="obj.type" 
      v-bind:beerstyle="obj.style">
    </beer-style-info-box>
  </div>
</template>

<script>
export default {
  name: 'BeerStyleInfoList',
  props: {
    beerStyleList: {
      type: Array,
      default: []
    }
  }
}
</script>
