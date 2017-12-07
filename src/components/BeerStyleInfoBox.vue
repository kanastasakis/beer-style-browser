<template>
  <div class="card horizontal beerstyleinfobox">
    <div class="card-content">
      <h3>{{beerstyle}}</h3>
      <h4>{{type}}</h4>
      <h5>{{category}}</h5>
      <br/>
      <h5>CHARACTERISTICS</h5>
      <div class="inset">
        <ul>
          <li v-for="item in description"><b>{{item[0].toUpperCase()}}: </b>{{item[1]}}</li>
        </ul>
      </div>
      <br/>
      <h5>SPECS</h5>
      <div class="inset">
        <table class="centered">
          <thead>
            <tr>
              <th v-for="item in specs">{{item[0].toUpperCase()}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="item in specs">{{item[1]}}</td>            
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeerStyleInfoBox',
  props: {
    category: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    beerstyle: {
      type: String,
      default: ''
    },
    description: {
      type: Array,
      default: []
    },
    specs: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .beerstyleinfobox{
    background-color: #ffde68;
  }
  li {
    margin-bottom: 5px;
  }
  .inset {
    padding: 15px;
    background-color: white;
  }
</style>
