<template>

  <div class="vue intro">
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

</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {}
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
   font-family: SourceSansPro, Arial;
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

</style>
