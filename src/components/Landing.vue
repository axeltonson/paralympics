<template>
  <div class="landing">
    <span class="discover">Discover</span>
    <h1><span>The real</span> heroes</h1>
    <p class='landing-text'>The real  heroes c’est l’histoire de personnes et de parcours hors du commun…</p>
    <router-link to="Intro" class="button">Enter</router-link>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.landing {
  text-align: center;
  padding: 27% 50px 50px;
}
.discover {
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

.landing-text {
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  max-width: 335px;
  line-height: 1.5;
}

.button {
  position: fixed;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  background: $white;
  color: $black;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  height: 70px;
  line-height: 70px;
  width: 100%;
  max-width: 240px;
}
</style>
