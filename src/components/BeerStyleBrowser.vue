<template>
  <div id="beer-style-browser">
    <div class="col s8">
      <h2>Browse Beer Styles</h2>
      <p class="flow-text">This is a rehashing of beer style 2017 guidelines published by the Brewer's Association. The original data can be found <a href="https://www.brewersassociation.org/resources/brewers-association-beer-style-guidelines/" target="_blank">here</a>.  The list of styles is limited to those of historical or commercial significance. For this reason it is not representative of all styles currently brewed.</p>
      <p class="flow-text">For each style there is a description of its characteristics.  They are organized into: color, clarity, percieved malt aroma and flavor, percieved hop aroma and flavor, percieved bitterness, fermentation characteristics, body, and any additional notes.</p>
      <p class="flow-text">Perform a search on categories, types, and styles using the search field. Browse by category, type and style using the dropdown menus.</p>
    </div>
    <selection-panel
      v-on:barselection="onSelection"
      v-on:searchquery="onSearch"
      :beerData="beerData">
    </selection-panel>
    <hr/>
    <div class="row">
      <div ref="search-params-text" class="col s6"></div>
      <div ref="match-quantity-text" class="col s6 right"></div>
    </div>
    <beer-style-info-list
      v-bind:beerStyleList="filteredBeerData">
    </beer-style-info-list>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'beer-style-browser',
  props: {
    beerData: {
      type: Array,
      default: []
    }
  },
  data: function () {
    return {
      filteredBeerData: []
    }
  },
  methods: {
    onSelection: function (arg0, arg1, arg2) {
      let searchParamsText = this.$refs['search-params-text']
      searchParamsText.innerHTML = arg0 + (arg1 === '' ? '' : ' / ') + arg1 + (arg2 === '' ? '' : ' / ') + arg2

      this.filteredBeerData = this.beerData.filter(function (element) {
        if (arg0 === '' && arg1 === '' && arg2 === '') {
          return true
        } else if (arg1 === '' && arg2 === '') {
          return element.cat === arg0
        } else if (arg2 === '') {
          return element.cat === arg0 && element.type === arg1
        } else {
          return element.cat === arg0 && element.type === arg1 && element.style === arg2
        }
      })

      this.setMatchQuantity(this.filteredBeerData.length)
    },
    onSearch: debounce(
      function (query) {
        let searchParamsText = this.$refs['search-params-text']
        searchParamsText.innerHTML = 'Query: ' + query

        this.filteredBeerData = this.beerData.filter(
          function (element) {
            return element.cat.toLowerCase().indexOf(query.toLowerCase()) > -1 || element.type.toLowerCase().indexOf(query.toLowerCase()) > -1 || element.style.toLowerCase().indexOf(query.toLowerCase()) > -1
          }
        )

        this.setMatchQuantity(this.filteredBeerData.length)
      },
    500),
    setMatchQuantity: function (n) {
      let matchQauntityText = this.$refs['match-quantity-text']
      if (n === 0) {
        matchQauntityText.innerHTML = 'No matches'
      } else if (n === 1) {
        matchQauntityText.innerHTML = n.toString() + ' match'
      } else {
        matchQauntityText.innerHTML = n.toString() + ' matches'
      }
    }
  },
  mounted: function () {
    this.filteredBeerData = this.beerData
  }
}
</script>

<style scoped>
  hr{
    margin-top: 40px;
    margin-bottom: 40px;
    border-style: solid;
    border-width: 1px;
  }
  .right{
    text-align: right;
  }
</style>
