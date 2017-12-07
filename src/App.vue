<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <ul class="right hide-on-me-and-down">
          <li>
            <router-link to="/browse">Browse</router-link>
          </li>
          <li>
            <router-link to="/help">Help</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view v-bind:beerData="beerData" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    beerData: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0px;
}
</style>

<style scoped>
  nav {
    background-color: #915e3b;
  }
</style>
