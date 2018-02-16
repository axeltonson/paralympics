<template>

   <div class="hmenu" id="hmenu">
      <div class="hmenu__main">
         <h1 class="hmenu__main-title">
            The Real Heroes
         </h1>
         <div class="hmenu__main-button" v-on:click="toggle">
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
      <div class="hmenu__toggle">
         <ul class="hmenu__toggle-menu">
            <li class="hmenu__toggle-menu-item"><router-link to="Select">Les héros</router-link></li>
            <li class="hmenu__toggle-menu-subitem"><router-link to="Portrait/:1">Marie-Amélie Lefur</router-link></li>
            <li class="hmenu__toggle-menu-subitem"><router-link to="Portrait/:2">Michael Jeremiasz</router-link></li>
            <li class="hmenu__toggle-menu-subitem"><router-link to="Portrait/:3">Sandrine Martinet-Auriès</router-link></li>
            <li class="hmenu__toggle-menu-item"><router-link to="About">A propos</router-link></li>
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
      document.getElementById('hmenu').classList.toggle('active')
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
.active .hmenu__main-button span{width: 30px; border-radius: 2px; transition: 0.2s}
.active .hmenu__main-button span + span{width: 38px; transition: 0.3s}
.active .hmenu__main-button span + span + span{width: 23px; transition: 0.1s}

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
.active .hmenu__toggle{
  height: 100vh;
}
.hmenu__toggle-menu{
  padding: 60px 50px;
  text-align: center;
}
.hmenu__toggle-menu-item{
  margin: 30px 0;
  font-size: 36px;
  list-style-type: none;
  font-weight: bold;
}
.hmenu__toggle-menu-item a{
  text-decoration: none;
  color: #ffffff;
}
.hmenu__toggle-menu-item a:hover{

}

.hmenu__toggle-menu-subitem{
  margin-bottom: 19px;
  font-size: 23px;
  list-style-type: none;
  font-weight: lighter;
  opacity: 0.8;
}
.hmenu__toggle-menu-subitem a{
  text-decoration: none;
  color: #ffffff;
  opacity: 0.8;
}
.hmenu__toggle-menu-subitem a:hover{
  opacity: 1;
}

</style>
