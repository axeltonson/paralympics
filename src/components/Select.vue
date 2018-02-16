<template>
<transition>
  <div class="vue select" id="selectHero" h_id="1">
    <menu-top></menu-top>
     <div class="select__content">
        <div class="select__content-items">

           <div class="select__item" id="selectLeft" v-on:click="selectAnim">
             <div class="select__item-title">
               <div class="select__item-nickname-container">
                 <div class="dash"></div>
                 <span class="select__item-nickname">&laquo Le guépard &raquo</span>
               </div>
               <h1>Marie-Amélie Le Fur</h1>
             </div>
             <div class="select__item-subtitle">
               <p>Longueur, 100 m, 200 m, 400 m <p>
               <p>Athlétisme</p>
             </div>
           </div>
           <div class="select__item" id="selectCenter" v-on:click="selectAnim">
             <div class="select__item-title">
               <div class="select__item-nickname-container">
                 <div class="dash"></div>
                 <span class="select__item-nickname">&laquo Le guépard &raquo</span>
               </div>
               <h1>Marie-Amélie Le Fur</h1>
             </div>
             <div class="select__item-subtitle">
               <p>Longueur, 100 m, 200 m, 400 m <p>
               <p>Athlétisme</p>
             </div>
           </div>
           <div class="select__item" id="selectRight" v-on:click="selectAnim">
             <div class="select__item-title">
               <div class="select__item-nickname-container">
                 <div class="dash"></div>
                 <span class="select__item-nickname">&laquo Le guépard &raquo</span>
               </div>
               <h1>Marie-Amélie Le Fur</h1>
             </div>
             <div class="select__item-subtitle">
               <p>Longueur, 100 m, 200 m, 400 m <p>
               <p>Athlétisme</p>
             </div>
           </div>

        </div>
        <div class="select__content-scroll">
           <p class="select__content-scroll-text">
            Scroll to<br> explore
           </p>
           <div class="select__content-scroll-line"></div>
        </div>
    </div>
  </div>
  </transition>
</template>

<script>
import MenuTop from '@/components/menu'
export default {
  name: 'Select',
  data () {
    return {}
  },
  components: {
    'menu-top': MenuTop
  },
  methods: {
    selectAnim: function (event) {
      if (event.currentTarget.id === 'selectLeft') {
        document.getElementById('selectLeft').id = 'sCenter'
        document.getElementById('selectCenter').id = 'sRight'
        document.getElementById('selectRight').id = 'sLeft'
        document.getElementById('sLeft').id = 'selectLeft'
        document.getElementById('sCenter').id = 'selectCenter'
        document.getElementById('sRight').id = 'selectRight'
        this.leftHero()
      } else if (event.currentTarget.id === 'selectRight') {
        document.getElementById('selectRight').id = 'sCenter'
        document.getElementById('selectCenter').id = 'sLeft'
        document.getElementById('selectLeft').id = 'sRight'
        document.getElementById('sLeft').id = 'selectLeft'
        document.getElementById('sCenter').id = 'selectCenter'
        document.getElementById('sRight').id = 'selectRight'
        this.rightHero()
      }
    },
    leftHero: function (event) {
      var heroId = document.getElementById('selectHero').getAttribute('h_id')
      heroId = parseInt(heroId) - 1
      if (heroId < 1) {
        heroId = 3
      }
      document.getElementById('selectHero').setAttribute('h_id', heroId)
    },
    rightHero: function (event) {
      var heroId = document.getElementById('selectHero').getAttribute('h_id')
      heroId = parseInt(heroId) + 1
      if (heroId > 3) {
        heroId = 1
      }
      document.getElementById('selectHero').setAttribute('h_id', heroId)
    },
    handleScroll: function (event) {
      if (event.deltaY < 0) {
        console.log('scrolling up')
        window.removeEventListener('wheel', this.handleScroll)
        this.scrollUp()
      }
      if (event.deltaY > 0) {
        console.log('scrolling down')
        window.removeEventListener('wheel', this.handleScroll)
        this.scrollDown()
      }
    },
    scrollUp: function () {
      console.log('scrolling up 2')
      this.$router.push('/intro')
    },
    scrollDown: function () {
      console.log('scrolling down 2')
      this.$router.push('/')
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

body{
   height: 100vh;
   margin: 0;
   padding: 0;
}

#app, .vue{
   height: 100%;
   width: 100%;
}

.vue{
  transition: opacity 1s;
}

/* FIN A SUPPRIMER */

.select{
   width: 100%;
   height: 100%;
   background-color: #000000;
}

.select__content{
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 300px;
   height: 100%;
   margin: 0 auto;
}

.select__content-scroll{
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   text-align: left;
}
.select__content-scroll-text{
   font-size: 14px;
   color: #ffffff;
   margin-bottom: 12px;
}
.select__content-scroll-line{
   width: 2px;
   height: 75px;
   background-color: #ffffff;
}

.select__content-items{
   position: relative;
   height: 100%;
   width: 100%;
}

.select__item{
   position: absolute;
   z-index: 1;
   bottom: 25%;
   left: 0;
   opacity: 0.2;
   transition: 0.7s;
}
#selectLeft{
   transform: perspective(400px) translate3d(-80px, 0px, -100px);
}
/* #selectLeft img{
   background-color: yellow;
} */
#selectCenter{
   z-index: 10;
   transform: translate3d(0, 0, 0);
   opacity: 1;
}
#selectRight{
   transform: perspective(400px) translate3d(80px, 0px, -100px);
}
/* #selectRight img{
   background-color: green;
} */

.select__item-image{
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   width: 100px;
   height: 100px;
   background-color: red;
   border: 0;
}
.select__item-content{
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   width: 100px;
   color: white;
   text-align: center;
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
