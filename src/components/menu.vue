<template>

   <div class="hmenu">
      <div class="hmenu__main">
         <h1 class="hmenu__main-title">
            The Real Heroes
         </h1>
         <div class="hmenu__main-button" id="hmenu__main-button" v-on:click="toggle">
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
      <div class="hmenu__toggle" id="hmenu__toggle">
         <ul class="hmenu__toggle-menu">
            <li class="hmenu__toggle-menu-item"><router-link to="Select">Stories</router-link></li>
            <li class="hmenu__toggle-menu-item"><router-link to="About">About</router-link></li>
            <li class="hmenu__toggle-menu-item">Share</li>
         </ul>
      </div>
   </div>

</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {}
  },
  methods: {
    toggle: function (event) {
      document.getElementById('hmenu__toggle').classList.toggle('active')
      document.getElementById('hmenu__main-button').classList.toggle('active')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.hmenu{
   position: fixed;
   z-index: 12;
   top: 0;
   left: 0;
   width: 100%;
}

.hmenu__main{
   position: absolute;
   z-index: 12;
   top: 0;
   left: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
}
h1.hmenu__main-title{
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}
.hmenu__main-button{
  padding: 0 15px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.hmenu__main-button span{
  display: block;
  width: 3px;
  height: 2px;
  border-radius: 2px;
  margin-bottom: 6px;
  background-color: #ffffff;
  transition: 0.3s;
}
.hmenu__main-button:last-child{
   margin-bottom: 0;
}
.hmenu__main-button.active span{width: 30px; border-radius: 2px; transition: 0.2s}
.hmenu__main-button.active span + span{width: 38px; transition: 0.3s}
.hmenu__main-button.active span + span + span{width: 23px; transition: 0.1s}

.hmenu__toggle{
   position: absolute;
   z-index: 11;
   top: 0;
   left: 0;
   width: 100%;
   height: 0vh;
   background-color: rgba(0,0,0,0.9);
   overflow: hidden;
   transition: 0.4s;
}
.hmenu__toggle.active{
   height: 100vh;
}
.hmenu__toggle-menu{
   padding: 60px 70px;
}
.hmenu__toggle-menu-item{
   margin-top: 40px;
   font-size: 30px;
}

</style>
