<template>
  <div class="col s12">
    <div class="content-wrapper">
      <img src="./../assets/img/beer-512.png" class="responsive-img"/>
      <h5>Looks like something went wrong.</h5>
      <router-link class="to-browse" to="/browse">Try staring here</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found'
}
</script>

<style>
  .content-wrapper{
    text-align: center;
  }
  .to-browse{
    font-size: 2em;
  }
</style>
