<template>
  <div class="portrait">
    <portrait-toolbar></portrait-toolbar>
    <div class="overlay">
      <div class="portrait-container">
        <div class="portrait__slider-title">
          <div class="portrait__slider-nickname-container is-hidden">
            <div class="dash is-hidden"></div>
            <span class="portrait__slider-nickname is-hidden">&laquo Le guépard &raquo</span>
          </div>
          <h1>
            Marie-Amélie Le Fur
          </h1>
          <div class="portrait-quote">"« Fais de ta vie un rêve et d’un rêve une réalité »</div>
          <div class="dash"></div>
        </div>
        <div class="portrait__slider-subtitle">
          <p>Longueur, 100 m, 200 m, 400 m <p>
          <p>Athlétisme</p>
        </div>
        <div class="portrait__medal">
          <h3>médailles mondiales</h3>
          <div class="portrait__medal-medals">
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">7</p>
              <img src="../assets/img/medal-gold.png" alt="7 gold medals">
            </div>
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">11</p>
              <img src="../assets/img/medal-silver.png" alt="11 silver medals">
            </div>
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">2</p>
              <img src="../assets/img/medal-bronz.png" alt="2 bronz medals">
            </div>
          </div>
        </div>
          <div class="portrait__titles">
            <h3>4 titres</h3>
            <p class="portrait__titles-title">Lorem Ipsum</p>
            <p class="portrait__titles-title">Lorem Ipsum</p>
            <p class="portrait__titles-title">Lorem Ipsum</p>
            <p class="portrait__titles-title">Lorem Ipsum</p>
          </div>
          <div class="portrait__records">
            <h3>3 records mondiaux</h3>
          </div>
      </div>
    </div>
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

  h1, h2, h3, p {
    margin: 0;
  }
  h1 {
    line-height: 0.91;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 20px 0 10px;
  }

  .is-hidden {
    display: none;
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
    margin: 20px 20px 20px 0;
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

  .portrait-quote {
    color: rgba(255,255,255, 0.6);
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    text-align: left;
  }

  .portrait__medal-medals {
    display: flex;
  }
  .portrait__medal-medals-group {
    display: flex;
    align-items: flex-end;
    margin-right: 15px;
  }
  .medals-nb {
    font-size: 14px;
    font-weight: 600;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .portrait__titles-title {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4;
  }

  .overlay__bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 215px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), #000000 65%, #000000);
  }
</style>
