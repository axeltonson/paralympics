<template>
  <div class="portrait">
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
</template>

<script>
export default {
  name: 'Portrait',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .portrait {
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
  }
  .dash {
    width: 18px;
    height: 2px;
    margin-right: 20px;
    background-color: #ffffff;
  }
  .portrait__slider-subtitle {
    font-size: 14px;
    font-style: normal;
    line-height: 1.5;
  }
</style>
