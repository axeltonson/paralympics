<template>
  <div class="portrait selected">
    <portrait-header></portrait-header>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import PortraitHeader from '@/components/PortraitHeader'

  export default {
    name: 'Portrait',
    components: {
      PortraitHeader
    },
    methods: {
      scrollSelected: function (event) {
        if (event.deltaY > 0) {
          window.removeEventListener('wheel', this.scrollSelected)
          this.selectTransition()
        }
      },
      keySelected: function (event) {
        if (event.keyCode === 40) {
          window.removeEventListener('keyup', this.keySelected)
          this.selectTransition(event)
        }
      },
      handleTouch: function (event) {
        window.removeEventListener('touchstart', this.handleTouch)
        this.selectTransition(event)
      },
      selectTransition: function (e) {
        document.querySelector('.portrait').classList.remove('selected')
        e = e || window.event
        if (e.preventDefault) {
          e.preventDefault()
        }
        e.returnValue = false
      }
    },
    mounted: function () {
      document.querySelector('#app').classList.remove('animate')
      window.addEventListener('wheel', this.scrollSelected)
      window.addEventListener('keyup', this.keySelected)
      window.addEventListener('touchstart', this.handleTouch)
      setTimeout(function () {
        document.querySelector('#app').classList.remove('animate')
      }, 6000)
    }
  }
</script>

<style lang="scss" scoped>

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
