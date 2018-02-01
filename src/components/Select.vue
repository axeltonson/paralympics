<template>

<div class="vue select">
   <div class="select__content">
      <div class="select__content-items">

         <div class="select__item" id="selectLeft" v-on:click="selectAnim">
            <img class="select__item-image" />
            <p class="select__item-content">
               Athlète 1
            </p>
         </div>
         <div class="select__item" id="selectCenter" v-on:click="selectAnim">
            <img class="select__item-image" />
            <p class="select__item-content">
               Athlète 2
            </p>
         </div>
         <div class="select__item" id="selectRight" v-on:click="selectAnim">
            <img class="select__item-image" />
            <p class="select__item-content">
               Athlète 3
            </p>
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

</template>

<script>
export default {
  name: 'Select',
  data () {
    return {}
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
      } else if (event.currentTarget.id === 'selectRight') {
        document.getElementById('selectRight').id = 'sCenter'
        document.getElementById('selectCenter').id = 'sLeft'
        document.getElementById('selectLeft').id = 'sRight'
        document.getElementById('sLeft').id = 'selectLeft'
        document.getElementById('sCenter').id = 'selectCenter'
        document.getElementById('sRight').id = 'selectRight'
      }
    }
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
}

.select__item{
   position: absolute;
   z-index: 1;
   top: 30%;
   left: 0;
   opacity: 0.4;
   transition: 0.7s;
}
#selectLeft{
   transform: translate3d(-60px, -10px, -100px);
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
   transform: translate3d(60px, -10px, -100px);
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

</style>
