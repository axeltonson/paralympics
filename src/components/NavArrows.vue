<template>

   <div class="navarrows">
      <div class="navarrows__item navarrows__left" v-on:click="selectLeft">
         <span class="navarrows__item-arrow navarrows__left-arrow"></span>
      </div><!--
      --><div class="navarrows__item navarrows__right" v-on:click="selectRight">
         <span class="navarrows__item-arrow navarrows__right-arrow"></span>
      </div>
   </div>

</template>

<script>
export default {
  name: 'NavArrows',
  data () {
    return {}
  },
  methods: {
    navKey: function (event) {
      if (event.keyCode === 37) {
        this.selectLeft()
      }
      if (event.keyCode === 39) {
        this.selectRight()
      }
    },
    selectLeft: function () {
      if (document.getElementById('selectHero')) {
        document.getElementById('selectLeft').id = 'sCenter'
        document.getElementById('selectCenter').id = 'sRight'
        document.getElementById('selectRight').id = 'sLeft'
        document.getElementById('sLeft').id = 'selectLeft'
        document.getElementById('sCenter').id = 'selectCenter'
        document.getElementById('sRight').id = 'selectRight'
        this.leftHero()
      }
    },
    selectRight: function () {
      if (document.getElementById('selectHero')) {
        document.getElementById('selectRight').id = 'sCenter'
        document.getElementById('selectCenter').id = 'sLeft'
        document.getElementById('selectLeft').id = 'sRight'
        document.getElementById('sLeft').id = 'selectLeft'
        document.getElementById('sCenter').id = 'selectCenter'
        document.getElementById('sRight').id = 'selectRight'
        this.rightHero()
      }
    },
    leftHero: function () {
      var heroId = document.getElementById('selectHero').getAttribute('h_id')
      heroId = parseInt(heroId) - 1
      if (heroId < 1) {
        heroId = 3
      }
      document.getElementById('selectHero').setAttribute('h_id', heroId)
    },
    rightHero: function () {
      var heroId = document.getElementById('selectHero').getAttribute('h_id')
      heroId = parseInt(heroId) + 1
      if (heroId > 3) {
        heroId = 1
      }
      document.getElementById('selectHero').setAttribute('h_id', heroId)
    }
  },
  created: function () {
    window.addEventListener('keydown', this.navKey)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.navarrows{
   position: absolute;
   z-index: 101;
   bottom: 0;
   right: 0;
   display: flex;
}
.navarrows__item{
  width: 75px;
  height: 75px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navarrows__left{
  border-right: 0px;
}
.navarrows__right{

}

.navarrows__item-arrow{
  width: 8px;
  height: 8px;
  border: 4px solid #2d2d2d;
  border-width: 3px 0 0 3px;
}
.navarrows__left-arrow{
  transform: rotate(-45deg);
}
.navarrows__right-arrow{
  transform: rotate(135deg);
}

</style>
