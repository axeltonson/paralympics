<template>
  <div class="vue about">
    <span class="about__title">About</span>
    <h1><span>The real</span> heroes</h1>
    <p>The real  heroes  is … Cras justo odio, dapibus ac facilisis in, egestas eget</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about {
  text-align: center;
  padding: 27% 50px 50px;
}
.about__title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.8px;
}
h1 {
  font-size: 53px;
  font-weight: bold;
  margin: 20px 0 50px;
  span {
    font-size: 48px;
    font-weight: 300;
  }
}
p {
  padding: 0 15px;
}
</style>
