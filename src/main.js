// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BeerData from './beer_data'
import BeerStyleInfoBox from './components/BeerStyleInfoBox'
import BeerStyleInfoList from './components/BeerStyleInfoList'
import SelectionPanel from './components/SelectionPanel'

Vue.config.productionTip = false

var beerDataResource = new BeerData()

Vue.component('beer-style-info-box', BeerStyleInfoBox)
Vue.component('beer-style-info-list', BeerStyleInfoList)
Vue.component('selection-panel', SelectionPanel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App :beerData="beerData" />',
  components: { App },
  data: {
    beerData: beerDataResource.data
  },
  beforeCreate: function () { },
  created: function () { },
  beforeMount: function () { },
  mounted: function () { },
  beforeUpdate: function () { },
  updated: function () { },
  beforeDestroy: function () { },
  destroyed: function () { }
})
