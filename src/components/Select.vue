<template>
<transition>
  <div class="vue select" id="selectHero" h_id="1">
    <menu-top></menu-top>
    <nav-arrows></nav-arrows>
     <div class="select__content">
        <div class="select__content-items">

          <div class="select__item select-martinet" id="selectLeft">
            <img class="select__item-image" src="../assets/img/Portrait_lefur4.png" alt="Marie-Amélie Le fur">
            <div class="select__item-content">
              <div class="select__item-title">
                <div class="select__item-nickname-container">
                  <div class="dash"></div>
                  <span class="select__item-nickname">&laquo Le phoenix &raquo</span>
                </div>
                <h1 class="select__item-title">Sandrine Martinet-Aurières</h1>
              </div>
              <div class="select__item-subtitle">
                <p>Judo</p>
              </div>
            </div>
          </div>
           <div class="select__item select-lefur" id="selectCenter">
             <img class="select__item-image" src="../assets/img/Portrait_lefur4.png" alt="Marie-Amélie Le fur">
             <div class="select__item-content">
               <div class="select__item-title">
                 <div class="select__item-nickname-container">
                   <div class="dash"></div>
                   <span class="select__item-nickname">&laquo Le guépard &raquo</span>
                 </div>
                 <h1 class="select__item-title">Marie-Amélie Le Fur</h1>
               </div>
               <div class="select__item-subtitle">
                 <p>Longueur, 100 m, 200 m, 400 m </p>
                 <p>Athlétisme</p>
               </div>
             </div>
           </div>
           <div class="select__item select-jeremiasz" id="selectRight">
             <img class="select__item-image" src="../assets/img/portrait_jeremiasz.png" alt="Michael Jeremiasz">
             <div class="select__item-content">
               <div class="select__item-title">
                 <div class="select__item-nickname-container">
                   <div class="dash"></div>
                   <span class="select__item-nickname">&laquo Le militant &raquo</span>
                 </div>
                 <h1 class="select__item-title">Michael Jeremiasz</h1>
               </div>
               <div class="select__item-subtitle">
                 <p>Tennis</p>
               </div>
             </div>
           </div>

        </div>
    </div>
    <div class="overlay__top"></div>
        <div class="overlay__bottom"></div>
        <div class="select__content-scroll">
          <p class="select__content-scroll-text">Scroll to<br> explore</p>
          <div class="select__content-scroll-line"></div>
        </div>
  </div>
  </transition>
</template>

<script>
import MenuTop from '@/components/Menu'
import NavArrows from '@/components/NavArrows'
export default {
  name: 'Select',
  data () {
    return {}
  },
  components: {
    'menu-top': MenuTop,
    'nav-arrows': NavArrows
  },
  methods: {
    // selectAnim: function (event) {
    //   if (event.currentTarget.id === 'selectLeft') {
    //     document.getElementById('selectLeft').id = 'sCenter'
    //     document.getElementById('selectCenter').id = 'sRight'
    //     document.getElementById('selectRight').id = 'sLeft'
    //     document.getElementById('sLeft').id = 'selectLeft'
    //     document.getElementById('sCenter').id = 'selectCenter'
    //     document.getElementById('sRight').id = 'selectRight'
    //     this.leftHero()
    //   } else if (event.currentTarget.id === 'selectRight') {
    //     document.getElementById('selectRight').id = 'sCenter'
    //     document.getElementById('selectCenter').id = 'sLeft'
    //     document.getElementById('selectLeft').id = 'sRight'
    //     document.getElementById('sLeft').id = 'selectLeft'
    //     document.getElementById('sCenter').id = 'selectCenter'
    //     document.getElementById('sRight').id = 'selectRight'
    //     this.rightHero()
    //   }
    // },
    // leftHero: function (event) {
    //   var heroId = document.getElementById('selectHero').getAttribute('h_id')
    //   heroId = parseInt(heroId) - 1
    //   if (heroId < 1) {
    //     heroId = 3
    //   }
    //   document.getElementById('selectHero').setAttribute('h_id', heroId)
    // },
    // rightHero: function (event) {
    //   var heroId = document.getElementById('selectHero').getAttribute('h_id')
    //   heroId = parseInt(heroId) + 1
    //   if (heroId > 3) {
    //     heroId = 1
    //   }
    //   document.getElementById('selectHero').setAttribute('h_id', heroId)
    // },
    handleScroll: function (event) {
      if ((event.deltaY < 0) && (document.querySelector('#app').classList.contains('animate') === false)) {
        window.removeEventListener('wheel', this.handleScroll)
        document.querySelector('#app').classList.add('animate')
        this.scrollUp()
      }
      if ((event.deltaY > 0) && (document.querySelector('#app').classList.contains('animate') === false)) {
        window.removeEventListener('wheel', this.handleScroll)
        document.querySelector('#app').classList.add('animate')
        this.scrollDown()
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
    scrollUp: function () {
      this.$router.push('/intro')
    },
    scrollDown: function () {
      var heroId = document.getElementById('selectHero').getAttribute('h_id')
      var heroPath = 'Le-fur'
      if (heroId === '1') {
        heroPath = 'Le-fur'
      } else if (heroId === '2') {
        heroPath = 'Jeremiasz'
      } else {
        heroPath = 'Jeremiasz'
      }
      this.$router.push('/Portrait/' + heroPath)
    },
    clickEvent: function (event) {
      console.log('click')
    }
  },
  created: function () {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('keyup', this.handleKey)
    setTimeout(function () {
      document.querySelector('#app').classList.remove('animate')
    }, 2000)
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

// #app, .vue{
//   height: 100%;
//   width: 100%;
// }

.vue{
  transition: opacity 1s;
}

/* FIN A SUPPRIMER */



.select{
  width: 100%;
  height: 100%;
  background-color: #000000;
  overflow: hidden;
}

.select__content{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  margin: 0 auto;
   @media #{$desktop} {
      left: 100px;
      max-width: 600px;
    }
}

.select__content-scroll{
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
.select__content-scroll-text{
  font-size: 11px;
  color: #ffffff;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
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
  bottom: 0;
  left: 0;
  opacity: 0.4;
  transition: 0.7s;
  height: 100%;
  width: 100%
}
#selectLeft{
  transform: perspective(300px) translate3d(-200px, 0px, -200px);
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
  transform: perspective(300px) translate3d(250px, 0px, -200px);
}


.select__item-content{
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: 0.5s;
}
#selectCenter .select__item-content{
  opacity: 1;
}

.select__item-image{
  position: absolute;
  bottom: 0;
}

.select-jeremiasz .select__item-image{
  bottom: 10%;
}

.select__item-nickname{
  font-size: 25px;
  padding-left: 38px;
  position: relative;
}
.select__item-nickname::before{
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  height: 2px;
  width: 18px;
  background-color: #ffffff;
}
.select__item-title{
  margin-top: 3px;
  margin-bottom: 4px;
}
.select__item-subtitle p{
  font-size: 14px;
  margin: 8px 0;
}

.select-martinet .select__item-title{
  font-size: 30px;
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
