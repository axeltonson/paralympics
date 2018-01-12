<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700');  html,
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    color: #FFF;
    background-color: #000;
  }

  /* Portraits Style */

  h1 {
    font-size: 45px;
    font-weight: bold;
    line-height: 0.91;
    text-align: left;
    text-transform: uppercase;
    padding: 5px 0;
  }
</style>
