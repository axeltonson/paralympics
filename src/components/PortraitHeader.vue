<template>
  <div class="portrait-overlay">
    <portrait-toolbar></portrait-toolbar>
    <div class="overlay__top"></div>
    <div class="overlay__bottom"></div>
    <div class="select__content-scroll">
      <p class="select__content-scroll-text">
        Scroll to<br> explore
    </p>
      <div class="select__content-scroll-line"></div>
    </div>
  </div>
</template>

<script>
  import PortraitToolbar from '@/components/PortraitToolbar'
  export default {
    name: 'PortraitOverlay',
    components: {
      'portrait-toolbar': PortraitToolbar
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

  .select__content-scroll{
    box-sizing: border-box;
    z-index: $z-index-above-items;
    position: fixed;
    bottom: 0;
    padding-left: 40px;
    width: 100%;
    text-align: left;
  }
  .select__content-scroll-text{
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.8px;
    color: $white;
    margin-bottom: 12px;
  }
  .select__content-scroll-line{
    width: 2px;
    height: 75px;
    background-color: $white;
  }
</style>
