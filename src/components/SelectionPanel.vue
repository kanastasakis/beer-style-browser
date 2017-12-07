<template>
<div>
  <div >
      <h5>Search for a style:</h5>    
    <input v-model="searchQuery" placeholder="search">
  </div>
      <h5>Select style by category:</h5>
      <select ref="sel-maj-style" v-model="selectedCategory" v-on:change="onMajorStyleSelection" class="browser-default">
        <option value="">Select Category</option>
        <option v-for="item in categories">{{item}}</option>
      </select>
      <select ref="sel-min-style" disabled v-model="selectedType" v-on:change="onMinorStyleSelection" class="browser-default">
        <option value="">Select Type</option>
        <option v-for="item in types">{{item}}</option>
      </select>
      <select ref="sel-beer-style" disabled v-model="selectedStyle" v-on:change="onBeerStyleSelection" class="browser-default">
        <option value="">Select Style</option>
        <option v-for="item in beerstyles">{{item}}</option>
      </select>
  </div>
</div>
</template>

<script>
export default {
  name: 'SelectionPanel',
  props: {
    beerData: {
      type: Array,
      default: []
    }
  },
  data: function () {
    return {
      selectedCategory: '',
      selectedType: '',
      selectedStyle: '',
      searchQuery: ''
    }
  },
  watch: {
    searchQuery: function (val) {
      this.$emit('searchquery', val)
    }
  },
  computed: {
    categories: function () {
      if (this.beerData != null) {
        let temp = new Set()
        this.beerData.forEach(function (element) { temp.add(element.cat) })
        return Array.from(temp)
      } else {
        return []
      }
    },
    types: function () {
      if (this.beerData != null) {
        let temp = new Set()
        let selectedCategory = this.selectedCategory
        this.beerData.forEach(
          function (element) {
            if (element.cat === selectedCategory) {
              temp.add(element.type)
            }
          })
        return Array.from(temp)
      } else {
        return []
      }
    },
    beerstyles: function () {
      if (this.beerData != null) {
        let selectedCategory = this.selectedCategory
        let selectedType = this.selectedType
        let filtered = this.beerData.filter(function (element) {
          return element.cat === selectedCategory && element.type === selectedType
        })
        let mapped = filtered.map(function (element) {
          return element.style
        })
        return mapped
      } else {
        return []
      }
    }
  },
  methods: {
    onMajorStyleSelection: function () {
      this.selectedType = ''
      this.selectedStyle = ''
      this.$refs['sel-min-style'].disabled = this.selectedCategory === ''
      this.$refs['sel-beer-style'].disabled = true
      this.$emit('barselection', this.selectedCategory, this.selectedType, this.selectedStyle)
    },
    onMinorStyleSelection: function () {
      this.selectedStyle = ''
      this.$refs['sel-beer-style'].disabled = false
      this.$emit('barselection', this.selectedCategory, this.selectedType, this.selectedStyle)
    },
    onBeerStyleSelection: function () {
      this.$emit('barselection', this.selectedCategory, this.selectedType, this.selectedStyle)
    }
  }
}
</script>