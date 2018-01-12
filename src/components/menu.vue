<template>

   <div class="hmenu">
      <div class="hmenu__main">
         <h1 class="hmenu__main-title">
            The Real header-footer-settings
         </h1>
         <div class="hmenu__main-button">
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
      <div class="hmenu__toggle">
         <ul class="hmenu__toggle-menu">
            <li class="hmenu__toggle-menu-item">Stories</li>
            <li class="hmenu__toggle-menu-item">About</li>
            <li class="hmenu__toggle-menu-item">Share</li>
         </ul>
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
<style lang="scss" scoped>

.hmenu{

}

.hmenu__main{
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 20px;
}
.hmenu__main-title{

}
.hmenu__main-button{

}
.hmenu__main-button span{
   width: 2px;
   height: 2px;
   border-radius: 2px;
   margin-bottom: 7px;
}
.hmenu__main-button:last-child{
   margin-bottom: 0;
}

.hmenu__main-button.active span{width: 30px; border-radius: 2px;}
.hmenu__main-button.active span + span{width: 38px;}
.hmenu__main-button.active span + span + span{width: 23px;}

.hmenu__toggle{

}
.hmenu__toggle-menu{

}
.hmenu__toggle-menu-item{

}

</style>
