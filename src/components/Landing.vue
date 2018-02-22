<template>
  <div class="landing">
    <div class="landing-overlay-bg"></div>
      <div class="landing-overlay-content">
        <p class="discover">Discover</p>
        <h1><span>The real</span><br>heroes</h1>
        <p class='landing-text'>The real  heroes c’est l’histoire de personnes et de parcours hors du commun…</p>
        <router-link to="Intro" class="button">Enter</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {}
  },
  methods: {
    handleKey: function (event) {
      if (document.querySelector('#app').classList.contains('animate') === false) {
        if ((event.keyCode === 13) || (event.keyCode === 40)) {
          window.removeEventListener('keyup', this.handleKey)
          document.querySelector('#app').classList.add('animate')
          this.scrollDown()
        }
      }
    },
    scrollDown: function () {
      this.$router.push('/intro')
    }
  },
  created: function () {
    window.addEventListener('keyup', this.handleKey)
    setTimeout(function () {
      document.querySelector('#app').classList.remove('animate')
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.landing {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.landing-overlay-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $black;
  opacity: 0.2;
  @media #{$tablet} {
      background: url('../assets/img/person-runner-sport.jpg') no-repeat;
      background-size: cover; 
    }
}

.discover {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.8px;
  text-align: center;
  margin-top: 106px;
    @media #{$tablet} {
      padding-top: 40px;
      margin: 0 auto; 
    }
}

h1 {
  font-size: 53px;
  font-weight: bold;
  margin: 20px 0 50px;
  text-align: center;
  span {
    font-size: 48px;
    font-weight: 300;
  }
   @media #{$tablet} {

      font-size: 96px;
    }
}
p {
  padding: 0 15px;
}

.landing-text {
  padding: 0 70px;
  font-weight: 200;
  text-align: center;
  margin: 0 auto;
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
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  height: 70px;
  line-height: 70px;
  width: 100%;
  max-width: 240px;
}
</style>
