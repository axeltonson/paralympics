<template>
  <div class="portrait">
    <portrait-toolbar></portrait-toolbar>
    <div class="overlay">
      <div class="portrait-container">
        <div class="portrait__slider-title">
          <div class="portrait__slider-nickname-container">
            <div class="dash"></div>
            <span class="portrait__slider-nickname">&laquo Le guépard &raquo</span>
          </div>
          <h1>
            Marie-Amélie Le Fur
          </h1>
        </div>
        <div class="portrait__slider-subtitle">
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
</template>

<script>
  import PortraitToolbar from '@/components/PortraitToolbar'
export default {
    name: 'Portrait',
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

  h1, h2, p {
    margin: 0;
  }
  h1 {
    line-height: 0.91;
  }

  .portrait {
    height: 100%;
    background: url("../assets/img/Portrait_lefur4.png") center;
    background-size: cover;
  }

  .overlay {
    height: 100%;
    background-image: linear-gradient(rgba(7, 7, 7, 0.6), rgba(7, 7, 7, 0.6)), radial-gradient(circle at 53% 29%, rgba(7, 7, 7, 0.0), rgba(7, 7, 7, 0.0) 26%, rgba(7, 7, 7, 0.67) 70%, #070707);
  }
  .portrait-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    padding: 0 40px;
  }
  .portrait__slider-nickname-container {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }
  .portrait__slider-nickname {
    font-size: 25px;
    text-align: left;
    font-weight: 200;
  }
  .dash {
    width: 18px;
    height: 2px;
    margin-right: 20px;
    background-color: $white;
  }
  .portrait__slider-subtitle {
    font-size: 14px;
    font-style: normal;
    line-height: 1.5;
  }

  .select__content-scroll{
    box-sizing: border-box;
    position: absolute;
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
