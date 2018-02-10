<template>
  <div class="portrait-toolbar">
    <h2 class="portrait-toolbar__main-title">The real heroes</h2>
    <img class="portrait-toolbar__menu" src="../assets/img/Menu.png" alt="menu">
  </div>
</template>

<script>
  export default {
    name: 'PortraitToolbar',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .portrait-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .portrait-toolbar__menu {
    height: 20px;
  }
</style>
