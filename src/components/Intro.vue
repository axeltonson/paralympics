<template>
  <transition>
    <div class="vue intro" v-on:click="clickEvent">
       <div class="intro__content">
          <p class="intro__content-text">
             Trois sportif·ve·s français·es à la volonté extraordinaire,
             véritables héros des temps modernes
          </p>
        </div>
        <div class="overlay__top"></div>
        <div class="overlay__bottom"></div>
        <div class="intro__content-scroll">
             <p class="intro__content-scroll-text">
               Scroll to<br> explore
             </p>
             <div class="intro__content-scroll-line"></div>
          </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {}
  },
  methods: {
    handleScroll: function (event) {
      if (document.querySelector('#app').classList.contains('animate') === false) {
        if (event.deltaY < 0) {
          window.removeEventListener('wheel', this.handleScroll)
          document.querySelector('#app').classList.add('animate')
          this.scrollUp()
        }
        if (event.deltaY > 0) {
          window.removeEventListener('wheel', this.handleScroll)
          document.querySelector('#app').classList.add('animate')
          this.scrollDown()
        }
      }
    },
    handleKey: function (event) {
      if (document.querySelector('#app').classList.contains('animate') === false) {
        if (event.keyCode === 38) {
          window.removeEventListener('keyup', this.handleKey)
          document.querySelector('#app').classList.add('animate')
          this.scrollUp()
        }
        if (event.keyCode === 40) {
          window.removeEventListener('keyup', this.handleKey)
          document.querySelector('#app').classList.add('animate')
          this.scrollDown()
        }
      }
    },
    handleTouch: function (event) {
      if (document.querySelector('#app').classList.contains('animate') === false) {
        window.removeEventListener('touchstart', this.handleTouch)
        document.querySelector('#app').classList.add('animate')
        this.scrollDown()
      }
    },
    scrollUp: function () {
      this.$router.push('/')
    },
    scrollDown: function () {
      this.$router.push('/select')
    },
    clickEvent: function (event) {
      console.log('click')
    }
  },
  mounted: function () {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('keyup', this.handleKey)
    window.addEventListener('touchstart', this.handleTouch)
    setTimeout(function () {
      document.querySelector('#app').classList.remove('animate')
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

/* A SUPPRIMER */

body{
   height: 100vh;
   margin: 0;
   padding: 0;
}

/* #app, .vue{
   height: 100%;
   width: 100%;
} */

/* FIN A SUPPRIMER */

.intro{
   width: 100%;
   height: 100%;
   background-color: #000000;
}

.intro__content{
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   margin: 0 auto;
}
   @media #{$tablet} {
      // EXEMPLE DE MEDIA QUERY
    }
    
.intro__content-text{
   width: 100%;
   padding: 0 70px;
   font-size: 20px;
   font-weight: 300;
   text-align: center;
   color: #ffffff;
   line-height: 1.5;
   font-family: 'Source Sans Pro', Arial;
    @media #{$desktop} {
      padding: 0;
      width: 460px;
    }
}

  .overlay__top {
    z-index: $z-index-above-items - 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.0), #000000 65%, #000000);
  }

  .overlay__bottom {
    z-index: $z-index-above-items - 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 215px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), #000000 65%, #000000);
  }

.intro__content-scroll{
   position: absolute;
   z-index: $z-index-above-items;
   bottom: 0;
   left: 40px;
   width: 100%;
   text-align: left;
    @media #{$desktop} {
      left: 100px;
    }
}
.intro__content-scroll-text{
  width: 80px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2.8px;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 12px;
}
.intro__content-scroll-line{
   width: 2px;
   height: 75px;
   background-color: #ffffff;
}


/* Enter and Leave transitions */
.v-enter {
  opacity: 0;
  transition: opacity 1s;
}
.v-enter-active {
  /* opacity: 1; */
  transition: opacity 1s;
}
.v-enter {
  opacity: 0;
  transition: opacity 1s;
}
.v-leave-active {
  /* opacity: 0; */
  transition: opacity 1s;
}

</style>
