<template>
  <div class="portrait">
    <p>portrait {{ $route.params.id }}</p>
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
.landing {
    p {
        font-size: 60px;
    }
}
</style>
