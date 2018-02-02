<template>
  <transition>
    <div class="vue intro" v-on:click="clickEvent">
       <div class="intro__content">
          <p class="intro__content-text">
             The real hero is... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Vivamus quis neque sem. Quisque quis accumsan sapien. Nunc pellentesque elit
             sed auctor rhoncus.
          </p>
          <div class="intro__content-scroll">
             <p class="intro__content-scroll-text">
               Scroll to<br> explore
             </p>
             <div class="intro__content-scroll-line"></div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
var x = 0
var y = 0
export default {
  name: 'Intro',
  data () {
    return {}
  },
  methods: {
    handleScroll: function (event) {
      if (event.deltaY < 0) {
        x += 1
        y = 0
        console.log(x)
        if (x > 1) {
          x = 0
          window.removeEventListener('wheel', this.handleScroll)
          this.scrollUp()
        }
      }
      if (event.deltaY > 0) {
        y += 1
        x = 0
        console.log(y)
        if (y > 1) {
          y = 0
          window.removeEventListener('wheel', this.handleScroll)
          this.scrollDown()
        }
      }
    },
    scrollUp: function () {
      console.log('scrolling up 2')
      this.$router.push('/')
    },
    scrollDown: function () {
      console.log('scrolling down 2')
      this.$router.push('/select')
    },
    clickEvent: function (event) {
      console.log('click')
    }
  },
  created: function () {
    window.addEventListener('wheel', this.handleScroll)
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

#app, .vue{
   height: 100%;
   width: 100%;
}

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
   width: 300px;
   height: 100%;
   margin: 0 auto;
}
.intro__content-text{
   width: 100%;
   padding: 35px 25px 0;
   font-size: 20px;
   text-align: center;
   color: #ffffff;
   line-height: 1.5;
   font-family: 'Source Sans Pro', Arial;
}

.intro__content-scroll{
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   text-align: left;
}
.intro__content-scroll-text{
   font-size: 14px;
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
