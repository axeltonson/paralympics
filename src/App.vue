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
  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: $white;
    background-color: $black;
    @media #{$tablet} {
      // EXEMPLE DE MEDIA QUERY
    }
  }

  /* Portraits Style */
  h1 {
    font-size: 45px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 0;
  }
  h2 {
    font-size: 15px;
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }
</style>
